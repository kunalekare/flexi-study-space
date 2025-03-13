
import React from "react";
import { 
  Headphones, 
  Accessibility, 
  Shirt,
  Heart,
  Eye,
  Home
} from "lucide-react";

export const subjects = [
  { name: "Mathematics", path: "/subjects/mathematics" },
  { name: "Science", path: "/subjects/science" },
  { name: "Language Arts", path: "/subjects/language-arts" },
  { name: "Social Studies", path: "/subjects/social-studies" },
  { name: "Art & Music", path: "/subjects/art-music" },
];

export const accessibilityCategories = [
  { name: "Assistive Technology", path: "/shop/assistive-technology", icon: <Headphones className="h-4 w-4 mr-2" /> },
  { name: "Mobility Aids", path: "/shop/mobility-aids", icon: <Accessibility className="h-4 w-4 mr-2" /> },
  { name: "Adaptive Clothing", path: "/shop/adaptive-clothing", icon: <Shirt className="h-4 w-4 mr-2" /> },
  { name: "Sensory-Friendly Items", path: "/shop/sensory-friendly", icon: <Heart className="h-4 w-4 mr-2" /> },
  { name: "Hearing & Vision Support", path: "/shop/hearing-vision", icon: <Eye className="h-4 w-4 mr-2" /> },
  { name: "Smart Home Assistance", path: "/shop/smart-home", icon: <Home className="h-4 w-4 mr-2" /> },
];
