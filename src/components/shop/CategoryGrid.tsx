
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Accessibility, Headphones, Eye, Home, Shirt, Heart } from "lucide-react";

type Category = {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  color: string;
};

const categories: Category[] = [
  { 
    id: "assistive-technology",
    name: "Assistive Technology", 
    icon: <Headphones className="h-8 w-8" />,
    description: "Screen readers, voice recognition, and other tech solutions",
    color: "bg-blue-500/10 text-blue-500"
  },
  { 
    id: "mobility-aids",
    name: "Mobility Aids", 
    icon: <Accessibility className="h-8 w-8" />,
    description: "Wheelchairs, walkers, canes, and mobility enhancers",
    color: "bg-green-500/10 text-green-500"
  },
  { 
    id: "adaptive-clothing",
    name: "Adaptive Clothing", 
    icon: <Shirt className="h-8 w-8" />,
    description: "Easy-to-wear clothing designed for various accessibility needs",
    color: "bg-purple-500/10 text-purple-500"
  },
  { 
    id: "sensory-friendly",
    name: "Sensory-Friendly Items", 
    icon: <Heart className="h-8 w-8" />,
    description: "Products designed for sensory sensitivities and comfort",
    color: "bg-pink-500/10 text-pink-500"
  },
  { 
    id: "hearing-vision",
    name: "Hearing & Vision Support", 
    icon: <Eye className="h-8 w-8" />,
    description: "Products to assist with hearing and visual impairments",
    color: "bg-amber-500/10 text-amber-500"
  },
  { 
    id: "smart-home",
    name: "Smart Home Assistance", 
    icon: <Home className="h-8 w-8" />,
    description: "Voice-controlled and automated home solutions",
    color: "bg-teal-500/10 text-teal-500"
  },
];

const CategoryGrid = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our specialized categories designed to meet various accessibility needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={`/shop/${category.id}`}
              className="block hover:no-underline group"
            >
              <Card className="h-full hover:shadow-md transition-shadow group-hover:-translate-y-1 duration-300">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className={`w-14 h-14 rounded-full ${category.color} flex items-center justify-center mb-4`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground flex-grow">
                    {category.description}
                  </p>
                  <div className="mt-4 text-primary font-medium text-sm flex items-center">
                    Browse Products
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 16 16" 
                      fill="none" 
                      className="ml-1 transition-transform group-hover:translate-x-1"
                    >
                      <path 
                        d="M6.5 12.5L11 8L6.5 3.5" 
                        stroke="currentColor" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
