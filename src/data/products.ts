import { Product, Category } from "@/types";

export const products: Product[] = [
  // Traditional Clothing - Men
  {
    id: "trad-m-1",
    name: "Royal Silk Kurta Pajama Set",
    description: "Premium silk kurta set with intricate zari embroidery, perfect for festive occasions.",
    price: 7999,
    images: [
      "https://images.unsplash.com/photo-1604006852748-903fccbb4f50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGt1cnRhfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1615886593566-50748d279eb4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGt1cnRhfGVufDB8fDB8fHww"
    ],
    category: "traditional",
    featured: true,
    stock: 25,
    rating: 4.8,
    gender: "men"
  },
  {
    id: "trad-m-2",
    name: "Festive Brocade Sherwani",
    description: "Luxurious sherwani with brocade detailing, ideal for weddings and special occasions.",
    price: 12499,
    images: [
      "https://images.unsplash.com/photo-1595739593594-dec298cf3030?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNoZXJ3YW5pfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1600612253971-422e7f7faeb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGluZGlhbiUyMHdlYXJ8ZW58MHx8MHx8fDA%3D"
    ],
    category: "traditional",
    bestSeller: true,
    stock: 15,
    rating: 4.9,
    gender: "men"
  },
  {
    id: "trad-m-3",
    name: "Cotton Blend Nehru Jacket",
    description: "Stylish Nehru jacket with modern fit and traditional aesthetics.",
    price: 3499,
    images: [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TmVocnUlMjBqYWNrZXR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1603912699214-92627f304eb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwamFja2V0fGVufDB8fDB8fHww"
    ],
    category: "traditional",
    newArrival: true,
    stock: 40,
    rating: 4.5,
    gender: "men"
  },
  
  // Traditional Clothing - Women
  {
    id: "trad-w-1",
    name: "Handwoven Banarasi Silk Saree",
    description: "Authentic Banarasi silk saree with golden zari work and intricate patterns.",
    price: 15999,
    images: [
      "https://images.unsplash.com/photo-1610030469668-3898bd51e36d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNhcmVlfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1612767871179-e2c0deb7376a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2FyZWV8ZW58MHx8MHx8fDA%3D"
    ],
    category: "traditional",
    featured: true,
    stock: 20,
    rating: 4.9,
    gender: "women"
  },
  {
    id: "trad-w-2",
    name: "Designer Anarkali Suit",
    description: "Elegant Anarkali suit with delicate embroidery and flair design.",
    price: 8499,
    images: [
      "https://images.unsplash.com/photo-1609941231244-d21842e0f376?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2FyZWV8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1583391733981-8498408ee50b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGluZGlhbiUyMHdlYXJ8ZW58MHx8MHx8fDA%3D"
    ],
    category: "traditional",
    bestSeller: true,
    stock: 18,
    rating: 4.7,
    gender: "women"
  },
  {
    id: "trad-w-3",
    name: "Embroidered Lehenga Choli",
    description: "Stunning lehenga set with contemporary embroidery and sequin work.",
    price: 18999,
    images: [
      "https://images.unsplash.com/photo-1640577333953-b11d06b6a278?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVoZW5nYXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1656968845812-ec94314dce52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGVoZW5nYXxlbnwwfHwwfHx8MA%3D%3D"
    ],
    category: "traditional",
    newArrival: true,
    stock: 10,
    rating: 4.8,
    gender: "women"
  },
  
  // Western Clothing - Men
  {
    id: "west-m-1",
    name: "Premium Slim Fit Suit",
    description: "Tailored slim fit suit in premium Italian fabric for a sharp look.",
    price: 15999,
    images: [
      "https://images.unsplash.com/photo-1598808503746-f34cfba2de4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3VpdHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN1aXR8ZW58MHx8MHx8fDA%3D"
    ],
    category: "western",
    featured: true,
    stock: 25,
    rating: 4.7,
    gender: "men"
  },
  {
    id: "west-m-2",
    name: "Classic Denim Jacket",
    description: "Versatile denim jacket with modern detailing and perfect fit.",
    price: 3999,
    images: [
      "https://images.unsplash.com/photo-1591213954196-2d0ccb3f8d4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVuaW0lMjBqYWNrZXR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVuaW0lMjBqYWNrZXR8ZW58MHx8MHx8fDA%3D"
    ],
    category: "western",
    bestSeller: true,
    stock: 35,
    rating: 4.5,
    gender: "men"
  },
  
  // Western Clothing - Women
  {
    id: "west-w-1",
    name: "Designer Evening Gown",
    description: "Elegant floor-length evening gown with delicate sequin work.",
    price: 12999,
    images: [
      "https://images.unsplash.com/photo-1622122201714-77da0ca8e5d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXZlbmluZyUyMGdvd258ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1615939675903-62a3fdc3341d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGV2ZW5pbmclMjBnb3dufGVufDB8fDB8fHww"
    ],
    category: "western",
    featured: true,
    stock: 15,
    rating: 4.8,
    gender: "women"
  },
  {
    id: "west-w-2",
    name: "Contemporary Blazer",
    description: "Modern tailored blazer for a sophisticated professional look.",
    price: 5499,
    images: [
      "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29tZW4lMjBibGF6ZXJ8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1619445666676-464f4b66a95b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvbWVuJTIwYmxhemVyfGVufDB8fDB8fHww"
    ],
    category: "western",
    newArrival: true,
    stock: 28,
    rating: 4.6,
    gender: "women"
  },
  
  // Shoes
  {
    id: "shoe-m-1",
    name: "Handcrafted Leather Oxford",
    description: "Premium leather oxfords with traditional craftsmanship and modern comfort.",
    price: 8999,
    images: [
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVhdGhlciUyMHNob2VzfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1614252234176-9cac96314fac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGxlYXRoZXIlMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D"
    ],
    category: "shoes",
    featured: true,
    stock: 20,
    rating: 4.9,
    gender: "men"
  },
  {
    id: "shoe-w-1",
    name: "Designer Stiletto Heels",
    description: "Elegant stiletto heels with luxurious finish and cushioned insole.",
    price: 6999,
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3RpbGV0dG8lMjBoZWVsc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1596703263926-eb0762ee17e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3RpbGV0dG8lMjBoZWVsc3xlbnwwfHwwfHx8MA%3D%3D"
    ],
    category: "shoes",
    bestSeller: true,
    stock: 18,
    rating: 4.7,
    gender: "women"
  },
  {
    id: "shoe-m-2",
    name: "Traditional Mojari",
    description: "Handcrafted traditional Mojari with intricate embroidery.",
    price: 4999,
    images: [
      "https://images.unsplash.com/photo-1610398752800-146f269dfbc8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SW5kaWFuJTIwc2hvZXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1622760807800-66cf1466fc08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEluZGlhbiUyMHNob2V8ZW58MHx8MHx8fDA%3D"
    ],
    category: "shoes",
    newArrival: true,
    stock: 25,
    rating: 4.6,
    gender: "men"
  },
  
  // Watches
  {
    id: "watch-1",
    name: "Premium Chronograph Watch",
    description: "Sophisticated chronograph with premium materials and Swiss movement.",
    price: 24999,
    images: [
      "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2F0Y2h8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2F0Y2h8ZW58MHx8MHx8fDA%3D"
    ],
    category: "watches",
    featured: true,
    stock: 15,
    rating: 4.9,
    gender: "unisex"
  },
  {
    id: "watch-2",
    name: "Minimalist Dress Watch",
    description: "Elegant timepiece with clean design and premium leather strap.",
    price: 12999,
    images: [
      "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdhdGNofGVufDB8fDB8fHww"
    ],
    category: "watches",
    bestSeller: true,
    stock: 25,
    rating: 4.7,
    gender: "unisex"
  },
  {
    id: "watch-3",
    name: "Luxury Gold-Finish Watch",
    description: "Premium gold-finish watch with intricate detailing and sapphire crystal.",
    price: 35999,
    images: [
      "https://images.unsplash.com/photo-1619946794135-5bc917a27793?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z29sZCUyMHdhdGNofGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1608234808654-2a8875faa7fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z29sZCUyMHdhdGNofGVufDB8fDB8fHww"
    ],
    category: "watches",
    newArrival: true,
    stock: 10,
    rating: 4.8,
    gender: "unisex"
  },
  
  // Headphones
  {
    id: "headphone-1",
    name: "Premium Noise Cancelling Headphones",
    description: "Studio-quality headphones with advanced noise cancellation technology.",
    price: 22999,
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D"
    ],
    category: "headphones",
    featured: true,
    stock: 20,
    rating: 4.8,
    gender: "unisex"
  },
  {
    id: "headphone-2",
    name: "Wireless Studio Headphones",
    description: "Premium wireless headphones with studio-quality sound and long battery life.",
    price: 18999,
    images: [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D"
    ],
    category: "headphones",
    bestSeller: true,
    stock: 25,
    rating: 4.7,
    gender: "unisex"
  },
  
  // Earbuds
  {
    id: "earbud-1",
    name: "True Wireless Earbuds",
    description: "Premium wireless earbuds with active noise cancellation and crystal clear sound.",
    price: 14999,
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWFyYnVkc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1606039117653-8c038ebcd72c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZWFyYnVkc3xlbnwwfHwwfHx8MA%3D%3D"
    ],
    category: "earbuds",
    featured: true,
    stock: 30,
    rating: 4.8,
    gender: "unisex"
  },
  {
    id: "earbud-2",
    name: "Sports Wireless Earbuds",
    description: "Sweat-resistant wireless earbuds perfect for workouts and active lifestyles.",
    price: 8999,
    images: [
      "https://images.unsplash.com/photo-1574721863653-124619170d51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZWFyYnVkc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWFyYnVkc3xlbnwwfHwwfHx8MA%3D%3D"
    ],
    category: "earbuds",
    newArrival: true,
    stock: 25,
    rating: 4.6,
    gender: "unisex"
  },
  
  // Smartphones
  {
    id: "smartphone-1",
    name: "Flagship Smartphone",
    description: "Latest flagship smartphone with advanced camera system and powerful processor.",
    price: 79999,
    images: [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c21hcnRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1603891128711-11b4b03bb138?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNtYXJ0cGhvbmV8ZW58MHx8MHx8fDA%3D"
    ],
    category: "smartphones",
    featured: true,
    stock: 20,
    rating: 4.9,
    gender: "unisex"
  },
  {
    id: "smartphone-2",
    name: "Mid-Range Smartphone",
    description: "Feature-packed mid-range smartphone with excellent value for money.",
    price: 24999,
    images: [
      "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNtYXJ0cGhvbmV8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1550367083-9fa5411cb4e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNtYXJ0cGhvbmV8ZW58MHx8MHx8fDA%3D"
    ],
    category: "smartphones",
    bestSeller: true,
    stock: 30,
    rating: 4.7,
    gender: "unisex"
  },
  
  // Accessories
  {
    id: "acc-1",
    name: "Premium Leather Wallet",
    description: "Handcrafted genuine leather wallet with multiple card slots and sleek design.",
    price: 2499,
    images: [
      "https://images.unsplash.com/photo-1611010344444-5f9e4d86a6e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVhdGhlciUyMHdhbGxldHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1556774687-ba95af76afd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGVhdGhlciUyMHdhbGxldHxlbnwwfHwwfHx8MA%3D%3D"
    ],
    category: "accessories",
    featured: true,
    stock: 40,
    rating: 4.7,
    gender: "men"
  },
  {
    id: "acc-2",
    name: "Designer Clutch Bag",
    description: "Elegant clutch bag with intricate detailing and luxury finish.",
    price: 6999,
    images: [
      "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGFuZGJhZ3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFuZGJhZ3xlbnwwfHwwfHx8MA%3D%3D"
    ],
    category: "accessories",
    bestSeller: true,
    stock: 25,
    rating: 4.8,
    gender: "women"
  },
  {
    id: "acc-3",
    name: "Designer Silk Scarf",
    description: "Luxurious silk scarf with artistic prints and premium finish.",
    price: 3999,
    images: [
      "https://images.unsplash.com/photo-1609803384069-19f3e3a15973?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2NhcmZ8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1623051234104-05350d9b8792?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2lsayUyMHNjYXJmfGVufDB8fDB8fHww"
    ],
    category: "accessories",
    newArrival: true,
    stock: 35,
    rating: 4.6,
    gender: "unisex"
  },
];

