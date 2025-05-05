
import { Link } from 'react-router-dom';
import { Product } from '@/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart, Heart } from 'lucide-react';
import { formatPrice } from '@/data/products';
import { cn } from '@/lib/utils';
import { BadgeIndianRupee } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border product-card-hover">
      {/* Product Image */}
      <Link 
        to={`/product/${product.id}`}
        className="aspect-square overflow-hidden"
      >
        <img
          src={product.images[0]} 
          alt={product.name}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
      </Link>
      
      {/* Labels */}
      <div className="absolute top-2 left-2 flex flex-col gap-1">
        {product.discount && (
          <Badge variant="destructive">
            {product.discount}% OFF
          </Badge>
        )}
        {product.newArrival && (
          <Badge variant="secondary">New</Badge>
        )}
        {product.bestSeller && (
          <Badge variant="outline" className="bg-gold-DEFAULT text-white border-gold-DEFAULT">
            Best Seller
          </Badge>
        )}
      </div>
      
      {/* Quick Actions */}
      <div className="absolute top-2 right-2">
        <Button
          variant="secondary"
          size="icon"
          className="rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>
      
      {/* Product Info */}
      <div className="flex flex-col space-y-2 p-4">
        <Link to={`/product/${product.id}`} className="text-xl font-medium leading-tight hover:underline">
          {product.name}
        </Link>
        
        <div className="flex justify-between items-center">
          <div className="price-tag">
            <BadgeIndianRupee className="h-4 w-4 text-gold-dark" />
            <span className="text-lg font-semibold">
              {formatPrice(product.price).replace('₹', '')}
            </span>
          </div>
          
          {product.rating && (
            <div className="flex items-center">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={cn(
                      "w-4 h-4",
                      i < Math.floor(product.rating || 0)
                        ? "text-gold-DEFAULT fill-gold-DEFAULT"
                        : "text-gray-300 dark:text-gray-600 fill-gray-300 dark:fill-gray-600"
                    )}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <span className="ml-1 text-xs text-muted-foreground">
                {product.rating}
              </span>
            </div>
          )}
        </div>
        
        <div className="mt-auto pt-2">
          <Button
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => addItem(product)}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
