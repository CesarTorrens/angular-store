
export interface Category {
  creationAt: string;
  updatedAt: string;
  id: number;
  image: string;
  name: string
}

export interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
  description: string;
  creationAt: string;
  updatedAt: string;
  category: Category
}
