import { DribbbleIcon, EnvelopeIcon, GithubIcon, LinkedinIcon, TwitterIcon } from '@components/Icon/Icon'
import React from 'react'

interface SocialListProps {
  hide: boolean;
}

const SocialList: React.FC<SocialListProps> = ({ hide }) => {
  return (
    <div className={`flex flex-row justify-around space-x-3 lg:justify-start ease-out duration-300 ${hide && 'hidden'}`}>
      <a href="https://twitter.com/stivncastillo_" target="_blank" rel="noreferrer">
        <TwitterIcon width={20} height={20} fillColor="fill-slate-400 hover:fill-blue-400" />
      </a>
      <a href="https://linkedin.com/in/stivncastillo/" target="_blank" rel="noreferrer">
        <LinkedinIcon width={20} height={20} fillColor="fill-slate-400 hover:fill-blue-400" />
      </a>
      <a href="https://github.com/stivncastillo" target="_blank" rel="noreferrer">
        <GithubIcon width={20} height={20} fillColor="fill-slate-400 hover:fill-blue-400" />
      </a>
      <a href="https://dribbble.com/stivncastillo" target="_blank" rel="noreferrer">
        <DribbbleIcon width={20} height={20} fillColor="fill-slate-400 hover:fill-blue-400" />
      </a>
      <a href="mailto:stivencastillo.90@gmail.com" target="_blank" rel="noreferrer">
        <EnvelopeIcon width={20} height={20} fillColor="fill-slate-400 hover:fill-blue-400" />
      </a>
    </div>
  )
}

export default SocialList
