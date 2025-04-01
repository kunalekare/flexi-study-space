
import React from "react";
import TeacherResourcesCard from "./TeacherResourcesCard";
import ImplementationGuidesCard from "./ImplementationGuidesCard";
import { FileText, Video, BookOpen } from "lucide-react";

const LearningResourcesSection = () => {
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

  const implementationGuides = [
    {
      title: "Differentiated Instruction Guide",
      description: "Step-by-step strategies for adapting Language Arts lessons for diverse learning needs",
      tags: [
        { label: "Grades K-5", color: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" },
        { label: "PDF Guide", color: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400" }
      ]
    },
    {
      title: "Assistive Technology Integration",
      description: "Technical guide for classroom implementation of text-to-speech and other supports",
      tags: [
        { label: "All Grades", color: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400" },
        { label: "Video Tutorial", color: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400" }
      ]
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Learning Resources</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TeacherResourcesCard resources={learningResources} />
        <ImplementationGuidesCard guides={implementationGuides} />
      </div>
    </div>
  );
};

export default LearningResourcesSection;
