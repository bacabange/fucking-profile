import { getCategoryList, getPostList, PostResponse } from "@api";
import Filter from "@components/Filter/Filter";
import Pagination from "@components/Pagination/Pagination";
import { POSTS_LIMIT } from "config/constants";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import PostItem from "../../components/Blog/PostItem";

import Layout from "../../layout/Layout";

type HomeProps = {
  posts: Post[],
  categories: Category[],
  total: number,
  page: number,
  totalPages: number,
}

export const getStaticProps: GetStaticProps<HomeProps> = async ({params}) => {
  const { page } = params || {};
  const pageNumber = parseInt(page as string) || 1;
  const skipMultiplier = pageNumber === 1 ? 0 : pageNumber - 1;
  const skip = skipMultiplier > 0 ? POSTS_LIMIT * skipMultiplier : 0;

  const {entries, total} = await getPostList({ limit: POSTS_LIMIT, skip })
  const totalPages = Math.ceil(total / POSTS_LIMIT);
  const categories = await getCategoryList({ limit: 10 })

  return {
    props: { categories, posts: entries, total, page: pageNumber, totalPages },
    // revalidate: 5 * 60, // once every five minutes
  }
}

export const getStaticPaths = async () =>{
  const {total} = await getPostList()

  const paths = Array
    .from({length: total}, (_, i) => i + 1)
    .map((index) => ({
      params: { page: `${index}` },
    }))

  return {
    fallback: true,
    paths,
  }
}

const Page = ({categories, posts, total, page, totalPages}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter()

  if(router.isFallback) {
    return <h1>Loading...</h1>
 }

  return (
    <Layout title="Home">
      <Filter categories={categories} />

      <span>total: {total}</span>

      {posts.length && posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}

      <div className="py-4">
        <Pagination next={page === totalPages ? null : page + 1} prev={page - 1 <= 0 ? null : page -1} />
      </div>
    </Layout>
  );
};

export default Page;
