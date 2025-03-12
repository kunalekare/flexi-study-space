
import React from "react";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

interface ProductsGridProps {
  products: any[];
}

const ProductsGrid = ({ products }: ProductsGridProps) => {
  if (products.length === 0) {
    return (
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
    );
  }

  return (
    <>
      <div className="text-sm text-muted-foreground mb-8">
        Showing {products.length} products
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductsGrid;
