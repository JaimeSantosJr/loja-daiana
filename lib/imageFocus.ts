type FocusMode = 'card' | 'detail';

const PRODUCT_FOCUS_CARD: Record<string, string> = {
  '1': 'center 28%',
  '2': 'center 30%',
  '3': 'center 20%',
  '4': 'center 18%',
  '5': 'center 30%',
  '6': 'center 26%',
  '7': 'center 22%',
  '8': 'center 20%',
  '9': 'center 28%',
  '10': 'center 30%',
  '11': 'center 26%',
  '12': 'center 30%',
};

const PRODUCT_FOCUS_DETAIL: Record<string, string> = {
  '1': 'center 24%',
  '2': 'center 26%',
  '3': 'center 16%',
  '4': 'center 14%',
  '5': 'center 26%',
  '6': 'center 24%',
  '7': 'center 18%',
  '8': 'center 16%',
  '9': 'center 24%',
  '10': 'center 24%',
  '11': 'center 22%',
  '12': 'center 24%',
};

const CATEGORY_FOCUS: Record<string, string> = {
  leggings: 'center 32%',
  tops: 'center 22%',
  conjuntos: 'center 30%',
  macaquinhos: 'center 24%',
  acessorios: 'center 30%',
};

export function getProductFocus(productId: string, mode: FocusMode): string {
  const map = mode === 'detail' ? PRODUCT_FOCUS_DETAIL : PRODUCT_FOCUS_CARD;
  return map[productId] ?? 'center';
}

export function getCategoryFocus(categoryId: string): string {
  return CATEGORY_FOCUS[categoryId] ?? 'center';
}
