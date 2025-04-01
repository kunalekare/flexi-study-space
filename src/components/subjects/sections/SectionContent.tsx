
import React from "react";
import SectionInfo from "./SectionInfo";
import LessonGrid from "./LessonGrid";

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

interface SectionContentProps {
  section: Section;
  selectedLevel: string;
  levels: {
    id: string;
    name: string;
    color: string;
  }[];
  handleViewResources: (sectionId: string) => void;
  handlePlayVideo: (lesson: Lesson) => void;
}

const SectionContent = ({
  section,
  selectedLevel,
  levels,
  handleViewResources,
  handlePlayVideo
}: SectionContentProps) => {
  return (
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
          handlePlayVideo={handlePlayVideo}
        />
      </div>
    </div>
  );
};

export default SectionContent;
