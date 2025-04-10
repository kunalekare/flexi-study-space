
import { ShoppingCart } from "lucide-react";
import React from "react";
import shoppingBasics from "./shopping-basics";
import understandingMoney from "./understanding-money";
import inStoreShoppingData from "./in-store-shopping";
import onlineShoppingData from "./online-shopping";
import shoppingGamesData from "./shopping-games";
import smartShoppingData from "./smart-shopping";

const shoppingImage = "https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=2215&auto=format&fit=crop";

const learnToShopData = {
  id: "learn-to-shop",
  title: "Learn to Shop",
  description: "Master essential shopping skills including how to identify items, compare prices, and make smart shopping decisions in both physical stores and online platforms.",
  image: shoppingImage,
  icon: React.createElement(ShoppingCart, { className: "h-8 w-8" }),
  color: "bg-teal-50 dark:bg-teal-900/20",
  textColor: "text-teal-600 dark:text-teal-400",
  ringColor: "focus-visible:ring-teal-500",
  sections: [
    shoppingBasics,
    understandingMoney,
    inStoreShoppingData,
    onlineShoppingData,
    shoppingGamesData,
    smartShoppingData
  ]
};

export default learnToShopData;
