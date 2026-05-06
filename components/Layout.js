import Navbar from './Navbar'
import ThemeToggle from './ThemeToggle'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <ThemeToggle />
      <main>{children}</main>
    </>
  )
}
