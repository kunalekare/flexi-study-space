
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AccessibilityPanel from "@/components/ui/AccessibilityPanel";
import CategoryHeader from "@/components/shop/CategoryHeader";
import FilterControls from "@/components/shop/FilterControls";
import ProductsGrid from "@/components/shop/ProductsGrid";
import { 
  Accessibility, 
  Headphones, 
  Eye, 
  Home, 
  Shirt, 
  Heart,
  ShoppingCart
} from "lucide-react";
import { getProductsByCategory } from "@/data/products";

const ShopCategory = () => {
  const { categoryId = 'all-accessibility' } = useParams<{ categoryId: string }>();
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get filtered products based on the category
  const filteredProducts = getProductsByCategory(categoryId);

  // Category mapping for displaying the correct title and description
  const categoryInfo = {
    "assistive-technology": {
      title: "Assistive Technology",
      description: "Innovative tech solutions to enhance daily living and independence",
      icon: <Headphones className="h-8 w-8 text-blue-500" />,
      color: "bg-blue-500/10"
    },
    "mobility-aids": {
      title: "Mobility Aids",
      description: "Products designed to improve mobility and independence",
      icon: <Accessibility className="h-8 w-8 text-green-500" />,
      color: "bg-green-500/10"
    },
    "adaptive-clothing": {
      title: "Adaptive Clothing",
      description: "Stylish, comfortable clothing designed for accessibility needs",
      icon: <Shirt className="h-8 w-8 text-purple-500" />,
      color: "bg-purple-500/10"
    },
    "sensory-friendly": {
      title: "Sensory-Friendly Items",
      description: "Products designed for those with sensory sensitivities",
      icon: <Heart className="h-8 w-8 text-pink-500" />,
      color: "bg-pink-500/10"
    },
    "hearing-vision": {
      title: "Hearing & Vision Support",
      description: "Solutions for those with hearing and visual impairments",
      icon: <Eye className="h-8 w-8 text-amber-500" />,
      color: "bg-amber-500/10"
    },
    "smart-home": {
      title: "Smart Home Assistance",
      description: "Voice-controlled and automated home solutions for accessibility",
      icon: <Home className="h-8 w-8 text-teal-500" />,
      color: "bg-teal-500/10"
    },
    "all-accessibility": {
      title: "All Accessibility Products",
      description: "Browse our complete collection of accessibility-focused products",
      icon: <ShoppingCart className="h-8 w-8 text-primary" />,
      color: "bg-primary/10"
    }
  };
  
  // Default category info if category is not found
  const currentCategory = categoryInfo[categoryId as keyof typeof categoryInfo] || {
    title: "Shop Category",
    description: "Browse our collection of products",
    icon: <ShoppingCart className="h-8 w-8 text-primary" />,
    color: "bg-primary/10"
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 bg-gray-50 dark:bg-gray-950">
        {/* Category Header */}
        <CategoryHeader 
          icon={currentCategory.icon}
          title={currentCategory.title}
          description={currentCategory.description}
          colorClass={currentCategory.color}
        />
        
        {/* Products Section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            {/* Filter Controls */}
            <div className="mb-6">
              <FilterControls />
            </div>
            
            {/* Products Grid */}
            <ProductsGrid products={filteredProducts} />
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* Accessibility Panel */}
      <AccessibilityPanel />
    </div>
  );
};

export default ShopCategory;
