import { getCategoryList, getPostList } from "@api";
import Filter from "@components/Filter/Filter";
import Pagination from "@components/Pagination/Pagination";
import { POSTS_LIMIT } from "config/constants";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import PostItem from "../components/Blog/PostItem";

import Layout from "../layout/Layout";

type HomeProps = {
  posts: Post[],
  categories: Category[],
  total: number,
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const {entries, total} = await getPostList({ limit: POSTS_LIMIT, skip: 0 })
  const categories = await getCategoryList({ limit: 10 })

  return {
    props: { categories, posts: entries, total },
    // revalidate: 5 * 60, // once every five minutes
  }
}


const Home = ({categories, posts, total}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout title="Home">
      <Filter categories={categories} />

      {posts.length && posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}

      <div className="py-4">
        <Pagination next={total > POSTS_LIMIT ? 2 : null} />
      </div>
    </Layout>
  );
};

export default Home;
