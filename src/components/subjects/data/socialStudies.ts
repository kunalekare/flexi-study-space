
import React from "react";
import { Globe } from "lucide-react";

const socialStudiesData = {
  title: "Social Studies",
  description: "Experience history and cultures through accessible storytelling, audio narrations, and visual aids.",
  icon: React.createElement(Globe, { className: "h-6 w-6" }),
  color: "bg-purple-50 dark:bg-purple-900/20",
  textColor: "text-purple-600 dark:text-purple-400",
  image: "https://images.unsplash.com/photo-1447069387593-a5de0862481e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
  sections: [
    {
      id: "history",
      title: "History Through Storytelling",
      content: "Learn about historical events through engaging animated stories that present history in an accessible, narrative format. Audio narration and visual supports enhance understanding.",
      lessons: [
        { title: "Ancient Civilizations", type: "Animation", duration: "20 mins" },
        { title: "Important Inventions", type: "Story", duration: "15 mins" },
        { title: "Historical Heroes", type: "Interactive", duration: "25 mins" },
        { title: "Timeline Explorer", type: "Interactive", duration: "15 mins" },
        { title: "World History Overview", type: "Video", duration: "18 mins" },
        { title: "Famous Historical Figures", type: "Video", duration: "15 mins" }
      ]
    },
    {
      id: "community",
      title: "Community & Daily Life",
      content: "Understand the roles of family members, community helpers, and safety rules through interactive scenarios. These lessons help students navigate everyday social situations.",
      lessons: [
        { title: "Family Roles", type: "Interactive", duration: "15 mins" },
        { title: "Community Helpers", type: "Game", duration: "20 mins" },
        { title: "Safety Rules", type: "Interactive", duration: "15 mins" },
        { title: "Neighborhood Explorer", type: "Virtual Tour", duration: "25 mins" },
        { title: "Community Services", type: "Video", duration: "12 mins" },
        { title: "Daily Routines", type: "Video", duration: "10 mins" }
      ]
    },
    {
      id: "maps",
      title: "Maps & Geography",
      content: "Explore interactive maps with zoom-in features for easy navigation and understanding of geographical concepts. Color-coding and symbols make spatial relationships clearer.",
      lessons: [
        { title: "World Continents", type: "Interactive Map", duration: "20 mins" },
        { title: "Country Explorer", type: "Interactive", duration: "15 mins" },
        { title: "Landform Basics", type: "Visual Aid", duration: "15 mins" },
        { title: "Map Reading Skills", type: "Interactive", duration: "20 mins" },
        { title: "Map Reading Guide", type: "Video", duration: "10 mins" },
        { title: "Geography Fundamentals", type: "Video", duration: "15 mins" }
      ]
    },
    {
      id: "diversity",
      title: "Diversity & Inclusion",
      content: "Engage with stories and activities promoting social awareness and celebrating differences. These lessons foster empathy and understanding of diverse perspectives.",
      lessons: [
        { title: "Cultural Celebrations", type: "Interactive", duration: "20 mins" },
        { title: "Diverse Abilities", type: "Story", duration: "15 mins" },
        { title: "Global Traditions", type: "Interactive", duration: "25 mins" },
        { title: "Empathy Building", type: "Game", duration: "20 mins" },
        { title: "Cultural Diversity", type: "Video", duration: "15 mins" },
        { title: "Inclusive Communities", type: "Video", duration: "12 mins" }
      ]
    }
  ]
};

export default socialStudiesData;
