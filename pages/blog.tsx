import React from "react";
import Layout from "../layout/Layout";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  return (
    <Layout>
      <div className="page-content p-20">
        <span className="bg-gray-200 text-gray-400 text-sm px-4 py-2">
          Blog
        </span>

        <h1 className="mt-4 mb-12 font-bold text-4xl">Dev Posts</h1>
        <div className="grid gap-5 lg:grid-cols-2 auto-rows-fr">
          {[1, 2, 3, 4, 5, 6, 7].map(i => (
            <div className="block" key={i}>
              <div className="relative w-full h-52 bg-yellow-400 rounded-md">
                <Image
                  src="https://via.placeholder.com/500x320.png"
                  alt="Logo"
                  height={320}
                  width={500}
                  layout="fill" // required
                  objectFit="cover" // change to suit your needs
                  className="object-cover rounded-md"
                />
              </div>
              <div className="p-4">
                <time className="text-gray-400 text-xs" dateTime="2021-12-12">
                  Dec 12 2021
                </time>
                <h3 className="mb-4 text-2xl font-medium">
                  Mi puto post chimba gonorrea
                </h3>

                <div className="flex flex-row justify-end">
                  <Link href="/blog/hola-putitos">
                    <a className="text-blue-500">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
