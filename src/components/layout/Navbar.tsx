
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, GraduationCap } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import NavbarDropdownMenus from "./NavbarDropdownMenus";
import NavbarMobileMenu from "./NavbarMobileMenu";
import NavbarActions from "./NavbarActions";
import { subjects, accessibilityCategories } from "./navbarData";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const location = useLocation();
  
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [location.pathname]);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-md py-2" 
          : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-primary font-bold text-xl"
          onClick={closeMobileMenu}
        >
          <GraduationCap className="h-6 w-6" />
          <span className="tracking-tight">EduAccess</span>
        </Link>
        
        <NavbarDropdownMenus 
          subjects={subjects} 
          accessibilityCategories={accessibilityCategories} 
        />
        
        <NavbarActions cartCount={cartCount} />
        
        <button 
          className="md:hidden p-2 text-foreground rounded-md hover:bg-muted/60"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      
      <NavbarMobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        subjects={subjects}
        accessibilityCategories={accessibilityCategories}
      />
    </header>
  );
};

export default Navbar;
