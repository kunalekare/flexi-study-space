
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { FileText, Video, BookOpen, Download } from "lucide-react";

interface LearningResource {
  title: string;
  type: string;
  icon: React.ReactNode;
  description: string;
  link: string;
}

interface TeacherResourcesCardProps {
  resources: LearningResource[];
}

const TeacherResourcesCard = ({ resources }: TeacherResourcesCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Teacher Resources</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {resources.map((resource, index) => (
            <AccordionItem key={index} value={`resource-${index}`}>
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    {resource.icon}
                  </div>
                  <div className="text-left">
                    <p className="font-medium">{resource.title}</p>
                    <p className="text-xs text-muted-foreground">{resource.type}</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="pt-2 pb-1 pl-12">
                  <p className="text-sm text-muted-foreground mb-3">{resource.description}</p>
                  <Button size="sm" variant="outline" className="gap-2">
                    <Download className="h-4 w-4" /> Download Resource
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default TeacherResourcesCard;
