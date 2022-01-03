import React from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

type LayoutProps = { title?: string, header?: 'single' | 'full' };
const siteTitle = 'Stiven Castillo'

const Layout: React.FC<LayoutProps> = ({ children, title, header }) => {
  return (
    <>
      <Head>
        <title>{!title ? siteTitle : `${title} | ${siteTitle}`}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Stiven Castillo, Developer and Designer" />
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <noscript id="mui-insertion-point" />
      </Head>
      <div className="relative w-full min-h-screen bg-slate-50 flex flex-col">
        <Header type={header} />

        <main className="flex flex-col justify-start space-y-6 w-full md:w-10/12 lg:w-1/2 px-4 lg:px-0 mx-auto pb-24">
          {children}
        </main>

        <Footer />
      </div>
    </>
  )
}

export default Layout
