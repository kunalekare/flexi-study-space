
import React from "react";
import LearningResourcesSection from "./resources/LearningResourcesSection";
import RelatedSubjectsGrid from "./resources/RelatedSubjectsGrid";

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
  return (
    <div className="space-y-12">
      {/* Learning Resources Section */}
      <LearningResourcesSection />
      
      {/* Related Subjects Section */}
      <RelatedSubjectsGrid currentSubjectId={currentSubjectId} subjects={subjects} />
    </div>
  );
};

export default RelatedSubjects;
