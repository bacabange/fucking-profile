import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Dev | Stiven Castillo</title>
        <meta name="description" content="Mi puta página" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full">
        <div className="grid lg:grid-cols-4 gap-0">
          <div className="col-span-1 bg-white border-r-2 border-indigo-500 h-screen">
            <div className="flex flex-col justify-center items-center h-full px-20">
              <div className="w-full">
                <div className="mb-8">
                  <Image
                    src="https://via.placeholder.com/230x60.png"
                    alt="Logo"
                    height={60}
                    width={230}
                  />
                </div>

                <ul className="flex flex-col space-y-4">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Blog</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-3 bg-white h-screen"></div>
        </div>
      </main>
    </div>
  );
};

export default Home;
