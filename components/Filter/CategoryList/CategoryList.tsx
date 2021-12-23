import React from "react";
import CategoryItem from "./CategoryItem";

interface CategoryListProps {
  categories: Category[];
}

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
  if (!categories.length) {
    return null;
  }

  return (
    <ul className="flex flex-row space-x-2 justify-center lg:justify-start">
      {categories.map(category => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </ul>
  );
};

export default CategoryList;
