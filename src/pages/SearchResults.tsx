
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { allProducts } from '@/data/products';
import ProductGrid from '@/components/ProductGrid';
import { Product } from '@/types';
import { Separator } from '@/components/ui/separator';

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<Product[]>([]);
  
  useEffect(() => {
    const searchQuery = query.trim().toLowerCase();
    
    if (searchQuery) {
      const filteredProducts = allProducts.filter(product => 
        product.name.toLowerCase().includes(searchQuery) ||
        product.description.toLowerCase().includes(searchQuery) ||
        product.category.toLowerCase().includes(searchQuery)
      );
      
      setResults(filteredProducts);
    } else {
      setResults([]);
    }
  }, [query]);
  
  return (
    <div className="container mx-auto px-4 py-32">
      <h1 className="text-3xl font-serif font-semibold mb-2">
        Search Results
      </h1>
      <p className="text-muted-foreground mb-8">
        {results.length} results found for "{query}"
      </p>
      
      <Separator className="mb-8" />
      
      <ProductGrid 
        products={results}
        emptyMessage="No products found matching your search. Please try a different query."
      />
    </div>
  );
}
