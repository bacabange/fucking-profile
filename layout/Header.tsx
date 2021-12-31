import React, { useEffect, useState } from 'react'
import SocialList from '@components/SocialList/SocialList'
import Image from 'next/image'
import Link from 'next/link'

interface HeaderProps {
  type?: 'single' | 'full'
}

const Header: React.FC<HeaderProps> = ({ type = 'full' }) => {
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
    <header className={`header top-0 z-10 ease-out transition-all duration-300 ${(hide || type === 'single') && 'p-4'}`}>
      <div className={`w-28 m-auto ${(hide || type === 'single') && 'hidden'}`}>
        <Image
          src="/me.jpeg"
          alt="Profile"
          className="image-profile"
          width={100}
          height={100}
          layout='responsive'
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <Link href="/">
          <h1 className="text-2xl text-center font-bold tracking-wider text-blue-500 mb-2 cursor-pointer">
            Stiven Castillo
          </h1>
        </Link>
        <p className={`text-center text-md font-light text-slate-400 mb-2 w-full lg:w-3/5 ${(hide || type === 'single') && 'hidden'}`}>
          Frontend and Mobile Developer based in Colombia and happy to learn
          about UI/UX and tattoo illustration.{' '}
        </p>

        <SocialList hide={hide || type === 'single'} />
      </div>
    </header>
  )
}

export default React.memo(Header)
