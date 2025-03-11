import React from "react";
import { 
  Calculator, 
  Beaker, 
  BookOpen, 
  Globe, 
  Palette
} from "lucide-react";

const SubjectData = {
  "mathematics": {
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
          { title: "Pattern Matching", type: "Interactive", duration: "15 mins" }
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
          { title: "Division Discovery", type: "Game", duration: "20 mins" }
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
          { title: "Geometry Visualizer", type: "Visual Aid", duration: "15 mins" }
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
          { title: "Shopping Simulator", type: "Game", duration: "25 mins" }
        ]
      }
    ]
  },
  "science": {
    title: "Science",
    description: "Explore science concepts through multi-sensory experiences, simulations, and adaptive experiments.",
    icon: React.createElement(Beaker, { className: "h-6 w-6" }),
    color: "bg-emerald-50 dark:bg-emerald-900/20",
    textColor: "text-emerald-600 dark:text-emerald-400",
    image: "https://images.unsplash.com/photo-1532094349884-543019a69b2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        id: "animated-lessons",
        title: "Animated Lessons",
        content: "Learn about concepts like gravity, life cycles, weather, and body parts through engaging animations. These visual explanations make abstract science concepts concrete and memorable.",
        lessons: [
          { title: "Gravity Explorer", type: "Animation", duration: "10 mins" },
          { title: "Life Cycle Journey", type: "Interactive", duration: "15 mins" },
          { title: "Weather Wonders", type: "Animation", duration: "12 mins" },
          { title: "Human Body Basics", type: "Interactive", duration: "20 mins" }
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
          { title: "Simple Machines", type: "Experiment", duration: "30 mins" }
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
          { title: "Solar System Journey", type: "Interactive", duration: "30 mins" }
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
          { title: "Desert Discoveries", type: "Interactive", duration: "20 mins" }
        ]
      }
    ]
  },
  "language-arts": {
    title: "Language Arts",
    description: "Improve literacy skills with text-to-speech, customizable reading formats, and assistive writing tools.",
    icon: React.createElement(BookOpen, { className: "h-6 w-6" }),
    color: "bg-amber-50 dark:bg-amber-900/20",
    textColor: "text-amber-600 dark:text-amber-400",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        id: "phonics",
        title: "Phonics & Sight Words",
        content: "Master reading fundamentals with audio-supported exercises that reinforce letter-sound relationships and common word recognition. Multi-sensory approaches support diverse learning needs.",
        lessons: [
          { title: "Letter Sounds", type: "Interactive", duration: "10 mins" },
          { title: "Sight Word Games", type: "Game", duration: "15 mins" },
          { title: "Blending Sounds", type: "Interactive", duration: "12 mins" },
          { title: "Word Recognition", type: "Game", duration: "10 mins" }
        ]
      },
      {
        id: "assistive-tech",
        title: "Assistive Technology",
        content: "Use text-to-speech and speech-to-text tools that help students with reading or writing challenges. These technologies remove barriers to literacy and support independent learning.",
        lessons: [
          { title: "Text-to-Speech Basics", type: "Tutorial", duration: "15 mins" },
          { title: "Speech-to-Text Practice", type: "Interactive", duration: "20 mins" },
          { title: "Screen Reader Navigation", type: "Tutorial", duration: "15 mins" },
          { title: "Digital Writing Tools", type: "Interactive", duration: "25 mins" }
        ]
      },
      {
        id: "storytelling",
        title: "Visual Storytelling",
        content: "Enjoy animated books with subtitles and sign language options that make stories accessible to all. Visual supports enhance comprehension and engagement with literature.",
        lessons: [
          { title: "Interactive Storybook", type: "Story", duration: "15 mins" },
          { title: "Visual Narrative Creation", type: "Interactive", duration: "25 mins" },
          { title: "Sign Language Stories", type: "Video", duration: "20 mins" },
          { title: "Sequencing Events", type: "Game", duration: "15 mins" }
        ]
      },
      {
        id: "sentence-building",
        title: "Sentence Building",
        content: "Practice language skills with drag-and-drop games that teach sentence structure and grammar in an intuitive, visual way. Adjustable difficulty levels support progressive learning.",
        lessons: [
          { title: "Simple Sentences", type: "Interactive", duration: "15 mins" },
          { title: "Question Formation", type: "Game", duration: "15 mins" },
          { title: "Descriptive Writing", type: "Interactive", duration: "20 mins" },
          { title: "Grammar Games", type: "Game", duration: "15 mins" }
        ]
      }
    ]
  },
  "social-studies": {
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
          { title: "Timeline Explorer", type: "Interactive", duration: "15 mins" }
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
          { title: "Neighborhood Explorer", type: "Virtual Tour", duration: "25 mins" }
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
          { title: "Map Reading Skills", type: "Interactive", duration: "20 mins" }
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
          { title: "Empathy Building", type: "Game", duration: "20 mins" }
        ]
      }
    ]
  },
  "art-music": {
    title: "Art & Music",
    description: "Creative expression through accessible art tools, audio-based music lessons, and tactile experiences.",
    icon: React.createElement(Palette, { className: "h-6 w-6" }),
    color: "bg-rose-50 dark:bg-rose-900/20",
    textColor: "text-rose-600 dark:text-rose-400",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        id: "digital-art",
        title: "Digital Art Tools",
        content: "Create with adaptive tools designed for students with motor challenges. Options include switch-activated drawing, eye-tracking painting, and touch-sensitive coloring.",
        lessons: [
          { title: "Digital Coloring", type: "Interactive", duration: "15 mins" },
          { title: "Simple Drawing Tools", type: "Interactive", duration: "20 mins" },
          { title: "Pattern Creator", type: "Interactive", duration: "15 mins" },
          { title: "Digital Collage", type: "Interactive", duration: "25 mins" }
        ]
      },
      {
        id: "sensory-art",
        title: "Sensory Art",
        content: "Engage with 3D models and clay modeling guides that provide tactile artistic experiences. These activities support sensory exploration and fine motor development.",
        lessons: [
          { title: "Texture Explorer", type: "Interactive", duration: "15 mins" },
          { title: "Virtual Clay Modeling", type: "Interactive", duration: "20 mins" },
          { title: "3D Art Creation", type: "Interactive", duration: "25 mins" },
          { title: "Sensory Painting", type: "Tutorial", duration: "15 mins" }
        ]
      },
      {
        id: "music-therapy",
        title: "Music Therapy",
        content: "Experience simple rhythm exercises, calming sounds, and sing-along songs that use music as a therapeutic and educational tool. Audio quality is optimized for hearing aids.",
        lessons: [
          { title: "Rhythm Basics", type: "Interactive", duration: "10 mins" },
          { title: "Calming Sounds", type: "Audio", duration: "15 mins" },
          { title: "Sing-Along Songs", type: "Interactive", duration: "15 mins" },
          { title: "Music & Emotions", type: "Interactive", duration: "20 mins" }
        ]
      },
      {
        id: "instruments",
        title: "Instrument Exploration",
        content: "Play virtual piano, drum, and guitar with touch/tap features adapted for different abilities. Simplified interfaces make music-making accessible to everyone.",
        lessons: [
          { title: "Virtual Piano", type: "Interactive", duration: "15 mins" },
          { title: "Drum Rhythms", type: "Interactive", duration: "15 mins" },
          { title: "Guitar Basics", type: "Interactive", duration: "20 mins" },
          { title: "Music Maker", type: "Interactive", duration: "25 mins" }
        ]
      }
    ]
  }
};

export default SubjectData;
