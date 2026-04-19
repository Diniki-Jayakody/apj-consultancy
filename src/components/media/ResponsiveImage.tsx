import type { ImgHTMLAttributes } from 'react'

export interface ResponsiveImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> {
  src: string
  alt: string
}

export function ResponsiveImage({ src, alt, className, loading = 'lazy', decoding = 'async', ...rest }: ResponsiveImageProps) {
  return <img src={src} alt={alt} className={className} loading={loading} decoding={decoding} {...rest} />
}
