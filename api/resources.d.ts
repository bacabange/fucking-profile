type Image = {
  title: string;
  url: string;
  width: number;
  height: number;
};

type Category = {
  id: string;
  slug: string;
  title: string;
  icon: string;
  color: string;
};

type Author = {
  id: string;
  fullName: string;
  handle: string;
  photo: Image;
  twitter: string;
};

type RichText = Json

type Post = {
  id: string;
  title?: string;
  slug?: string;
  image?: Image | undefined;
  body?: RichText | null;
  url?: string;
  summary?: string;
  author: Author;
  date?: string;
  category: Category;
  tags?: Array<string | null | undefined> | null | undefined;
};
