import { getCategoryList, getPostList, getPostListByCategory } from '@api'
import Filter from '@components/Filter/Filter'
import Pagination from '@components/Pagination/Pagination'
import LoadingFull from '@components/Loading/LoadingFull'
import { POSTS_LIMIT } from 'config/constants'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import PostItem from 'components/Blog/PostItem'

import Layout from 'layout/Layout'

type HomeProps = {
  posts: Post[];
  categories: Category[];
  total: number;
  page: number;
  totalPages: number;
  category: string;
};

export const getStaticProps: GetStaticProps<HomeProps> = async ({ params }) => {
  const { page, category } = params || {}
  const pageNumber = parseInt(page as string) || 1
  const skipMultiplier = pageNumber === 1 ? 0 : pageNumber - 1
  const skip = skipMultiplier > 0 ? POSTS_LIMIT * skipMultiplier : 0
  const categorySlug = category as string

  const { entries, total } = await getPostListByCategory({
    category: categorySlug,
    limit: POSTS_LIMIT,
    skip
  })

  const totalPages = Math.ceil(total / POSTS_LIMIT)
  const categories = await getCategoryList({ limit: 10 })

  return {
    props: {
      categories,
      posts: entries,
      total,
      page: pageNumber,
      totalPages,
      category: categorySlug
    }
    // revalidate: 5 * 60, // once every five minutes
  }
}

export const getStaticPaths = async () => {
  const { total } = await getPostList()

  const paths = Array.from({ length: total }, (_, i) => i + 1).map(index => ({
    params: { page: `${index}`, category: 'all' }
  }))

  return {
    fallback: true,
    paths
  }
}

const Page = ({
  categories,
  posts,
  page,
  totalPages,
  category
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter()

  if (router.isFallback) {
    return <LoadingFull />
  }

  return (
    <Layout title={category}>
      <Filter categories={categories} />

      {posts.length
        ? (
            posts.map(post => <PostItem post={post} key={post.id} />)
          )
        : (
          <div className="py-4 rounded-md border border-slate-200 bg-white">
            <p className="text-center text-slate-400">
              Sorry, no hay post mi pez.
            </p>
          </div>
          )}

      <div className="py-4">
        <Pagination
          next={page === totalPages || totalPages === 0 ? null : page + 1}
          prev={page - 1 <= 0 ? null : page - 1}
        />
      </div>
    </Layout>
  )
}

export default Page
