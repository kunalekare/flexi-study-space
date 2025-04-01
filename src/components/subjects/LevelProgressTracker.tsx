
import React from "react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, BookOpen, BarChart, Star } from "lucide-react";

interface LevelProgressTrackerProps {
  level: string;
  subject: string;
  progress: number;
  nextMilestone: string;
  achievements: string[];
}

const LevelProgressTracker = ({
  level,
  subject,
  progress,
  nextMilestone,
  achievements
}: LevelProgressTrackerProps) => {
  const getLevelColorClass = (level: string) => {
    switch (level.toLowerCase()) {
      case "beginner":
        return "text-green-600 dark:text-green-400";
      case "intermediate":
        return "text-blue-600 dark:text-blue-400";
      case "advanced":
        return "text-purple-600 dark:text-purple-400";
      default:
        return "text-primary";
    }
  };

  const getLevelBgColorClass = (level: string) => {
    switch (level.toLowerCase()) {
      case "beginner":
        return "bg-green-100 dark:bg-green-900/30";
      case "intermediate":
        return "bg-blue-100 dark:bg-blue-900/30";
      case "advanced":
        return "bg-purple-100 dark:bg-purple-900/30";
      default:
        return "bg-primary/10";
    }
  };

  const getProgressColorClass = (level: string) => {
    switch (level.toLowerCase()) {
      case "beginner":
        return "bg-green-500";
      case "intermediate":
        return "bg-blue-500";
      case "advanced":
        return "bg-purple-500";
      default:
        return "bg-primary";
    }
  };

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>Your Learning Progress</CardTitle>
            <CardDescription>Track your journey in {subject}</CardDescription>
          </div>
          <Badge className={`${getLevelBgColorClass(level)} ${getLevelColorClass(level)}`}>
            {level} Level
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-5">
          <div>
            <div className="flex justify-between mb-1 text-sm">
              <span>Current progress</span>
              <span className="font-medium">{progress}%</span>
            </div>
            <Progress className="h-2" value={progress} indicatorClassName={getProgressColorClass(level)} />
            <p className="text-xs text-muted-foreground mt-1 flex items-center">
              <BookOpen className="h-3 w-3 mr-1" />
              Next milestone: {nextMilestone}
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center">
              <BarChart className="h-4 w-4 mr-2 text-muted-foreground" />
              <h4 className="text-sm font-medium">Recent achievements</h4>
            </div>
            <div className="space-y-1">
              {achievements.map((achievement, i) => (
                <div key={i} className="flex items-center">
                  <div className={`h-5 w-5 rounded-full ${getLevelBgColorClass(level)} flex items-center justify-center mr-2`}>
                    <Star className={`h-3 w-3 ${getLevelColorClass(level)}`} />
                  </div>
                  <span className="text-sm">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-border flex items-center justify-between">
            <div className="flex items-center text-sm">
              <Award className="h-4 w-4 mr-1 text-amber-500" />
              <span>{Math.floor(progress / 10)} badges earned</span>
            </div>
            {level !== "advanced" && (
              <div className="text-xs text-muted-foreground">
                {level === "beginner" ? 
                  "75% completion to unlock Intermediate" : 
                  "80% completion to unlock Advanced"}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LevelProgressTracker;
