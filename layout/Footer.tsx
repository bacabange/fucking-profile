import React from 'react'
import SocialList from '@components/SocialList/SocialList'

const Footer = () => {
  return (
    <>
      <div className="absolute bottom-0 left-0 right-0 text-center pt-4">

        <div className="bg-white w-full md:w-10/12 lg:w-1/2 rounded-t-lg m-auto pt-4 pb-2 py-4">
          <div className="flex flex-row justify-center mb-2">
            <SocialList hide={false} />
          </div>
          <span className="text-slate-400/60 font-light text-sm">Made with Nextjs</span>
        </div>

      </div>
    </>
  )
}

export default Footer
