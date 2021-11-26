import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import TwitterIcon from "../public/icons/twitter.svg";
import LinkedinIcon from "../public/icons/linkedin.svg";
import GithubIcon from "../public/icons/github.svg";
import DribbbleIcon from "../public/icons/dribbble.svg";
import EnvelopeIcon from "../public/icons/envelope.svg";
import Layout from "../layout/Layout";

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <div className="page-content flex flex-col justify-center items-center">
        <div className="lg:flex lg:flex-row lg:items-center">
          <div className="w-64 lg:w-96 m-auto mb-6 lg:mx-8 ">
            <Image
              src="https://via.placeholder.com/500x500.png"
              alt="Profile"
              className="rounded-full w-full"
              height={500}
              width={500}
            />
          </div>
          <div>
            <h1 className="text-4xl text-center lg:text-left text-black mb-6 lg:mb-4">
              Stiven Castillo
            </h1>
            <p className="text-center text-black lg:text-left text-lg font-normal mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque euismod, urna eu tincidunt consectetur{" "}
            </p>
            <div className="flex flex-row justify-around space-x-4 lg:justify-start px-12 lg:px-0">
              <div className="">
                <Image
                  src={TwitterIcon}
                  alt="Twitter"
                  height={24}
                  width={24}
                ></Image>
              </div>
              <div className="">
                <Image
                  src={LinkedinIcon}
                  className="lg:mr-4"
                  alt="Twitter"
                  height={24}
                  width={24}
                ></Image>
              </div>
              <div className="">
                <Image
                  src={GithubIcon}
                  className="lg:mr-4"
                  alt="Twitter"
                  height={24}
                  width={24}
                ></Image>
              </div>
              <div className="">
                <Image
                  src={EnvelopeIcon}
                  className="lg:mr-4"
                  alt="Twitter"
                  height={24}
                  width={24}
                ></Image>
              </div>
              <div className="">
                <Image
                  src={DribbbleIcon}
                  className="lg:mr-4"
                  alt="Twitter"
                  height={24}
                  width={24}
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
