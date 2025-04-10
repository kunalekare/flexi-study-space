
import { ShoppingCart, DollarSign, Store, CreditCard, MapPin, Globe, ShoppingBag, Award } from "lucide-react";
import React from "react";

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
    {
      id: "shopping-basics",
      title: "Shopping Basics",
      content: "Learn the fundamental concepts of shopping, different types of stores, and the items you commonly need to purchase.",
      lessons: [
        {
          title: "What is Shopping?",
          type: "Interactive Lesson",
          duration: "15 minutes",
          content: "An introduction to the concept of shopping, exchanging money for goods and services, and understanding why we shop."
        },
        {
          title: "Types of Shopping",
          type: "Video Lesson",
          duration: "10 minutes",
          content: "Explore different types of shopping: grocery, clothing, household, and online shopping with visual examples."
        },
        {
          title: "Common Shopping Items",
          type: "Interactive Activity",
          duration: "20 minutes",
          content: "Learn to identify and categorize common shopping items like food, clothing, household supplies, and personal care products."
        },
        {
          title: "Shopping Vocabulary",
          type: "Quiz Game",
          duration: "15 minutes",
          content: "Master important shopping terms like price, discount, sale, receipt, cashier, and shopping cart."
        }
      ]
    },
    {
      id: "understanding-money",
      title: "Understanding Money",
      content: "Develop the ability to recognize different forms of money, understand pricing, and make basic calculations while shopping.",
      lessons: [
        {
          title: "Identifying Money",
          type: "Interactive Lesson",
          duration: "20 minutes",
          content: "Learn to recognize different coins and bills, their values, and how to count money to make purchases."
        },
        {
          title: "Understanding Prices",
          type: "Video Lesson",
          duration: "15 minutes",
          content: "Learn how to read price tags, understand unit pricing, and compare costs of different items."
        },
        {
          title: "Simple Shopping Math",
          type: "Interactive Activity",
          duration: "25 minutes",
          content: "Practice adding prices, calculating change, and understanding discounts through fun shopping scenarios."
        },
        {
          title: "Payment Methods",
          type: "Video Lesson",
          duration: "15 minutes",
          content: "Learn about different ways to pay including cash, credit/debit cards, mobile payments, and gift cards."
        }
      ]
    },
    {
      id: "in-store-shopping",
      title: "In-Store Shopping",
      content: "Learn practical skills for shopping in physical stores including navigation, interaction with staff, and making purchases.",
      lessons: [
        {
          title: "Navigating a Store",
          type: "Interactive Tour",
          duration: "20 minutes",
          content: "Virtual tour of different store types, understanding store layouts, aisles, departments, and finding items."
        },
        {
          title: "Making a Shopping List",
          type: "Interactive Activity",
          duration: "15 minutes",
          content: "Learn to plan purchases by creating and organizing a shopping list based on needs and budget."
        },
        {
          title: "Checkout Process",
          type: "Video Simulation",
          duration: "15 minutes",
          content: "Step-by-step guide to the checkout process, interactions with cashiers, payment, and receiving a receipt."
        },
        {
          title: "Shopping Etiquette",
          type: "Social Story",
          duration: "10 minutes",
          content: "Learn appropriate behavior in stores, including waiting in line, asking for help, and handling shopping carts."
        }
      ]
    },
    {
      id: "online-shopping",
      title: "Online Shopping",
      content: "Develop skills for safe and effective online shopping, including website navigation, secure payments, and delivery expectations.",
      lessons: [
        {
          title: "Introduction to Online Stores",
          type: "Interactive Lesson",
          duration: "20 minutes",
          content: "Learn about different types of online stores, how to navigate websites, and find products using search features."
        },
        {
          title: "Online Shopping Safety",
          type: "Video Lesson",
          duration: "15 minutes",
          content: "Important tips for safe online shopping, including secure websites, privacy, and avoiding scams."
        },
        {
          title: "Making Online Purchases",
          type: "Guided Simulation",
          duration: "25 minutes",
          content: "Step-by-step guide to adding items to cart, creating accounts, checkout process, and payment methods."
        },
        {
          title: "Delivery and Returns",
          type: "Interactive Lesson",
          duration: "15 minutes",
          content: "Understanding shipping options, tracking orders, receiving packages, and the process for returning items."
        }
      ]
    },
    {
      id: "shopping-games",
      title: "Shopping Games & Activities",
      content: "Practice shopping skills through engaging games and interactive activities that simulate real-world shopping scenarios.",
      lessons: [
        {
          title: "Budget Challenge",
          type: "Interactive Game",
          duration: "30 minutes",
          content: "Fun game to practice staying within a budget while shopping for necessary items on a shopping list."
        },
        {
          title: "Price Comparison Game",
          type: "Interactive Activity",
          duration: "20 minutes",
          content: "Practice comparing prices and finding the best value among similar products with different sizes and prices."
        },
        {
          title: "Virtual Shopping Trip",
          type: "Simulation",
          duration: "35 minutes",
          content: "Complete simulation of a shopping trip from planning to checkout, with interactive decisions throughout."
        },
        {
          title: "Receipt Reading Challenge",
          type: "Interactive Activity",
          duration: "15 minutes",
          content: "Learn to read and understand receipts, verify purchases, and check for errors in a fun, gamified format."
        }
      ]
    },
    {
      id: "smart-shopping",
      title: "Smart Shopping Tips",
      content: "Learn strategies for making informed shopping decisions, including comparing options, understanding sales, and avoiding impulse purchases.",
      lessons: [
        {
          title: "Needs vs. Wants",
          type: "Interactive Lesson",
          duration: "15 minutes",
          content: "Learn to distinguish between necessary purchases and impulse buys through engaging scenarios and examples."
        },
        {
          title: "Understanding Sales & Discounts",
          type: "Video Lesson",
          duration: "20 minutes",
          content: "Learn about different types of sales, how to calculate discounts, and determine if a sale is truly a good value."
        },
        {
          title: "Comparing Products",
          type: "Interactive Activity",
          duration: "25 minutes",
          content: "Develop skills for comparing products based on price, quality, features, and reviews to make smart choices."
        },
        {
          title: "Shopping Success Stories",
          type: "Video Series",
          duration: "15 minutes",
          content: "Inspiring stories about smart shopping decisions and how good shopping skills can lead to positive outcomes."
        }
      ]
    }
  ]
};

export default learnToShopData;
