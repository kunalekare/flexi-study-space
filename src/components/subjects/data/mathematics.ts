
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
          content: "Learn to identify and recognize numbers 0-100. Practice exercises include matching numbers to quantities, ordering numbers, and identifying numbers in everyday contexts.",
          grade: "grade1",
          quizQuestions: [
            {
              question: "What number comes after 5?",
              options: ["4", "5", "6", "7"],
              correctAnswer: 2,
              explanation: "When counting forward, the number 6 comes after 5."
            },
            {
              question: "Which of these shows the numbers in order from smallest to largest?",
              options: ["9, 7, 5, 3", "2, 5, 8, 10", "10, 7, 4, 1", "5, 5, 5, 5"],
              correctAnswer: 1,
              explanation: "The sequence 2, 5, 8, 10 shows numbers arranged from smallest to largest."
            },
            {
              question: "How many apples are in the picture?",
              options: ["3", "4", "5", "6"],
              correctAnswer: 2,
              explanation: "There are 5 apples shown in the picture."
            }
          ]
        },
        { 
          title: "Counting Games", 
          type: "Game", 
          duration: "10 mins",
          content: "Interactive counting activities from 1-20 with visual supports.",
          grade: "grade1",
          quizQuestions: [
            {
              question: "Count the stars: ★ ★ ★ ★. How many are there?",
              options: ["3", "4", "5", "6"],
              correctAnswer: 1,
              explanation: "There are 4 stars shown."
            },
            {
              question: "If you have 3 blocks and get 2 more, how many blocks do you have now?",
              options: ["3", "4", "5", "6"],
              correctAnswer: 2,
              explanation: "3 blocks + 2 more blocks = 5 blocks total."
            }
          ]
        },
        { 
          title: "Shape Explorer", 
          type: "Visual Aid", 
          duration: "20 mins",
          content: "Comprehensive exploration of 2D and 3D shapes with interactive models.",
          grade: "grade2",
          quizQuestions: [
            {
              question: "Which shape has 4 equal sides?",
              options: ["Rectangle", "Triangle", "Square", "Circle"],
              correctAnswer: 2,
              explanation: "A square has 4 sides of equal length."
            },
            {
              question: "What shape is a ball?",
              options: ["Cube", "Sphere", "Cylinder", "Cone"],
              correctAnswer: 1,
              explanation: "A ball is a sphere - a 3D shape where all points on the surface are equidistant from the center."
            }
          ]
        },
        { 
          title: "Pattern Matching", 
          type: "Interactive", 
          duration: "15 mins",
          content: "Develop pattern recognition skills with visual and interactive sequences.",
          grade: "grade2",
          quizQuestions: [
            {
              question: "What comes next in the pattern: ◯, △, □, ◯, △, ...?",
              options: ["◯", "△", "□", "⬡"],
              correctAnswer: 2,
              explanation: "The pattern is circle, triangle, square, repeating. After the triangle, the next shape is a square."
            }
          ]
        },
        { 
          title: "Fractions Introduction", 
          type: "Interactive", 
          duration: "25 mins",
          content: "Learn basic fractions through visual models and interactive examples.",
          grade: "grade3",
          quizQuestions: [
            {
              question: "Which fraction represents half of a whole?",
              options: ["1/4", "1/3", "1/2", "2/3"],
              correctAnswer: 2,
              explanation: "1/2 (one-half) represents exactly half of a whole."
            },
            {
              question: "If a pizza is cut into 8 equal slices and you eat 2 slices, what fraction of the pizza did you eat?",
              options: ["2/8", "1/4", "2/6", "1/8"],
              correctAnswer: 0,
              explanation: "You ate 2 out of 8 slices, which is 2/8 of the whole pizza. This could also be simplified to 1/4."
            }
          ]
        },
        { 
          title: "Multiplication Basics", 
          type: "Interactive", 
          duration: "20 mins",
          content: "Master basic multiplication facts through visual arrays and repeated addition.",
          grade: "grade3",
          quizQuestions: [
            {
              question: "What is 3 × 4?",
              options: ["7", "10", "12", "15"],
              correctAnswer: 2,
              explanation: "3 × 4 means 3 groups of 4, which equals 12."
            },
            {
              question: "Which of these represents 5 × 2?",
              options: ["5 + 5", "5 + 2", "2 + 2 + 2 + 2 + 2", "10 ÷ 5"],
              correctAnswer: 0,
              explanation: "5 × 2 means 5 groups of 2, which can be written as 2 + 2 + 2 + 2 + 2, or more simply as 5 + 5."
            }
          ]
        },
        { 
          title: "Division Concepts", 
          type: "Interactive", 
          duration: "25 mins",
          content: "Understand division as sharing equally and as the inverse of multiplication.",
          grade: "grade4",
          quizQuestions: [
            {
              question: "What is 15 ÷ 3?",
              options: ["3", "5", "12", "18"],
              correctAnswer: 1,
              explanation: "15 ÷ 3 = 5, because 5 × 3 = 15."
            },
            {
              question: "If you have 20 candies to share equally among 4 friends, how many candies does each friend get?",
              options: ["4", "5", "16", "24"],
              correctAnswer: 1,
              explanation: "20 ÷ 4 = 5, so each friend gets 5 candies."
            }
          ]
        },
        { 
          title: "Decimals and Percentages", 
          type: "Interactive", 
          duration: "30 mins",
          content: "Connect fractions to decimals and percentages through real-world applications.",
          grade: "grade5",
          quizQuestions: [
            {
              question: "What is 0.5 as a percentage?",
              options: ["5%", "50%", "0.5%", "500%"],
              correctAnswer: 1,
              explanation: "To convert a decimal to a percentage, multiply by 100. So 0.5 × 100 = 50%."
            },
            {
              question: "What is 75% as a decimal?",
              options: ["0.075", "0.75", "7.5", "750"],
              correctAnswer: 1,
              explanation: "To convert a percentage to a decimal, divide by 100. So 75 ÷ 100 = 0.75."
            }
          ]
        },
        { 
          title: "Basic Algebra", 
          type: "Interactive", 
          duration: "25 mins",
          content: "Introduction to variables, expressions, and simple equations.",
          grade: "grade6",
          quizQuestions: [
            {
              question: "If 3x = 15, what is the value of x?",
              options: ["3", "5", "12", "45"],
              correctAnswer: 1,
              explanation: "To find x, divide both sides of the equation by 3: 3x ÷ 3 = 15 ÷ 3, so x = 5."
            },
            {
              question: "Which expression equals 2x + 3 when x = 4?",
              options: ["7", "11", "14", "24"],
              correctAnswer: 1,
              explanation: "Substitute x = 4 into the expression: 2(4) + 3 = 8 + 3 = 11."
            }
          ]
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
          content: "Journey through addition concepts with visual supports and concrete examples.",
          grade: "grade1",
          quizQuestions: [
            {
              question: "What is 4 + 3?",
              options: ["5", "6", "7", "8"],
              correctAnswer: 2,
              explanation: "4 + 3 = 7"
            },
            {
              question: "If you have 2 apples and get 5 more, how many apples do you have?",
              options: ["5", "6", "7", "8"],
              correctAnswer: 2,
              explanation: "2 apples + 5 more apples = 7 apples total."
            }
          ]
        },
        { 
          title: "Subtraction Safari", 
          type: "Game", 
          duration: "15 mins",
          content: "Explore subtraction through engaging safari-themed activities.",
          grade: "grade2",
          quizQuestions: [
            {
              question: "What is 9 - 4?",
              options: ["3", "4", "5", "6"],
              correctAnswer: 2,
              explanation: "9 - 4 = 5"
            },
            {
              question: "If you have 8 balloons and 3 pop, how many balloons do you have left?",
              options: ["3", "4", "5", "11"],
              correctAnswer: 2,
              explanation: "8 balloons - 3 popped balloons = 5 balloons left."
            }
          ]
        },
        { 
          title: "Multiplication Quest", 
          type: "Interactive", 
          duration: "20 mins",
          content: "Master multiplication concepts through visual arrays, repeated addition, and number patterns.",
          grade: "grade3",
          quizQuestions: [
            {
              question: "What is 6 × 7?",
              options: ["13", "36", "42", "49"],
              correctAnswer: 2,
              explanation: "6 × 7 = 42"
            },
            {
              question: "If a classroom has 5 rows of desks with 6 desks in each row, how many desks are there in total?",
              options: ["11", "15", "30", "36"],
              correctAnswer: 2,
              explanation: "5 rows × 6 desks = 30 desks total."
            }
          ]
        },
        { 
          title: "Division Discovery", 
          type: "Game", 
          duration: "20 mins",
          content: "Learn division principles through sharing models and grouping examples.",
          grade: "grade4",
          quizQuestions: [
            {
              question: "What is 32 ÷ 8?",
              options: ["2", "4", "6", "8"],
              correctAnswer: 1,
              explanation: "32 ÷ 8 = 4, because 4 × 8 = 32."
            },
            {
              question: "If 24 cookies are shared equally among 6 children, how many cookies does each child get?",
              options: ["3", "4", "6", "8"],
              correctAnswer: 1,
              explanation: "24 cookies ÷ 6 children = 4 cookies per child."
            }
          ]
        },
        { 
          title: "Fraction Operations", 
          type: "Interactive", 
          duration: "25 mins",
          content: "Practice adding, subtracting, multiplying, and dividing fractions.",
          grade: "grade5",
          quizQuestions: [
            {
              question: "What is 1/4 + 2/4?",
              options: ["1/2", "3/4", "3/8", "6/4"],
              correctAnswer: 1,
              explanation: "When adding fractions with the same denominator, add the numerators: 1/4 + 2/4 = 3/4."
            },
            {
              question: "What is 2/3 × 3/4?",
              options: ["1/2", "5/7", "6/12", "6/7"],
              correctAnswer: 0,
              explanation: "To multiply fractions, multiply the numerators and denominators: (2×3)/(3×4) = 6/12 = 1/2."
            }
          ]
        },
        { 
          title: "Geometry Quest", 
          type: "Interactive", 
          duration: "30 mins",
          content: "Explore angles, triangles, and quadrilaterals through interactive challenges.",
          grade: "grade6",
          quizQuestions: [
            {
              question: "What is the sum of angles in a triangle?",
              options: ["90°", "180°", "270°", "360°"],
              correctAnswer: 1,
              explanation: "The sum of angles in any triangle is always 180 degrees."
            },
            {
              question: "Which of these is a right angle?",
              options: ["45°", "90°", "180°", "360°"],
              correctAnswer: 1,
              explanation: "A right angle measures exactly 90 degrees."
            }
          ]
        }
      ]
    },
    {
      id: "visual-aids",
      title: "Visual Aids",
      content: "Learn with step-by-step illustrations and color-coded equations that break down complex problems into manageable parts. Visual cues help demonstrate mathematical relationships.",
      lessons: [
        { 
          title: "Algebraic Expressions", 
          type: "Visual Aid", 
          duration: "25 mins",
          content: "Understand how to write and evaluate algebraic expressions.",
          grade: "grade7",
          quizQuestions: [
            {
              question: "If x = 3 and y = 4, what is the value of 2x + y?",
              options: ["7", "10", "11", "14"],
              correctAnswer: 1,
              explanation: "Substitute the values: 2(3) + 4 = 6 + 4 = 10."
            },
            {
              question: "Which expression represents 'five more than twice a number'?",
              options: ["5n", "2 + 5n", "2n + 5", "5(2n)"],
              correctAnswer: 2,
              explanation: "'Twice a number' is 2n, and 'five more' means add 5, so the expression is 2n + 5."
            }
          ]
        },
        { 
          title: "Linear Equations", 
          type: "Interactive", 
          duration: "30 mins",
          content: "Learn to solve and graph linear equations in one and two variables.",
          grade: "grade7",
          quizQuestions: [
            {
              question: "Solve for x: 3x - 7 = 14",
              options: ["x = 3", "x = 7", "x = 9", "x = 21"],
              correctAnswer: 1,
              explanation: "3x - 7 = 14\n3x = 21\nx = 7"
            },
            {
              question: "Which point lies on the line y = 2x + 1?",
              options: ["(0, 0)", "(1, 1)", "(1, 3)", "(2, 3)"],
              correctAnswer: 2,
              explanation: "For point (1, 3), substitute x = 1: y = 2(1) + 1 = 3. So the point (1, 3) lies on the line."
            }
          ]
        },
        { 
          title: "Quadratic Functions", 
          type: "Visual Aid", 
          duration: "35 mins",
          content: "Explore quadratic functions and their graphs through interactive models.",
          grade: "grade8",
          quizQuestions: [
            {
              question: "What is the axis of symmetry for the parabola y = (x - 3)²?",
              options: ["x = 0", "x = 2", "x = 3", "x = 6"],
              correctAnswer: 2,
              explanation: "For a parabola in the form y = (x - h)², the axis of symmetry is x = h. Here, h = 3, so the axis is x = 3."
            },
            {
              question: "Which function has its vertex at the origin?",
              options: ["y = x²", "y = x² + 2", "y = (x - 1)²", "y = x² - 3"],
              correctAnswer: 0,
              explanation: "The function y = x² has its vertex at (0, 0), which is the origin."
            }
          ]
        },
        { 
          title: "Geometry & Measurement", 
          type: "Interactive", 
          duration: "30 mins",
          content: "Calculate area, perimeter, volume, and surface area of various shapes.",
          grade: "grade9",
          quizQuestions: [
            {
              question: "What is the area of a triangle with base 8 cm and height 6 cm?",
              options: ["14 cm²", "24 cm²", "48 cm²", "64 cm²"],
              correctAnswer: 1,
              explanation: "The area of a triangle is (base × height) ÷ 2. So (8 × 6) ÷ 2 = 48 ÷ 2 = 24 cm²."
            },
            {
              question: "A rectangular prism has length 5 m, width 3 m, and height 2 m. What is its volume?",
              options: ["10 m³", "15 m³", "25 m³", "30 m³"],
              correctAnswer: 3,
              explanation: "The volume of a rectangular prism is length × width × height. So 5 × 3 × 2 = 30 m³."
            }
          ]
        },
        { 
          title: "Trigonometry Basics", 
          type: "Visual Aid", 
          duration: "40 mins",
          content: "Introduction to sine, cosine, and tangent through right triangles.",
          grade: "grade10",
          quizQuestions: [
            {
              question: "In a right triangle, if sin(θ) = 0.6, what is cos(θ)?",
              options: ["0.6", "0.8", "1.0", "1.2"],
              correctAnswer: 1,
              explanation: "Using the Pythagorean identity sin²(θ) + cos²(θ) = 1, we get cos²(θ) = 1 - sin²(θ) = 1 - 0.36 = 0.64, so cos(θ) = 0.8."
            },
            {
              question: "In a right triangle, which side is opposite to the 90° angle?",
              options: ["Hypotenuse", "Adjacent side", "Opposite side", "None of these"],
              correctAnswer: 0,
              explanation: "The hypotenuse is always opposite to the 90° angle in a right triangle."
            }
          ]
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
          content: "Financial mathematics with realistic shopping scenarios and budget activities.",
          grade: "grade3",
          quizQuestions: [
            {
              question: "If you buy an item for $3.50 and give the cashier $5.00, how much change should you receive?",
              options: ["$1.00", "$1.50", "$2.00", "$2.50"],
              correctAnswer: 1,
              explanation: "$5.00 - $3.50 = $1.50"
            },
            {
              question: "Which is worth more: 3 quarters or 7 dimes?",
              options: ["3 quarters", "7 dimes", "They're equal", "Can't be determined"],
              correctAnswer: 0,
              explanation: "3 quarters = 3 × $0.25 = $0.75. 7 dimes = 7 × $0.10 = $0.70. So 3 quarters is worth more."
            }
          ]
        },
        { 
          title: "Telling Time", 
          type: "Game", 
          duration: "15 mins",
          content: "Clock reading skills with digital and analog time displays.",
          grade: "grade2",
          quizQuestions: [
            {
              question: "If it's 3:45, how many minutes until 4:00?",
              options: ["10 minutes", "15 minutes", "20 minutes", "30 minutes"],
              correctAnswer: 1,
              explanation: "From 3:45 to 4:00 is 15 minutes."
            },
            {
              question: "What time is shown on this analog clock? (Clock showing 7:30)",
              options: ["6:30", "7:30", "7:15", "7:45"],
              correctAnswer: 1,
              explanation: "The hour hand is between 7 and 8, and the minute hand is pointing to 6 (30 minutes). So the time is 7:30."
            }
          ]
        },
        { 
          title: "Measurement Madness", 
          type: "Interactive", 
          duration: "20 mins",
          content: "Practical measurement activities using standard and metric units.",
          grade: "grade4",
          quizQuestions: [
            {
              question: "Which unit would be best to measure the length of a pencil?",
              options: ["Kilometers", "Meters", "Centimeters", "Millimeters"],
              correctAnswer: 2,
              explanation: "Centimeters are appropriate for measuring small objects like pencils. Meters would be too large, and millimeters would result in unnecessarily large numbers."
            },
            {
              question: "How many milliliters are in 1 liter?",
              options: ["10 mL", "100 mL", "1,000 mL", "10,000 mL"],
              correctAnswer: 2,
              explanation: "There are 1,000 milliliters in 1 liter."
            }
          ]
        },
        { 
          title: "Data Analysis", 
          type: "Interactive", 
          duration: "25 mins",
          content: "Create and interpret graphs, charts, and basic statistics.",
          grade: "grade5",
          quizQuestions: [
            {
              question: "Which graph is best for showing how a student's test scores change over time?",
              options: ["Bar graph", "Line graph", "Pie chart", "Pictograph"],
              correctAnswer: 1,
              explanation: "A line graph is best for showing changes or trends over time."
            },
            {
              question: "The mean of five numbers is 15. If four of the numbers are 10, 12, 18, and 20, what is the fifth number?",
              options: ["10", "15", "17", "25"],
              correctAnswer: 1,
              explanation: "If the mean is 15, then the sum of all five numbers is 5 × 15 = 75. The sum of the four known numbers is 10 + 12 + 18 + 20 = 60. So the fifth number is 75 - 60 = 15."
            }
          ]
        },
        { 
          title: "Problem Solving Strategies", 
          type: "Interactive", 
          duration: "30 mins",
          content: "Learn various approaches to solve complex math problems.",
          grade: "grade6",
          quizQuestions: [
            {
              question: "A rectangular garden has a perimeter of 30 m and an area of 50 m². What are its dimensions?",
              options: ["5 m × 10 m", "5 m × 5 m", "10 m × 10 m", "15 m × 5 m"],
              correctAnswer: 0,
              explanation: "Let's say the length is l and the width is w. We know that 2l + 2w = 30 and l × w = 50. From the first equation, l + w = 15. Using these two equations, we can find that l = 10 and w = 5, so the dimensions are 5 m × 10 m."
            }
          ]
        }
      ]
    }
  ]
};

export default mathematicsData;
