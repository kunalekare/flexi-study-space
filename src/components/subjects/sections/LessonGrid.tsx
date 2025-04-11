
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Play, Video } from "lucide-react";

interface Lesson {
  title: string;
  type: string;
  duration: string;
  content?: string;
  grade?: string;
}

interface LessonGridProps {
  section: {
    lessons: Lesson[];
  };
  selectedLevel: string;
  selectedGrade?: string;
  handlePlayVideo: (lesson: Lesson) => void;
}

const LessonGrid = ({ section, selectedLevel, selectedGrade = "all", handlePlayVideo }: LessonGridProps) => {
  // Level-specific descriptions
  const levelDescriptions = {
    beginner: "Foundational content for beginners",
    intermediate: "Challenging content for continuing learners",
    advanced: "Complex material for advanced students"
  };

  const [expandedLessons, setExpandedLessons] = useState<Record<string, boolean>>({});

  const toggleLessonExpansion = (lessonIndex: number) => {
    setExpandedLessons(prev => ({
      ...prev,
      [lessonIndex]: !prev[lessonIndex]
    }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Available Lessons</CardTitle>
        <CardDescription>
          {levelDescriptions[selectedLevel as keyof typeof levelDescriptions]}
          {selectedGrade !== "all" && ` - ${selectedGrade.replace("grade", "Grade ")} content`}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {section.lessons
            .filter((lesson) => {
              // Filter by level
              if (selectedLevel === "beginner") {
                if (!(lesson.type === "Simple" || lesson.type === "Beginner" || lesson.type === "Game" || lesson.type === "Story")) {
                  return false;
                }
              } else if (selectedLevel === "intermediate") {
                if (!(lesson.type === "Interactive" || lesson.type === "Activity" || lesson.type === "Intermediate")) {
                  return false;
                }
              } else if (selectedLevel === "advanced") {
                if (!(lesson.type === "Advanced" || lesson.type === "Creative" || lesson.type === "Puzzle")) {
                  return false;
                }
              }
              
              // Filter by grade
              if (selectedGrade !== "all" && lesson.grade && lesson.grade !== selectedGrade) {
                return false;
              }
              
              return true;
            })
            .map((lesson, index) => (
              <LessonCard 
                key={index} 
                lesson={lesson} 
                handlePlayVideo={handlePlayVideo} 
                lessonIndex={index}
                isExpanded={!!expandedLessons[index]}
                toggleExpansion={() => toggleLessonExpansion(index)}
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
  lessonIndex: number;
  isExpanded: boolean;
  toggleExpansion: () => void;
}

const LessonCard = ({ 
  lesson, 
  handlePlayVideo, 
  lessonIndex, 
  isExpanded, 
  toggleExpansion
}: LessonCardProps) => {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{lesson.title}</CardTitle>
          <div className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
            {lesson.type}
            {lesson.grade && ` - ${lesson.grade.replace("grade", "G")}`}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mb-3">
          <div className="text-sm text-muted-foreground">
            Duration: {lesson.duration}
          </div>
          <div className="flex gap-2">
            <Button 
              variant="ghost" 
              size="sm" 
              className="p-0"
              aria-label={`Start ${lesson.title} ${lesson.type}`}
              onClick={() => handlePlayVideo(lesson)}
            >
              {lesson.type.includes("Video") ? (
                <Video className="h-4 w-4 text-red-500" />
              ) : (
                <Play className="h-4 w-4" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleExpansion}
              aria-expanded={isExpanded}
              aria-controls={`lesson-content-${lessonIndex}`}
              aria-label={isExpanded ? "Collapse lesson content" : "Expand lesson content"}
            >
              {isExpanded ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
        
        {isExpanded && (
          <div 
            id={`lesson-content-${lessonIndex}`}
            className="border-t pt-3 mt-1 text-sm"
          >
            <p className="text-muted-foreground">{lesson.content}</p>
            <div className="mt-3">
              <Button 
                size="sm" 
                onClick={() => handlePlayVideo(lesson)}
                className="w-full"
              >
                {lesson.type.includes("Video") ? "Watch Video" : "Start Activity"}
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default LessonGrid;
