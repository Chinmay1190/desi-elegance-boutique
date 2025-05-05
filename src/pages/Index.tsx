
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  getFeaturedProducts,
  getBestSellerProducts,
  getNewArrivalProducts
} from '@/data/products';
import ProductGrid from '@/components/ProductGrid';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Index() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  
  useEffect(() => {
    // Get products for each section
    setFeaturedProducts(getFeaturedProducts().slice(0, 4));
    setBestSellers(getBestSellerProducts().slice(0, 4));
    setNewArrivals(getNewArrivalProducts().slice(0, 4));
  }, []);
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1584184924103-e310d9dc82fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZhc2hpb258ZW58MHx8MHx8fDA%3D')`,
            backgroundPosition: 'center 30%'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 dark:bg-opacity-70"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-serif font-semibold mb-6 animate-fade-in">
              Elegance in Every Detail
            </h1>
            <p className="text-lg md:text-xl mb-8 animate-slide-up opacity-90">
              Discover our curated collection of premium clothing, accessories, and electronics.
              From traditional elegance to modern sophistication.
            </p>
            <div className="flex flex-wrap gap-4 animate-slide-up">
              <Button
                asChild
                size="lg"
                className="bg-gold-DEFAULT hover:bg-gold-dark text-white"
              >
                <Link to="/products/traditional">
                  Shop Traditional
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black"
              >
                <Link to="/products/western">
                  Shop Western
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-16 bg-secondary/50 dark:bg-secondary/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-12">Shop by Category</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {renderCategory('Traditional', 'https://images.unsplash.com/photo-1610030469668-3898bd51e36d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNhcmVlfGVufDB8fDB8fHww', '/products/traditional')}
            {renderCategory('Western', 'https://images.unsplash.com/photo-1598808503746-f34cfba2de4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3VpdHxlbnwwfHwwfHx8MA%3D%3D', '/products/western')}
            {renderCategory('Shoes', 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVhdGhlciUyMHNob2VzfGVufDB8fDB8fHww', '/products/shoes')}
            {renderCategory('Watches', 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2F0Y2h8ZW58MHx8MHx8fDA%3D', '/products/watches')}
          </div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-serif">Featured Products</h2>
            <Button asChild variant="outline">
              <Link to="/">
                View All <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          </div>
          
          <ProductGrid products={featuredProducts} />
        </div>
      </section>
      
      {/* Banner Section */}
      <section className="py-16 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1577803645773-f96470509666?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VuZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D')`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60 dark:bg-opacity-80"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-2xl mx-auto text-center py-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Premium Accessories Collection
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Elevate your style with our exclusive range of premium accessories.
              Designed for those who appreciate the finer details.
            </p>
            <Button 
              asChild
              size="lg" 
              className="bg-gold-DEFAULT hover:bg-gold-dark text-white"
            >
              <Link to="/products/accessories">
                Explore Collection
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Best Sellers Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-serif">Best Sellers</h2>
            <Button asChild variant="outline">
              <Link to="/">
                View All <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          </div>
          
          <ProductGrid products={bestSellers} />
        </div>
      </section>
      
      {/* New Arrivals Section */}
      <section className="py-16 bg-secondary/50 dark:bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-serif">New Arrivals</h2>
            <Button asChild variant="outline">
              <Link to="/">
                View All <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          </div>
          
          <ProductGrid products={newArrivals} />
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif mb-6">Stay Connected</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest product updates, exclusive offers, and style inspirations.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <Button className="bg-gold-DEFAULT hover:bg-gold-dark text-white">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

// Helper function to render category cards
function renderCategory(title: string, imageUrl: string, linkTo: string) {
  return (
    <Link 
      to={linkTo} 
      className="group relative overflow-hidden rounded-lg aspect-square"
    >
      <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300 z-10"></div>
      <img 
        src={imageUrl} 
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="bg-black bg-opacity-60 px-4 py-2 rounded-lg group-hover:bg-gold-DEFAULT transition-colors duration-300">
          <h3 className="text-white text-lg md:text-xl font-medium">{title}</h3>
        </div>
      </div>
    </Link>
  );
}
