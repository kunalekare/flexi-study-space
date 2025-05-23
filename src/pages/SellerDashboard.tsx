
import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AccessibilityPanel from "@/components/ui/AccessibilityPanel";
import SalesOverview from "@/components/seller/SalesOverview";
import ProductManagement from "@/components/seller/ProductManagement";
import PaymentsReports from "@/components/seller/PaymentsReports";
import { useLocation } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { Badge } from "@/components/ui/badge";

const SellerDashboard = () => {
  const [isNewRegistration, setIsNewRegistration] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const location = useLocation();
  const { toast } = useToast();
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Check if redirected from registration form
    if (location.state?.fromRegistration) {
      setIsNewRegistration(true);
      setSelectedPlan(location.state.selectedPlan || null);
      
      toast({
        title: "Registration Successful!",
        description: "Your seller account has been created successfully.",
        variant: "default",
      });
    }
  }, [location, toast]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
              <h1 className="text-3xl font-bold">Seller Dashboard</h1>
              
              {selectedPlan && (
                <Badge variant="secondary" className="text-sm px-3 py-1">
                  {selectedPlan} Plan
                </Badge>
              )}
            </div>
            
            <p className="text-muted-foreground">
              Manage your products, track sales, and view payment information
            </p>
            
            {isNewRegistration && (
              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-md text-green-700">
                <p className="font-medium mb-1">Welcome to your new seller dashboard!</p>
                <p>Here you can manage your products, track sales, and view payment information.</p>
                {selectedPlan && (
                  <p className="mt-2">
                    You have selected the <span className="font-medium">{selectedPlan}</span> plan. 
                    {selectedPlan === "Individual" && " You can list up to 40 products with this plan."}
                    {selectedPlan === "Professional" && " You can list unlimited products with this plan."}
                  </p>
                )}
              </div>
            )}
          </div>
          
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="overview">Sales Overview</TabsTrigger>
              <TabsTrigger value="products">Product Management</TabsTrigger>
              <TabsTrigger value="payments">Payments & Reports</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview">
              <SalesOverview />
            </TabsContent>
            
            <TabsContent value="products">
              <ProductManagement />
            </TabsContent>
            
            <TabsContent value="payments">
              <PaymentsReports />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
      <AccessibilityPanel />
    </div>
  );
};

export default SellerDashboard;
