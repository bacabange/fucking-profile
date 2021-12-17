import { CodeIcon, UserIcon, IconProps } from '@components/Icon/Icon'
import React, { FC } from 'react'

interface CategoryItemProps {
  category: Category
  active?: boolean
}

const Components: {[key: string]: FC<IconProps>} = {
  CodeIcon,
  UserIcon
};

const CategoryItem: React.FC<CategoryItemProps> = ({active, category}) => {
  const Icon = Components[category.icon || 'CodeIcon'];
  return (
    <li>
      <a href="#" className={`category-item ${active && 'category-item--active'} bg-${category.color}-500 ring-${category.color}-500/50`}>
        <Icon width={20} height={14} fillColor="fill-white mr-2"  />{category.title}
      </a>
    </li>
  )
}

export default CategoryItem
