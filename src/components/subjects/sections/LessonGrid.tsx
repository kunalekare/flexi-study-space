
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Play, Video } from "lucide-react";

interface Lesson {
  title: string;
  type: string;
  duration: string;
  content?: string;
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

  // Lesson content - this maps each lesson title to actual content
  const lessonContents: Record<string, string> = {
    // Basic Concepts
    "Number Recognition": "Learn to identify and recognize numbers 0-100. Practice exercises include matching numbers to quantities, ordering numbers, and identifying numbers in everyday contexts. Activities include digital flashcards, number sequence games, and audio-supported number identification.",
    "Counting Games": "Interactive counting activities from 1-20 with visual supports. Games include counting objects, skip counting by 2s and 5s, and matching numbers to quantities. Features adaptive difficulty levels and immediate feedback for reinforcement learning.",
    "Shape Explorer": "Comprehensive exploration of 2D and 3D shapes with interactive models. Learn about circles, squares, triangles, rectangles, spheres, cubes, cylinders, and cones. Activities include shape sorting, shape hunts in everyday objects, and creating pictures with shapes.",
    "Pattern Matching": "Develop pattern recognition skills with visual and interactive sequences. Activities include completing patterns, creating patterns, and identifying pattern rules. Patterns progress from simple color patterns to more complex numerical and geometric sequences.",
    "Introduction to Numbers": "Fundamental number concepts including counting, number recognition, and one-to-one correspondence. Content includes number formation, number values, and place value introduction. Interactive activities reinforce number sense and quantity understanding.",
    "Geometry Basics": "Introduction to spatial reasoning and geometric principles. Topics include points, lines, angles, and basic shapes. Interactive activities help students identify geometric concepts in the real world and understand spatial relationships.",
    
    // Interactive Games
    "Addition Adventure": "Journey through addition concepts with visual supports and concrete examples. Content progresses from simple single-digit addition to adding multiple numbers and introducing the commutative property. Games adapt to learner pace and provide multiple strategies for solving addition problems.",
    "Subtraction Safari": "Explore subtraction through engaging safari-themed activities. Visual models demonstrate 'taking away' and 'finding the difference' approaches to subtraction. Progressive challenges build from simple subtraction facts to multi-digit subtraction with regrouping.",
    "Multiplication Quest": "Master multiplication concepts through visual arrays, repeated addition, and number patterns. Content includes multiplication facts 1-12, properties of multiplication, and real-world applications. Interactive challenges provide scaffolded support for diverse learning needs.",
    "Division Discovery": "Learn division principles through sharing models and grouping examples. Content covers division as the inverse of multiplication, division facts, and introducing remainders. Visual models help conceptualize division and connect to fraction concepts.",
    "Math Games Tutorial": "Guide to effective use of mathematical games for learning. Includes strategies for maximizing learning through gameplay, adapting games for different abilities, and connecting game concepts to curriculum standards. Features demonstration videos of engagement techniques.",
    "Problem-Solving Strategies": "Structured approach to mathematical problem-solving. Content includes read-draw-solve method, working backwards, looking for patterns, and making organized lists. Real-world problems demonstrate how to apply each strategy with multiple solution pathways.",
    
    // Visual Aids
    "Color-Coded Equations": "Mathematical operations visually distinguished through consistent color coding. Addition terms in green, subtraction in red, multiplication in blue, and division in orange helps students track operations in multi-step problems. Practice activities reinforce visual processing of equation components.",
    "Step-by-Step Problem Solving": "Systematic problem decomposition using the UPSC method: Understand, Plan, Solve, Check. Visual workflow guides break complex problems into manageable steps with decision points clearly marked. Includes worked examples with thinking aloud demonstrations.",
    "Visual Fractions": "Fraction concepts illustrated through area models, number lines, and set models. Content covers equivalent fractions, comparing fractions, and operations with fractions. Interactive models allow students to manipulate fraction representations and visualize relationships.",
    "Geometry Visualizer": "Interactive 3D models of geometric shapes with rotation, cross-section, and measurement tools. Features include net folding animations, coordinate geometry visualization, and transformation demonstrations. Virtual manipulatives allow hands-on exploration of geometric properties.",
    "Visualizing Math Concepts": "Visual representation techniques for abstract mathematical ideas. Content includes using diagrams, charts, number lines, and manipulatives to convert symbolic math to visual understanding. Techniques address diverse learning preferences and processing styles.",
    "Understanding Fractions": "Comprehensive introduction to fraction concepts including part-whole relationships, equivalent fractions, and fraction operations. Visual models demonstrate fraction principles with real-world examples. Progressive challenges build from simple fractions to complex operations.",
    
    // Real-Life Applications
    "Money Math": "Financial mathematics with realistic shopping scenarios and budget activities. Content includes identifying coins and bills, making change, calculating discounts, and basic budgeting. Interactive simulations provide practical application of addition, subtraction, and percentage calculations.",
    "Telling Time": "Clock reading skills with digital and analog time displays. Content covers hour, half-hour, quarter-hour, and minute increments. Activities include time conversion, elapsed time calculation, and scheduling exercises with visual timeline supports.",
    "Measurement Madness": "Practical measurement activities using standard and metric units. Content includes length, weight, volume, and temperature with conversion exercises. Estimation activities develop measurement sense, while practical measuring tasks connect to everyday experiences.",
    "Shopping Simulator": "Virtual store environment for applying mathematical skills to consumer scenarios. Activities include comparison shopping, calculating totals, applying discounts, and staying within budgets. Decision-making challenges incorporate multiple operations in authentic contexts.",
    "Math in Daily Life": "Exploration of mathematical applications in cooking, travel, sports, and home projects. Content highlights how math is used for measuring ingredients, calculating distances and times, tracking scores, and completing DIY projects. Real-world examples make abstract concepts concrete.",
    "Budgeting Basics": "Introduction to personal finance using basic mathematical operations. Content covers income, expenses, saving goals, and making financial choices. Simplified budgeting activities provide scaffolded practice in money management with visual supports."
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
            .map((lesson, index) => {
              // Ensure the lesson has content from our mapping or use the content property if available
              const enrichedLesson = {
                ...lesson,
                content: lesson.content || lessonContents[lesson.title] || "Content for this lesson will be available soon."
              };

              return (
                <LessonCard 
                  key={index} 
                  lesson={enrichedLesson} 
                  handlePlayVideo={handlePlayVideo} 
                  lessonIndex={index}
                  isExpanded={!!expandedLessons[index]}
                  toggleExpansion={() => toggleLessonExpansion(index)}
                />
              );
            })}
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
              {lesson.type === "Video" ? (
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
                {lesson.type === "Video" ? "Watch Video" : "Start Activity"}
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default LessonGrid;
