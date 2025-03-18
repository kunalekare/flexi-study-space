
import React from "react";
import { Beaker } from "lucide-react";

const scienceData = {
  title: "Science",
  description: "Explore science concepts through multi-sensory experiences, simulations, and adaptive experiments.",
  icon: React.createElement(Beaker, { className: "h-6 w-6" }),
  color: "bg-emerald-50 dark:bg-emerald-900/20",
  textColor: "text-emerald-600 dark:text-emerald-400",
  image: "https://www.graduateprogram.org/wp-content/uploads/2022/11/Nov-23-Strategies-for-Teaching-Students-with-Disabilities_web.jpg",
  sections: [
    {
      id: "animated-lessons",
      title: "Animated Lessons",
      content: "Learn about concepts like gravity, life cycles, weather, and body parts through engaging animations. These visual explanations make abstract science concepts concrete and memorable.",
      lessons: [
        { title: "Gravity Explorer", type: "Animation", duration: "10 mins" },
        { title: "Life Cycle Journey", type: "Interactive", duration: "15 mins" },
        { title: "Weather Wonders", type: "Animation", duration: "12 mins" },
        { title: "Human Body Basics", type: "Interactive", duration: "20 mins" },
        { title: "The Water Cycle", type: "Video", duration: "8 mins" },
        { title: "Exploring Photosynthesis", type: "Video", duration: "12 mins" }
      ]
    },
    {
      id: "hands-on",
      title: "Hands-on Experiments",
      content: "Follow simple DIY science activities with step-by-step video tutorials. Each experiment uses common household items and includes safety guidelines and modifications for different abilities.",
      lessons: [
        { title: "Kitchen Chemistry", type: "Video Tutorial", duration: "25 mins" },
        { title: "Plant Growth Lab", type: "Experiment", duration: "15 mins" },
        { title: "Water Properties", type: "Video Tutorial", duration: "20 mins" },
        { title: "Simple Machines", type: "Experiment", duration: "30 mins" },
        { title: "Safe Home Experiments", type: "Video", duration: "15 mins" },
        { title: "Chemical Reactions Demo", type: "Video", duration: "10 mins" }
      ]
    },
    {
      id: "virtual-labs",
      title: "Virtual Labs",
      content: "Experiment in safe and interactive online simulations that allow for risk-free scientific exploration. These virtual environments let students explore cause and effect without safety concerns.",
      lessons: [
        { title: "Chemistry Lab Simulator", type: "Virtual Lab", duration: "25 mins" },
        { title: "Ecosystem Explorer", type: "Interactive", duration: "20 mins" },
        { title: "Energy Transformation", type: "Virtual Lab", duration: "15 mins" },
        { title: "Solar System Journey", type: "Interactive", duration: "30 mins" },
        { title: "Virtual Lab Tutorial", type: "Video", duration: "8 mins" },
        { title: "Biology Lab Introduction", type: "Video", duration: "14 mins" }
      ]
    },
    {
      id: "nature",
      title: "Nature Exploration",
      content: "Take virtual field trips to forests, oceans, or space with immersive, accessible experiences. These journeys include audio descriptions, visual enhancements, and interactive elements.",
      lessons: [
        { title: "Forest Ecosystem", type: "Virtual Field Trip", duration: "20 mins" },
        { title: "Ocean Depths", type: "Interactive", duration: "25 mins" },
        { title: "Space Adventure", type: "Virtual Field Trip", duration: "30 mins" },
        { title: "Desert Discoveries", type: "Interactive", duration: "20 mins" },
        { title: "Rainforest Exploration", type: "Video", duration: "15 mins" },
        { title: "Marine Life Documentary", type: "Video", duration: "18 mins" }
      ]
    }
  ]
};

export default scienceData;
