import { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

const VARIANTES: Record<Variant, string> = {
  primary: 'bg-azure text-white hover:bg-azure/90',
  secondary: 'bg-transparent text-midnight border border-line hover:bg-line/40',
};

export function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-medium transition-colors',
        'disabled:cursor-not-allowed disabled:opacity-50',
        VARIANTES[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
