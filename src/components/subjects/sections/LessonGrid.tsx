
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Play, Video, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Lesson {
  title: string;
  type: string;
  duration: string;
  content?: string;
  grade?: string;
  quizQuestions?: {
    question: string;
    options: string[];
    correctAnswer: number;
    explanation?: string;
  }[];
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

  // Filter lessons based on level, grade, and ensure they're properly displayed
  const filteredLessons = section.lessons.filter((lesson) => {
    // Filter by grade if a specific grade is selected
    if (selectedGrade !== "all" && lesson.grade && lesson.grade !== selectedGrade) {
      return false;
    }
    
    // Filter based on level
    if (selectedLevel === "beginner") {
      // For beginners, show content from grades 1-3
      const beginnerGrades = ["grade1", "grade2", "grade3"];
      if (lesson.grade && !beginnerGrades.includes(lesson.grade)) {
        return false;
      }
      if (!(lesson.type === "Simple" || lesson.type === "Beginner" || 
            lesson.type === "Game" || lesson.type === "Story" || 
            lesson.type === "Interactive" || lesson.type === "Visual Aid" || 
            lesson.type === "Video")) {
        return false;
      }
    } else if (selectedLevel === "intermediate") {
      // For intermediate, show content from grades 4-7
      const intermediateGrades = ["grade4", "grade5", "grade6", "grade7"];
      if (lesson.grade && !intermediateGrades.includes(lesson.grade)) {
        return false;
      }
      if (!(lesson.type === "Interactive" || lesson.type === "Activity" || 
            lesson.type === "Intermediate" || lesson.type === "Visual Aid" || 
            lesson.type === "Game" || lesson.type === "Tutorial")) {
        return false;
      }
    } else if (selectedLevel === "advanced") {
      // For advanced, show content from grades 8-10
      const advancedGrades = ["grade8", "grade9", "grade10"];
      if (lesson.grade && !advancedGrades.includes(lesson.grade)) {
        return false;
      }
      if (!(lesson.type === "Advanced" || lesson.type === "Creative" || 
            lesson.type === "Puzzle" || lesson.type === "Interactive" || 
            lesson.type === "Visual Aid")) {
        return false;
      }
    }
    
    return true;
  });

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
        {filteredLessons.length === 0 ? (
          <div className="text-center p-6 text-muted-foreground">
            No lessons available for the selected level and grade. Try changing your filters.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredLessons.map((lesson, index) => (
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
        )}
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
          <div className="flex flex-col gap-1 items-end">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
              {lesson.type}
            </div>
            {lesson.grade && (
              <Badge variant="outline" className="text-xs">
                Grade {lesson.grade.replace("grade", "")}
              </Badge>
            )}
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
            
            {lesson.quizQuestions && lesson.quizQuestions.length > 0 && (
              <div className="mt-2 p-2 bg-primary/5 rounded-md">
                <div className="flex items-center gap-1 text-primary text-sm font-medium mb-1">
                  <BookOpen className="h-3.5 w-3.5" />
                  <span>Interactive Quiz Available</span>
                </div>
                <p className="text-xs text-muted-foreground">{lesson.quizQuestions.length} questions to test your knowledge</p>
              </div>
            )}
            
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
