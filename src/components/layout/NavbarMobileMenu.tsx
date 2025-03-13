
import React from "react";
import { Link } from "react-router-dom";
import { Accessibility, GraduationCap, Home, ShoppingCart, Store, Eye, Shirt, Heart, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  subjects: { name: string; path: string }[];
  accessibilityCategories: { name: string; path: string; icon: React.ReactNode }[];
};

const NavbarMobileMenu = ({ isOpen, onClose, subjects, accessibilityCategories }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg border-t border-border animate-slide-in">
      <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
        <Link 
          to="/" 
          className="px-4 py-3 text-foreground/80 hover:bg-secondary rounded-md transition-colors"
          onClick={onClose}
        >
          Home
        </Link>
        
        <div className="px-4 py-3 text-foreground/80">
          <div className="font-medium mb-2 flex items-center">
            <Accessibility className="h-4 w-4 mr-2" />
            Accessible Shopping
          </div>
          <div className="pl-4 flex flex-col gap-2">
            {accessibilityCategories.map((category) => (
              <Link
                key={category.name}
                to={category.path}
                className="py-2 text-foreground/70 hover:text-primary transition-colors flex items-center"
                onClick={onClose}
              >
                {category.icon}
                {category.name}
              </Link>
            ))}
            <Link
              to="/shop/all-accessibility"
              className="py-2 text-foreground/70 hover:text-primary transition-colors flex items-center"
              onClick={onClose}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              View All Products
            </Link>
          </div>
        </div>
        
        <div className="px-4 py-3 text-foreground/80">
          <div className="font-medium mb-2">Subjects</div>
          <div className="pl-4 flex flex-col gap-2">
            {subjects.map((subject) => (
              <Link
                key={subject.name}
                to={subject.path}
                className="py-2 text-foreground/70 hover:text-primary transition-colors"
                onClick={onClose}
              >
                {subject.name}
              </Link>
            ))}
          </div>
        </div>
        
        <Link 
          to="/how-it-works" 
          className="px-4 py-3 text-foreground/80 hover:bg-secondary rounded-md transition-colors"
          onClick={onClose}
        >
          How It Works
        </Link>
        
        <Link 
          to="/resources" 
          className="px-4 py-3 text-foreground/80 hover:bg-secondary rounded-md transition-colors"
          onClick={onClose}
        >
          Resources
        </Link>
        
        <Link 
          to="/sell" 
          className="px-4 py-3 text-foreground/80 hover:bg-secondary rounded-md transition-colors flex items-center"
          onClick={onClose}
        >
          <Store className="h-4 w-4 mr-2" />
          Sell on AccessiShop
        </Link>
        
        <div className="flex flex-col gap-2 mt-2 pt-4 border-t border-border">
          <Button variant="outline" asChild className="w-full">
            <Link to="/login" onClick={onClose}>Log in</Link>
          </Button>
          <Button asChild className="w-full">
            <Link to="/signup" onClick={onClose}>Sign up free</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavbarMobileMenu;
