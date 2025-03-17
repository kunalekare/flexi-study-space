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
      image: product.image,
    });
    
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
      duration: 3000,
    });
  };

  return (
    <Card className="group h-full border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden rounded-lg">
      <CardContent className="p-0 h-full flex flex-col">
        {/* Product Image with Discount Badge */}
        <div className="relative overflow-hidden bg-gray-100">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.discount && product.discount > 0 && (
            <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-xs font-bold rounded">
              {product.discount}% OFF
            </div>
          )}
          <button className="absolute top-2 right-2 p-2 bg-white/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white shadow-md" aria-label="Add to wishlist">
            <Heart className="h-5 w-5 text-gray-600 hover:text-red-500" />
          </button>
        </div>
        
        {/* Product Info */}
        <div className="p-4 flex flex-col flex-grow">
          <span className="text-xs text-gray-500 mb-1 uppercase tracking-wide">{product.category}</span>
          <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 h-10 mb-1 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
          
          {/* Ratings */}
          <div className="flex items-center mb-2">
            <div className="flex items-center bg-green-100 text-green-700 text-xs px-2 py-1 rounded-md font-semibold">
              <span className="mr-1">{product.rating}</span>
              <Star className="h-4 w-4 fill-current" />
            </div>
            <span className="text-xs text-gray-500 ml-2">({product.reviews} Reviews)</span>
          </div>
          
          {/* Price */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg font-bold text-gray-900">${product.price}</span>
            {product.originalPrice && (
              <>
                <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
                <span className="text-xs text-green-600 font-semibold">
                  Save ${(product.originalPrice - product.price).toFixed(2)}
                </span>
              </>
            )}
          </div>
          
          {/* Add to Cart Button */}
          <div className="mt-auto">
            <Button 
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-md shadow-md" 
              onClick={handleAddToCart}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
