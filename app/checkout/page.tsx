import { redirect } from 'next/navigation';

/** Mantido por compatibilidade de URL: checkout não é usado na vitrine. */
export default function CheckoutRedirectPage() {
  redirect('/catalogo');
}
