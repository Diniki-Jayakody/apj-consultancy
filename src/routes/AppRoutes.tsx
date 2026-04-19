import { Route, Routes } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayout'
import { AboutPage } from '../pages/AboutPage'
import { ApplicationProcessPage } from '../pages/ApplicationProcessPage'
import { BlogPage } from '../pages/BlogPage'
import { ConsultationPage } from '../pages/ConsultationPage'
import { ContactPage } from '../pages/ContactPage'
import { DestinationsPage } from '../pages/DestinationsPage'
import { HomePage } from '../pages/HomePage'
import { ServicesPage } from '../pages/ServicesPage'
import { TestimonialsPage } from '../pages/TestimonialsPage'
import { UniversitiesPage } from '../pages/UniversitiesPage'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="destinations" element={<DestinationsPage />} />
        <Route path="universities" element={<UniversitiesPage />} />
        <Route path="application-process" element={<ApplicationProcessPage />} />
        <Route path="testimonials" element={<TestimonialsPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="consultation" element={<ConsultationPage />} />
      </Route>
    </Routes>
  )
}
