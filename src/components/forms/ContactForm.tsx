import { useState, type FormEvent } from 'react'
import type { ContactFormValues, FormErrors } from '../../types'
import { isNonEmpty, isValidEmail, isValidPhone, minLength } from '../../utils/validation'
import { AppButton } from '../buttons/AppButton'
import { FormField, TextArea, TextInput } from './FormField'

const initialValues: ContactFormValues = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
}

function validate(values: ContactFormValues): FormErrors<ContactFormValues> {
  const errors: FormErrors<ContactFormValues> = {}
  if (!isNonEmpty(values.name)) errors.name = 'Please enter your name.'
  if (!isValidEmail(values.email)) errors.email = 'Please enter a valid email address.'
  if (!isValidPhone(values.phone)) errors.phone = 'Please enter a valid phone number (8–15 digits).'
  if (!isNonEmpty(values.subject)) errors.subject = 'Please add a subject line.'
  if (!minLength(values.message, 15)) errors.message = 'Please enter a slightly longer message (at least 15 characters).'
  return errors
}

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues)
  const [errors, setErrors] = useState<FormErrors<ContactFormValues>>({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange<K extends keyof ContactFormValues>(key: K, value: ContactFormValues[K]): void {
    setValues((prev) => ({ ...prev, [key]: value }))
    setErrors((prev) => ({ ...prev, [key]: undefined }))
    setSubmitted(false)
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return
    setSubmitted(true)
  }

  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body p-4 p-md-5">
        <h2 className="h4 fw-bold text-apj-primary mb-3">Send a message</h2>

        {submitted ? (
          <div className="alert alert-success border-0 shadow-sm" role="status">
            <div className="fw-semibold mb-1">Message queued</div>
            <p className="mb-0 small">
              Thanks for reaching out. This demo does not send email—wire this form to your CRM or inbox in production.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <FormField id="m-name" label="Name" error={errors.name}>
              <TextInput
                id="m-name"
                autoComplete="name"
                value={values.name}
                onChange={(e) => handleChange('name', e.target.value)}
                invalid={Boolean(errors.name)}
              />
            </FormField>

            <div className="row g-3">
              <div className="col-md-6">
                <FormField id="m-email" label="Email" error={errors.email}>
                  <TextInput
                    id="m-email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    invalid={Boolean(errors.email)}
                  />
                </FormField>
              </div>
              <div className="col-md-6">
                <FormField id="m-phone" label="Phone" error={errors.phone}>
                  <TextInput
                    id="m-phone"
                    type="tel"
                    autoComplete="tel"
                    value={values.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    invalid={Boolean(errors.phone)}
                  />
                </FormField>
              </div>
            </div>

            <FormField id="m-subject" label="Subject" error={errors.subject}>
              <TextInput
                id="m-subject"
                value={values.subject}
                onChange={(e) => handleChange('subject', e.target.value)}
                invalid={Boolean(errors.subject)}
              />
            </FormField>

            <FormField id="m-message" label="Message" error={errors.message}>
              <TextArea
                id="m-message"
                rows={5}
                value={values.message}
                onChange={(e) => handleChange('message', e.target.value)}
                invalid={Boolean(errors.message)}
              />
            </FormField>

            <AppButton type="submit" variant="primary">
              Send message
            </AppButton>
          </form>
        )}
      </div>
    </div>
  )
}
