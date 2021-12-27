import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import SocialList from '@components/SocialList/SocialList'

const Header: React.FC = () => {
  const [hide, setHide] = useState<boolean>(false)

  const listenToScroll = () => {
    const heightToHideFrom = 50
    const winScroll = document.body.scrollTop ||
      document.documentElement.scrollTop

    if (winScroll > heightToHideFrom) {
      !hide && setHide(true)
    } else {
      setHide(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll)
    // return () =>
    //   window.removeEventListener('scroll', listenToScroll)
  }, [])

  return (
    <header className={`header top-0 z-10 ease-out transition-all duration-500 ${hide && 'p-4'}`}>
      <div className={`w-28 m-auto ${hide && 'hidden'}`}>
        <Image
          src="/me.jpeg"
          alt="Profile"
          className="image-profile"
          height={150}
          width={150}
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl text-center font-bold tracking-wider text-blue-500 mb-2 hover:animate-esconder">
          Stiven Castillo
        </h1>
        <p className={`text-center text-md font-light text-slate-400 mb-2 w-full lg:w-3/5 ${hide && 'hidden'}`}>
          Frontend and Mobile Developer based in Colombia and happy to learn
          about UI/UX and tattoo illustration.{' '}
        </p>

        <SocialList hide={hide} />
      </div>
    </header>
  )
}

export default Header