// More products - fill in the remaining to reach 45+ products
const additionalProducts: Product[] = [
  // Additional Traditional Clothing
  {
    id: "trad-m-4",
    name: "Embroidered Kurta Set",
    description: "Traditional kurta set with detailed embroidery for festive occasions.",
    price: 4999,
    images: [
      "https://images.unsplash.com/photo-1603912699214-92627f304eb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a3VydGF8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1615886593566-50748d279eb4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGt1cnRhfGVufDB8fDB8fHww"
    ],
    category: "traditional",
    stock: 30,
    rating: 4.5,
    gender: "men"
  },
  {
    id: "trad-w-4",
    name: "Silk Blend Saree",
    description: "Elegant saree in soft silk blend with traditional design elements.",
    price: 7999,
    images: [
      "https://images.unsplash.com/photo-1610030469668-3898bd51e36d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNhcmVlfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1610508500445-eda3256ef283?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNhcmVlfGVufDB8fDB8fHww"
    ],
    category: "traditional",
    stock: 25,
    rating: 4.6,
    gender: "women"
  },
  
  // Additional Western Clothing
  {
    id: "west-m-3",
    name: "Casual Linen Shirt",
    description: "Relaxed-fit linen shirt perfect for casual and semi-formal occasions.",
    price: 2499,
    images: [
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGluZW4lMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1626497764746-6dc36546b388?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGluZW4lMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D"
    ],
    category: "western",
    stock: 40,
    rating: 4.4,
    gender: "men"
  },
  {
    id: "west-w-3",
    name: "Designer Midi Dress",
    description: "Elegant midi dress with contemporary design and superior comfort.",
    price: 4999,
    images: [
      "https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHJlc3N8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHJlc3N8ZW58MHx8MHx8fDA%3D"
    ],
    category: "western",
    stock: 35,
    rating: 4.7,
    gender: "women"
  },
  {
    id: "west-w-4",
    name: "Premium Denim Jeans",
    description: "High-quality denim jeans with perfect fit and durability.",
    price: 3499,
    images: [
      "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amVhbnN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8amVhbnN8ZW58MHx8MHx8fDA%3D"
    ],
    category: "western",
    stock: 45,
    rating: 4.5,
    gender: "women"
  },
  
  // Additional Shoes
  {
    id: "shoe-m-3",
    name: "Casual Leather Loafers",
    description: "Premium leather loafers with cushioned comfort and elegant design.",
    price: 5499,
    images: [
      "https://images.unsplash.com/photo-1614252370093-c828b6d0a302?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bG9hZmVyc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvYWZlcnN8ZW58MHx8MHx8fDA%3D"
    ],
    category: "shoes",
    stock: 30,
    rating: 4.7,
    gender: "men"
  },
  {
    id: "shoe-w-2",
    name: "Designer Ballet Flats",
    description: "Elegant ballet flats with premium comfort and timeless design.",
    price: 4499,
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3RpbGV0dG8lMjBoZWVsc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1596703263926-eb0762ee17e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3RpbGV0dG8lMjBoZWVsc3xlbnwwfHwwfHx8MA%3D%3D"
    ],
    category: "shoes",
    stock: 25,
    rating: 4.6,
    gender: "women"
  },
  
  // Additional Accessories
  {
    id: "acc-4",
    name: "Designer Sunglasses",
    description: "Premium sunglasses with UV protection and elegant design.",
    price: 5999,
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VuZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1577803645773-f96470509666?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VuZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D"
    ],
    category: "accessories",
    stock: 35,
    rating: 4.5,
    gender: "unisex"
  },
  {
    id: "acc-5",
    name: "Luxury Belt",
    description: "Premium leather belt with designer buckle and impeccable craftsmanship.",
    price: 3499,
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVsdHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1624222247344-550fb59448b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVsdHxlbnwwfHwwfHx8MA%3D%3D"
    ],
    category: "accessories",
    stock: 40,
    rating: 4.6,
    gender: "men"
  },
  {
    id: "acc-6",
    name: "Designer Tote Bag",
    description: "Spacious and stylish tote bag with premium materials and elegant design.",
    price: 5499,
    images: [
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG90ZSUyMGJhZ3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dG90ZSUyMGJhZ3xlbnwwfHwwfHx8MA%3D%3D"
    ],
    category: "accessories",
    stock: 30,
    rating: 4.7,
    gender: "women"
  },
  
  // Additional Electronics
  {
    id: "smartphone-3",
    name: "Budget Smartphone",
    description: "Feature-rich budget smartphone with excellent value proposition.",
    price: 12999,
    images: [
      "https://images.unsplash.com/photo-1598327105740-202f4596afc6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNtYXJ0cGhvbmV8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c21hcnRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D"
    ],
    category: "smartphones",
    stock: 50,
    rating: 4.4,
    gender: "unisex"
  },
  {
    id: "headphone-3",
    name: "Gaming Headset",
    description: "Premium gaming headset with immersive sound experience and comfort for long sessions.",
    price: 9999,
    images: [
      "https://images.unsplash.com/photo-1599669454699-248893623440?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2FtaW5nJTIwaGVhZHNldHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FtaW5nJTIwaGVhZHNldHxlbnwwfHwwfHx8MA%3D%3D"
    ],
    category: "headphones",
    stock: 30,
    rating: 4.7,
    gender: "unisex"
  },
  {
    id: "earbud-3",
    name: "Budget Wireless Earbuds",
    description: "Affordable wireless earbuds with good sound quality and battery life.",
    price: 2999,
    images: [
      "https://images.unsplash.com/photo-1606471191009-63994c53433b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVhcmJ1ZHN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWFyYnVkc3xlbnwwfHwwfHx8MA%3D%3D"
    ],
    category: "earbuds",
    stock: 40,
    rating: 4.3,
    gender: "unisex"
  },

  // More Accessories
  {
    id: "acc-7",
    name: "Designer Cufflinks",
    description: "Elegant cufflinks with premium finish and sophisticated design.",
    price: 3499,
    images: [
      "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VmZmxpbmtzfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1551856253-22201c4b7290?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3VmZmxpbmtzfGVufDB8fDB8fHww"
    ],
    category: "accessories",
    stock: 25,
    rating: 4.5,
    gender: "men"
  },
  {
    id: "acc-8",
    name: "Pearl Necklace",
    description: "Elegant pearl necklace with sterling silver clasp and timeless design.",
    price: 8999,
    images: [
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVhcmwlMjBuZWNrbGFjZXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1611985852724-74eaa1c33b51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVhcmwlMjBuZWNrbGFjZXxlbnwwfHwwfHx8MA%3D%3D"
    ],
    category: "accessories",
    stock: 15,
    rating: 4.7,
    gender: "women"
  }
];

// Combine all products
export const allProducts = [...products, ...additionalProducts];

// Helper functions to get products by category, etc.
export const getProductById = (id: string): Product | undefined => {
  return allProducts.find(product => product.id === id);
};

export const getProductsByCategory = (category: Category): Product[] => {
  return allProducts.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return allProducts.filter(product => product.featured);
};

export const getBestSellerProducts = (): Product[] => {
  return allProducts.filter(product => product.bestSeller);
};

export const getNewArrivalProducts = (): Product[] => {
  return allProducts.filter(product => product.newArrival);
};

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
};
