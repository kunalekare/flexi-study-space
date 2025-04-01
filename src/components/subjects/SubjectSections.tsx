
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LevelSelector from "./sections/LevelSelector";
import SectionContent from "./sections/SectionContent";
import VideoLessonDialog from "./sections/VideoLessonDialog";
import InteractiveLessonDialog from "./sections/InteractiveLessonDialog";
import ResourcesDialog from "./sections/ResourcesDialog";

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
      <LevelSelector 
        selectedLevel={selectedLevel} 
        setSelectedLevel={setSelectedLevel} 
        levels={levels} 
      />

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
            <SectionContent
              section={section}
              selectedLevel={selectedLevel}
              levels={levels}
              handleViewResources={handleViewResources}
              handlePlayVideo={handlePlayVideo}
            />
          </TabsContent>
        ))}
      </Tabs>
      
      {/* Dialogs */}
      <VideoLessonDialog 
        selectedVideo={selectedVideo}
        setSelectedVideo={setSelectedVideo}
      />
      
      <InteractiveLessonDialog
        selectedLesson={selectedLesson}
        setSelectedLesson={setSelectedLesson}
        selectedVideo={selectedVideo}
      />
      
      <ResourcesDialog
        showResourcesDialog={showResourcesDialog}
        setShowResourcesDialog={setShowResourcesDialog}
        activeSection={activeSection}
        sections={sections}
        selectedLevel={selectedLevel}
        levels={levels}
      />
    </>
  );
};

export default SubjectSections;
