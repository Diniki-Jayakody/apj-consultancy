export type ButtonVariant = 'primary' | 'secondary' | 'outline'

export function appButtonClass(variant: ButtonVariant = 'primary', extra?: string): string {
  const base = 'btn fw-semibold px-4 py-2 rounded-pill shadow-sm'
  const variants: Record<ButtonVariant, string> = {
    primary: 'btn-apj-primary',
    secondary: 'btn-apj-secondary',
    outline: 'btn-apj-outline',
  }
  return [base, variants[variant], extra].filter(Boolean).join(' ')
}
