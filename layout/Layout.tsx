import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = { title?: string };
const siteTitle = "Stiven Castillo";

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
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
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="relative w-full min-h-screen bg-slate-50 flex flex-col">
        <Header />

        <main className="flex flex-col justify-start space-y-6 w-full md:w-10/12 lg:w-1/2 px-4 lg:px-0 mx-auto pb-14">
          {children}
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Layout;
