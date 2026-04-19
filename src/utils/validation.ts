export function isNonEmpty(value: string): boolean {
  return value.trim().length > 0
}

export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
}

export function isValidPhone(value: string): boolean {
  const digits = value.replace(/\D/g, '')
  return digits.length >= 8 && digits.length <= 15
}

export function minLength(value: string, min: number): boolean {
  return value.trim().length >= min
}
