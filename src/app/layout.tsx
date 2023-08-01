import './globals.css'
import type { Metadata } from 'next'
import { IBM_Plex_Sans } from 'next/font/google'

import Navbar from './components/Navbar'
import Footer from './components/footer/Footer'

const inter = IBM_Plex_Sans({ subsets: ['latin'] ,weight:"400" })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <body className={inter.className}>
      <Navbar />
      {children}
      <Footer />
    </body>
  </html>
  )
}
