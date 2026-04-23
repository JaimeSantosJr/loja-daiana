'use client';

import CatalogFilterControls, { type CatalogFilterControlsProps } from '@/components/catalog/CatalogFilterControls';

type FilterSidebarProps = Omit<CatalogFilterControlsProps, 'className'>;

export default function FilterSidebar(props: FilterSidebarProps) {
  return (
    <aside className="hidden w-64 shrink-0 lg:block">
      <div className="sticky top-[5.25rem] rounded-sm border border-stone-line bg-paper p-6">
        <CatalogFilterControls {...props} />
      </div>
    </aside>
  );
}
