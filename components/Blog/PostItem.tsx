import React from 'react'
import { FilterIcons, ShareIcon } from '../Icon/Icon'
import Image from 'next/image'
import { format } from 'date-fns'
interface PostItemProps {
  post: Post;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  const Icon = FilterIcons[post.category.icon || 'CodeIcon']

  return (
    <div className="relative w-full px-8 py-6 mx-auto bg-white rounded-lg shadow-md shadow-blue-200/50 hover:shadow-lg hover:shadow-violet-200/50">
      <div className="flex items-center justify-between">
        {/* @ts-ignore */}
        <time
          dateTime={format(new Date(post?.date), 'yyyy-mm-dd h:i')}
          className="font-light text-slate-400"
        >
          {format(new Date(post?.date), 'MMM yyyy')}
        </time>
        <span
          className={`p-2 font-bold text-gray-100 bg-${post.category.color}-500 rounded-full hover:bg-violet-600`}
        >
          <Icon width={16} height={16} fillColor="fill-white" />
        </span>
      </div>
      <div className="mt-2">
        <a
          href="#"
          className="text-2xl font-bold text-slate-700 hover:underline"
        >
          {post.title}
        </a>
        <p className="mt-2 text-gray-500 font-light">{post.summary}</p>
      </div>
      <div className="flex items-center justify-between mt-5">
        <a
          href={post.url}
          {...(post.url && { target: '_blank' })}
          className="after:absolute after:inset-0 text-blue-500 hover:underline flex flex-row items-center"
          rel="noreferrer"
        >
          Read more
          <ShareIcon width={16} height={16} fillColor="fill-blue-500 ml-1" />
        </a>
        <div>
          <a href="#" className="flex items-center ">
            <div className="flex items-center w-10 h-10 mx-2">
              {post.author.photo.url && (
                <Image
                  src={post.author.photo.url}
                  alt={post.author.photo.title}
                  className="hidden object-cover w-full h-full rounded-full sm:block"
                  height={35}
                  width={35}
                />
              )}
            </div>
            <h1 className="font-bold text-gray-700 hover:underline">
              {post.author.fullName}
            </h1>
          </a>
        </div>
      </div>
    </div>
  )
}

export default PostItem
