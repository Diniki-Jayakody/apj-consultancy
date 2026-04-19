import type { HTMLAttributes, ReactNode } from 'react'

type SectionTone = 'white' | 'light' | 'muted'

const toneClass: Record<SectionTone, string> = {
  white: 'bg-white',
  light: 'bg-apj-light',
  muted: 'bg-apj-muted',
}

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  id?: string
  as?: 'section' | 'div'
  tone?: SectionTone
  children: ReactNode
}

export function Section({ id, as: Tag = 'section', tone = 'white', className, children, ...rest }: SectionProps) {
  return (
    <Tag id={id} className={`py-5 apj-section-y ${toneClass[tone]} ${className ?? ''}`.trim()} {...rest}>
      <div className="container">{children}</div>
    </Tag>
  )
}
