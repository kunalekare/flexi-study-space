
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SubjectCardProps } from "./types";

const SubjectCard = ({ subject }: { subject: SubjectCardProps }) => {
  return (
    <Link
      key={subject.id}
      to={`/subjects/${subject.id}`}
      className={`relative overflow-hidden rounded-xl p-6 border border-border hover:border-primary/30 transition-all ${subject.color} hover-lift focus-ring ${subject.ringColor}`}
    >
      <div className="flex flex-col h-full">
        <div className={`h-12 w-12 rounded-lg flex items-center justify-center mb-4 ${subject.textColor}`}>
          {subject.icon}
        </div>
        
        <h3 className="text-xl font-semibold mb-2">{subject.title}</h3>
        <p className="text-muted-foreground mb-6">{subject.description}</p>
        
        <div className="mt-4">
          <h4 className="font-medium mb-2">What you'll learn:</h4>
          <ul className="space-y-1 mb-6">
            {subject.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span className="text-sm text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-auto">
          <Button 
            variant="ghost" 
            className={`group px-0 ${subject.textColor}`}
          >
            Explore Lessons
            <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default SubjectCard;
