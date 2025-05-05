
export type Category = 
  | "traditional"
  | "western"
  | "shoes"
  | "watches"
  | "headphones"
  | "earbuds"
  | "smartphones"
  | "accessories";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number; // in INR
  images: string[];
  category: Category;
  featured?: boolean;
  bestSeller?: boolean;
  newArrival?: boolean;
  discount?: number; // percentage discount
  stock: number;
  rating?: number; // out of 5
  gender?: "men" | "women" | "unisex";
};

export type CartItem = {
  product: Product;
  quantity: number;
};

export type SortOption = "price-low-high" | "price-high-low" | "newest" | "popularity";

export type FilterOptions = {
  categories: Category[];
  priceRange: [number, number];
  gender?: "men" | "women" | "unisex";
};
