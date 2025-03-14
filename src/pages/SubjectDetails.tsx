
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AccessibilityPanel from "@/components/ui/AccessibilityPanel";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, FileText, Play, CheckCircle, Award, Video } from "lucide-react";
import SubjectData from "@/components/subjects/SubjectData";
import SubjectHeader from "@/components/subjects/SubjectHeader";
import SubjectSections from "@/components/subjects/SubjectSections";
import AccessibilityFeature from "@/components/subjects/AccessibilityFeature";
import RelatedSubjects from "@/components/subjects/RelatedSubjects";
import NotFoundContent from "@/components/subjects/NotFoundContent";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SubjectDetails = () => {
  const { subjectId } = useParams();
  const subject = SubjectData[subjectId as keyof typeof SubjectData] || null;
  const [showLearningDialog, setShowLearningDialog] = useState(false);
  const [showLessonPlansDialog, setShowLessonPlansDialog] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  if (!subject) {
    return <NotFoundContent />;
  }

  const handleStartLearning = () => {
    setShowLearningDialog(true);
  };

  const handleLessonPlans = () => {
    setShowLessonPlansDialog(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 md:pt-40 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Button variant="ghost" size="sm" asChild className="hover:bg-transparent p-0">
              <Link to="/" className="flex items-center text-muted-foreground hover:text-foreground">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>

          <SubjectHeader 
            subject={subject} 
            onStartLearning={handleStartLearning} 
            onLessonPlans={handleLessonPlans} 
          />
          <SubjectSections sections={subject.sections} />
          <AccessibilityFeature subjectTitle={subject.title} />
          <RelatedSubjects currentSubjectTitle={subject.title} subjectData={SubjectData} />
        </div>
      </main>
      
      <Footer />
      
      <AccessibilityPanel />

      {/* Start Learning Dialog */}
      <Dialog open={showLearningDialog} onOpenChange={setShowLearningDialog}>
        <DialogContent className="sm:max-w-[800px] max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex justify-between items-center">
              <span>Start Learning {subject.title}</span>
              <DialogClose asChild>
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
              </DialogClose>
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            <div className="flex items-center p-4 bg-primary/10 rounded-lg">
              <div className={`h-12 w-12 rounded-lg flex items-center justify-center mr-4 ${subject.color} ${subject.textColor}`}>
                {subject.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{subject.title} Learning Path</h3>
                <p className="text-sm text-muted-foreground">
                  Follow our structured learning path to master {subject.title}
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Learning Journey</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {subject.sections.map((section, index) => (
                        <div key={section.id} className="flex">
                          <div className="mr-4 relative">
                            <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center">
                              {index + 1}
                            </div>
                            {index < subject.sections.length - 1 && (
                              <div className="absolute top-8 bottom-0 left-1/2 w-0.5 -ml-[1px] h-full bg-primary/30"></div>
                            )}
                          </div>
                          <div className="pb-6">
                            <h3 className="text-lg font-medium">{section.title}</h3>
                            <p className="text-sm text-muted-foreground mt-1">{section.content}</p>
                            <div className="mt-3 flex space-x-2">
                              <Button size="sm" variant="outline" className="text-xs">
                                <Play className="h-3 w-3 mr-1" /> Start
                              </Button>
                              <Button size="sm" variant="ghost" className="text-xs">
                                <FileText className="h-3 w-3 mr-1" /> Resources
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Learning Progress</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-muted p-3 rounded-lg">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Overall Progress</span>
                          <span className="text-sm font-medium">0%</span>
                        </div>
                        <div className="h-2 bg-muted-foreground/20 rounded-full overflow-hidden">
                          <div className="h-full bg-primary" style={{ width: '0%' }}></div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium">Achievements</h4>
                        <div className="flex items-center p-2 bg-muted rounded-lg">
                          <Award className="h-5 w-5 text-amber-500 mr-2" />
                          <span className="text-sm">No badges earned yet</span>
                        </div>
                      </div>
                      
                      <div className="pt-2">
                        <Button className="w-full">
                          <Play className="h-4 w-4 mr-2" /> Resume Learning
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Lesson Plans Dialog */}
      <Dialog open={showLessonPlansDialog} onOpenChange={setShowLessonPlansDialog}>
        <DialogContent className="sm:max-w-[800px] max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex justify-between items-center">
              <span>{subject.title} Lesson Plans</span>
              <DialogClose asChild>
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
              </DialogClose>
            </DialogTitle>
          </DialogHeader>
          
          <Tabs defaultValue="overview">
            <TabsList className="grid grid-cols-4 mb-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="weekly">Weekly Plans</TabsTrigger>
              <TabsTrigger value="materials">Materials</TabsTrigger>
              <TabsTrigger value="assessments">Assessments</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview">
              <Card>
                <CardHeader>
                  <CardTitle>{subject.title} Curriculum Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p>{subject.description}</p>
                    
                    <h3 className="text-lg font-medium mt-4">Course Objectives</h3>
                    <ul className="space-y-2">
                      {subject.sections.map((section) => (
                        <li key={section.id} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0" />
                          <span>Master concepts in {section.title}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <h3 className="text-lg font-medium mt-4">Teaching Approach</h3>
                    <p className="text-muted-foreground">
                      Our {subject.title} curriculum is designed with universal design for learning principles, 
                      ensuring accessibility for all students with different learning styles and abilities.
                    </p>
                    
                    <div className="flex justify-end mt-4">
                      <Button>
                        <FileText className="h-4 w-4 mr-2" /> Download Full Curriculum
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="weekly">
              <Card>
                <CardHeader>
                  <CardTitle>Weekly Lesson Plans</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {subject.sections.map((section, index) => (
                      <div key={section.id} className="border border-border rounded-lg overflow-hidden">
                        <div className="bg-muted px-4 py-3 font-medium flex justify-between items-center">
                          <span>Week {index + 1}: {section.title}</span>
                          <Button variant="ghost" size="sm">
                            <FileText className="h-4 w-4 mr-1" /> Download
                          </Button>
                        </div>
                        <div className="p-4">
                          <p className="text-sm text-muted-foreground mb-3">{section.content}</p>
                          <h4 className="text-sm font-medium mb-2">Daily Activities:</h4>
                          <ul className="text-sm space-y-2">
                            <li className="flex items-start">
                              <span className="font-medium mr-2">Day 1:</span>
                              <span className="text-muted-foreground">Introduction to {section.title} concepts</span>
                            </li>
                            <li className="flex items-start">
                              <span className="font-medium mr-2">Day 2:</span>
                              <span className="text-muted-foreground">Guided practice with interactive tools</span>
                            </li>
                            <li className="flex items-start">
                              <span className="font-medium mr-2">Day 3:</span>
                              <span className="text-muted-foreground">Independent exploration and projects</span>
                            </li>
                            <li className="flex items-start">
                              <span className="font-medium mr-2">Day 4:</span>
                              <span className="text-muted-foreground">Collaborative activities and discussions</span>
                            </li>
                            <li className="flex items-start">
                              <span className="font-medium mr-2">Day 5:</span>
                              <span className="text-muted-foreground">Review, assessment, and reflection</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="materials">
              <Card>
                <CardHeader>
                  <CardTitle>Teaching Materials</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Printable Resources</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center">
                            <FileText className="h-4 w-4 mr-2 text-primary" />
                            <span>Student Workbooks</span>
                          </li>
                          <li className="flex items-center">
                            <FileText className="h-4 w-4 mr-2 text-primary" />
                            <span>Visual Aids and Posters</span>
                          </li>
                          <li className="flex items-center">
                            <FileText className="h-4 w-4 mr-2 text-primary" />
                            <span>Handouts and Reference Sheets</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Digital Tools</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center">
                            <Play className="h-4 w-4 mr-2 text-green-500" />
                            <span>Interactive Presentations</span>
                          </li>
                          <li className="flex items-center">
                            <Video className="h-4 w-4 mr-2 text-red-500" />
                            <span>Instructional Videos</span>
                          </li>
                          <li className="flex items-center">
                            <BookOpen className="h-4 w-4 mr-2 text-blue-500" />
                            <span>Digital Textbook Access</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="text-lg font-medium mb-3">Material Differentiation</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      All materials are available in multiple formats to accommodate different learning needs:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="bg-muted p-3 rounded-lg text-center">
                        <BookOpen className="h-5 w-5 mx-auto mb-1 text-primary" />
                        <p className="text-sm font-medium">Text-to-Speech Compatible</p>
                      </div>
                      <div className="bg-muted p-3 rounded-lg text-center">
                        <Play className="h-5 w-5 mx-auto mb-1 text-primary" />
                        <p className="text-sm font-medium">Visual/Audio Options</p>
                      </div>
                      <div className="bg-muted p-3 rounded-lg text-center">
                        <CheckCircle className="h-5 w-5 mx-auto mb-1 text-primary" />
                        <p className="text-sm font-medium">Multiple Difficulty Levels</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="assessments">
              <Card>
                <CardHeader>
                  <CardTitle>Assessment Tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="border border-border rounded-lg overflow-hidden">
                      <div className="bg-muted px-4 py-3 font-medium">
                        Formative Assessments
                      </div>
                      <div className="p-4 space-y-3">
                        <p className="text-sm text-muted-foreground">
                          Daily check-ins and quick activities to gauge student understanding in real-time.
                        </p>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center">
                            <FileText className="h-4 w-4 mr-2 text-primary" />
                            <span>Exit Tickets</span>
                          </li>
                          <li className="flex items-center">
                            <Play className="h-4 w-4 mr-2 text-primary" />
                            <span>Interactive Quizzes</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                            <span>Observation Checklists</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="border border-border rounded-lg overflow-hidden">
                      <div className="bg-muted px-4 py-3 font-medium">
                        Summative Assessments
                      </div>
                      <div className="p-4 space-y-3">
                        <p className="text-sm text-muted-foreground">
                          End-of-unit evaluations to measure overall mastery of key concepts.
                        </p>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center">
                            <FileText className="h-4 w-4 mr-2 text-primary" />
                            <span>Unit Tests (Multiple Formats)</span>
                          </li>
                          <li className="flex items-center">
                            <BookOpen className="h-4 w-4 mr-2 text-primary" />
                            <span>Project-Based Assessments</span>
                          </li>
                          <li className="flex items-center">
                            <Play className="h-4 w-4 mr-2 text-primary" />
                            <span>Digital Portfolios</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="border border-border rounded-lg overflow-hidden">
                      <div className="bg-muted px-4 py-3 font-medium">
                        Accessibility Features
                      </div>
                      <div className="p-4">
                        <p className="text-sm text-muted-foreground mb-3">
                          All assessments include the following accessibility options:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                          <div className="flex items-center">
                            <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                            <span>Extended time options</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                            <span>Text-to-speech support</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                            <span>Multiple response formats</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                            <span>Visual supports</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SubjectDetails;
