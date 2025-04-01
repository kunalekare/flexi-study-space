
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ListChecks } from "lucide-react";

interface SectionInfoProps {
  section: {
    id: string;
    title: string;
    content: string;
  };
  selectedLevel: string;
  levels: {
    id: string;
    name: string;
    color: string;
  }[];
  handleViewResources: (sectionId: string) => void;
}

const SectionInfo = ({ section, selectedLevel, levels, handleViewResources }: SectionInfoProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{section.title}</CardTitle>
        <Badge className={`${levels.find(l => l.id === selectedLevel)?.color} mt-2 w-fit`}>
          {levels.find(l => l.id === selectedLevel)?.name} Level
        </Badge>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{section.content}</p>
        
        <div className="mt-6 space-y-4">
          <div className="p-3 rounded-md bg-muted/50 border border-border">
            <h4 className="font-medium mb-2 text-sm">Level-specific learning goals:</h4>
            <ul className="space-y-1">
              {selectedLevel === "beginner" && (
                <>
                  <li className="text-sm text-muted-foreground flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Basic understanding of key concepts</span>
                  </li>
                  <li className="text-sm text-muted-foreground flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Learn foundational skills</span>
                  </li>
                  <li className="text-sm text-muted-foreground flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Build confidence through simple activities</span>
                  </li>
                </>
              )}
              {selectedLevel === "intermediate" && (
                <>
                  <li className="text-sm text-muted-foreground flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Apply concepts to solve problems</span>
                  </li>
                  <li className="text-sm text-muted-foreground flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Connect ideas across different topics</span>
                  </li>
                  <li className="text-sm text-muted-foreground flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Develop independent learning strategies</span>
                  </li>
                </>
              )}
              {selectedLevel === "advanced" && (
                <>
                  <li className="text-sm text-muted-foreground flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Master complex challenges</span>
                  </li>
                  <li className="text-sm text-muted-foreground flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Create original projects and solutions</span>
                  </li>
                  <li className="text-sm text-muted-foreground flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Extend learning beyond the curriculum</span>
                  </li>
                </>
              )}
            </ul>
          </div>
          
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full"
            onClick={() => handleViewResources(section.id)}
          >
            <ListChecks className="mr-2 h-4 w-4" />
            View All Resources
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SectionInfo;
