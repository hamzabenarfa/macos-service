import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Navbar from './components/Navbar/Navbar'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'macos-service',
  description: 'apple website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/icon.png"  />
        </Head>
      <body className={inter.className}>
        <Navbar />
        {children}
        
        </body>
    </html>
  )
}
