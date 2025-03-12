
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
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
    <Card className="hover:shadow-md transition-all hover:-translate-y-1 duration-300">
      <CardContent className="p-4">
        <div className="relative mb-4">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-48 object-cover rounded-md"
          />
          {product.discount && product.discount > 0 && (
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              {product.discount}% OFF
            </div>
          )}
        </div>
        <div className="space-y-2">
          <div className="text-xs text-muted-foreground">{product.category}</div>
          <h3 className="font-medium text-foreground line-clamp-2 h-12">{product.name}</h3>
          <div className="flex items-center space-x-2">
            <div className="flex text-amber-500">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg 
                  key={star} 
                  width="12" 
                  height="12" 
                  viewBox="0 0 24 24" 
                  fill={star <= Math.floor(product.rating) ? "currentColor" : "none"}
                  stroke="currentColor"
                  className="stroke-amber-500"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-muted-foreground">({product.reviews})</span>
          </div>
          <div className="flex items-end gap-2">
            <span className="text-lg font-bold">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
            )}
          </div>
          <Button 
            className="w-full" 
            size="sm"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="mr-2 h-3 w-3" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
