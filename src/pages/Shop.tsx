
import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AccessibilityPanel from "@/components/ui/AccessibilityPanel";
import HeroBanner from "@/components/shop/HeroBanner";
import CategoryGrid from "@/components/shop/CategoryGrid";
import FeaturedProducts from "@/components/shop/FeaturedProducts";
import SellerSection from "@/components/shop/SellerSection";
import AccessibilityFeatures from "@/components/shop/AccessibilityFeatures";

const Shop = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Banner */}
        <HeroBanner />
        
        {/* Categories Section */}
        <CategoryGrid />
        
        {/* Featured Deals Section */}
        <FeaturedProducts />
        
        {/* Seller Section */}
        <SellerSection />
        
        {/* Accessibility Features Highlight */}
        <AccessibilityFeatures />
      </main>
      
      <Footer />
      
      {/* Accessibility Panel */}
      <AccessibilityPanel />
    </div>
  );
};

export default Shop;
