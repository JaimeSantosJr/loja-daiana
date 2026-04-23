import { Suspense } from 'react';
import CatalogPageClient from './CatalogPageClient';

export default function CatalogPage() {
  return (
    <Suspense fallback={<CatalogLoadingFallback />}>
      <CatalogPageClient />
    </Suspense>
  );
}

function CatalogLoadingFallback() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-8 h-8 w-40 animate-pulse rounded bg-stone-gray/25" />
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="space-y-3">
            <div className="aspect-[3/4] animate-pulse rounded bg-stone-gray/20" />
            <div className="h-4 w-2/3 animate-pulse rounded bg-stone-gray/20" />
            <div className="h-4 w-1/2 animate-pulse rounded bg-stone-gray/20" />
          </div>
        ))}
      </div>
    </div>
  );
}
