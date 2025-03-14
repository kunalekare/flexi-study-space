import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Accessibility, GraduationCap, Home, ShoppingCart, Store, Eye, Shirt, Heart, Headphones, User, LogIn, X } from "lucide-react";
import { Button } from "@/components/ui/button";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  subjects: { name: string; path: string }[];
  accessibilityCategories: { name: string; path: string; icon: React.ReactNode }[];
};

const NavbarMobileMenu = ({ isOpen, onClose, subjects, accessibilityCategories }: MobileMenuProps) => {
  const location = useLocation();
  
  if (!isOpen) return null;

  return (
    <div className="md:hidden fixed inset-0 z-50 bg-white dark:bg-gray-900 animate-in fade-in">
      <div className="sticky top-0 z-50 flex items-center justify-between p-4 border-b border-border bg-white dark:bg-gray-900 shadow-sm">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-primary font-bold text-xl"
          onClick={onClose}
        >
          <GraduationCap className="h-6 w-6" />
          <span className="tracking-tight">EduAccess</span>
        </Link>
        
        <button 
          onClick={onClose}
          className="p-2 rounded-full hover:bg-muted"
          aria-label="Close menu"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
      
      <div className="h-[calc(100vh-4rem)] overflow-y-auto pb-32 pt-4 bg-white dark:bg-gray-900">
        <div className="container flex flex-col gap-4 px-4">
          <Link 
            to="/" 
            className={`flex items-center px-4 py-3 rounded-md ${location.pathname === '/' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'}`}
            onClick={onClose}
          >
            <Home className="h-5 w-5 mr-3" />
            Home
          </Link>
          
          <div className="px-4 py-2">
            <p className="font-medium text-sm text-muted-foreground mb-2">Accessibility Shopping</p>
            <div className="space-y-1">
              {accessibilityCategories.map((category) => (
                <Link
                  key={category.name}
                  to={category.path}
                  className={`flex items-center px-4 py-2 rounded-md text-sm ${location.pathname === category.path ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'}`}
                  onClick={onClose}
                >
                  {category.icon}
                  {category.name}
                </Link>
              ))}
              <Link
                to="/shop/all-accessibility"
                className={`flex items-center px-4 py-2 rounded-md text-sm ${location.pathname === '/shop/all-accessibility' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'}`}
                onClick={onClose}
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                View All Products
              </Link>
            </div>
          </div>
          
          <div className="px-4 py-2">
            <p className="font-medium text-sm text-muted-foreground mb-2">Subjects</p>
            <div className="space-y-1">
              {subjects.map((subject) => (
                <Link
                  key={subject.name}
                  to={subject.path}
                  className={`flex items-center px-4 py-2 rounded-md text-sm ${location.pathname === subject.path ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'}`}
                  onClick={onClose}
                >
                  <GraduationCap className="h-4 w-4 mr-2" />
                  {subject.name}
                </Link>
              ))}
            </div>
          </div>
          
          <Link 
            to="/how-it-works" 
            className={`flex items-center px-4 py-3 rounded-md ${location.pathname === '/how-it-works' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'}`}
            onClick={onClose}
          >
            <Eye className="h-5 w-5 mr-3" />
            How It Works
          </Link>
          
          <Link 
            to="/resources" 
            className={`flex items-center px-4 py-3 rounded-md ${location.pathname === '/resources' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'}`}
            onClick={onClose}
          >
            <User className="h-5 w-5 mr-3" />
            Resources
          </Link>
          
          <Link 
            to="/sell" 
            className={`flex items-center px-4 py-3 rounded-md ${location.pathname === '/sell' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'}`}
            onClick={onClose}
          >
            <Store className="h-5 w-5 mr-3" />
            Sell on EduAccess
          </Link>
          
          <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-border">
            <Button variant="outline" asChild className="w-full justify-start">
              <Link to="/login" onClick={onClose} className="flex items-center">
                <LogIn className="h-4 w-4 mr-2" />
                Log in
              </Link>
            </Button>
            <Button asChild className="w-full justify-start">
              <Link to="/signup" onClick={onClose} className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                Sign up free
              </Link>
            </Button>
            <Link 
              to="/seller-dashboard" 
              className="flex items-center px-4 py-2 text-sm bg-secondary/50 hover:bg-secondary rounded-md mt-2"
              onClick={onClose}
            >
              <Store className="h-4 w-4 mr-2" />
              Seller Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarMobileMenu;
