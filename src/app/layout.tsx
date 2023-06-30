
import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata  = {
  title: 'macos-service',
  description: 'apple website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <Head>
        <meta charSet="utf-8" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        <link rel="icon" href="/icon.png"  />
        {/* <!-- Google Tag Manager --> */}
    <Script>
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-KT5B8MX');
    </Script>
{/* <!-- End Google Tag Manager --> */}
        </Head>
      <body className={inter.className}>
      {/* <!-- Google Tag Manager (noscript) --> */}
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KT5B8MX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
{/* <!-- End Google Tag Manager (noscript) --> */}
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
