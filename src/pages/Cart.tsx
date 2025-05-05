
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BadgeIndianRupee, Trash2, ShoppingCart, MinusIcon, PlusIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { formatPrice } from '@/data/products';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';

export default function Cart() {
  const { items, updateQuantity, removeItem, clearCart, subtotal } = useCart();
  const navigate = useNavigate();
  
  // Shipping cost and estimated tax
  const shippingCost = subtotal > 5000 ? 0 : 250;
  const estimatedTax = Math.round(subtotal * 0.05);
  const total = subtotal + shippingCost + estimatedTax;
  
  const handleProceedToCheckout = () => {
    if (items.length === 0) {
      toast.error('Your cart is empty', {
        description: 'Add items to your cart before proceeding to checkout.',
      });
      return;
    }
    navigate('/checkout');
  };
  
  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <div className="max-w-md mx-auto">
          <ShoppingCart className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
          <h1 className="text-2xl font-serif font-semibold mb-4">Your cart is empty</h1>
          <p className="text-muted-foreground mb-8">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Button onClick={() => navigate('/')}>
            Continue Shopping
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-32">
      <h1 className="text-3xl font-serif font-semibold mb-8">Shopping Cart</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="lg:w-2/3 space-y-4">
          <div className="hidden md:flex py-4 font-medium border-b">
            <div className="w-1/2">Product</div>
            <div className="w-1/6 text-center">Price</div>
            <div className="w-1/6 text-center">Quantity</div>
            <div className="w-1/6 text-center">Subtotal</div>
          </div>
          
          {items.map((item) => (
            <div key={item.product.id} className="flex flex-col md:flex-row border-b py-4">
              {/* Product Info */}
              <div className="md:w-1/2 flex gap-4 mb-4 md:mb-0">
                <Link to={`/product/${item.product.id}`} className="w-24 h-24 rounded overflow-hidden shrink-0">
                  <img 
                    src={item.product.images[0]} 
                    alt={item.product.name} 
                    className="w-full h-full object-cover"
                  />
                </Link>
                <div className="flex flex-col justify-between">
                  <Link 
                    to={`/product/${item.product.id}`}
                    className="font-medium hover:underline"
                  >
                    {item.product.name}
                  </Link>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="justify-start w-fit p-0 text-muted-foreground hover:text-destructive"
                    onClick={() => removeItem(item.product.id)}
                  >
                    <Trash2 className="h-4 w-4 mr-1" />
                    <span className="text-sm">Remove</span>
                  </Button>
                </div>
              </div>
              
              {/* Price - Mobile */}
              <div className="flex justify-between items-center mb-4 md:hidden">
                <span className="text-sm text-muted-foreground">Price:</span>
                <div className="flex items-center">
                  <BadgeIndianRupee className="h-4 w-4" />
                  <span>{formatPrice(item.product.price).replace('₹', '')}</span>
                </div>
              </div>
              
              {/* Price - Desktop */}
              <div className="hidden md:flex md:w-1/6 items-center justify-center">
                <div className="flex items-center">
                  <BadgeIndianRupee className="h-4 w-4" />
                  <span>{formatPrice(item.product.price).replace('₹', '')}</span>
                </div>
              </div>
              
              {/* Quantity - Mobile */}
              <div className="flex justify-between items-center mb-4 md:hidden">
                <span className="text-sm text-muted-foreground">Quantity:</span>
                <div className="flex items-center border rounded-md">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    <MinusIcon className="h-3 w-3" />
                  </Button>
                  <span className="w-8 text-center text-sm">{item.quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                    disabled={item.quantity >= item.product.stock}
                  >
                    <PlusIcon className="h-3 w-3" />
                  </Button>
                </div>
              </div>
              
              {/* Quantity - Desktop */}
              <div className="hidden md:flex md:w-1/6 items-center justify-center">
                <div className="flex items-center border rounded-md">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    <MinusIcon className="h-3 w-3" />
                  </Button>
                  <span className="w-8 text-center text-sm">{item.quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                    disabled={item.quantity >= item.product.stock}
                  >
                    <PlusIcon className="h-3 w-3" />
                  </Button>
                </div>
              </div>
              
              {/* Subtotal - Mobile */}
              <div className="flex justify-between items-center md:hidden">
                <span className="text-sm text-muted-foreground">Subtotal:</span>
                <div className="flex items-center font-medium">
                  <BadgeIndianRupee className="h-4 w-4" />
                  <span>{formatPrice(item.product.price * item.quantity).replace('₹', '')}</span>
                </div>
              </div>
              
              {/* Subtotal - Desktop */}
              <div className="hidden md:flex md:w-1/6 items-center justify-center font-medium">
                <div className="flex items-center">
                  <BadgeIndianRupee className="h-4 w-4" />
                  <span>{formatPrice(item.product.price * item.quantity).replace('₹', '')}</span>
                </div>
              </div>
            </div>
          ))}
          
          <div className="flex justify-between pt-4">
            <Button
              variant="outline"
              onClick={() => navigate('/')}
            >
              Continue Shopping
            </Button>
            <Button
              variant="ghost"
              className="text-destructive hover:text-destructive"
              onClick={() => {
                if (window.confirm("Are you sure you want to clear your cart?")) {
                  clearCart();
                }
              }}
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Clear Cart
            </Button>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="border rounded-md p-6 space-y-4">
            <h2 className="text-xl font-medium">Order Summary</h2>
            
            <div className="space-y-2 py-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <div className="flex items-center">
                  <BadgeIndianRupee className="h-4 w-4" />
                  <span>{formatPrice(subtotal).replace('₹', '')}</span>
                </div>
              </div>
              
              <div className="flex justify-between">
                <span>Shipping</span>
                <div className="flex items-center">
                  {shippingCost === 0 ? (
                    <span className="text-green-600">Free</span>
                  ) : (
                    <>
                      <BadgeIndianRupee className="h-4 w-4" />
                      <span>{formatPrice(shippingCost).replace('₹', '')}</span>
                    </>
                  )}
                </div>
              </div>
              
              <div className="flex justify-between">
                <span>Estimated Tax</span>
                <div className="flex items-center">
                  <BadgeIndianRupee className="h-4 w-4" />
                  <span>{formatPrice(estimatedTax).replace('₹', '')}</span>
                </div>
              </div>
              
              {shippingCost === 0 && (
                <div className="text-xs text-green-600 pt-1">
                  Free shipping on orders over ₹5,000
                </div>
              )}
            </div>
            
            <Separator />
            
            <div className="flex justify-between font-medium">
              <span>Total</span>
              <div className="flex items-center">
                <BadgeIndianRupee className="h-4 w-4" />
                <span className="text-lg">{formatPrice(total).replace('₹', '')}</span>
              </div>
            </div>
            
            <Button
              className="w-full mt-4"
              onClick={handleProceedToCheckout}
            >
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
