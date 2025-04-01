
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ImplementationGuide {
  title: string;
  description: string;
  tags: {
    label: string;
    color: string;
  }[];
}

interface ImplementationGuidesCardProps {
  guides: ImplementationGuide[];
}

const ImplementationGuidesCard = ({ guides }: ImplementationGuidesCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Implementation Guides</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {guides.map((guide, index) => (
            <div key={index} className="p-4 rounded-lg border border-border hover:border-primary/30 transition-all cursor-pointer hover-lift">
              <h3 className="font-medium mb-1">{guide.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">
                {guide.description}
              </p>
              <div className="flex gap-2 text-xs">
                {guide.tags.map((tag, tagIndex) => (
                  <div 
                    key={tagIndex} 
                    className={`px-2 py-1 rounded-full ${tag.color}`}
                  >
                    {tag.label}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ImplementationGuidesCard;
