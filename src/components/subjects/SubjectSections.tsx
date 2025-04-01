
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ListChecks, Play, X, BookOpen, CheckCircle, FileText, Video } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

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
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [showResourcesDialog, setShowResourcesDialog] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>(sections[0].id);
  const [selectedLevel, setSelectedLevel] = useState<string>("beginner");
  
  // Function to generate a YouTube video ID based on the lesson title
  // In a real app, you would store actual YouTube IDs in your data
  const getYoutubeId = (title: string) => {
    // This is a placeholder - in a real app, you would have actual YouTube IDs
    // For demo purposes, using a sample educational video
    return "dQw4w9WgXcQ"; // This is just a placeholder ID
  };
  
  const handlePlayVideo = (lesson: Lesson) => {
    if (lesson.type === "Video") {
      setSelectedVideo(getYoutubeId(lesson.title));
    } else {
      setSelectedLesson(lesson);
    }
  };

  const handleViewResources = (sectionId: string) => {
    setActiveSection(sectionId);
    setShowResourcesDialog(true);
  };

  // Defined levels for learning paths
  const levels = [
    { id: "beginner", name: "Beginner", color: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" },
    { id: "intermediate", name: "Intermediate", color: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400" },
    { id: "advanced", name: "Advanced", color: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400" },
  ];

  return (
    <>
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3">Choose Your Learning Level</h3>
        <div className="flex flex-wrap gap-2">
          {levels.map((level) => (
            <Badge 
              key={level.id} 
              variant={selectedLevel === level.id ? "default" : "outline"}
              className={`cursor-pointer text-sm py-1.5 px-3 ${selectedLevel === level.id ? "bg-primary" : level.color}`}
              onClick={() => setSelectedLevel(level.id)}
            >
              {level.name}
            </Badge>
          ))}
        </div>
      </div>

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
              </div>
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Available Lessons</CardTitle>
                    <CardDescription>
                      {selectedLevel === "beginner" && "Foundational content for beginners"}
                      {selectedLevel === "intermediate" && "Challenging content for continuing learners"}
                      {selectedLevel === "advanced" && "Complex material for advanced students"}
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
                        .map((lesson, index) => (
                          <Card key={index} className="hover-lift cursor-pointer" onClick={() => handlePlayVideo(lesson)}>
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
                                <Button 
                                  variant="ghost" 
                                  size="sm" 
                                  className="p-0"
                                >
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
             {/* End of level */}
          </TabsContent>
        ))}
      </Tabs>
      
      {/* Video Lesson Dialog */}
      <Dialog open={!!selectedVideo} onOpenChange={(open) => !open && setSelectedVideo(null)}>
        <DialogContent className="sm:max-w-[800px]">
          <DialogHeader>
            <DialogTitle className="flex justify-between items-center">
              <span>Video Lesson</span>
              <DialogClose asChild>
                <Button variant="ghost" size="icon">
                  <X className="h-4 w-4" />
                </Button>
              </DialogClose>
            </DialogTitle>
          </DialogHeader>
          {selectedVideo && (
            <div className="aspect-video w-full">
              <iframe 
                width="100%" 
                height="100%" 
                src={`https://www.youtube.com/embed/YKNKY8Tk_vk?autoplay=1`}
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          )}
        </DialogContent>
      </Dialog>
      
      {/* Interactive Lesson Dialog */}
      <Dialog open={!!selectedLesson && !selectedVideo} onOpenChange={(open) => !open && setSelectedLesson(null)}>
        <DialogContent className="sm:max-w-[800px]">
          <DialogHeader>
            <DialogTitle className="flex justify-between items-center">
              <span>{selectedLesson?.title}</span>
              <DialogClose asChild>
                <Button variant="ghost" size="icon">
                  <X className="h-4 w-4" />
                </Button>
              </DialogClose>
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="text-lg font-medium mb-2">Learning Objectives</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0" />
                  <span>Understand key concepts of {selectedLesson?.title}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0" />
                  <span>Practice through interactive exercises</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0" />
                  <span>Apply knowledge to real-world scenarios</span>
                </li>
              </ul>
            </div>
            
            <div className="aspect-video w-full bg-muted/50 rounded-lg flex items-center justify-center border-2 border-dashed border-muted-foreground/20">
              <div className="text-center p-4">
                <Play className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-medium">Interactive {selectedLesson?.type} Content</h3>
                <p className="text-muted-foreground text-sm mt-2">
                  This is a placeholder for the interactive content that would be loaded for {selectedLesson?.title}
                </p>
              </div>
            </div>
            
            <div className="flex justify-end space-x-2">
              <Button variant="outline">Download Materials</Button>
              <Button>Start activity</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      
      {/* Resources Dialog */}
      <Dialog open={showResourcesDialog} onOpenChange={setShowResourcesDialog}>
        <DialogContent className="sm:max-w-[800px]">
          <DialogHeader>
            <DialogTitle className="flex justify-between items-center">
              <span>Learning Resources</span>
              <DialogClose asChild>
                <Button variant="ghost" size="icon">
                  <X className="h-4 w-4" />
                </Button>
              </DialogClose>
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Resources for {sections.find(s => s.id === activeSection)?.title}</h3>
              <Badge className={levels.find(l => l.id === selectedLevel)?.color}>
                {levels.find(l => l.id === selectedLevel)?.name} Level
              </Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Printable Worksheets</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <FileText className="h-4 w-4 mr-2 text-primary" />
                      <span>Practice Worksheet (PDF)</span>
                    </li>
                    <li className="flex items-center">
                      <FileText className="h-4 w-4 mr-2 text-primary" />
                      <span>Answer Key (PDF)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Digital Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <Video className="h-4 w-4 mr-2 text-red-500" />
                      <span>Instructional Videos</span>
                    </li>
                    <li className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-2 text-blue-500" />
                      <span>Digital Textbook</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Interactive Tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <Play className="h-4 w-4 mr-2 text-green-500" />
                      <span>Online Simulations</span>
                    </li>
                    <li className="flex items-center">
                      <Play className="h-4 w-4 mr-2 text-green-500" />
                      <span>Virtual Labs</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Teacher Materials</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <FileText className="h-4 w-4 mr-2 text-amber-500" />
                      <span>Lesson Plan Guide</span>
                    </li>
                    <li className="flex items-center">
                      <FileText className="h-4 w-4 mr-2 text-amber-500" />
                      <span>Assessment Tools</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex justify-end">
              <Button>
                Download All Resources
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SubjectSections;
