
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface LevelSelectorProps {
  selectedLevel: string;
  setSelectedLevel: (level: string) => void;
  levels: {
    id: string;
    name: string;
    color: string;
  }[];
  showGrades?: boolean;
  selectedGrade?: string;
  setSelectedGrade?: (grade: string) => void;
}

const LevelSelector = ({ 
  selectedLevel, 
  setSelectedLevel, 
  levels,
  showGrades = false,
  selectedGrade = "all",
  setSelectedGrade = () => {}
}: LevelSelectorProps) => {
  const gradesByLevel = {
    beginner: [
      { id: "all", name: "All Grades" },
      { id: "grade1", name: "Grade 1" },
      { id: "grade2", name: "Grade 2" },
      { id: "grade3", name: "Grade 3" }
    ],
    intermediate: [
      { id: "all", name: "All Grades" },
      { id: "grade4", name: "Grade 4" },
      { id: "grade5", name: "Grade 5" },
      { id: "grade6", name: "Grade 6" },
      { id: "grade7", name: "Grade 7" }
    ],
    advanced: [
      { id: "all", name: "All Grades" },
      { id: "grade8", name: "Grade 8" },
      { id: "grade9", name: "Grade 9" },
      { id: "grade10", name: "Grade 10" }
    ]
  };

  // Get relevant grades based on selected level
  const relevantGrades = gradesByLevel[selectedLevel as keyof typeof gradesByLevel] || gradesByLevel.beginner;

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3">Choose Your Learning Level</h3>
        <Tabs value={selectedLevel} onValueChange={setSelectedLevel} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            {levels.map((level) => (
              <TabsTrigger
                key={level.id}
                value={level.id}
                className={`data-[state=active]:${level.color}`}
              >
                {level.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
      
      {showGrades && (
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-3">Filter by Grade</h3>
          <div className="flex flex-wrap gap-2">
            {relevantGrades.map((grade) => (
              <Badge 
                key={grade.id} 
                variant={selectedGrade === grade.id ? "default" : "outline"}
                className={`cursor-pointer text-sm py-1.5 px-3 ${selectedGrade === grade.id ? "bg-primary" : ""}`}
                onClick={() => setSelectedGrade(grade.id)}
              >
                {grade.name}
              </Badge>
            ))}
          </div>
          
          <div className="mt-3 text-sm text-muted-foreground">
            <p className="flex items-center">
              <span className="mr-1">•</span>
              {selectedLevel === "beginner" && "Grades 1-3: Foundational concepts with high visual support"}
              {selectedLevel === "intermediate" && "Grades 4-7: Building on basics with more complex applications"}
              {selectedLevel === "advanced" && "Grades 8-10: Advanced concepts with deeper analysis"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LevelSelector;
