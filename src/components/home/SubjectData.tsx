
import React from "react";
import { 
  Calculator, 
  Beaker, 
  BookOpen, 
  Globe, 
  Palette,
  Smile,
  ShoppingCart
} from "lucide-react";
import { SubjectCardProps } from "./types";

const subjects: SubjectCardProps[] = [
  {
    id: "mathematics",
    title: "Mathematics",
    description: "Interactive math lessons with visual representations, audio support, and step-by-step problem solving for all learning abilities.",
    icon: <Calculator className="h-6 w-6" />,
    color: "bg-blue-50 dark:bg-blue-900/20",
    textColor: "text-blue-600 dark:text-blue-400",
    ringColor: "focus-visible:ring-blue-500",
    features: [
      "Basic number concepts with visual aids",
      "Interactive games with virtual manipulatives",
      "Color-coded equations and step-by-step solutions",
      "Adaptive difficulty levels based on progress",
      "Real-life applications like money and time",
      "Speech-to-text support for math problems"
    ]
  },
  {
    id: "for-kindergarten",
    title: "For Kindergarten",
    description: "Fun and interactive learning with songs, stories, and engaging activities designed for early learners.",
    icon: <Smile className="h-6 w-6" />,
    color: "bg-pink-50 dark:bg-pink-900/20",
    textColor: "text-pink-600 dark:text-pink-400",
    ringColor: "focus-visible:ring-pink-500",
    features: [
      "Animated storytelling with simple language",
      "Sing-along songs for language development",
      "Interactive shape and color recognition games",
      "Hands-on learning through virtual crafts",
      "Basic counting and alphabet activities",
      "Play-based memory and logic puzzles"
    ]
  },
  {
    id: "science",
    title: "Science",
    description: "Explore science concepts through multi-sensory experiences, simulations, and adaptive experiments designed for diverse learning needs.",
    icon: <Beaker className="h-6 w-6" />,
    color: "bg-emerald-50 dark:bg-emerald-900/20",
    textColor: "text-emerald-600 dark:text-emerald-400",
    ringColor: "focus-visible:ring-emerald-500",
    features: [
      "Animated lessons for fundamental concepts",
      "Hands-on experiments with video tutorials",
      "Virtual labs and interactive simulations",
      "Sensory-based learning with textures and sounds",
      "Virtual field trips to natural environments",
      "Accessible scientific terminology"
    ]
  },
  {
    id: "language-arts",
    title: "Language Arts",
    description: "Improve literacy skills with text-to-speech, customizable reading formats, and assistive writing tools tailored to diverse abilities.",
    icon: <BookOpen className="h-6 w-6" />,
    color: "bg-amber-50 dark:bg-amber-900/20",
    textColor: "text-amber-600 dark:text-amber-400",
    ringColor: "focus-visible:ring-amber-500",
    features: [
      "Phonics and sight words with audio support",
      "Text-to-speech and speech-to-text tools",
      "Visual storytelling with sign language options",
      "Interactive sentence building games",
      "Picture-based communication support",
      "Customizable text formats for different needs"
    ]
  },
  {
    id: "social-studies",
    title: "Social Studies",
    description: "Experience history and cultures through accessible storytelling, interactive maps, and inclusive activities designed for all students.",
    icon: <Globe className="h-6 w-6" />,
    color: "bg-purple-50 dark:bg-purple-900/20",
    textColor: "text-purple-600 dark:text-purple-400",
    ringColor: "focus-visible:ring-purple-500",
    features: [
      "History through engaging animated stories",
      "Community roles and safety awareness",
      "Interactive maps with zoom features",
      "Diversity and inclusion activities",
      "Virtual cultural experiences",
      "Accessible historical timelines"
    ]
  },
  {
    id: "art-music",
    title: "Art & Music",
    description: "Creative expression through accessible art tools, audio-based music lessons, and adaptive activities for students of all abilities.",
    icon: <Palette className="h-6 w-6" />,
    color: "bg-rose-50 dark:bg-rose-900/20",
    textColor: "text-rose-600 dark:text-rose-400",
    ringColor: "focus-visible:ring-rose-500",
    features: [
      "Digital art tools with adaptive controls",
      "Sensory art projects and 3D modeling",
      "Music therapy and rhythm exercises",
      "Virtual instruments with simplified controls",
      "Guided movement and dance videos",
      "Creative expression for all abilities"
    ]
  },
  {
    id: "learn-to-shop",
    title: "Learn to Shop",
    description: "Master essential shopping skills including how to identify items, compare prices, and make smart shopping decisions both in-store and online.",
    icon: <ShoppingCart className="h-6 w-6" />,
    color: "bg-teal-50 dark:bg-teal-900/20",
    textColor: "text-teal-600 dark:text-teal-400",
    ringColor: "focus-visible:ring-teal-500",
    features: [
      "Understanding money and prices",
      "Navigating stores and websites safely",
      "Interactive shopping simulations",
      "Budget planning and price comparisons",
      "Smart shopping tips and strategies",
      "Accessible checkout and payment methods"
    ]
  }
];

export default subjects;
