
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { FileText, Video, BookOpen, Download } from "lucide-react";

interface RelatedSubjectProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  textColor: string;
}

interface RelatedSubjectsProps {
  currentSubjectId: string;
  subjects: RelatedSubjectProps[];
}

const RelatedSubjects = ({ currentSubjectId, subjects }: RelatedSubjectsProps) => {
  // Learning resources specific to Language Arts
  const learningResources = [
    {
      title: "Phonics Fundamentals",
      type: "PDF",
      icon: <FileText className="h-5 w-5" />,
      description: "Complete guide to teaching letter sounds and phonemic awareness",
      link: "#phonics-guide"
    },
    {
      title: "Reading Comprehension Strategies",
      type: "Video Series",
      icon: <Video className="h-5 w-5" />,
      description: "20 instructional videos on effective reading comprehension techniques",
      link: "#video-series"
    },
    {
      title: "Vocabulary Builder Worksheets",
      type: "Printable",
      icon: <FileText className="h-5 w-5" />,
      description: "100+ worksheets for K-5 vocabulary development with answer keys",
      link: "#worksheets"
    },
    {
      title: "Digital Reading Library",
      type: "Interactive",
      icon: <BookOpen className="h-5 w-5" />,
      description: "Access to 500+ leveled reading texts with accessibility features",
      link: "#digital-library"
    }
  ];

  return (
    <div className="space-y-12">
      {/* Learning Resources Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Learning Resources</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Teacher Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {learningResources.map((resource, index) => (
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
          
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Implementation Guides</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 rounded-lg border border-border hover:border-primary/30 transition-all cursor-pointer hover-lift">
                  <h3 className="font-medium mb-1">Differentiated Instruction Guide</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Step-by-step strategies for adapting Language Arts lessons for diverse learning needs
                  </p>
                  <div className="flex gap-2 text-xs">
                    <div className="px-2 py-1 rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                      Grades K-5
                    </div>
                    <div className="px-2 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                      PDF Guide
                    </div>
                  </div>
                </div>
                
                <div className="p-4 rounded-lg border border-border hover:border-primary/30 transition-all cursor-pointer hover-lift">
                  <h3 className="font-medium mb-1">Assistive Technology Integration</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Technical guide for classroom implementation of text-to-speech and other supports
                  </p>
                  <div className="flex gap-2 text-xs">
                    <div className="px-2 py-1 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400">
                      All Grades
                    </div>
                    <div className="px-2 py-1 rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400">
                      Video Tutorial
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Related Subjects Section (original functionality preserved) */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Related Subjects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {subjects
            .filter(subject => subject.id !== currentSubjectId)
            .slice(0, 3)
            .map((relatedSubject) => (
              <Link
                key={relatedSubject.id}
                to={`/subjects/${relatedSubject.id}`}
                className={`relative overflow-hidden rounded-xl p-6 border border-border hover:border-primary/30 transition-all ${relatedSubject.color} hover-lift`}
              >
                <div className="flex items-center gap-4">
                  <div className={`h-12 w-12 rounded-lg flex items-center justify-center ${relatedSubject.textColor}`}>
                    {relatedSubject.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{relatedSubject.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-1">{relatedSubject.description}</p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedSubjects;
