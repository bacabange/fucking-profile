import React from 'react'
import { UserIcon } from '../Icon/Icon'

const PostItem = () => {
  return (
    <div className="w-full px-8 py-6 mx-auto bg-white rounded-lg shadow-md shadow-blue-200/50 hover:shadow-lg hover:shadow-violet-200/50">
      <div className="flex items-center justify-between">
        <time dateTime="2020-05-01 20:00" className="font-light text-slate-400">Jun 1, 2020</time>
        <span className="p-2 font-bold text-gray-100 bg-violet-500 rounded-full hover:bg-violet-600">
          <UserIcon width={16} height={16} fillColor="fill-white" />
        </span>
      </div>
      <div className="mt-2">
        <a href="#" className="text-2xl font-bold text-slate-700 hover:underline">
          Build a Microfrontend with Next.js
        </a>
        <p className="mt-2 text-gray-500 font-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim
          reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
      </div>
      <div className="flex items-center justify-between mt-4">
        <a href="#" className="text-blue-500 hover:underline">Read more</a>
        <div>
          <a href="#" className="flex items-center">
            <img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80" alt="avatar" className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" />
            <h1 className="font-bold text-gray-700 hover:underline">Stiven Castillo</h1>
          </a></div>
      </div>
    </div>
  )
}

export default PostItem
