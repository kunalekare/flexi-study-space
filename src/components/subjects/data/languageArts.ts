
import React from "react";
import { BookOpen } from "lucide-react";

const languageArtsData = {
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
        { title: "Word Recognition", type: "Game", duration: "10 mins" },
        { title: "Phonics Basics", type: "Video", duration: "12 mins" },
        { title: "Reading Fundamentals", type: "Video", duration: "15 mins" }
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
        { title: "Digital Writing Tools", type: "Interactive", duration: "25 mins" },
        { title: "Assistive Tech Overview", type: "Video", duration: "10 mins" },
        { title: "Digital Reading Tools", type: "Video", duration: "12 mins" }
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
        { title: "Sequencing Events", type: "Game", duration: "15 mins" },
        { title: "Storytelling Techniques", type: "Video", duration: "15 mins" },
        { title: "Visual Narrative Guide", type: "Video", duration: "10 mins" }
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
        { title: "Grammar Games", type: "Game", duration: "15 mins" },
        { title: "Grammar Fundamentals", type: "Video", duration: "12 mins" },
        { title: "Writing Workshop", type: "Video", duration: "18 mins" }
      ]
    }
  ]
};

export default languageArtsData;
