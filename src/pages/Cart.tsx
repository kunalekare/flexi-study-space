import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AccessibilityPanel from "@/components/ui/AccessibilityPanel";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom"; // <— Updated
import { toast } from "@/hooks/use-toast";
import { 
  ShoppingCart, 
  Trash2, 
  ArrowLeft,
  Plus,
  Minus,
  ShoppingBag,
  CreditCard
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/contexts/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  // NEW: Hook for navigation
  const navigate = useNavigate();
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);
  
  // Calculate tax (e.g., 8%)
  const tax = subtotal * 0.08;
  
  // Calculate total
  const total = subtotal + tax;
  
  // Handle checkout
  const handleCheckout = () => {
    toast({
      title: "Checkout process initiated",
      description: "This would normally redirect to a payment processor.",
      duration: 5000,
    });
    // NEW: Redirect to payment
    navigate("/payment");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center mb-8">
            <Link to="/shop" className="text-sm text-muted-foreground hover:text-primary flex items-center">
              <ArrowLeft className="h-3 w-3 mr-1" />
              Continue Shopping
            </Link>
            <h1 className="text-3xl font-bold ml-4 flex items-center">
              Your Cart <ShoppingCart className="ml-2 h-5 w-5" />
            </h1>
          </div>
          
          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <Card>
                  <CardContent className="p-6">
                    {cartItems.map((item, index) => (
                      <div key={item.id}>
                        <div className="flex flex-col sm:flex-row gap-4">
                          <div className="w-full sm:w-24 h-24 rounded-md overflow-hidden">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-grow">
                            <h3 className="font-medium text-lg">{item.name}</h3>
                            <p className="text-muted-foreground mb-2">Item #{item.id}</p>
                            <div className="flex flex-wrap justify-between items-center gap-4">
                              <div className="flex items-center space-x-2">
                                <Button 
                                  variant="outline" 
                                  size="icon" 
                                  className="h-8 w-8"
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                >
                                  <Minus className="h-3 w-3" />
                                </Button>
                                <span className="w-8 text-center">{item.quantity}</span>
                                <Button 
                                  variant="outline" 
                                  size="icon" 
                                  className="h-8 w-8"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                  <Plus className="h-3 w-3" />
                                </Button>
                              </div>
                              <div className="flex items-center gap-3">
                                <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                                <Button 
                                  variant="ghost" 
                                  size="icon" 
                                  className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50"
                                  onClick={() => removeFromCart(item.id)}
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                        {index < cartItems.length - 1 && (
                          <Separator className="my-6" />
                        )}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
              
              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Order Summary</h3>
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Estimated Tax</span>
                        <span>${tax.toFixed(2)}</span>
                      </div>
                      <Separator className="my-3" />
                      <div className="flex justify-between font-bold">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>
                    <Button 
                      className="w-full mb-3" 
                      size="lg"
                      onClick={handleCheckout}
                    >
                      <CreditCard className="mr-2 h-4 w-4" />
                      Checkout
                    </Button>
                    <div className="text-xs text-center text-muted-foreground">
                      Taxes and shipping calculated at checkout
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ) : ( 
            <div className="text-center py-16">
              <div className="bg-muted/40 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="h-10 w-10 text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
              <p className="text-muted-foreground max-w-md mx-auto mb-8">
                Looks like you haven't added any items to your cart yet. 
                Browse our selection of accessibility products to get started.
              </p>
              <Button asChild size="lg">
                <Link to="/shop">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Browse Products
                </Link>
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
      
      {/* Accessibility Panel */}
      <AccessibilityPanel />
    </div>
  );
};

export default Cart;
