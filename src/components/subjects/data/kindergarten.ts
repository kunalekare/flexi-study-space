import React from "react";
import { Smile } from "lucide-react";

const kindergartenData = {
  title: "For Kindergarten",
  description: "Fun and engaging lessons designed to support early learners through interactive storytelling, songs, and games.",
  icon: React.createElement(Smile, { className: "h-6 w-6" }),
  color: "bg-pink-50 dark:bg-pink-900/20",
  textColor: "text-pink-600 dark:text-pink-400",
  image: "https://www.eurokidsindia.com/blog/wp-content/uploads/2023/07/ideas-to-make-learning-interesting-870x570.jpg",
  sections: [
    {
      id: "stories",
      title: "Storytelling & Songs",
      content: "Engaging storytelling and sing-along Fsongs designed to improve language and listening skills.",
      lessons: [
        { title: "The Little Red Hen", type: "Story", duration: "10 mins" },
        { title: "Counting with Songs", type: "Sing-along", duration: "8 mins" },
        { title: "Fairy Tale Time", type: "Story", duration: "12 mins" },
        { title: "Alphabet Song", type: "Sing-along", duration: "5 mins" },
        { title: "Rhyming Fun", type: "Game", duration: "10 mins" },
        { title: "Bedtime Stories", type: "Story", duration: "15 mins" }
      ]
    },
    {
      id: "shapes",
      title: "Shapes & Colors",
      content: "Interactive activities to help young learners recognize and differentiate basic shapes and colors.",
      lessons: [
        { title: "Color Matching Game", type: "Interactive", duration: "10 mins" },
        { title: "Shape Hunt", type: "Game", duration: "12 mins" },
        { title: "Sorting by Color", type: "Activity", duration: "15 mins" },
        { title: "Drawing with Shapes", type: "Creative", duration: "20 mins" },
        { title: "Rainbow Colors", type: "Song", duration: "8 mins" },
        { title: "Shape Story Time", type: "Story", duration: "10 mins" }
      ]
    },
    {
      id: "early-math",
      title: "Early Math Skills",
      content: "Simple and interactive math exercises to introduce young learners to numbers and counting.",
      lessons: [
        { title: "Counting 1 to 10", type: "Interactive", duration: "10 mins" },
        { title: "Sorting & Matching", type: "Game", duration: "12 mins" },
        { title: "Simple Addition", type: "Interactive", duration: "15 mins" },
        { title: "Number Tracing", type: "Activity", duration: "15 mins" },
        { title: "Counting with Animals", type: "Video", duration: "8 mins" },
        { title: "Fun with Numbers", type: "Game", duration: "12 mins" }
      ]
    },
    {
      id: "logic",
      title: "Memory & Logic",
      content: "Fun puzzles and games to enhance early cognitive skills like memory and problem-solving.",
      lessons: [
        { title: "Find the Pattern", type: "Puzzle", duration: "15 mins" },
        { title: "Matching Game", type: "Interactive", duration: "10 mins" },
        { title: "Memory Challenge", type: "Game", duration: "12 mins" },
        { title: "Spot the Difference", type: "Puzzle", duration: "10 mins" },
        { title: "Logic Fun", type: "Game", duration: "12 mins" },
        { title: "Simple Mazes", type: "Activity", duration: "15 mins" }
      ]
    },
    {
      id: "learn-alphabets",
      title: "Learn Alphabets",
      content: "Engaging activities to help young learners recognize, write, and pronounce letters of the alphabet.",
      lessons: [
        { title: "A to Z Letter Recognition", type: "Interactive", duration: "10 mins" },
        { title: "Phonics Sounds", type: "Video", duration: "12 mins" },
        { title: "Letter Tracing Practice", type: "Activity", duration: "15 mins" },
        { title: "Alphabet Song", type: "Sing-along", duration: "8 mins" },
        { title: "Matching Letterhs with Objects", type: "Game", duration: "10 mins" },
        { title: "Alphabet Flashcards", type: "Memory Game", duration: "12 mins" },
       
      ]
    }    
  ]
};

export default kindergartenData;
