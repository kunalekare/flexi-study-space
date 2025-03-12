
import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AccessibilityPanel from "@/components/ui/AccessibilityPanel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Accessibility, 
  Headphones, 
  Eye, 
  Home, 
  Shirt, 
  Heart,
  ShoppingCart, 
  AlertCircle 
} from "lucide-react";

const Shop = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Product categories
  const categories = [
    { 
      id: "assistive-technology",
      name: "Assistive Technology", 
      icon: <Headphones className="h-8 w-8" />,
      description: "Screen readers, voice recognition, and other tech solutions",
      color: "bg-blue-500/10 text-blue-500"
    },
    { 
      id: "mobility-aids",
      name: "Mobility Aids", 
      icon: <Accessibility className="h-8 w-8" />,
      description: "Wheelchairs, walkers, canes, and mobility enhancers",
      color: "bg-green-500/10 text-green-500"
    },
    { 
      id: "adaptive-clothing",
      name: "Adaptive Clothing", 
      icon: <Shirt className="h-8 w-8" />,
      description: "Easy-to-wear clothing designed for various accessibility needs",
      color: "bg-purple-500/10 text-purple-500"
    },
    { 
      id: "sensory-friendly",
      name: "Sensory-Friendly Items", 
      icon: <Heart className="h-8 w-8" />,
      description: "Products designed for sensory sensitivities and comfort",
      color: "bg-pink-500/10 text-pink-500"
    },
    { 
      id: "hearing-vision",
      name: "Hearing & Vision Support", 
      icon: <Eye className="h-8 w-8" />,
      description: "Products to assist with hearing and visual impairments",
      color: "bg-amber-500/10 text-amber-500"
    },
    { 
      id: "smart-home",
      name: "Smart Home Assistance", 
      icon: <Home className="h-8 w-8" />,
      description: "Voice-controlled and automated home solutions",
      color: "bg-teal-500/10 text-teal-500"
    },
  ];

  // Featured products
  const featuredProducts = [
    {
      id: 1,
      name: "Voice-Controlled Smart Home Hub",
      category: "Smart Home Assistance",
      price: 129.99,
      originalPrice: 199.99,
      discount: 35,
      image: "https://placehold.co/300x300/e2e8f0/1e293b?text=Smart+Hub",
      rating: 4.8,
      reviews: 245
    },
    {
      id: 2,
      name: "Adaptive Buttoning Aid Tool",
      category: "Adaptive Clothing",
      price: 24.99,
      originalPrice: 34.99,
      discount: 28,
      image: "https://placehold.co/300x300/e2e8f0/1e293b?text=Button+Aid",
      rating: 4.6,
      reviews: 187
    },
    {
      id: 3,
      name: "Ultra-Lightweight Folding Wheelchair",
      category: "Mobility Aids",
      price: 599.99,
      originalPrice: 849.99,
      discount: 29,
      image: "https://placehold.co/300x300/e2e8f0/1e293b?text=Wheelchair",
      rating: 4.9,
      reviews: 312
    },
    {
      id: 4,
      name: "Screen Reader Software Premium",
      category: "Assistive Technology",
      price: 199.99,
      originalPrice: 299.99,
      discount: 33,
      image: "https://placehold.co/300x300/e2e8f0/1e293b?text=Screen+Reader",
      rating: 4.7,
      reviews: 156
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Banner */}
        <section className="bg-primary/5 py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <AlertCircle className="h-4 w-4" />
                <span>Up to 50% Off Assistive Devices</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Accessible Shopping for <span className="text-primary">Everyone</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Discover products designed to enhance independence, comfort, and quality of life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <Link to="/shop/all-accessibility">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Shop All Products
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                  <Link to="/accessibility">
                    Learn About Our Accessibility Features
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Categories Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Browse our specialized categories designed to meet various accessibility needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <Link 
                  key={category.id} 
                  to={`/shop/${category.id}`}
                  className="block hover:no-underline group"
                >
                  <Card className="h-full hover:shadow-md transition-shadow group-hover:-translate-y-1 duration-300">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className={`w-14 h-14 rounded-full ${category.color} flex items-center justify-center mb-4`}>
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-muted-foreground flex-grow">
                        {category.description}
                      </p>
                      <div className="mt-4 text-primary font-medium text-sm flex items-center">
                        Browse Products
                        <svg 
                          width="16" 
                          height="16" 
                          viewBox="0 0 16 16" 
                          fill="none" 
                          className="ml-1 transition-transform group-hover:translate-x-1"
                        >
                          <path 
                            d="M6.5 12.5L11 8L6.5 3.5" 
                            stroke="currentColor" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured Deals Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold mb-2">Featured Deals</h2>
                <p className="text-muted-foreground">Top discounts on popular accessibility products</p>
              </div>
              <Button variant="outline" className="mt-4 md:mt-0" asChild>
                <Link to="/shop/all-accessibility">
                  View All Deals
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <Card key={product.id} className="hover:shadow-md transition-all hover:-translate-y-1 duration-300">
                  <CardContent className="p-4">
                    <div className="relative mb-4">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-48 object-contain rounded-md"
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
                      <Button className="w-full" size="sm">Add to Cart</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Seller Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto bg-primary/10 dark:bg-primary/5 rounded-2xl p-8 md:p-12 border border-primary/20 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl opacity-70"></div>
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-primary/30 rounded-full blur-3xl opacity-70"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-center">
                <div className="md:w-7/12 mb-8 md:mb-0 md:pr-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Sell Accessible Products on AccessiShop
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Reach millions of customers looking for assistive products. Join our marketplace to grow your business while making a difference.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/20 rounded-full p-1 text-primary mt-0.5">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Register & Verify Business</p>
                        <p className="text-sm text-muted-foreground">Quick verification process for sellers.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/20 rounded-full p-1 text-primary mt-0.5">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">List Products with Accessibility Tags</p>
                        <p className="text-sm text-muted-foreground">Help customers find the right products for their needs.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/20 rounded-full p-1 text-primary mt-0.5">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Start Receiving Orders & Grow Your Business</p>
                        <p className="text-sm text-muted-foreground">Dedicated dashboard to manage orders and track growth.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-5/12 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold mb-4 text-center">Start Selling Today!</h3>
                  <Button size="lg" className="w-full mb-4" asChild>
                    <Link to="/sell">
                      Register as a Seller
                    </Link>
                  </Button>
                  <p className="text-center text-sm text-muted-foreground">
                    Already a seller? <Link to="/login" className="text-primary hover:underline">Sign in</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Accessibility Features Highlight */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Designed for Everyone</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our platform includes these accessibility features to ensure everyone can shop with ease.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center hover-lift">
                <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 dark:text-blue-400">
                    <path d="M8 3h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path>
                    <path d="M12 18h.01"></path>
                  </svg>
                </div>
                <h3 className="font-medium text-lg mb-2">Screen Reader Compatible</h3>
                <p className="text-muted-foreground text-sm">
                  Our website works seamlessly with popular screen readers like JAWS and NVDA.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center hover-lift">
                <div className="bg-purple-100 dark:bg-purple-900/30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600 dark:text-purple-400">
                    <path d="M15 7.5V9"></path><path d="M12 6v6"></path><path d="M9 9v3"></path>
                    <path d="M8 16h8"></path>
                    <path d="M12 6q-2.9 0-4.45 1.55Q6 9.1 6 12q0 2.9 1.55 4.45Q9.1 18 12 18q2.9 0 4.45-1.55Q18 14.9 18 12q0-2.9-1.55-4.45Q14.9 6 12 6"></path>
                  </svg>
                </div>
                <h3 className="font-medium text-lg mb-2">Voice Navigation</h3>
                <p className="text-muted-foreground text-sm">
                  Navigate through our site using just your voice commands.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center hover-lift">
                <div className="bg-amber-100 dark:bg-amber-900/30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600 dark:text-amber-400">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 8v8"></path>
                    <path d="M8 12h8"></path>
                  </svg>
                </div>
                <h3 className="font-medium text-lg mb-2">High Contrast Mode</h3>
                <p className="text-muted-foreground text-sm">
                  Switch to high contrast colors for better visibility.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center hover-lift">
                <div className="bg-green-100 dark:bg-green-900/30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 dark:text-green-400">
                    <path d="M12 2q-4.025 0-6.812 2.787Q2.4 7.575 2.4 11.6q0 3.45 2.063 6.081Q6.525 20.313 10 20.975v-2.05q-2.675-.625-4.138-2.537Q4.4 14.475 4.4 11.6q0-3.15 2.225-5.375T12 4q3.15 0 5.375 2.225T19.6 11.6q0 2.875-1.463 4.788Q16.675 18.3 14 18.925v2.05q3.475-.663 5.537-3.294Q21.6 15.05 21.6 11.6q0-4.025-2.788-6.813Q16.025 2 12 2"></path>
                    <path d="M11 22h2v-8h-2z"></path>
                  </svg>
                </div>
                <h3 className="font-medium text-lg mb-2">Keyboard-Friendly</h3>
                <p className="text-muted-foreground text-sm">
                  Full keyboard navigation for motor-impaired users.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button asChild>
                <Link to="/accessibility">
                  Learn More About Our Accessibility Features
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* Accessibility Panel */}
      <AccessibilityPanel />
    </div>
  );
};

export default Shop;
