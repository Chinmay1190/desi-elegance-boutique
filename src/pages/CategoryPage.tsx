
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductsByCategory, allProducts } from '@/data/products';
import ProductGrid from '@/components/ProductGrid';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Category, SortOption, Product } from '@/types';
import { formatPrice } from '@/data/products';
import { X } from 'lucide-react';

// Get min and max price from all products
const MIN_PRICE = Math.min(...allProducts.map(p => p.price));
const MAX_PRICE = Math.max(...allProducts.map(p => p.price));

export default function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  
  // Filters
  const [priceRange, setPriceRange] = useState<[number, number]>([MIN_PRICE, MAX_PRICE]);
  const [sortOption, setSortOption] = useState<SortOption>("newest");
  const [selectedGenders, setSelectedGenders] = useState<string[]>([]);
  
  useEffect(() => {
    if (category) {
      // If it's a valid category, get products for that category
      if (category === "electronics") {
        // For electronics, combine multiple categories
        const allElectronics = [
          ...getProductsByCategory("headphones"),
          ...getProductsByCategory("earbuds"),
          ...getProductsByCategory("smartphones")
        ];
        setProducts(allElectronics);
      } else {
        setProducts(getProductsByCategory(category as Category));
      }
    } else {
      // If no category specified, show all products
      setProducts(allProducts);
    }
  }, [category]);
  
  useEffect(() => {
    let result = [...products];
    
    // Filter by price range
    result = result.filter(
      p => p.price >= priceRange[0] && p.price <= priceRange[1]
    );
    
    // Filter by gender if any selected
    if (selectedGenders.length > 0) {
      result = result.filter(p => 
        p.gender && selectedGenders.includes(p.gender)
      );
    }
    
    // Sort products
    switch (sortOption) {
      case "price-low-high":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high-low":
        result.sort((a, b) => b.price - a.price);
        break;
      case "popularity":
        result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case "newest":
      default:
        // Consider products with newArrival flag as newest
        result.sort((a, b) => (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0));
        break;
    }
    
    setFilteredProducts(result);
  }, [products, priceRange, sortOption, selectedGenders]);
  
  const toggleGender = (value: string) => {
    setSelectedGenders(current => 
      current.includes(value)
        ? current.filter(g => g !== value)
        : [...current, value]
    );
  };
  
  const resetFilters = () => {
    setPriceRange([MIN_PRICE, MAX_PRICE]);
    setSortOption("newest");
    setSelectedGenders([]);
  };
  
  const getCategoryTitle = () => {
    if (category === "traditional") return "Traditional Clothing";
    if (category === "western") return "Western Clothing";
    if (category === "electronics") return "Electronics";
    if (category) return category.charAt(0).toUpperCase() + category.slice(1);
    return "All Products";
  };
  
  return (
    <div className="container mx-auto px-4 py-32">
      <h1 className="text-3xl font-serif font-semibold mb-8">{getCategoryTitle()}</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="lg:w-1/4 space-y-8">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-medium">Filters</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={resetFilters}
              className="text-sm"
            >
              <X className="h-4 w-4 mr-1" />
              Reset
            </Button>
          </div>
          
          {/* Price Range Filter */}
          <div className="space-y-4">
            <h3 className="font-medium">Price Range</h3>
            <Slider
              defaultValue={priceRange}
              min={MIN_PRICE}
              max={MAX_PRICE}
              step={500}
              value={priceRange}
              onValueChange={(value) => setPriceRange(value as [number, number])}
              className="my-6"
            />
            <div className="flex items-center justify-between">
              <span className="text-sm">{formatPrice(priceRange[0])}</span>
              <span className="text-sm">{formatPrice(priceRange[1])}</span>
            </div>
          </div>
          
          {/* Sort Options */}
          <div className="space-y-4">
            <h3 className="font-medium">Sort By</h3>
            <RadioGroup value={sortOption} onValueChange={(v) => setSortOption(v as SortOption)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="newest" id="newest" />
                <Label htmlFor="newest">Newest</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="price-low-high" id="price-low-high" />
                <Label htmlFor="price-low-high">Price: Low to High</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="price-high-low" id="price-high-low" />
                <Label htmlFor="price-high-low">Price: High to Low</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="popularity" id="popularity" />
                <Label htmlFor="popularity">Popularity</Label>
              </div>
            </RadioGroup>
          </div>
          
          {/* Gender Filter - Show only if products have gender property */}
          {products.some(p => p.gender) && (
            <div className="space-y-4">
              <h3 className="font-medium">Gender</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="men"
                    checked={selectedGenders.includes('men')}
                    onCheckedChange={() => toggleGender('men')}
                  />
                  <label
                    htmlFor="men"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Men
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="women"
                    checked={selectedGenders.includes('women')}
                    onCheckedChange={() => toggleGender('women')}
                  />
                  <label
                    htmlFor="women"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Women
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="unisex"
                    checked={selectedGenders.includes('unisex')}
                    onCheckedChange={() => toggleGender('unisex')}
                  />
                  <label
                    htmlFor="unisex"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Unisex
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Product Grid */}
        <div className="lg:w-3/4">
          <div className="mb-4 flex justify-between items-center">
            <p className="text-sm text-muted-foreground">
              Showing {filteredProducts.length} products
            </p>
          </div>
          <ProductGrid
            products={filteredProducts}
            emptyMessage={`No ${category || ''} products found matching your filters.`}
          />
        </div>
      </div>
    </div>
  );
}
