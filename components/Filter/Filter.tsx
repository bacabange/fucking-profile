import React from 'react'
import CategoryList from './CategoryList/CategoryList'

interface FilterProps {
  categories: Category[];
  categoryActive?: string | null;
}
const Filter: React.FC<FilterProps> = ({ categories, categoryActive }) => {
  return (
    <div className="w-full">
      <CategoryList categories={categories} categoryActive={categoryActive} />
    </div>
  )
}

export default Filter
