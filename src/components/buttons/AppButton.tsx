import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { appButtonClass, type ButtonVariant } from '../../utils/buttonClasses'

export interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  children: ReactNode
}

export function AppButton({ variant = 'primary', className, children, type = 'button', ...rest }: AppButtonProps) {
  return (
    <button type={type} className={appButtonClass(variant, className)} {...rest}>
      {children}
    </button>
  )
}
