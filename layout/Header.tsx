import React from 'react'
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { TwitterIcon, LinkedinIcon, GithubIcon, DribbbleIcon, EnvelopeIcon } from "../components/Icon/Icon";

const Header = () => {
  return (
    <header className="flex flex-col justify-center items-center bg-white sticky mb-10 border border-slate-100 w-full p-8 shadow-lg shadow-blue-200/50">
      <div className="w-28 m-auto">
        <Image
          src="/me.jpeg"
          alt="Profile"
          className="image-profile"
          height={150}
          width={150}
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl text-center font-bold tracking-wider text-blue-500 mb-2">
          Stiven Castillo
        </h1>
        <p className="text-center text-md font-light text-slate-400 mb-2 w-full lg:w-3/5">
          Frontend and Mobile Developer based in Colombia and happy to learn about UI/UX and tattoo illustration.{" "}
        </p>
        <div className="flex flex-row justify-around space-x-3 lg:justify-start">
            <TwitterIcon width={20} height={20} fillColor="fill-slate-400" />
            <LinkedinIcon width={20} height={20} fillColor="fill-slate-400" />
            <GithubIcon width={20} height={20} fillColor="fill-slate-400" />
            <DribbbleIcon width={20} height={20} fillColor="fill-slate-400" />
            <EnvelopeIcon width={20} height={20} fillColor="fill-slate-400" />
        </div>
      </div>
    </header>
  )
}

export default Header
