import { Outlet } from 'react-router-dom'
import { AppFooter } from '../components/layout/AppFooter'
import { AppNavbar } from '../components/navigation/AppNavbar'
import { useScrollToTop } from '../hooks/useScrollToTop'

export function MainLayout() {
  useScrollToTop()

  return (
    <div className="d-flex flex-column min-vh-100">
      <AppNavbar />
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <AppFooter />
    </div>
  )
}
