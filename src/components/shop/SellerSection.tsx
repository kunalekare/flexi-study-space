
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SellerSection = () => {
  return (
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
  );
};

export default SellerSection;
