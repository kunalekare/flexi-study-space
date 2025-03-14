
import React from "react";
import { Button } from "@/components/ui/button";
import { Filter, SlidersHorizontal, CheckSquare, ArrowUpDown } from "lucide-react";

const FilterControls = () => {
  return (
    <div className="w-full bg-white dark:bg-gray-900 border border-border rounded-lg p-4 shadow-sm">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="outline" size="sm" className="flex items-center gap-2 bg-white dark:bg-gray-800">
            <Filter className="h-4 w-4" />
            Filters
          </Button>
          
          <Button variant="outline" size="sm" className="flex items-center gap-2 bg-white dark:bg-gray-800">
            <SlidersHorizontal className="h-4 w-4" />
            Price Range
          </Button>
          
          <Button variant="outline" size="sm" className="flex items-center gap-2 bg-white dark:bg-gray-800">
            <CheckSquare className="h-4 w-4" />
            Free Shipping
          </Button>
        </div>
        
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <label htmlFor="sort-select" className="text-sm text-muted-foreground whitespace-nowrap">Sort by:</label>
          <div className="relative flex-grow sm:flex-grow-0">
            <select 
              id="sort-select"
              className="w-full appearance-none rounded-md border border-input bg-white dark:bg-gray-800 py-2 pl-3 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            >
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Customer Rating</option>
              <option>Newest Arrivals</option>
            </select>
            <ArrowUpDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterControls;
