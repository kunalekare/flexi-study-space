
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
          content: "Shopping is the activity of buying goods and services. When we shop, we exchange money for things we need or want. This interactive lesson introduces the basic concept of shopping through colorful animations and simple examples. You'll learn why people shop, what kinds of things they buy, and the different places where shopping happens. The lesson includes voice narration and interactive elements where you can click on different shopping scenarios to learn more."
        },
        {
          title: "Types of Shopping",
          type: "Video Lesson",
          duration: "10 minutes",
          content: "This video lesson explores different types of shopping experiences with visual examples. You'll learn about grocery shopping for food and household items, clothing shopping for apparel and accessories, and specialty shopping for specific items like electronics or toys. The video also introduces online shopping and how it differs from in-store shopping. Each segment includes real-world footage with clear narration explaining the different shopping environments and what you might buy at each type of store."
        },
        {
          title: "Common Shopping Items",
          type: "Interactive Activity",
          duration: "20 minutes",
          content: "This hands-on activity helps you identify and categorize everyday shopping items. You'll sort products into different categories like food, clothing, household supplies, and personal care items. The activity features colorful images of common products with audio labels that can be played by clicking on each item. You'll learn to recognize items in each category and understand which stores typically sell them. The activity includes a fun drag-and-drop game where you match items to the correct shopping category, with helpful hints and positive feedback."
        },
        {
          title: "Shopping Vocabulary",
          type: "Quiz Game",
          duration: "15 minutes",
          content: "Master important shopping terms through this engaging quiz game. You'll learn essential shopping vocabulary like price, discount, sale, receipt, cashier, shopping cart, and more. The game presents each term with a definition, visual example, and audio pronunciation. Then, you'll test your knowledge through matching exercises, multiple-choice questions, and fill-in-the-blank challenges. The difficulty increases gradually, and you'll earn virtual badges for completing each level. This activity helps build the vocabulary needed to understand and participate in shopping experiences confidently."
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
          content: "This interactive lesson teaches you to recognize different coins and bills and understand their values. You'll learn to identify U.S. currency, including pennies, nickels, dimes, quarters, and bills ($1, $5, $10, $20). The lesson features high-quality images of each currency type and interactive elements where you can rotate, zoom, and examine the unique features of each coin and bill. Practice activities include sorting currency by value, counting combinations of money, and matching equivalent amounts shown in different ways. The lesson also includes step-by-step guidance on counting money to make purchases."
        },
        {
          title: "Understanding Prices",
          type: "Video Lesson",
          duration: "15 minutes",
          content: "This video lesson explains how to read and understand price tags and labels. You'll learn to identify the dollar sign, decimal point, and what numbers before and after the decimal point represent. The video shows different formats of price displays in stores and online, and explains concepts like unit pricing (price per ounce, per item, etc.). Through clear visual examples, you'll practice comparing prices of similar items to determine which offers better value. The lesson concludes with practical tips for identifying sales prices and understanding how discounts are displayed."
        },
        {
          title: "Simple Shopping Math",
          type: "Interactive Activity",
          duration: "25 minutes",
          content: "This activity provides practice with basic math skills needed for shopping. Through a series of fun shopping scenarios, you'll learn to add prices of multiple items, calculate tax, figure out discounts, and determine how much change to expect. The activity uses visual supports like virtual shopping carts where you add items and see the total update in real-time. Each math concept is broken down into simple steps with plenty of practice opportunities. The scenarios gradually increase in complexity, from adding two items to calculating percentage discounts, with helpful hints available when needed."
        },
        {
          title: "Payment Methods",
          type: "Video Lesson",
          duration: "15 minutes",
          content: "This video introduces different ways to pay for purchases. You'll learn about using cash (bills and coins), credit and debit cards, mobile payment apps, and gift cards. The video demonstrates how each payment method works, showing the physical actions involved (such as counting out cash or swiping/inserting a card) and explaining the benefits and considerations for each method. Special attention is given to safety tips when handling money and using cards. The lesson includes clips showing real checkout scenarios and explains the steps involved in each payment process, from beginning to completion."
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
          content: "Take a virtual tour of different types of stores in this interactive lesson. You'll explore a grocery store, department store, and pharmacy, learning about their typical layouts and organization. The tour highlights common features like entrances, exits, aisles, departments, checkout areas, and customer service desks. You'll learn how to read store directories and aisle signs to find specific items. Interactive hotspots throughout the virtual stores provide additional information about each area. The lesson includes practice activities where you follow a shopping list and navigate to the correct locations within each store type."
        },
        {
          title: "Making a Shopping List",
          type: "Interactive Activity",
          duration: "15 minutes",
          content: "This activity teaches you how to create and use a shopping list effectively. You'll learn why shopping lists are important for staying organized, remembering what you need, and sticking to a budget. The interactive tool guides you through categorizing items (groceries, household supplies, clothing, etc.), estimating costs, and organizing your list in a logical way that matches typical store layouts. You'll practice creating shopping lists for different scenarios (weekly grocery shopping, preparing for a party, back-to-school shopping) and learn strategies for checking items off as you shop. The activity includes printable templates and a digital list-making tool you can use for practice."
        },
        {
          title: "Checkout Process",
          type: "Video Simulation",
          duration: "15 minutes",
          content: "This video simulation walks you through the entire checkout process step by step. You'll learn what happens when you're ready to pay for your items, from getting in line to leaving the store with your purchases. The video demonstrates how to place items on the checkout counter, interact with cashiers (including common questions and responses), use self-checkout machines, pay with different methods, receive and check your receipt, and bag your items. Special attention is given to proper social interactions, handling money or cards, and what to do if there's a problem with an item or price. The simulation includes multiple examples showing slight variations in the process at different types of stores."
        },
        {
          title: "Shopping Etiquette",
          type: "Social Story",
          duration: "10 minutes",
          content: "This social story teaches appropriate behavior while shopping. Through illustrated scenarios with simple text and audio narration, you'll learn important shopping manners like waiting your turn in line, using indoor voices, asking for help politely, respecting personal space, handling items carefully, and returning unwanted items to their proper places. The story explains why these behaviors are important for creating a positive shopping experience for everyone. Each etiquette rule is presented with examples of both appropriate and inappropriate behaviors, helping you understand the difference. The story concludes with a brief review of key points to remember when shopping in public places."
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
          content: "This interactive lesson introduces the basics of online shopping websites. You'll explore different types of online stores, including major retailers (like Amazon, Walmart), specialty shops, and marketplace sites where multiple sellers offer products. The lesson demonstrates how to navigate online store interfaces, showing common elements like the homepage, product categories, search bar, shopping cart, and account options. You'll practice using search features to find specific products, browsing categories, and filtering results. The lesson includes interactive simulations where you can click through simplified versions of real shopping websites to become comfortable with their layout and functions."
        },
        {
          title: "Online Shopping Safety",
          type: "Video Lesson",
          duration: "15 minutes",
          content: "This important video lesson teaches essential safety practices for shopping online. You'll learn how to identify secure websites (looking for https and the lock icon), create strong passwords for shopping accounts, protect personal and payment information, and recognize potential scams or suspicious offers. The video explains the difference between legitimate retailers and fraudulent sites, with visual examples of warning signs to watch for. Additional topics include safe payment methods, privacy settings, the importance of reading reviews, and what to do if you encounter a problem. The lesson emphasizes practical strategies to enjoy the convenience of online shopping while minimizing risks."
        },
        {
          title: "Making Online Purchases",
          type: "Guided Simulation",
          duration: "25 minutes",
          content: "This step-by-step guided simulation walks you through the complete process of making an online purchase. You'll follow along as the narrator demonstrates selecting items, adding them to a cart, creating an account or signing in, entering shipping information, choosing shipping options, entering payment information, reviewing the order, and completing the purchase. The simulation uses a simplified but realistic online store interface, highlighting each button or field as it's discussed. Important details like required information, optional fields, and confirmation steps are explained clearly. The lesson also covers checking order confirmation emails and tracking order status after purchase."
        },
        {
          title: "Delivery and Returns",
          type: "Interactive Lesson",
          duration: "15 minutes",
          content: "This lesson covers what happens after you make an online purchase. You'll learn about different shipping options (standard, expedited, overnight) and their typical costs and timeframes. The interactive elements demonstrate how to track packages online, what delivery notifications look like, and what to do when a package arrives. The second part of the lesson focuses on the returns process, explaining reasons why you might need to return an item, how to request a return online, printing return labels, packaging items properly, and shipping them back. The lesson includes practice scenarios where you determine the best shipping option for different situations and work through simulated return processes."
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
          content: "This engaging game challenges you to complete a shopping trip while staying within a set budget. You'll start with a specific amount of money and a shopping list of necessary items. As you navigate through a virtual store, you'll make decisions about which products to buy based on their prices and your remaining budget. The game features multiple difficulty levels with increasingly complex scenarios, from a simple grocery list to planning for a party or week of meals. Visual aids help you track your spending in real time, and the game provides tips for making budget-friendly choices. Successfully completing each challenge earns rewards and unlocks new scenarios with different budgeting challenges."
        },
        {
          title: "Price Comparison Game",
          type: "Interactive Activity",
          duration: "20 minutes",
          content: "In this activity, you'll practice comparing prices to find the best value among similar products. The game presents sets of products in different sizes, quantities, or brands, and challenges you to identify which offers the best price per unit. You'll learn to calculate and compare unit prices (like price per ounce or per item) when products come in different package sizes. The activity includes interactive tools that help you divide total price by quantity to find unit price, with visual supports showing the process step by step. Progressive levels introduce concepts like bulk discounts, special offers, and combining coupons to determine true costs. Each correct answer earns points and provides feedback explaining why one option offers better value than others."
        },
        {
          title: "Virtual Shopping Trip",
          type: "Simulation",
          duration: "35 minutes",
          content: "Experience a complete shopping trip from planning to checkout in this comprehensive simulation. You'll start by creating a shopping list based on needs and budget, then navigate through a realistic virtual store environment to find each item. The simulation includes interactive decision points where you choose between products based on price, quality, or features. You'll practice reading labels, comparing options, placing items in your cart, and proceeding through checkout. The experience includes interactions with virtual store associates who can answer questions and provide assistance. The simulation tracks your choices and provides a summary at the end, with feedback on your shopping efficiency, budget management, and decision quality. Multiple store types are available (grocery, clothing, electronics) to practice different shopping scenarios."
        },
        {
          title: "Receipt Reading Challenge",
          type: "Interactive Activity",
          duration: "15 minutes",
          content: "This practical activity teaches you how to read and understand store receipts through a series of engaging challenges. You'll learn to identify key components of receipts, including store information, date and time of purchase, individual items and prices, subtotal, tax, total amount, and payment method. Interactive exercises have you locate specific information on sample receipts, verify that items and prices match what you intended to purchase, and check for errors or discrepancies. Additional activities include calculating change, understanding discount applications, and identifying return policies or expiration dates often printed on receipts. The challenges increase in complexity, from simple receipts with a few items to more complex ones with discounts, coupons, and loyalty points."
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
          content: "This thoughtful lesson helps you distinguish between necessary purchases (needs) and optional desires (wants). Through relatable scenarios and interactive examples, you'll learn to categorize potential purchases and make mindful decisions about spending priorities. The lesson presents common situations where you might feel tempted to buy something, then guides you through questions to determine if it's truly needed or simply wanted. Visual supports include a decision-making flowchart and comparative examples of need-based versus impulse shopping. Activities include sorting various items into 'need' and 'want' categories across different contexts and budgets, with discussions about how personal circumstances can affect these classifications. The lesson emphasizes that wants aren't bad, but understanding the difference helps with responsible spending."
        },
        {
          title: "Understanding Sales & Discounts",
          type: "Video Lesson",
          duration: "20 minutes",
          content: "This comprehensive video explains different types of sales and how discounts work. You'll learn about common sale events (seasonal sales, holiday specials, clearance), discount terminology (percent off, BOGO/buy-one-get-one, rebates), and how to calculate the final price after discounts are applied. The video demonstrates step-by-step calculations for finding sale prices with various percentage discounts and explains concepts like base price versus marked-down price. Special attention is given to reading and understanding sale signs and determining if a sale is actually a good value. The lesson includes segments on comparison shopping during sales, coupon stacking, and recognizing marketing techniques that stores use to encourage purchases. Visual examples show real-world sale advertisements and break down their actual value."
        },
        {
          title: "Comparing Products",
          type: "Interactive Activity",
          duration: "25 minutes",
          content: "This activity develops your skills for making thoughtful product comparisons before purchasing. You'll learn systematic approaches to evaluating similar products based on multiple factors: price, quality, features, durability, reviews, and warranties. The interactive exercises present sets of comparable products (like different brands of the same item) with detailed information about each. You'll use digital comparison tools to weigh the pros and cons, prioritize which aspects matter most for specific needs, and make informed selections. The activity includes practice reading product specifications, understanding customer reviews, and recognizing the difference between essential features and costly add-ons. Different scenarios emphasize different priorities—sometimes lowest price is best, while other situations might justify paying more for quality or specific features."
        },
        {
          title: "Shopping Success Stories",
          type: "Video Series",
          duration: "15 minutes",
          content: "This inspiring video series shares real-life stories about smart shopping decisions and their positive outcomes. Each short segment features a different scenario where thoughtful shopping skills led to success—finding the perfect gift within budget, saving money through careful comparison shopping, avoiding impulse purchases to save for something important, or researching before buying to find the best quality option. The stories are diverse and relatable, showing how good shopping practices apply to people of all ages and backgrounds. After each story, a brief review highlights the specific skills demonstrated (like making a list, researching options, waiting for sales, etc.) and how those skills contributed to the positive outcome. The series concludes with encouragement to apply these strategies in your own shopping experiences."
        }
      ]
    }
  ]
};

export default learnToShopData;
