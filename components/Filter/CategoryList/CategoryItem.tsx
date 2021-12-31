import { FilterIcons } from '@components/Icon/Icon'
import Link from 'next/link'
import React from 'react'

interface CategoryItemProps {
  category: Category;
  active?: boolean;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ active, category }) => {
  const Icon = FilterIcons[category.icon || 'CodeIcon']
  return (
    <li>
      <Link href={`/${category.slug}/page/1`}>
        <a
          className={`category-item bg-${category.color}-500 ${
            active ? `category-item--active ring-${category.color}-500` : ''
          }`}
        >
          <Icon width={20} height={14} fillColor="fill-white mr-2" />
          {category.title}
        </a>
      </Link>
    </li>
  )
}

export default CategoryItem
