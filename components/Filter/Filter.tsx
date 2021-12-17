import React from 'react'
import CategoryList from './CategoryList/CategoryList'

interface FilterProps {
  categories: Category[]
}
const Filter: React.FC<FilterProps> = ({ categories }) => {
  return (
    <div className="w-full">
      <CategoryList categories={categories} />
    </div>
  )
}

export default Filter
