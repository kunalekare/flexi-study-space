
import React from "react";
import { Button } from "@/components/ui/button";
import { Play, FileText } from "lucide-react";

interface SubjectHeaderProps {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  color: string;
  textColor: string;
  onStartLearning?: () => void;
  onLessonPlans?: () => void;
}

const SubjectHeader = ({ 
  title, 
  description, 
  image, 
  icon, 
  color, 
  textColor,
  onStartLearning = () => {},
  onLessonPlans = () => {}
}: SubjectHeaderProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
      <div className="flex flex-col justify-center">
        <div className={`h-16 w-16 rounded-xl flex items-center justify-center mb-6 ${color} ${textColor}`}>
          {icon}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl text-muted-foreground mb-6">{description}</p>
        <div className="flex flex-wrap gap-3">
          <Button onClick={onStartLearning}>
            <Play className="mr-2 h-4 w-4" />
            Start Learning
          </Button>
          <Button variant="outline" onClick={onLessonPlans}>
            <FileText className="mr-2 h-4 w-4" />
            Lesson Plans
          </Button>
        </div>
      </div>
      <div className="rounded-xl overflow-hidden aspect-video shadow-lg">
        <img 
          src={image} 
          alt={`${title} learning`} 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default SubjectHeader;
