
import ProductCard from '@/components/ProductCard';
import { Product } from '@/types';

interface ProductGridProps {
  products: Product[];
  title?: string;
  emptyMessage?: string;
}

export default function ProductGrid({ 
  products, 
  title,
  emptyMessage = "No products found"
}: ProductGridProps) {
  return (
    <div className="w-full">
      {title && (
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-serif">{title}</h2>
          <div className="w-20 h-1 bg-gold-DEFAULT mt-2"></div>
        </div>
      )}
      
      {products.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">{emptyMessage}</p>
        </div>
      ) : (
        <div className="product-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
