import React from 'react'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import Layout from '../../layout/Layout'
import { getOwnPostList, getPost } from '@api'
import { RichText } from '@components/Blog/RichText'

type SinglePostProps = {
  post: Post | null;
};

export const getStaticProps: GetStaticProps<SinglePostProps> = async ({ params }) => {
  const slug = params?.slug

  if (typeof slug !== 'string') {
    return {
      notFound: true
    }
  }

  try {
    const post = await getPost(slug)

    return {
      props: {
        post
      },
      revalidate: 5 * 60 // once every five minutes
    }
  } catch (e) {
    return {
      notFound: true
    }
  }
}

type PathType = {
  params: {
    slug: string | undefined;
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postEntries = await getOwnPostList()

  const paths: PathType[] = postEntries.map(({ slug }) => ({
    params: {
      slug
    }
  }))

  return {
    fallback: 'blocking',
    paths
  }
}

const SinglePost = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Layout header='single' title={post?.title}>
        {post?.image &&
          <div className='mb-8 flex flex-col justify-center items-center'>
            <img src={post?.image?.url} alt={post?.image?.title} className='object-cover h-96 w-full' />
            <span className='text-slate-300 text-sm mt-2'>{post?.image?.title}</span>
          </div>
        }
        {post &&
          <RichText richText={post?.body} />
        }

        <div className='my-4'>
          {post?.tags?.map(tag =>
            <span key={tag} className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-700 mr-2'>
              {tag}
            </span>
          )}
        </div>
      </Layout>
    </>
  )
}

export default SinglePost
