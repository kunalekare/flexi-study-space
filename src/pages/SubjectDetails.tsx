
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AccessibilityPanel from "@/components/ui/AccessibilityPanel";
import SubjectHeader from "@/components/subjects/SubjectHeader";
import SubjectSections from "@/components/subjects/SubjectSections";
import LevelProgressTracker from "@/components/subjects/LevelProgressTracker";
import RelatedSubjects from "@/components/subjects/RelatedSubjects";
import NotFoundContent from "@/components/subjects/NotFoundContent";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import SubjectData from "@/components/subjects/SubjectData";
import { Video } from "lucide-react";

const SubjectDetails = () => {
  const { subjectId } = useParams();
  const [activeLevel, setActiveLevel] = useState("beginner");
  
  // Load subject data based on ID
  const subject = SubjectData[subjectId as keyof typeof SubjectData];
  
  // Random progress for demo purposes - in a real app, this would come from a user profile
  const [progress, setProgress] = useState(Math.floor(Math.random() * 85) + 15);
  
  // Example achievements based on level
  const achievementsByLevel = {
    beginner: [
      "Completed orientation module",
      "Finished first interactive lesson",
      "Passed beginner assessment"
    ],
    intermediate: [
      "Completed all beginner content",
      "Created first project",
      "Achieved 80% on mid-term quiz"
    ],
    advanced: [
      "Mastered all core concepts",
      "Completed capstone project",
      "Earned subject certification"
    ]
  };
  
  // Example next milestones by level
  const milestonesByLevel = {
    beginner: "Complete Introduction Module",
    intermediate: "Finish Applied Project",
    advanced: "Submit Final Assessment"
  };
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [subjectId]);
  
  // If subject not found
  if (!subject) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-32 pb-16">
          <div className="container mx-auto px-4">
            <NotFoundContent />
          </div>
        </main>
        <Footer />
        <AccessibilityPanel />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Button variant="ghost" size="sm" asChild className="hover:bg-transparent p-0">
              <Link to="/subjects" className="flex items-center text-muted-foreground hover:text-foreground">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All Subjects
              </Link>
            </Button>
          </div>
          
          {/* Subject Header */}
          <SubjectHeader 
            title={subject.title} 
            description={subject.description}
            image={subject.image}
            icon={subject.icon}
            color={subject.color}
            textColor={subject.textColor}
          />
          
          {/* Level Selection and Progress */}
          <div className="mt-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <LevelProgressTracker 
                  level={activeLevel}
                  subject={subject.title}
                  progress={progress}
                  nextMilestone={milestonesByLevel[activeLevel as keyof typeof milestonesByLevel]}
                  achievements={achievementsByLevel[activeLevel as keyof typeof achievementsByLevel]}
                />
              </div>
              <div className="lg:col-span-1">
                <div className="bg-muted rounded-xl p-6 h-full">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Video className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium">Course Overview</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    This course offers a comprehensive journey through {subject.title} with content 
                    tailored for beginners, intermediate, and advanced learners.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="mr-2 text-primary mt-1">•</span>
                      <span className="text-sm text-muted-foreground">
                        12 lesson modules across 3 difficulty levels
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary mt-1">•</span>
                      <span className="text-sm text-muted-foreground">
                        Interactive content with adaptive learning paths
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary mt-1">•</span>
                      <span className="text-sm text-muted-foreground">
                        Downloadable resources and practice materials
                      </span>
                    </li>
                  </ul>
                  <Button size="sm" className="w-full">Watch Introduction</Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Subject Content Sections */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Explore Content</h2>
            <SubjectSections sections={subject.sections} />
          </div>
          
          {/* Related Subjects */}
          <RelatedSubjects 
            currentSubjectId={subjectId as string}
            subjects={Object.entries(SubjectData).map(([id, data]) => ({
              id,
              title: data.title,
              description: data.description,
              icon: data.icon,
              color: data.color,
              textColor: data.textColor
            }))}
          />
          
        </div>
      </main>
      
      <Footer />
      
      <AccessibilityPanel />
    </div>
  );
};

export default SubjectDetails;
