
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { BadgeIndianRupee, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/contexts/CartContext';
import { formatPrice } from '@/data/products';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

// Form validation schema
const checkoutSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().regex(/^[6-9]\d{9}$/, { message: "Please enter a valid Indian phone number." }),
  address: z.string().min(5, { message: "Address must be at least 5 characters." }),
  city: z.string().min(2, { message: "City must be at least 2 characters." }),
  state: z.string().min(2, { message: "State must be at least 2 characters." }),
  zipCode: z.string().regex(/^\d{6}$/, { message: "Please enter a valid 6-digit PIN code." }),
  paymentMethod: z.enum(["cod", "card", "upi"], {
    required_error: "Please select a payment method.",
  }),
});

type CheckoutFormValues = z.infer<typeof checkoutSchema>;

export default function Checkout() {
  const { items, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Shipping cost and estimated tax
  const shippingCost = subtotal > 5000 ? 0 : 250;
  const estimatedTax = Math.round(subtotal * 0.05);
  const total = subtotal + shippingCost + estimatedTax;
  
  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      paymentMethod: "card",
    },
  });
  
  const onSubmit = (data: CheckoutFormValues) => {
    if (items.length === 0) {
      navigate('/cart');
      return;
    }
    
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      console.log('Order submitted:', { items, total, ...data });
      clearCart();
      setIsProcessing(false);
      navigate('/checkout/success', { 
        state: { 
          orderDetails: {
            items,
            subtotal,
            shippingCost,
            estimatedTax,
            total,
            paymentMethod: data.paymentMethod,
            customerName: `${data.firstName} ${data.lastName}`
          } 
        } 
      });
    }, 1500);
  };
  
  if (items.length === 0) {
    navigate('/cart');
    return null;
  }
  
  return (
    <div className="container mx-auto px-4 py-32">
      <h1 className="text-3xl font-serif font-semibold mb-8">Checkout</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Checkout Form */}
        <div className="lg:w-2/3">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Personal Information */}
              <div className="space-y-4">
                <h2 className="text-xl font-medium">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your first name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your last name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your email" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="10-digit mobile number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              
              {/* Shipping Information */}
              <div className="space-y-4">
                <h2 className="text-xl font-medium">Shipping Address</h2>
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input placeholder="Street address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City</FormLabel>
                        <FormControl>
                          <Input placeholder="City" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>State</FormLabel>
                        <FormControl>
                          <Input placeholder="State" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="zipCode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>PIN Code</FormLabel>
                        <FormControl>
                          <Input placeholder="6-digit PIN code" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              
              {/* Payment Method */}
              <div className="space-y-4">
                <h2 className="text-xl font-medium">Payment Method</h2>
                <FormField
                  control={form.control}
                  name="paymentMethod"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-2"
                        >
                          <div className="flex items-center space-x-3 border p-4 rounded-md">
                            <RadioGroupItem value="card" id="card" />
                            <Label htmlFor="card" className="flex items-center">
                              <CreditCard className="h-4 w-4 mr-2" />
                              Credit/Debit Card
                            </Label>
                          </div>
                          <div className="flex items-center space-x-3 border p-4 rounded-md">
                            <RadioGroupItem value="upi" id="upi" />
                            <Label htmlFor="upi">UPI Payment</Label>
                          </div>
                          <div className="flex items-center space-x-3 border p-4 rounded-md">
                            <RadioGroupItem value="cod" id="cod" />
                            <Label htmlFor="cod">Cash on Delivery</Label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="lg:hidden">
                <OrderSummary 
                  subtotal={subtotal}
                  shippingCost={shippingCost}
                  estimatedTax={estimatedTax}
                  total={total}
                />
              </div>
              
              <div className="flex justify-between">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate('/cart')}
                >
                  Return to Cart
                </Button>
                <Button
                  type="submit"
                  disabled={isProcessing}
                  className="min-w-[150px]"
                >
                  {isProcessing ? "Processing..." : "Place Order"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
        
        {/* Order Summary */}
        <div className="hidden lg:block lg:w-1/3">
          <OrderSummary 
            subtotal={subtotal}
            shippingCost={shippingCost}
            estimatedTax={estimatedTax}
            total={total}
          />
        </div>
      </div>
    </div>
  );
}

// Order Summary Component
function OrderSummary({ 
  subtotal, 
  shippingCost, 
  estimatedTax, 
  total 
}: { 
  subtotal: number; 
  shippingCost: number; 
  estimatedTax: number; 
  total: number; 
}) {
  const { items } = useCart();
  
  return (
    <div className="border rounded-md p-6 space-y-4 sticky top-24">
      <h2 className="text-xl font-medium">Order Summary</h2>
      
      <div className="max-h-64 overflow-y-auto space-y-2">
        {items.map(item => (
          <div key={item.product.id} className="flex gap-3 py-2">
            <div className="w-16 h-16 rounded overflow-hidden shrink-0">
              <img 
                src={item.product.images[0]} 
                alt={item.product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <p className="font-medium text-sm">{item.product.name}</p>
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
      
      <Separator />
      
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
          <span>Estimated Tax</span>
          <div className="flex items-center">
            <BadgeIndianRupee className="h-4 w-4" />
            <span>{formatPrice(estimatedTax).replace('₹', '')}</span>
          </div>
        </div>
      </div>
      
      <Separator />
      
      <div className="flex justify-between font-medium">
        <span>Total</span>
        <div className="flex items-center">
          <BadgeIndianRupee className="h-4 w-4" />
          <span className="text-lg">{formatPrice(total).replace('₹', '')}</span>
        </div>
      </div>
    </div>
  );
}
