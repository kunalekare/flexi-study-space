
import React from "react";
import { Palette } from "lucide-react";

const artMusicData = {
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
        { title: "Digital Collage", type: "Interactive", duration: "25 mins" },
        { title: "Digital Art Basics", type: "Video", duration: "12 mins" },
        { title: "Creative Digital Expression", type: "Video", duration: "15 mins" }
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
        { title: "Sensory Painting", type: "Tutorial", duration: "15 mins" },
        { title: "Tactile Art Techniques", type: "Video", duration: "12 mins" },
        { title: "Sensory Art Introduction", type: "Video", duration: "10 mins" }
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
        { title: "Music & Emotions", type: "Interactive", duration: "20 mins" },
        { title: "Music Therapy Principles", type: "Video", duration: "14 mins" },
        { title: "Sound Healing", type: "Video", duration: "12 mins" }
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
        { title: "Music Maker", type: "Interactive", duration: "25 mins" },
        { title: "Instrument Families", type: "Video", duration: "15 mins" },
        { title: "Learning Music Notation", type: "Video", duration: "12 mins" }
      ]
    }
  ]
};

export default artMusicData;
