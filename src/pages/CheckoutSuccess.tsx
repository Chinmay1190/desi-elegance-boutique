
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check, BadgeIndianRupee } from 'lucide-react';
import { formatPrice } from '@/data/products';
import { Separator } from '@/components/ui/separator';

export default function CheckoutSuccess() {
  const location = useLocation();
  const navigate = useNavigate();
  const orderDetails = location.state?.orderDetails;
  
  useEffect(() => {
    // If no order details, redirect to home
    if (!orderDetails) {
      navigate('/');
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
  }, [orderDetails, navigate]);
  
  if (!orderDetails) {
    return null;
  }
  
  const { items, subtotal, shippingCost, estimatedTax, total, paymentMethod, customerName } = orderDetails;
  
  const orderNumber = Math.floor(100000 + Math.random() * 900000);
  const orderDate = new Date().toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  return (
    <div className="container mx-auto px-4 py-32">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <Check className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-serif font-semibold mb-2">Order Confirmed!</h1>
          <p className="text-muted-foreground">
            Thank you for your purchase, {customerName}.
          </p>
        </div>
        
        <div className="border rounded-lg p-6 space-y-6 mb-8">
          <div className="flex flex-col sm:flex-row justify-between border-b pb-4">
            <div>
              <h2 className="font-medium">Order Number</h2>
              <p className="text-muted-foreground">#{orderNumber}</p>
            </div>
            <div className="mt-4 sm:mt-0 sm:text-right">
              <h2 className="font-medium">Order Date</h2>
              <p className="text-muted-foreground">{orderDate}</p>
            </div>
          </div>
          
          <div>
            <h2 className="font-medium mb-4">Order Summary</h2>
            <div className="space-y-4">
              {items.map(item => (
                <div key={item.product.id} className="flex gap-4">
                  <div className="w-16 h-16 rounded overflow-hidden shrink-0">
                    <img 
                      src={item.product.images[0]} 
                      alt={item.product.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{item.product.name}</p>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Qty: {item.quantity}</span>
                      <div className="flex items-center">
                        <BadgeIndianRupee className="h-3 w-3" />
                        <span>{formatPrice(item.product.price * item.quantity).replace('₹', '')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <Separator />
          
          <div>
            <div className="space-y-2">
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
                <span>Tax</span>
                <div className="flex items-center">
                  <BadgeIndianRupee className="h-4 w-4" />
                  <span>{formatPrice(estimatedTax).replace('₹', '')}</span>
                </div>
              </div>
            </div>
            
            <Separator className="my-4" />
            
            <div className="flex justify-between font-medium">
              <span>Total</span>
              <div className="flex items-center">
                <BadgeIndianRupee className="h-4 w-4" />
                <span>{formatPrice(total).replace('₹', '')}</span>
              </div>
            </div>
          </div>
          
          <div className="pt-2">
            <h2 className="font-medium mb-2">Payment Information</h2>
            <p className="text-muted-foreground">
              {paymentMethod === 'card' ? 'Paid via Credit/Debit Card' : 
               paymentMethod === 'upi' ? 'Paid via UPI' : 
               'Cash on Delivery'}
            </p>
          </div>
        </div>
        
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">
            Your order confirmation has been sent to your email.
          </p>
          <Button onClick={() => navigate('/')} className="min-w-[200px]">
            Continue Shopping
          </Button>
        </div>
      </div>
    </div>
  );
}
