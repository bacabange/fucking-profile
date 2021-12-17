import { getCategoryList, getPostList } from "@api";
import Filter from "@components/Filter/Filter";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import PostItem from "../components/Blog/PostItem";
import { CodeIcon, UserIcon } from "../components/Icon/Icon";

import Layout from "../layout/Layout";

type HomeProps = {
  // posts: Post[],
  categories: Category[],
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  // const posts = await getPostList({ limit: 10 })
  const categories = await getCategoryList({ limit: 10 })

  return {
    props: { categories },
    revalidate: 5 * 60, // once every five minutes
  }
}

const Home = ({categories}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout title="Home">
      <Filter categories={categories} />

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
