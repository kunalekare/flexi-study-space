
import React from "react";
import { Calculator } from "lucide-react";

const mathematicsData = {
  title: "Mathematics",
  description: "Interactive math lessons with visual representations, audio support, and step-by-step problem solving.",
  icon: React.createElement(Calculator, { className: "h-6 w-6" }),
  color: "bg-blue-50 dark:bg-blue-900/20",
  textColor: "text-blue-600 dark:text-blue-400",
  image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
  sections: [
    {
      id: "basic-concepts",
      title: "Basic Concepts",
      content: "Explore numbers, counting, shapes, and patterns through interactive visual aids and audio support. Our specially designed visual representations make abstract math concepts more concrete and understandable.",
      lessons: [
        { 
          title: "Number Recognition", 
          type: "Interactive", 
          duration: "15 mins",
          content: "Learn to identify and recognize numbers 0-100. Practice exercises include matching numbers to quantities, ordering numbers, and identifying numbers in everyday contexts. Activities include digital flashcards, number sequence games, and audio-supported number identification."
        },
        { 
          title: "Counting Games", 
          type: "Game", 
          duration: "10 mins",
          content: "Interactive counting activities from 1-20 with visual supports. Games include counting objects, skip counting by 2s and 5s, and matching numbers to quantities. Features adaptive difficulty levels and immediate feedback for reinforcement learning."
        },
        { 
          title: "Shape Explorer", 
          type: "Visual Aid", 
          duration: "20 mins",
          content: "Comprehensive exploration of 2D and 3D shapes with interactive models. Learn about circles, squares, triangles, rectangles, spheres, cubes, cylinders, and cones. Activities include shape sorting, shape hunts in everyday objects, and creating pictures with shapes."
        },
        { 
          title: "Pattern Matching", 
          type: "Interactive", 
          duration: "15 mins",
          content: "Develop pattern recognition skills with visual and interactive sequences. Activities include completing patterns, creating patterns, and identifying pattern rules. Patterns progress from simple color patterns to more complex numerical and geometric sequences."
        },
        { 
          title: "Introduction to Numbers", 
          type: "Video", 
          duration: "8 mins",
          content: "Fundamental number concepts including counting, number recognition, and one-to-one correspondence. Content includes number formation, number values, and place value introduction. Interactive activities reinforce number sense and quantity understanding."
        },
        { 
          title: "Geometry Basics", 
          type: "Video", 
          duration: "12 mins",
          content: "Introduction to spatial reasoning and geometric principles. Topics include points, lines, angles, and basic shapes. Interactive activities help students identify geometric concepts in the real world and understand spatial relationships."
        }
      ]
    },
    {
      id: "interactive-games",
      title: "Interactive Games",
      content: "Engage with virtual manipulatives for addition, subtraction, multiplication, and division. These games adapt to different learning speeds and provide instant feedback to reinforce concepts.",
      lessons: [
        { 
          title: "Addition Adventure", 
          type: "Game", 
          duration: "15 mins",
          content: "Journey through addition concepts with visual supports and concrete examples. Content progresses from simple single-digit addition to adding multiple numbers and introducing the commutative property. Games adapt to learner pace and provide multiple strategies for solving addition problems."
        },
        { 
          title: "Subtraction Safari", 
          type: "Game", 
          duration: "15 mins",
          content: "Explore subtraction through engaging safari-themed activities. Visual models demonstrate 'taking away' and 'finding the difference' approaches to subtraction. Progressive challenges build from simple subtraction facts to multi-digit subtraction with regrouping."
        },
        { 
          title: "Multiplication Quest", 
          type: "Interactive", 
          duration: "20 mins",
          content: "Master multiplication concepts through visual arrays, repeated addition, and number patterns. Content includes multiplication facts 1-12, properties of multiplication, and real-world applications. Interactive challenges provide scaffolded support for diverse learning needs."
        },
        { 
          title: "Division Discovery", 
          type: "Game", 
          duration: "20 mins",
          content: "Learn division principles through sharing models and grouping examples. Content covers division as the inverse of multiplication, division facts, and introducing remainders. Visual models help conceptualize division and connect to fraction concepts."
        },
        { 
          title: "Math Games Tutorial", 
          type: "Video", 
          duration: "10 mins",
          content: "Guide to effective use of mathematical games for learning. Includes strategies for maximizing learning through gameplay, adapting games for different abilities, and connecting game concepts to curriculum standards. Features demonstration videos of engagement techniques."
        },
        { 
          title: "Problem-Solving Strategies", 
          type: "Video", 
          duration: "15 mins",
          content: "Structured approach to mathematical problem-solving. Content includes read-draw-solve method, working backwards, looking for patterns, and making organized lists. Real-world problems demonstrate how to apply each strategy with multiple solution pathways."
        }
      ]
    },
    {
      id: "visual-aids",
      title: "Visual Aids",
      content: "Learn with step-by-step illustrations and color-coded equations that break down complex problems into manageable parts. Visual cues help demonstrate mathematical relationships.",
      lessons: [
        { 
          title: "Color-Coded Equations", 
          type: "Visual Aid", 
          duration: "15 mins",
          content: "Mathematical operations visually distinguished through consistent color coding. Addition terms in green, subtraction in red, multiplication in blue, and division in orange helps students track operations in multi-step problems. Practice activities reinforce visual processing of equation components."
        },
        { 
          title: "Step-by-Step Problem Solving", 
          type: "Tutorial", 
          duration: "25 mins",
          content: "Systematic problem decomposition using the UPSC method: Understand, Plan, Solve, Check. Visual workflow guides break complex problems into manageable steps with decision points clearly marked. Includes worked examples with thinking aloud demonstrations."
        },
        { 
          title: "Visual Fractions", 
          type: "Interactive", 
          duration: "20 mins",
          content: "Fraction concepts illustrated through area models, number lines, and set models. Content covers equivalent fractions, comparing fractions, and operations with fractions. Interactive models allow students to manipulate fraction representations and visualize relationships."
        },
        { 
          title: "Geometry Visualizer", 
          type: "Visual Aid", 
          duration: "15 mins",
          content: "Interactive 3D models of geometric shapes with rotation, cross-section, and measurement tools. Features include net folding animations, coordinate geometry visualization, and transformation demonstrations. Virtual manipulatives allow hands-on exploration of geometric properties."
        },
        { 
          title: "Visualizing Math Concepts", 
          type: "Video", 
          duration: "12 mins",
          content: "Visual representation techniques for abstract mathematical ideas. Content includes using diagrams, charts, number lines, and manipulatives to convert symbolic math to visual understanding. Techniques address diverse learning preferences and processing styles."
        },
        { 
          title: "Understanding Fractions", 
          type: "Video", 
          duration: "14 mins",
          content: "Comprehensive introduction to fraction concepts including part-whole relationships, equivalent fractions, and fraction operations. Visual models demonstrate fraction principles with real-world examples. Progressive challenges build from simple fractions to complex operations."
        }
      ]
    },
    {
      id: "real-life",
      title: "Real-Life Applications",
      content: "Apply math skills to everyday situations like money handling, time management, and measurement. These practical examples show how math is used in daily life.",
      lessons: [
        { 
          title: "Money Math", 
          type: "Interactive", 
          duration: "20 mins",
          content: "Financial mathematics with realistic shopping scenarios and budget activities. Content includes identifying coins and bills, making change, calculating discounts, and basic budgeting. Interactive simulations provide practical application of addition, subtraction, and percentage calculations."
        },
        { 
          title: "Telling Time", 
          type: "Game", 
          duration: "15 mins",
          content: "Clock reading skills with digital and analog time displays. Content covers hour, half-hour, quarter-hour, and minute increments. Activities include time conversion, elapsed time calculation, and scheduling exercises with visual timeline supports."
        },
        { 
          title: "Measurement Madness", 
          type: "Interactive", 
          duration: "20 mins",
          content: "Practical measurement activities using standard and metric units. Content includes length, weight, volume, and temperature with conversion exercises. Estimation activities develop measurement sense, while practical measuring tasks connect to everyday experiences."
        },
        { 
          title: "Shopping Simulator", 
          type: "Game", 
          duration: "25 mins",
          content: "Virtual store environment for applying mathematical skills to consumer scenarios. Activities include comparison shopping, calculating totals, applying discounts, and staying within budgets. Decision-making challenges incorporate multiple operations in authentic contexts."
        },
        { 
          title: "Math in Daily Life", 
          type: "Video", 
          duration: "10 mins",
          content: "Exploration of mathematical applications in cooking, travel, sports, and home projects. Content highlights how math is used for measuring ingredients, calculating distances and times, tracking scores, and completing DIY projects. Real-world examples make abstract concepts concrete."
        },
        { 
          title: "Budgeting Basics", 
          type: "Video", 
          duration: "12 mins",
          content: "Introduction to personal finance using basic mathematical operations. Content covers income, expenses, saving goals, and making financial choices. Simplified budgeting activities provide scaffolded practice in money management with visual supports."
        }
      ]
    }
  ]
};

export default mathematicsData;
