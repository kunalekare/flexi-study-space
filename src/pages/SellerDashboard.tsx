
import React, { useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AccessibilityPanel from "@/components/ui/AccessibilityPanel";
import SalesOverview from "@/components/seller/SalesOverview";
import ProductManagement from "@/components/seller/ProductManagement";
import PaymentsReports from "@/components/seller/PaymentsReports";

const SellerDashboard = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Seller Dashboard</h1>
            <p className="text-muted-foreground">
              Manage your products, track sales, and view payment information
            </p>
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
