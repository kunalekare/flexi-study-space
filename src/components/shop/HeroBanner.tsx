
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AlertCircle, ShoppingCart } from "lucide-react";

const HeroBanner = () => {
  return (
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
  );
};

export default HeroBanner;
