
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
        { title: "Number Recognition", type: "Interactive", duration: "15 mins" },
        { title: "Counting Games", type: "Game", duration: "10 mins" },
        { title: "Shape Explorer", type: "Visual Aid", duration: "20 mins" },
        { title: "Pattern Matching", type: "Interactive", duration: "15 mins" },
        { title: "Introduction to Numbers", type: "Video", duration: "8 mins" },
        { title: "Geometry Basics", type: "Video", duration: "12 mins" }
      ]
    },
    {
      id: "interactive-games",
      title: "Interactive Games",
      content: "Engage with virtual manipulatives for addition, subtraction, multiplication, and division. These games adapt to different learning speeds and provide instant feedback to reinforce concepts.",
      lessons: [
        { title: "Addition Adventure", type: "Game", duration: "15 mins" },
        { title: "Subtraction Safari", type: "Game", duration: "15 mins" },
        { title: "Multiplication Quest", type: "Interactive", duration: "20 mins" },
        { title: "Division Discovery", type: "Game", duration: "20 mins" },
        { title: "Math Games Tutorial", type: "Video", duration: "10 mins" },
        { title: "Problem-Solving Strategies", type: "Video", duration: "15 mins" }
      ]
    },
    {
      id: "visual-aids",
      title: "Visual Aids",
      content: "Learn with step-by-step illustrations and color-coded equations that break down complex problems into manageable parts. Visual cues help demonstrate mathematical relationships.",
      lessons: [
        { title: "Color-Coded Equations", type: "Visual Aid", duration: "15 mins" },
        { title: "Step-by-Step Problem Solving", type: "Tutorial", duration: "25 mins" },
        { title: "Visual Fractions", type: "Interactive", duration: "20 mins" },
        { title: "Geometry Visualizer", type: "Visual Aid", duration: "15 mins" },
        { title: "Visualizing Math Concepts", type: "Video", duration: "12 mins" },
        { title: "Understanding Fractions", type: "Video", duration: "14 mins" }
      ]
    },
    {
      id: "real-life",
      title: "Real-Life Applications",
      content: "Apply math skills to everyday situations like money handling, time management, and measurement. These practical examples show how math is used in daily life.",
      lessons: [
        { title: "Money Math", type: "Interactive", duration: "20 mins" },
        { title: "Telling Time", type: "Game", duration: "15 mins" },
        { title: "Measurement Madness", type: "Interactive", duration: "20 mins" },
        { title: "Shopping Simulator", type: "Game", duration: "25 mins" },
        { title: "Math in Daily Life", type: "Video", duration: "10 mins" },
        { title: "Budgeting Basics", type: "Video", duration: "12 mins" }
      ]
    }
  ]
};

export default mathematicsData;
