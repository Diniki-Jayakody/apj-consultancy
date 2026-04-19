import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react'

export interface FormFieldProps {
  id: string
  label: string
  error?: string
  hint?: string
  children: ReactNode
}

export function FormField({ id, label, error, hint, children }: FormFieldProps) {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label fw-semibold text-apj-primary">
        {label}
      </label>
      {children}
      {hint && !error ? <div className="form-text">{hint}</div> : null}
      {error ? <div className="invalid-feedback d-block">{error}</div> : null}
    </div>
  )
}

export type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  invalid?: boolean
}

export function TextInput({ invalid, className, ...rest }: TextInputProps) {
  return <input className={`form-control ${invalid ? 'is-invalid' : ''} ${className ?? ''}`.trim()} {...rest} />
}

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  invalid?: boolean
}

export function TextArea({ invalid, className, ...rest }: TextAreaProps) {
  return <textarea className={`form-control ${invalid ? 'is-invalid' : ''} ${className ?? ''}`.trim()} {...rest} />
}

export type SelectInputProps = SelectHTMLAttributes<HTMLSelectElement> & {
  invalid?: boolean
}

export function SelectInput({ invalid, className, children, ...rest }: SelectInputProps) {
  return (
    <select className={`form-select ${invalid ? 'is-invalid' : ''} ${className ?? ''}`.trim()} {...rest}>
      {children}
    </select>
  )
}
