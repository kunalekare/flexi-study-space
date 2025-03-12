
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AccessibilityPanel from "@/components/ui/AccessibilityPanel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { 
  Accessibility, 
  Headphones, 
  Eye, 
  Home, 
  Shirt, 
  Heart,
  ShoppingCart, 
  ArrowLeft,
  Filter
} from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { getProductsByCategory, categoryMap } from "@/data/products";

const ShopCategory = () => {
  const { categoryId = 'all-accessibility' } = useParams<{ categoryId: string }>();
  const { addToCart } = useCart();
  
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

  // Handle add to cart
  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
    
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Category Header */}
        <section className={`${currentCategory.color} py-12`}>
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="flex items-start gap-4 mb-6 md:mb-0">
                <div className={`w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-sm`}>
                  {currentCategory.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Link 
                      to="/shop" 
                      className="text-sm text-muted-foreground hover:text-primary flex items-center"
                    >
                      <ArrowLeft className="h-3 w-3 mr-1" />
                      Back to Shop
                    </Link>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold">{currentCategory.title}</h1>
                  <p className="text-muted-foreground mt-2 max-w-lg">
                    {currentCategory.description}
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Filter
                </Button>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Sort by:</span>
                  <select className="border-0 bg-background rounded p-1 text-sm focus:ring-0">
                    <option>Popularity</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Rating</option>
                    <option>Newest</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Products Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {filteredProducts.length > 0 ? (
              <>
                <div className="text-sm text-muted-foreground mb-8">
                  Showing {filteredProducts.length} products
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {filteredProducts.map((product) => (
                    <Card key={product.id} className="hover:shadow-md transition-all hover:-translate-y-1 duration-300">
                      <CardContent className="p-4">
                        <div className="relative mb-4">
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-48 object-cover rounded-md"
                          />
                          {product.discount > 0 && (
                            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                              {product.discount}% OFF
                            </div>
                          )}
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground">{product.category}</div>
                          <h3 className="font-medium text-foreground line-clamp-2 h-12">{product.name}</h3>
                          <div className="flex items-center space-x-2">
                            <div className="flex text-amber-500">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <svg 
                                  key={star} 
                                  width="12" 
                                  height="12" 
                                  viewBox="0 0 24 24" 
                                  fill={star <= Math.floor(product.rating) ? "currentColor" : "none"}
                                  stroke="currentColor"
                                  className="stroke-amber-500"
                                >
                                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                </svg>
                              ))}
                            </div>
                            <span className="text-xs text-muted-foreground">({product.reviews})</span>
                          </div>
                          <div className="flex items-end gap-2">
                            <span className="text-lg font-bold">${product.price}</span>
                            {product.originalPrice && (
                              <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                            )}
                          </div>
                          <Button 
                            className="w-full" 
                            size="sm"
                            onClick={() => handleAddToCart(product)}
                          >
                            <ShoppingCart className="mr-2 h-3 w-3" />
                            Add to Cart
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                  <ShoppingCart className="h-8 w-8 text-muted-foreground" />
                </div>
                <h2 className="text-2xl font-bold mb-2">No products found</h2>
                <p className="text-muted-foreground max-w-md mx-auto mb-6">
                  We couldn't find any products in this category. Please try another category or check back later.
                </p>
                <Button asChild>
                  <Link to="/shop">View All Products</Link>
                </Button>
              </div>
            )}
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
