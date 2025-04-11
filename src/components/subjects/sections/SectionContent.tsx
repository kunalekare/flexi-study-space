
import React from "react";
import SectionInfo from "./SectionInfo";
import LessonGrid from "./LessonGrid";
import LevelSelector from "./LevelSelector";

interface Lesson {
  title: string;
  type: string;
  duration: string;
  grade?: string;
}

interface Section {
  id: string;
  title: string;
  content: string;
  lessons: Lesson[];
}

interface SectionContentProps {
  section: Section;
  selectedLevel: string;
  selectedGrade?: string;
  levels: {
    id: string;
    name: string;
    color: string;
  }[];
  handleViewResources: (sectionId: string) => void;
  handlePlayVideo: (lesson: Lesson) => void;
  setSelectedLevel: (level: string) => void;
  setSelectedGrade?: (grade: string) => void;
}

const SectionContent = ({
  section,
  selectedLevel,
  selectedGrade = "all",
  levels,
  handleViewResources,
  handlePlayVideo,
  setSelectedLevel,
  setSelectedGrade = () => {}
}: SectionContentProps) => {
  return (
    <div className="space-y-8">
      <LevelSelector 
        selectedLevel={selectedLevel}
        setSelectedLevel={setSelectedLevel}
        levels={levels}
        showGrades={true}
        selectedGrade={selectedGrade}
        setSelectedGrade={setSelectedGrade}
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <SectionInfo
            section={section}
            selectedLevel={selectedLevel}
            levels={levels}
            handleViewResources={handleViewResources}
          />
        </div>
        <div className="lg:col-span-2">
          <LessonGrid
            section={section}
            selectedLevel={selectedLevel}
            selectedGrade={selectedGrade}
            handlePlayVideo={handlePlayVideo}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionContent;
