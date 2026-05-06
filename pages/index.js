import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe'
import Gallery from '../components/Gallery'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Xhiloo | Portfolio</title>
        {/* 🎯 GANTI JUDUL DI ATAS */}
        
        <meta name="description" content="Portfolio personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#578cf8" />
      </Head>

      <Hero />
      <AboutMe />
      <Gallery />
      <Skills />
      <Contact />
    </>
  )
}
