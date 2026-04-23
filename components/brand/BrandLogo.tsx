import Link from 'next/link';

type BrandLogoProps = {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  href?: string;
};

const sizes = {
  sm: {
    foco: 'text-[0.95rem] tracking-[0.22em] min-[380px]:text-lg min-[380px]:tracking-[0.32em] md:text-xl md:tracking-[0.35em]',
    script: 'text-[1.65rem] min-[380px]:text-2xl md:text-3xl',
    line: 'min-w-[0.5rem]',
  },
  md: { foco: 'text-xl md:text-2xl tracking-[0.38em]', script: 'text-3xl md:text-4xl', line: 'min-w-[1rem]' },
  lg: { foco: 'text-3xl md:text-5xl tracking-[0.32em]', script: 'text-4xl md:text-6xl lg:text-7xl', line: 'min-w-[1.25rem]' },
};

export default function BrandLogo({
  variant = 'dark',
  size = 'md',
  className = '',
  href = '/',
}: BrandLogoProps) {
  const s = sizes[size];
  const isDark = variant === 'dark';
  const focoClass = isDark ? 'text-foco-black' : 'text-paper';
  const scriptClass = isDark ? 'text-rose-dust' : 'text-rose-mist';
  const lineClass = isDark ? 'bg-rose-dust/70' : 'bg-rose-mist/50';

  const inner = (
    <div className={`flex flex-col items-center leading-none ${className}`}>
      <span className={`font-display font-semibold uppercase ${focoClass} ${s.foco}`}>FOCO</span>
      <div className={`mt-1 flex w-full max-w-[min(100%,14rem)] items-center gap-2 md:max-w-xs ${size === 'lg' ? 'md:max-w-md' : ''}`}>
        <span className={`h-px flex-1 ${lineClass} ${s.line}`} aria-hidden />
        <span className={`font-accent ${scriptClass} ${s.script} px-1`}>Woman</span>
        <span className={`h-px flex-1 ${lineClass} ${s.line}`} aria-hidden />
      </div>
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="block min-w-0 max-w-full outline-none focus-visible:ring-2 focus-visible:ring-rose-dust/50 rounded-sm"
      >
        {inner}
      </Link>
    );
  }
  return inner;
}
