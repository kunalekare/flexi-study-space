
import React from "react";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

const FilterControls = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <Button variant="outline" size="sm" className="flex items-center gap-2">
        <Filter className="h-4 w-4" />
        Filter
      </Button>
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Sort by:</span>
        <select className="border-0 bg-background rounded p-1 text-sm focus:ring-0">
          <option>Popularity</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Rating</option>
          <option>Newest</option>
        </select>
      </div>
    </div>
  );
};

export default FilterControls;
