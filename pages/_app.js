import '../styles/globals.css'
import '../styles/theme.css'
import { useEffect, useState } from 'react'
import Loader from '../components/Loader'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Tampilkan loader selama 1.6 detik
    const timer = setTimeout(() => setLoading(false), 1600)
    return () => clearTimeout(timer)
  }, [])

  return loading ? (
    <Loader />
  ) : (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
