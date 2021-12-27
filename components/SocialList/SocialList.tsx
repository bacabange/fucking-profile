import { DribbbleIcon, EnvelopeIcon, GithubIcon, LinkedinIcon, TwitterIcon } from '@components/Icon/Icon'
import React from 'react'

interface SocialListProps {
  hide: boolean;
}

const SocialList: React.FC<SocialListProps> = ({ hide }) => {
  return (
    <div className={`flex flex-row justify-around space-x-3 lg:justify-start ease-out duration-300 ${hide && 'hidden'}`}>
      <TwitterIcon width={20} height={20} fillColor="fill-slate-400" />
      <LinkedinIcon width={20} height={20} fillColor="fill-slate-400" />
      <GithubIcon width={20} height={20} fillColor="fill-slate-400" />
      <DribbbleIcon width={20} height={20} fillColor="fill-slate-400" />
      <EnvelopeIcon width={20} height={20} fillColor="fill-slate-400" />
    </div>
  )
}

export default SocialList
