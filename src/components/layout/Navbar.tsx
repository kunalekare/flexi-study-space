
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { 
  Menu, 
  X, 
  ChevronDown, 
  GraduationCap, 
  Accessibility, 
  ShoppingCart, 
  Store,
  Headphones,
  Eye,
  Home,
  Shirt,
  Heart
} from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount } = useCart();
  
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
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  
  const subjects = [
    { name: "Mathematics", path: "/subjects/mathematics" },
    { name: "Science", path: "/subjects/science" },
    { name: "Language Arts", path: "/subjects/language-arts" },
    { name: "Social Studies", path: "/subjects/social-studies" },
    { name: "Art & Music", path: "/subjects/art-music" },
  ];
  
  const accessibilityCategories = [
    { name: "Assistive Technology", path: "/shop/assistive-technology", icon: <Headphones className="h-4 w-4 mr-2" /> },
    { name: "Mobility Aids", path: "/shop/mobility-aids", icon: <Accessibility className="h-4 w-4 mr-2" /> },
    { name: "Adaptive Clothing", path: "/shop/adaptive-clothing", icon: <Shirt className="h-4 w-4 mr-2" /> },
    { name: "Sensory-Friendly Items", path: "/shop/sensory-friendly", icon: <Heart className="h-4 w-4 mr-2" /> },
    { name: "Hearing & Vision Support", path: "/shop/hearing-vision", icon: <Eye className="h-4 w-4 mr-2" /> },
    { name: "Smart Home Assistance", path: "/shop/smart-home", icon: <Home className="h-4 w-4 mr-2" /> },
  ];
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-md py-2" 
          : "bg-transparent py-4"
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
        
        <nav className="hidden md:flex items-center gap-2">
          <Link to="/" className="px-3 py-2 text-foreground/80 hover:text-primary transition-colors">
            Home
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="px-3 py-2 flex items-center gap-1">
                Accessible Shopping <ChevronDown className="h-4 w-4 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-56 glass-panel">
              <DropdownMenuGroup>
                {accessibilityCategories.map((category) => (
                  <DropdownMenuItem key={category.name} asChild>
                    <Link 
                      to={category.path}
                      className="w-full cursor-pointer flex items-center"
                    >
                      {category.icon}
                      {category.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/shop/all-accessibility" className="w-full cursor-pointer flex items-center">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  View All Products
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="px-3 py-2 flex items-center gap-1">
                Subjects <ChevronDown className="h-4 w-4 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-48 glass-panel">
              {subjects.map((subject) => (
                <DropdownMenuItem key={subject.name} asChild>
                  <Link 
                    to={subject.path}
                    className="w-full cursor-pointer"
                  >
                    {subject.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Link to="/how-it-works" className="px-3 py-2 text-foreground/80 hover:text-primary transition-colors">
            How It Works
          </Link>
          
          <Link to="/resources" className="px-3 py-2 text-foreground/80 hover:text-primary transition-colors">
            Resources
          </Link>
          
          <Link to="/sell" className="px-3 py-2 text-foreground/80 hover:text-primary transition-colors flex items-center">
            <Store className="h-4 w-4 mr-1" />
            Sell on AccessiShop
          </Link>
        </nav>
        
        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline" size="icon" className="relative" asChild>
            <Link to="/cart">
              <ShoppingCart className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full w-4 h-4 text-[10px] flex items-center justify-center">
                {cartCount}
              </span>
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/login">Log in</Link>
          </Button>
          <Button asChild>
            <Link to="/signup">Sign up free</Link>
          </Button>
        </div>
        
        <button 
          className="md:hidden p-2 text-foreground"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg border-t border-border animate-slide-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            <Link 
              to="/" 
              className="px-4 py-3 text-foreground/80 hover:bg-secondary rounded-md transition-colors"
              onClick={closeMobileMenu}
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
                    onClick={closeMobileMenu}
                  >
                    {category.icon}
                    {category.name}
                  </Link>
                ))}
                <Link
                  to="/shop/all-accessibility"
                  className="py-2 text-foreground/70 hover:text-primary transition-colors flex items-center"
                  onClick={closeMobileMenu}
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
                    onClick={closeMobileMenu}
                  >
                    {subject.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <Link 
              to="/how-it-works" 
              className="px-4 py-3 text-foreground/80 hover:bg-secondary rounded-md transition-colors"
              onClick={closeMobileMenu}
            >
              How It Works
            </Link>
            
            <Link 
              to="/resources" 
              className="px-4 py-3 text-foreground/80 hover:bg-secondary rounded-md transition-colors"
              onClick={closeMobileMenu}
            >
              Resources
            </Link>
            
            <Link 
              to="/sell" 
              className="px-4 py-3 text-foreground/80 hover:bg-secondary rounded-md transition-colors flex items-center"
              onClick={closeMobileMenu}
            >
              <Store className="h-4 w-4 mr-2" />
              Sell on AccessiShop
            </Link>
            
            <div className="flex flex-col gap-2 mt-2 pt-4 border-t border-border">
              <Button variant="outline" asChild className="w-full">
                <Link to="/login" onClick={closeMobileMenu}>Log in</Link>
              </Button>
              <Button asChild className="w-full">
                <Link to="/signup" onClick={closeMobileMenu}>Sign up free</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
