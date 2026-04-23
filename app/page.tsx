import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import NewCollectionSection from '@/components/home/NewCollectionSection';
import CategoriesSection from '@/components/home/CategoriesSection';
import BestsellersSection from '@/components/home/BestsellersSection';
import BenefitsSection from '@/components/home/BenefitsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import NewsletterSection from '@/components/home/NewsletterSection';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'FOCO Woman: vitrine de moda fitness para academia com atendimento direto no WhatsApp.',
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <NewCollectionSection />
      <CategoriesSection />
      <BestsellersSection />
      <BenefitsSection />
      <TestimonialsSection />
      <NewsletterSection />
    </>
  );
}