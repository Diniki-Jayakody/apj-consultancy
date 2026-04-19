import { useMemo, useState, type FormEvent } from 'react'
import type { ConsultationFormValues, FormErrors } from '../../types'
import { countryOptions } from '../../services/mockData'
import { isNonEmpty, isValidEmail, isValidPhone, minLength } from '../../utils/validation'
import { AppButton } from '../buttons/AppButton'
import { FormField, SelectInput, TextArea, TextInput } from './FormField'

const initialValues: ConsultationFormValues = {
  name: '',
  email: '',
  phone: '',
  preferredCountry: '',
  message: '',
}

function validate(values: ConsultationFormValues): FormErrors<ConsultationFormValues> {
  const errors: FormErrors<ConsultationFormValues> = {}
  if (!isNonEmpty(values.name)) errors.name = 'Please enter your full name.'
  if (!isValidEmail(values.email)) errors.email = 'Please enter a valid email address.'
  if (!isValidPhone(values.phone)) errors.phone = 'Please enter a valid phone number (8–15 digits).'
  if (!isNonEmpty(values.preferredCountry)) errors.preferredCountry = 'Please select a preferred country.'
  if (!minLength(values.message, 20)) errors.message = 'Please share a bit more detail (at least 20 characters).'
  return errors
}

export interface ConsultationFormProps {
  showHeading?: boolean
}

export function ConsultationForm({ showHeading = true }: ConsultationFormProps) {
  const [values, setValues] = useState<ConsultationFormValues>(initialValues)
  const [errors, setErrors] = useState<FormErrors<ConsultationFormValues>>({})
  const [submitted, setSubmitted] = useState(false)

  const countrySelectOptions = useMemo(
    () => [{ value: '', label: 'Select a country' }, ...countryOptions],
    [],
  )

  function handleChange<K extends keyof ConsultationFormValues>(key: K, value: ConsultationFormValues[K]): void {
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
        {showHeading ? (
          <div className="mb-4">
            <h2 className="h4 fw-bold text-apj-primary mb-2">Book a consultation</h2>
            <p className="text-secondary mb-0">
              Share your goals and we will respond with available times and a tailored checklist—usually within one business day.
            </p>
          </div>
        ) : null}

        {submitted ? (
          <div className="alert alert-success border-0 shadow-sm" role="status">
            <div className="fw-semibold mb-1">Request received</div>
            <p className="mb-0 small">
              Thank you, {values.name.split(' ')[0] || 'there'}. This is a demo form (no backend). In production, this would email your team and
              trigger a calendar invite.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <FormField id="c-name" label="Full name" error={errors.name}>
              <TextInput
                id="c-name"
                autoComplete="name"
                value={values.name}
                onChange={(e) => handleChange('name', e.target.value)}
                invalid={Boolean(errors.name)}
              />
            </FormField>

            <div className="row g-3">
              <div className="col-md-6">
                <FormField id="c-email" label="Email" error={errors.email}>
                  <TextInput
                    id="c-email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    invalid={Boolean(errors.email)}
                  />
                </FormField>
              </div>
              <div className="col-md-6">
                <FormField id="c-phone" label="Phone" error={errors.phone} hint="Include country code if applicable.">
                  <TextInput
                    id="c-phone"
                    type="tel"
                    autoComplete="tel"
                    value={values.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    invalid={Boolean(errors.phone)}
                  />
                </FormField>
              </div>
            </div>

            <FormField id="c-country" label="Preferred country" error={errors.preferredCountry}>
              <SelectInput
                id="c-country"
                value={values.preferredCountry}
                onChange={(e) => handleChange('preferredCountry', e.target.value)}
                invalid={Boolean(errors.preferredCountry)}
              >
                {countrySelectOptions.map((opt) => (
                  <option key={opt.value || 'empty'} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </SelectInput>
            </FormField>

            <FormField id="c-message" label="Message" error={errors.message} hint="Tell us your intake, grades/tests, and what you want to achieve.">
              <TextArea
                id="c-message"
                rows={5}
                value={values.message}
                onChange={(e) => handleChange('message', e.target.value)}
                invalid={Boolean(errors.message)}
              />
            </FormField>

            <AppButton type="submit" variant="primary" className="w-100 w-md-auto">
              Submit consultation request
            </AppButton>
          </form>
        )}
      </div>
    </div>
  )
}
