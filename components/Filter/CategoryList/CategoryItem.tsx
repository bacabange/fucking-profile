import { FilterIcons } from '@components/Icon/Icon'
import React from 'react'

interface CategoryItemProps {
  category: Category
  active?: boolean
}

const CategoryItem: React.FC<CategoryItemProps> = ({active, category}) => {
  const Icon = FilterIcons[category.icon || 'CodeIcon'];
  return (
    <li>
      <a href="#" className={`category-item bg-${category.color}-500 ${active ? `category-item--active ring-${category.color}-500` : ''}`}>
        <Icon width={20} height={14} fillColor="fill-white mr-2"/>{category.title}
      </a>
    </li>
  )
}

export default CategoryItem
