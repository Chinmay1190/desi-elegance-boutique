
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { getProductById, formatPrice } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { BadgeIndianRupee, ShoppingCart, Heart, MinusIcon, PlusIcon } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProductGrid from '@/components/ProductGrid';
import { getProductsByCategory } from '@/data/products';
import { toast } from 'sonner';

export default function ProductDetail() {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [relatedProducts, setRelatedProducts] = useState([]);
  
  const product = productId ? getProductById(productId) : null;
  
  useEffect(() => {
    if (product) {
      // Get related products (same category, excluding current product)
      const related = getProductsByCategory(product.category)
        .filter(p => p.id !== product.id)
        .slice(0, 4);
      setRelatedProducts(related);
    }
  }, [product]);
  
  useEffect(() => {
    // Reset state when product changes
    setQuantity(1);
    setSelectedImage(0);
    window.scrollTo(0, 0);
  }, [productId]);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <h2 className="text-2xl font-medium mb-4">Product not found</h2>
        <Button onClick={() => navigate('/')}>
          Return to Home
        </Button>
      </div>
    );
  }
  
  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(prev => prev + 1);
    } else {
      toast.error(`Sorry, only ${product.stock} items available`);
    }
  };
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  
  const handleAddToCart = () => {
    addItem(product, quantity);
  };
  
  return (
    <div className="container mx-auto px-4 py-32">
      {/* Product Detail */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-lg border">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex space-x-2 overflow-auto pb-2">
            {product.images.map((image, index) => (
              <div 
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`cursor-pointer w-20 h-20 rounded border overflow-hidden ${
                  selectedImage === index ? 'ring-2 ring-gold-DEFAULT' : ''
                }`}
              >
                <img
                  src={image}
                  alt={`${product.name} - View ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-serif font-semibold">{product.name}</h1>
            <div className="flex items-center space-x-4 mt-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating || 0)
                        ? "text-gold-DEFAULT fill-gold-DEFAULT"
                        : "text-gray-300 fill-gray-300"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
                {product.rating && (
                  <span className="ml-2 text-sm text-muted-foreground">
                    {product.rating} stars
                  </span>
                )}
              </div>
            </div>
          </div>
          
          <div className="flex items-center">
            <BadgeIndianRupee className="h-6 w-6 text-gold-dark" />
            <span className="text-3xl font-semibold">
              {formatPrice(product.price).replace('₹', '')}
            </span>
            {product.discount && (
              <span className="ml-2 text-sm text-muted-foreground line-through">
                {formatPrice(product.price * (1 + product.discount / 100))}
              </span>
            )}
          </div>
          
          <p className="text-muted-foreground">{product.description}</p>
          
          {/* Inventory Status */}
          <div>
            <p className="text-sm">
              Availability: 
              <span className={product.stock > 0 ? "text-green-600 ml-1" : "text-red-600 ml-1"}>
                {product.stock > 0 ? `In Stock (${product.stock} items)` : 'Out of Stock'}
              </span>
            </p>
          </div>
          
          {/* Quantity Selector */}
          <div className="flex space-x-4 items-center">
            <span className="text-sm font-medium">Quantity:</span>
            <div className="flex items-center border rounded-md">
              <Button
                variant="ghost"
                size="icon"
                onClick={decreaseQuantity}
                disabled={quantity <= 1}
              >
                <MinusIcon className="h-4 w-4" />
              </Button>
              <span className="w-10 text-center">{quantity}</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={increaseQuantity}
                disabled={quantity >= product.stock}
              >
                <PlusIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={handleAddToCart}
              disabled={product.stock === 0}
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
            <Button variant="outline" className="flex-1">
              <Heart className="mr-2 h-4 w-4" />
              Add to Wishlist
            </Button>
          </div>
        </div>
      </div>
      
      {/* Product Details Tabs */}
      <div className="mt-12">
        <Tabs defaultValue="details">
          <TabsList className="w-full justify-start border-b rounded-none">
            <TabsTrigger value="details">Product Details</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="details" className="pt-6">
            <div className="prose max-w-none dark:prose-invert">
              <h3>Description</h3>
              <p>{product.description}</p>
              
              <h3 className="mt-4">Features</h3>
              <ul>
                <li>High quality materials</li>
                <li>Premium craftsmanship</li>
                <li>Elegant design</li>
                <li>Perfect for all occasions</li>
                <li>Great value for money</li>
              </ul>
              
              {product.category === "traditional" && (
                <>
                  <h3 className="mt-4">Care Instructions</h3>
                  <ul>
                    <li>Dry clean only</li>
                    <li>Store in a cool, dry place</li>
                    <li>Avoid direct sunlight</li>
                    <li>Handle delicate embroidery with care</li>
                  </ul>
                </>
              )}
              
              {(product.category === "headphones" || product.category === "earbuds" || product.category === "smartphones") && (
                <>
                  <h3 className="mt-4">Technical Specifications</h3>
                  <ul>
                    <li>1-year manufacturer warranty</li>
                    <li>Bluetooth 5.0 connectivity</li>
                    <li>Fast charging support</li>
                    <li>Water and dust resistance</li>
                  </ul>
                </>
              )}
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="pt-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Customer Reviews</h3>
              
              {product.rating ? (
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(product.rating || 0)
                              ? "text-gold-DEFAULT fill-gold-DEFAULT"
                              : "text-gray-300 fill-gray-300"
                          }`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-lg font-medium">{product.rating} out of 5</span>
                  </div>
                  
                  <div className="border-t pt-4 space-y-4">
                    {/* Sample reviews */}
                    <div className="border-b pb-4">
                      <div className="flex justify-between">
                        <h4 className="font-medium">Excellent product</h4>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-4 h-4 text-gold-DEFAULT fill-gold-DEFAULT"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">by Rahul M. - 1 month ago</p>
                      <p className="mt-2">
                        This product exceeded my expectations. The quality is excellent and the design is stunning.
                        Would definitely recommend to friends and family.
                      </p>
                    </div>
                    
                    <div className="border-b pb-4">
                      <div className="flex justify-between">
                        <h4 className="font-medium">Great value</h4>
                        <div className="flex">
                          {[...Array(4)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-4 h-4 text-gold-DEFAULT fill-gold-DEFAULT"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                          <svg
                            className="w-4 h-4 text-gray-300 fill-gray-300"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">by Priya S. - 2 months ago</p>
                      <p className="mt-2">
                        Impressive quality for the price point. Very satisfied with my purchase and the fast delivery.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <p>No reviews yet. Be the first to review this product!</p>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <ProductGrid
            products={relatedProducts}
            title="You Might Also Like"
          />
        </div>
      )}
    </div>
  );
}
