
import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SectionContent from "@/components/subjects/sections/SectionContent";
import ResourcesDialog from "@/components/subjects/sections/ResourcesDialog";
import VideoLessonDialog from "@/components/subjects/sections/VideoLessonDialog";
import InteractiveLessonDialog from "@/components/subjects/sections/InteractiveLessonDialog";
import { useLocation } from "react-router-dom";

interface SubjectSectionsProps {
  sections: {
    id: string;
    title: string;
    content: string;
    lessons: {
      title: string;
      type: string;
      duration: string;
      content?: string;
      grade?: string;
      quizQuestions?: {
        question: string;
        options: string[];
        correctAnswer: number;
        explanation?: string;
      }[];
    }[];
  }[];
  activeLevel?: string;
  setActiveLevel?: (level: string) => void;
  activeGrade?: string;
  setActiveGrade?: (grade: string) => void;
}

const SubjectSections = ({ 
  sections, 
  activeLevel = "beginner", 
  setActiveLevel = () => {},
  activeGrade = "all",
  setActiveGrade = () => {}
}: SubjectSectionsProps) => {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || "");
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [videoLessonOpen, setVideoLessonOpen] = useState(false);
  const [interactiveLessonOpen, setInteractiveLessonOpen] = useState(false);
  const [currentSectionId, setCurrentSectionId] = useState("");
  const [currentLesson, setCurrentLesson] = useState<any>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const location = useLocation();
  
  // Extract grade from URL if it exists
  useEffect(() => {
    const path = location.pathname;
    if (path.includes('grade')) {
      const grade = path.split('/').pop() || "";
      if (grade.startsWith('grade')) {
        setActiveGrade(grade);
      }
    }
  }, [location, setActiveGrade]);
  
  const levels = [
    { id: "beginner", name: "Beginner", color: "text-green-500" },
    { id: "intermediate", name: "Intermediate", color: "text-amber-500" },
    { id: "advanced", name: "Advanced", color: "text-blue-500" }
  ];
  
  const handleViewResources = (sectionId: string) => {
    setCurrentSectionId(sectionId);
    setResourcesOpen(true);
  };
  
  const handlePlayVideo = (lesson: any) => {
    setCurrentLesson(lesson);
    
    if (lesson.type === "Video" || lesson.type === "Sing-along") {
      setVideoLessonOpen(true);
      setSelectedVideo(lesson.content || "default-video-id");
    } else {
      setInteractiveLessonOpen(true);
    }
  };
  
  // Focus on grade-wise view
  const showGradeSelector = true;
  
  return (
    <>
      <Tabs value={activeSection} onValueChange={setActiveSection}>
        <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full gap-2">
          {sections.map((section) => (
            <TabsTrigger key={section.id} value={section.id} className="h-14 text-sm flex flex-col">
              <span className="text-xs text-muted-foreground mb-1 hidden md:block">
                Module
              </span>
              {section.title}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {sections.map((section) => (
          <TabsContent key={section.id} value={section.id} className="pt-6">
            <SectionContent 
              section={section} 
              selectedLevel={activeLevel}
              selectedGrade={activeGrade}
              levels={levels}
              handleViewResources={handleViewResources}
              handlePlayVideo={handlePlayVideo}
              setSelectedLevel={setActiveLevel}
              setSelectedGrade={setActiveGrade}
              showGradeSelector={showGradeSelector}
            />
          </TabsContent>
        ))}
      </Tabs>
      
      <ResourcesDialog 
        showResourcesDialog={resourcesOpen} 
        setShowResourcesDialog={setResourcesOpen} 
        activeSection={currentSectionId}
        sections={sections}
        selectedLevel={activeLevel}
        levels={levels}
      />
      
      <VideoLessonDialog 
        selectedVideo={selectedVideo} 
        setSelectedVideo={setSelectedVideo}
      />
      
      <InteractiveLessonDialog 
        selectedLesson={interactiveLessonOpen ? currentLesson : null} 
        setSelectedLesson={() => setInteractiveLessonOpen(false)}
        selectedVideo={selectedVideo}
      />
    </>
  );
};

export default SubjectSections;
