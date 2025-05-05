
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-serif font-bold text-gold-DEFAULT dark:text-gold-DEFAULT">
                Desi Elegance
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Premium clothing, accessories, and electronics for the modern Indian consumer.
              Blending tradition with contemporary style.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-gold-DEFAULT">Home</Link></li>
              <li><Link to="/products/traditional" className="text-sm hover:text-gold-DEFAULT">Traditional</Link></li>
              <li><Link to="/products/western" className="text-sm hover:text-gold-DEFAULT">Western</Link></li>
              <li><Link to="/products/electronics" className="text-sm hover:text-gold-DEFAULT">Electronics</Link></li>
              <li><Link to="/products/accessories" className="text-sm hover:text-gold-DEFAULT">Accessories</Link></li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-gold-DEFAULT">Contact Us</Link></li>
              <li><Link to="/" className="text-sm hover:text-gold-DEFAULT">FAQs</Link></li>
              <li><Link to="/" className="text-sm hover:text-gold-DEFAULT">Shipping & Returns</Link></li>
              <li><Link to="/" className="text-sm hover:text-gold-DEFAULT">Size Guide</Link></li>
              <li><Link to="/" className="text-sm hover:text-gold-DEFAULT">Track Order</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-gold-DEFAULT shrink-0" />
                <span className="text-sm text-muted-foreground">
                  123 Fashion Street, Mumbai, Maharashtra 400001, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-gold-DEFAULT" />
                <span className="text-sm text-muted-foreground">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-gold-DEFAULT" />
                <span className="text-sm text-muted-foreground">info@desielegance.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Desi Elegance Boutique. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/" className="text-sm hover:text-gold-DEFAULT">Privacy Policy</Link>
              <Link to="/" className="text-sm hover:text-gold-DEFAULT">Terms of Service</Link>
              <Link to="/" className="text-sm hover:text-gold-DEFAULT">Refund Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
