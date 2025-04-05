
import React from "react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Video } from "lucide-react";

interface Lesson {
  title: string;
  type: string;
  duration: string;
}

interface LessonGridProps {
  section: {
    lessons: Lesson[];
  };
  selectedLevel: string;
  handlePlayVideo: (lesson: Lesson) => void;
}

const LessonGrid = ({ section, selectedLevel, handlePlayVideo }: LessonGridProps) => {
  // Level-specific descriptions
  const levelDescriptions = {
    beginner: "Foundational content for beginners",
    intermediate: "Challenging content for continuing learners",
    advanced: "Complex material for advanced students"
  };

  // Lesson content descriptions - this maps each lesson title to a description
  const lessonDescriptions: Record<string, string> = {
    // Basic Concepts
    "Number Recognition": "Learn to identify numbers through visual and audio cues. Interactive exercises help reinforce number identification skills.",
    "Counting Games": "Fun games that teach counting principles through interactive activities. Practice counting objects and sequences.",
    "Shape Explorer": "Discover geometric shapes and their properties. Interactive activities help identify shapes in everyday objects.",
    "Pattern Matching": "Identify and create patterns using colors, shapes, and numbers. Develops critical thinking and sequencing skills.",
    "Introduction to Numbers": "Comprehensive overview of numbers and their uses in everyday life. Includes counting principles and number values.",
    "Geometry Basics": "Introduction to fundamental geometric concepts. Learn about shapes, lines, angles, and spatial relationships.",
    
    // Interactive Games
    "Addition Adventure": "Embark on a journey through addition problems with increasing difficulty. Visual aids make addition concepts clear.",
    "Subtraction Safari": "Explore subtraction through engaging safari-themed activities. Visual representations help understand number relationships.",
    "Multiplication Quest": "Master multiplication facts through interactive quests and challenges. Visual arrays demonstrate multiplication concepts.",
    "Division Discovery": "Learn division principles through interactive discovery activities. Visual sharing models illustrate division concepts.",
    "Math Games Tutorial": "Overview of mathematical games and how they reinforce key math concepts. Includes strategies for effective learning.",
    "Problem-Solving Strategies": "Learn approaches to solve math problems step-by-step. Includes visual models and thinking strategies.",
    
    // Visual Aids
    "Color-Coded Equations": "Understand equations through color-coding that highlights different parts. Makes abstract concepts more concrete.",
    "Step-by-Step Problem Solving": "Master the process of breaking down problems into manageable steps. Builds confidence in problem-solving.",
    "Visual Fractions": "Explore fractions through visual models. Interactive activities help understand part-whole relationships.",
    "Geometry Visualizer": "See geometric concepts come to life with interactive 3D models. Enhances spatial understanding.",
    "Visualizing Math Concepts": "Learn how visual aids can help understand abstract mathematical ideas. Includes multiple representation strategies.",
    "Understanding Fractions": "Comprehensive introduction to fractions and their operations. Visual models clarify fraction concepts.",
    
    // Real-Life Applications
    "Money Math": "Apply math skills to money scenarios. Learn counting money, making change, and budgeting basics.",
    "Telling Time": "Master clock reading and time concepts through interactive exercises. Connects digital and analog time displays.",
    "Measurement Madness": "Explore various measurement systems through fun activities. Practice estimating and converting measurements.",
    "Shopping Simulator": "Apply math in shopping contexts. Calculate costs, discounts, and make budget decisions.",
    "Math in Daily Life": "Discover how math is used every day, from cooking to travel. Makes mathematical concepts relevant.",
    "Budgeting Basics": "Learn fundamental budgeting principles. Apply addition, subtraction, and percentage calculations to money management."
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Available Lessons</CardTitle>
        <CardDescription>
          {levelDescriptions[selectedLevel as keyof typeof levelDescriptions]}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {section.lessons
            .filter((_, index) => {
              // Filter lessons based on level - this is a placeholder implementation
              // In a real app, each lesson would have its own level property
              if (selectedLevel === "beginner") return index < 4;
              if (selectedLevel === "intermediate") return index >= 2 && index < 5;
              if (selectedLevel === "advanced") return index >= 3;
              return true;
            })
            .map((lesson, index) => (
              <LessonCard 
                key={index} 
                lesson={lesson} 
                handlePlayVideo={handlePlayVideo} 
                description={lessonDescriptions[lesson.title] || "Explore this interactive lesson to enhance your understanding of the topic."}
              />
            ))}
        </div>
      </CardContent>
    </Card>
  );
};

interface LessonCardProps {
  lesson: Lesson;
  handlePlayVideo: (lesson: Lesson) => void;
  description: string;
}

const LessonCard = ({ lesson, handlePlayVideo, description }: LessonCardProps) => {
  return (
    <Card className="hover-lift cursor-pointer" onClick={() => handlePlayVideo(lesson)}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{lesson.title}</CardTitle>
          <div className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
            {lesson.type}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-3">
          {description}
        </p>
        <div className="flex justify-between items-center">
          <div className="text-sm text-muted-foreground">
            Duration: {lesson.duration}
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            className="p-0"
            aria-label={`Start ${lesson.title} ${lesson.type}`}
          >
            {lesson.type === "Video" ? (
              <Video className="h-4 w-4 text-red-500" />
            ) : (
              <Play className="h-4 w-4" />
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LessonGrid;
