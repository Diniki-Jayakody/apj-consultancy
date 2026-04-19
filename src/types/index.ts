export interface ServiceItem {
  id: string
  title: string
  description: string
  iconClass: string
  /** Small illustrative photo (e.g. Unsplash) */
  imageSrc: string
  imageAlt: string
}

export interface Destination {
  id: string
  name: string
  flagEmoji: string
  summary: string
  highlights: string[]
  popularSubjects: string[]
  /** Landmark / campus style image */
  imageSrc: string
  imageAlt: string
}

export interface University {
  id: string
  name: string
  country: string
  description: string
  initials: string
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  program: string
  destination: string
  avatarSrc: string
  avatarAlt: string
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  category: string
  date: string
  readMinutes: number
}

export interface ProcessStep {
  id: string
  title: string
  description: string
  step: number
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
}

export interface ConsultationFormValues {
  name: string
  email: string
  phone: string
  preferredCountry: string
  message: string
}

export interface ContactFormValues {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export type FormErrors<T> = Partial<Record<keyof T, string>>
