
import React, { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AccessibilityPanel from "@/components/ui/AccessibilityPanel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Store, 
  ChevronRight, 
  BarChart3, 
  PackageOpen, 
  CreditCard, 
  BadgeCheck, 
  ShieldCheck, 
  Users, 
  Star,
  X
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SellerRegistrationForm from "@/components/seller/SellerRegistrationForm";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import ContactSalesForm from "@/components/seller/ContactSalesForm";
import { useToast } from "@/components/ui/use-toast";

const Sell = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const { toast } = useToast();

  // Handle plan selection
  const handlePlanSelect = (planName: string) => {
    setSelectedPlan(planName);
    
    if (planName === "Enterprise") {
      setShowContactForm(true);
    } else {
      // Show registration form with selected plan
      setShowRegistrationForm(true);
      // Scroll to top to show the registration form
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      toast({
        title: `${planName} Plan Selected`,
        description: "Fill the registration form to continue with your selected plan.",
      });
    }
  };

  // Seller benefits
  const benefits = [
    {
      icon: <Users className="h-6 w-6 text-blue-500" />,
      title: "Access to Millions of Customers",
      description: "Reach customers looking specifically for accessible and assistive products."
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-green-500" />,
      title: "Detailed Analytics",
      description: "Access comprehensive sales data and customer insights to grow your business."
    },
    {
      icon: <PackageOpen className="h-6 w-6 text-purple-500" />,
      title: "Simplified Logistics",
      description: "Optional fulfillment services to handle storage, packing, and shipping."
    },
    {
      icon: <CreditCard className="h-6 w-6 text-amber-500" />,
      title: "Secure Payments",
      description: "Reliable payment processing with protection for both sellers and buyers."
    },
    {
      icon: <BadgeCheck className="h-6 w-6 text-teal-500" />,
      title: "Accessibility Verification",
      description: "Get your products verified for accessibility features to build customer trust."
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-rose-500" />,
      title: "Seller Protection",
      description: "Policies and resources designed to support and protect sellers."
    },
  ];

  // Plan options
  const plans = [
    {
      name: "Individual",
      price: 4.99,
      description: "Perfect for individual sellers with low volume",
      features: [
        "List up to 40 products",
        "Basic analytics dashboard",
        "Standard payment processing (3% fee)",
        "Email support",
        "Basic seller protection",
      ],
      recommended: false
    },
    {
      name: "Professional",
      price: 39.99,
      description: "Ideal for growing businesses and retailers",
      features: [
        "Unlimited product listings",
        "Advanced analytics and reporting",
        "Reduced payment processing (2.5% fee)",
        "Priority email & phone support",
        "Enhanced seller protection",
        "Accessibility certification badge",
        "Featured product placement"
      ],
      recommended: true
    },
    {
      name: "Enterprise",
      price: null,
      description: "Tailored solutions for large businesses and manufacturers",
      features: [
        "All Professional features",
        "Custom payment processing rates",
        "Dedicated account manager",
        "API access for integration",
        "Bulk listing tools",
        "Premium product placement",
        "Co-marketing opportunities"
      ],
      recommended: false
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-blue-500/10 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-12 md:mb-0">
                <div className="inline-flex items-center gap-1 bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium mb-6">
                  <Store className="h-4 w-4" />
                  <span>Seller Program</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Sell Accessibility Products to Millions of Customers
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                  Join our marketplace dedicated to accessibility and assistive technology. Make a difference while growing your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto"
                    onClick={() => setShowRegistrationForm(!showRegistrationForm)}
                  >
                    {showRegistrationForm ? "Hide Registration Form" : "Register as a Seller"}
                  </Button>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                    <Link to="#plans">
                      View Pricing Plans
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center md:justify-end">
                {showRegistrationForm ? (
                  <SellerRegistrationForm selectedPlan={selectedPlan} />
                ) : (
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-500 rounded-lg blur opacity-25"></div>
                    <div className="relative bg-background rounded-lg shadow-xl p-6 md:p-8">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2">
                          <div className="bg-primary/20 rounded-full p-2">
                            <Store className="h-5 w-5 text-primary" />
                          </div>
                          <span className="font-semibold">Seller Dashboard</span>
                        </div>
                        <div className="text-sm text-muted-foreground">Preview</div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-muted/50 rounded-md">
                          <div className="flex items-center gap-3">
                            <BarChart3 className="h-5 w-5 text-primary" />
                            <span>Sales Overview</span>
                          </div>
                          <ChevronRight className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <div className="flex items-center justify-between p-3 bg-muted/50 rounded-md">
                          <div className="flex items-center gap-3">
                            <PackageOpen className="h-5 w-5 text-primary" />
                            <span>Product Management</span>
                          </div>
                          <ChevronRight className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <div className="flex items-center justify-between p-3 bg-muted/50 rounded-md">
                          <div className="flex items-center gap-3">
                            <CreditCard className="h-5 w-5 text-primary" />
                            <span>Payments & Reports</span>
                          </div>
                          <ChevronRight className="h-4 w-4 text-muted-foreground" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Sell on AccessiShop?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Join our platform dedicated to accessibility products and reach customers who value inclusion and accessibility.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Pricing Plans */}
        <section id="plans" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Seller Plans</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Choose the right plan for your business needs. Scale as you grow with our flexible options.
              </p>
              {selectedPlan && (
                <div className="mt-4 inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full">
                  <span>Selected: {selectedPlan}</span>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-5 w-5 ml-1" 
                    onClick={() => setSelectedPlan(null)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              )}
            </div>
            
            <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <Card 
                  key={index} 
                  className={`flex-1 overflow-hidden ${
                    selectedPlan === plan.name 
                      ? 'border-2 border-primary shadow-lg' 
                      : plan.recommended 
                        ? 'border-primary shadow-lg' 
                        : 'border-border shadow-sm'
                  }`}
                >
                  {plan.recommended && (
                    <div className="bg-primary text-primary-foreground text-center py-1 text-sm font-medium">
                      Recommended
                    </div>
                  )}
                  <CardContent className={`p-6 ${plan.recommended ? 'pt-5' : 'pt-6'}`}>
                    <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                    <p className="text-muted-foreground mb-4">{plan.description}</p>
                    <div className="mb-6">
                      {plan.price !== null ? (
                        <div className="flex items-end gap-1">
                          <span className="text-3xl font-bold">${plan.price}</span>
                          <span className="text-muted-foreground">/month</span>
                        </div>
                      ) : (
                        <div className="flex items-end gap-1">
                          <span className="text-3xl font-bold">Custom</span>
                        </div>
                      )}
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <svg 
                            width="16" 
                            height="16" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="3" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            className="text-primary mt-1"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full" 
                      variant={selectedPlan === plan.name ? "default" : plan.recommended ? "default" : "outline"}
                      onClick={() => handlePlanSelect(plan.name)}
                    >
                      {plan.price !== null 
                        ? selectedPlan === plan.name 
                          ? "Selected" 
                          : "Select Plan" 
                        : "Contact Sales"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Start selling in just a few simple steps. Our process is designed to get you up and running quickly.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border -ml-px md:ml-0"></div>
                
                {/* Timeline steps */}
                <div className="space-y-12">
                  {/* Step 1 */}
                  <div className="relative flex flex-col md:flex-row gap-8 items-center md:items-start">
                    <div className="order-1 md:order-1 md:w-1/2 md:text-right md:pr-8">
                      <h3 className="text-xl font-bold mb-2">1. Register Your Account</h3>
                      <p className="text-muted-foreground">
                        Create your seller account and provide the necessary business information and documentation.
                      </p>
                    </div>
                    <div className="z-10 order-0 md:order-2 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                      1
                    </div>
                    <div className="order-2 md:order-3 md:w-1/2 md:pl-8 hidden md:block"></div>
                  </div>
                  
                  {/* Step 2 */}
                  <div className="relative flex flex-col md:flex-row gap-8 items-center md:items-start">
                    <div className="order-1 md:order-1 md:w-1/2 md:text-right md:pr-8 hidden md:block"></div>
                    <div className="z-10 order-0 md:order-2 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                      2
                    </div>
                    <div className="order-2 md:order-3 md:w-1/2 md:pl-8">
                      <h3 className="text-xl font-bold mb-2">2. List Your Products</h3>
                      <p className="text-muted-foreground">
                        Add your accessibility products with detailed descriptions, images, and accessibility tags.
                      </p>
                    </div>
                  </div>
                  
                  {/* Step 3 */}
                  <div className="relative flex flex-col md:flex-row gap-8 items-center md:items-start">
                    <div className="order-1 md:order-1 md:w-1/2 md:text-right md:pr-8">
                      <h3 className="text-xl font-bold mb-2">3. Set Up Payments</h3>
                      <p className="text-muted-foreground">
                        Connect your bank account to receive payments from your sales securely.
                      </p>
                    </div>
                    <div className="z-10 order-0 md:order-2 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                      3
                    </div>
                    <div className="order-2 md:order-3 md:w-1/2 md:pl-8 hidden md:block"></div>
                  </div>
                  
                  {/* Step 4 */}
                  <div className="relative flex flex-col md:flex-row gap-8 items-center md:items-start">
                    <div className="order-1 md:order-1 md:w-1/2 md:text-right md:pr-8 hidden md:block"></div>
                    <div className="z-10 order-0 md:order-2 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                      4
                    </div>
                    <div className="order-2 md:order-3 md:w-1/2 md:pl-8">
                      <h3 className="text-xl font-bold mb-2">4. Start Selling</h3>
                      <p className="text-muted-foreground">
                        Your products are now available to millions of customers looking for accessibility solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Seller Success Stories</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Hear from sellers who have grown their accessibility businesses on our platform.
              </p>
            </div>
            
            <Tabs defaultValue="assistive-tech" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="assistive-tech">Assistive Tech</TabsTrigger>
                <TabsTrigger value="adaptive-clothing">Adaptive Clothing</TabsTrigger>
                <TabsTrigger value="mobility-aids">Mobility Aids</TabsTrigger>
              </TabsList>
              
              <TabsContent value="assistive-tech" className="mt-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-xl font-bold text-blue-600">AT</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">AccessiTech Solutions</h3>
                        <p className="text-muted-foreground">Assistive Technology Manufacturer</p>
                      </div>
                    </div>
                    <div className="flex items-center mb-4 text-amber-500">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-lg italic mb-4">
                      "As a specialized manufacturer of screen readers and voice recognition software, finding the right audience was always challenging. Since joining AccessiShop, our sales have increased by 230% and we've been able to reach customers who truly need our products."
                    </blockquote>
                    <p className="font-medium">Michael Chen, Founder</p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="adaptive-clothing" className="mt-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
                        <span className="text-xl font-bold text-purple-600">IC</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Inclusive Clothing Co.</h3>
                        <p className="text-muted-foreground">Adaptive Clothing Brand</p>
                      </div>
                    </div>
                    <div className="flex items-center mb-4 text-amber-500">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-lg italic mb-4">
                      "Our adaptive clothing designs needed a marketplace where customers could understand the specific accessibility features. AccessiShop's detailed product listings and accessibility tags helped us clearly communicate our products' benefits, resulting in higher conversion rates."
                    </blockquote>
                    <p className="font-medium">Sarah Johnson, CEO</p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="mobility-aids" className="mt-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                        <span className="text-xl font-bold text-green-600">MM</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Mobility Makers</h3>
                        <p className="text-muted-foreground">Mobility Aid Manufacturer</p>
                      </div>
                    </div>
                    <div className="flex items-center mb-4 text-amber-500">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-lg italic mb-4">
                      "We've been manufacturing lightweight wheelchairs and mobility aids for over a decade. Joining AccessiShop opened up a direct-to-consumer channel that now accounts for 40% of our revenue. The platform's focus on accessibility products makes it the perfect place for our specialized offerings."
                    </blockquote>
                    <p className="font-medium">Robert Garcia, Operations Director</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-primary/10 dark:bg-primary/5 rounded-2xl p-8 md:p-12 border border-primary/20 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Grow Your Accessibility Business?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join our community of sellers making a difference in the lives of people with accessibility needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto"
                  onClick={() => {
                    setShowRegistrationForm(true);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Register as a Seller
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto"
                  onClick={() => setShowContactForm(true)}
                >
                  Contact Sales Team
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* Accessibility Panel */}
      <AccessibilityPanel />
      
      {/* Contact Sales Dialog */}
      <Dialog open={showContactForm} onOpenChange={setShowContactForm}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Contact Our Sales Team</DialogTitle>
            <DialogDescription>
              Get in touch with our sales team for a customized Enterprise plan solution.
            </DialogDescription>
          </DialogHeader>
          <ContactSalesForm onClose={() => setShowContactForm(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Sell;
