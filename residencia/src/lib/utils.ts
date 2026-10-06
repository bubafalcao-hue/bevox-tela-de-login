/** Concatenação condicional de classes Tailwind, sem dependência externa. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}
