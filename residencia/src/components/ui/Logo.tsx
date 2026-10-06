import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  mark?: boolean;
}

/**
 * Ícone: garrafa estilizada como nó central, com uma seta ascendente —
 * referência direta à identidade descrita no Documento de Visão (seção 3).
 */
export function Logo({ className, mark = true }: LogoProps) {
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      {mark && (
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
          <path
            d="M11 2h4v3.4l2.6 3.1c.6.7.9 1.6.9 2.5V21a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-9.9c0-1 .3-1.9.9-2.6L11 5.4V2Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path d="M8.5 15.5 12 12l2 2 3.5-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 8.5h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      )}
      <span className="text-lg font-semibold tracking-tight">BEVOX</span>
    </div>
  );
}
