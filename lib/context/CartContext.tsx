'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { Cart, CartItem, Product, Size, Color } from '../types';

interface CartContextType {
  cart: Cart;
  addToCart: (product: Product, quantity: number, size: Size, color: Color) => void;
  removeFromCart: (itemIndex: number) => void;
  updateQuantity: (itemIndex: number, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
  getItemCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Cart>({
    items: [],
    total: 0,
  });

  const calculateTotal = useCallback((items: CartItem[]) => {
    return items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }, []);

  const addToCart = useCallback((product: Product, quantity: number, size: Size, color: Color) => {
    setCart(prev => {
      const existingItemIndex = prev.items.findIndex(
        item => item.product.id === product.id && item.size === size && item.color === color
      );

      let newItems: CartItem[];
      if (existingItemIndex > -1) {
        newItems = [...prev.items];
        newItems[existingItemIndex].quantity += quantity;
      } else {
        newItems = [...prev.items, { product, quantity, size, color }];
      }

      return {
        items: newItems,
        total: calculateTotal(newItems),
      };
    });
  }, [calculateTotal]);

  const removeFromCart = useCallback((itemIndex: number) => {
    setCart(prev => {
      const newItems = prev.items.filter((_, i) => i !== itemIndex);
      return {
        items: newItems,
        total: calculateTotal(newItems),
      };
    });
  }, [calculateTotal]);

  const updateQuantity = useCallback((itemIndex: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemIndex);
      return;
    }

    setCart(prev => {
      const newItems = [...prev.items];
      newItems[itemIndex].quantity = quantity;
      return {
        items: newItems,
        total: calculateTotal(newItems),
      };
    });
  }, [calculateTotal, removeFromCart]);

  const clearCart = useCallback(() => {
    setCart({
      items: [],
      total: 0,
    });
  }, []);

  const getTotal = useCallback(() => cart.total, [cart.total]);

  const getItemCount = useCallback(() => {
    return cart.items.reduce((sum, item) => sum + item.quantity, 0);
  }, [cart.items]);

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getTotal,
      getItemCount,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
