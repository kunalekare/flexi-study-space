
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ListChecks, Play, Video } from "lucide-react";

interface Lesson {
  title: string;
  type: string;
  duration: string;
}

interface Section {
  id: string;
  title: string;
  content: string;
  lessons: Lesson[];
}

interface SubjectSectionsProps {
  sections: Section[];
}

const SubjectSections = ({ sections }: SubjectSectionsProps) => {
  return (
    <Tabs defaultValue={sections[0].id} className="mb-16">
      <TabsList className="mb-8 flex flex-wrap h-auto">
        {sections.map((section) => (
          <TabsTrigger key={section.id} value={section.id} className="md:py-3">
            {section.title}
          </TabsTrigger>
        ))}
      </TabsList>
      
      {sections.map((section) => (
        <TabsContent key={section.id} value={section.id}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{section.content}</p>
                  <div className="mt-6">
                    <Button variant="outline" size="sm" className="w-full">
                      <ListChecks className="mr-2 h-4 w-4" />
                      View All Resources
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Available Lessons</CardTitle>
                  <CardDescription>
                    Interactive content designed for different learning styles
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {section.lessons.map((lesson, index) => (
                      <Card key={index} className="hover-lift cursor-pointer">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-lg">{lesson.title}</CardTitle>
                            <div className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                              {lesson.type}
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="flex justify-between items-center">
                            <div className="text-sm text-muted-foreground">
                              Duration: {lesson.duration}
                            </div>
                            <Button variant="ghost" size="sm" className="p-0">
                              {lesson.type === "Video" ? (
                                <Video className="h-4 w-4 text-red-500" />
                              ) : (
                                <Play className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default SubjectSections;
