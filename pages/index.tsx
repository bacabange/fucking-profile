import type { NextPage } from "next";
import PostItem from "../components/Blog/PostItem";
import { CodeIcon, TwitterIcon, UserIcon } from "../components/Icon/Icon";

import Layout from "../layout/Layout";

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <div className="w-full">
        <ul className="flex flex-row space-x-2 justify-center lg:justify-start">
          <li>
            <a href="#" className="flex flex-row items-center bg-teal-500 text-white px-3 py-2 rounded-full ring-offset-2 ring-2 ring-teal-500/50">
              <CodeIcon width={20} height={14} fillColor="fill-white mr-2" /> Dev
            </a>
          </li>
          <li>
            <a href="#" className="flex flex-row items-center bg-violet-500 text-white px-3 py-2 rounded-full">
              <UserIcon width={14} height={14} fillColor="fill-white mr-2" /> Personal
            </a>
          </li>
        </ul>
      </div>
      {[...Array(10)].map((_, i) => (
        <PostItem key={i} />
      ))}

      <div className="py-4">
        <ul className="flex flex-row justify-between">
          <li>
            <a href="#" className="bg-slate-100 border border-slate-200 text-slate-300 px-4 py-2 text-lg rounded-md">
            &lsaquo;
            </a>
          </li>
          <li>
            <a href="#" className="bg-white border border-slate-200 text-black px-4 py-2 text-lg rounded-md">
            &rsaquo;
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default Home;
