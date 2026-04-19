import type { ReactNode } from 'react'

export interface SectionHeadingProps {
  id?: string
  eyebrow?: string
  title: string
  lead?: string
  align?: 'start' | 'center'
  className?: string
  action?: ReactNode
}

export function SectionHeading({ id, eyebrow, title, lead, align = 'start', className, action }: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : ''
  const maxWidth = align === 'center' ? 'col-lg-8' : 'col-lg-9'

  return (
    <div className={`row mb-4 mb-md-5 ${className ?? ''}`.trim()}>
      <div className={`${maxWidth} ${alignClass}`}>
        {eyebrow ? <p className="text-apj-accent text-uppercase small fw-semibold letter-spacing mb-2">{eyebrow}</p> : null}
        <h2 id={id} className="display-6 fw-bold text-apj-primary">
          {title}
        </h2>
        {lead ? <p className="lead text-secondary mt-3 mb-0">{lead}</p> : null}
      </div>
      {action ? <div className="col-lg-3 d-flex align-items-start justify-content-lg-end mt-3 mt-lg-0">{action}</div> : null}
    </div>
  )
}
