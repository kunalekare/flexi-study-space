
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
              <LessonCard key={index} lesson={lesson} handlePlayVideo={handlePlayVideo} />
            ))}
        </div>
      </CardContent>
    </Card>
  );
};

interface LessonCardProps {
  lesson: Lesson;
  handlePlayVideo: (lesson: Lesson) => void;
}

const LessonCard = ({ lesson, handlePlayVideo }: LessonCardProps) => {
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
        <div className="flex justify-between items-center">
          <div className="text-sm text-muted-foreground">
            Duration: {lesson.duration}
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            className="p-0"
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
