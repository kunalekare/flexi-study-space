
import React from "react";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShoppingCart, Search } from "lucide-react";

interface ProductsGridProps {
  products: any[];
}

const ProductsGrid = ({ products }: ProductsGridProps) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-12 bg-white dark:bg-gray-900 rounded-lg border border-border p-8">
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
    <div className="space-y-6">
      {/* Search and Result Count Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-4 bg-white dark:bg-gray-900 border border-border rounded-lg shadow-sm">
        <div className="relative w-full sm:w-auto flex-grow max-w-lg">
          <input 
            type="search" 
            placeholder="Search products..." 
            className="w-full pl-10 pr-4 py-2 rounded-md border border-input bg-transparent text-sm"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        </div>
        
        <div className="text-sm text-muted-foreground">
          Showing <span className="font-medium text-foreground">{products.length}</span> products
        </div>
      </div>
      
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {/* Pagination */}
      {products.length > 0 && (
        <div className="flex justify-center mt-8">
          <nav className="inline-flex rounded-md shadow-sm -space-x-px overflow-hidden" aria-label="Pagination">
            <a href="#" className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
              Previous
            </a>
            <a href="#" className="px-4 py-2 bg-primary text-white border border-primary text-sm font-medium">
              1
            </a>
            <a href="#" className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
              2
            </a>
            <a href="#" className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
              Next
            </a>
          </nav>
        </div>
      )}
    </div>
  );
};

export default ProductsGrid;
