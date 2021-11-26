import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'

type LayoutProps = { title?: string }
const siteTitle = "Stiven Castillo"

const Layout: React.FC<LayoutProps> = ({children, title}) => {
  return (
    <>
      <Head>
        <title>{!title ? siteTitle : `${title} | ${siteTitle}`}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <noscript id="mui-insertion-point" />
        {/* Google fonts get automatically automized by Next.js: https://nextjs.org/blog/next-10-2#automatic-webfont-optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="w-full bg-white">
        <div className="main-container">
          <Navbar />

          <main className="content">
            {children}
          </main>

        </div>
      </div>
    </>
  )
}

export default Layout
