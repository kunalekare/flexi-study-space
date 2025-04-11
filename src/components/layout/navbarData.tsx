
import React from "react";
import { 
  Headphones, 
  Accessibility, 
  Shirt,
  Heart,
  Eye,
  Home,
  ShoppingCart,
  GraduationCap
} from "lucide-react";

export const subjects = [
  { name: "Mathematics", path: "/subjects/mathematics" },
  { name: "Science", path: "/subjects/science" },
  { name: "Language Arts", path: "/subjects/language-arts" },
  { name: "Social Studies", path: "/subjects/social-studies" },
  { name: "Art & Music", path: "/subjects/art-music" },
  { name: "Kindergarten", path: "/subjects/kindergarten" },
  { name: "Learn to Shop", path: "/subjects/learn-to-shop" }
];

export const grades = [
  { name: "Grade 1", path: "/subjects/grade1" },
  { name: "Grade 2", path: "/subjects/grade2" },
  { name: "Grade 3", path: "/subjects/grade3" },
  { name: "Grade 4", path: "/subjects/grade4" },
  { name: "Grade 5", path: "/subjects/grade5" },
  { name: "Grade 6", path: "/subjects/grade6" },
  { name: "Grade 7", path: "/subjects/grade7" },
  { name: "Grade 8", path: "/subjects/grade8" },
  { name: "Grade 9", path: "/subjects/grade9" },
  { name: "Grade 10", path: "/subjects/grade10" }
];

export const accessibilityCategories = [
  { name: "Assistive Technology", path: "/shop/assistive-technology", icon: <Headphones className="h-4 w-4 mr-2" /> },
  { name: "Mobility Aids", path: "/shop/mobility-aids", icon: <Accessibility className="h-4 w-4 mr-2" /> },
  { name: "Adaptive Clothing", path: "/shop/adaptive-clothing", icon: <Shirt className="h-4 w-4 mr-2" /> },
  { name: "Sensory-Friendly Items", path: "/shop/sensory-friendly", icon: <Heart className="h-4 w-4 mr-2" /> },
  { name: "Hearing & Vision Support", path: "/shop/hearing-vision", icon: <Eye className="h-4 w-4 mr-2" /> },
  { name: "Smart Home Assistance", path: "/shop/smart-home", icon: <Home className="h-4 w-4 mr-2" /> },
];
