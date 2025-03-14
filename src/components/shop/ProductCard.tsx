
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Star } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    category: string;
    price: number;
    originalPrice?: number;
    discount?: number;
    image: string;
    rating: number;
    reviews: number;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
    
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
      duration: 3000,
    });
  };

  return (
    <Card className="group h-full border border-border hover:shadow-lg transition-all duration-300 overflow-hidden">
      <CardContent className="p-0 h-full flex flex-col">
        {/* Product Image with Discount Badge */}
        <div className="relative overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.discount && product.discount > 0 && (
            <div className="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 text-xs font-bold">
              {product.discount}% OFF
            </div>
          )}
          <button className="absolute top-2 right-2 p-1.5 bg-white/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white" aria-label="Add to wishlist">
            <Heart className="h-4 w-4 text-gray-600 hover:text-red-500" />
          </button>
        </div>
        
        {/* Product Info */}
        <div className="p-4 flex flex-col flex-grow">
          <span className="text-xs text-muted-foreground mb-1">{product.category}</span>
          <h3 className="font-medium text-foreground line-clamp-2 h-12 mb-1 group-hover:text-primary transition-colors">{product.name}</h3>
          
          {/* Ratings */}
          <div className="flex items-center mb-2">
            <div className="flex items-center bg-green-50 text-green-700 text-xs px-1.5 py-0.5 rounded">
              <span className="font-semibold mr-0.5">{product.rating}</span>
              <Star className="h-3 w-3 fill-current" />
            </div>
            <span className="text-xs text-muted-foreground ml-2">({product.reviews})</span>
          </div>
          
          {/* Price */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg font-bold">${product.price}</span>
            {product.originalPrice && (
              <>
                <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                <span className="text-xs text-green-600 font-semibold">
                  Save ${(product.originalPrice - product.price).toFixed(2)}
                </span>
              </>
            )}
          </div>
          
          {/* Add to Cart Button */}
          <div className="mt-auto">
            <Button 
              className="w-full bg-amber-500 hover:bg-amber-600 text-white" 
              onClick={handleAddToCart}
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
