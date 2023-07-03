import Head from 'next/head'

export const metadata = {
  title: 'macos-service | macbookair',
  description: 'macbook mini website',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/icon.png"  />
        </Head>

   
        {children}

        </div>
  )
}
