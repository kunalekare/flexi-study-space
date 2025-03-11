
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AccessibilityPanel from "@/components/ui/AccessibilityPanel";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import SubjectData from "@/components/subjects/SubjectData";
import SubjectHeader from "@/components/subjects/SubjectHeader";
import SubjectSections from "@/components/subjects/SubjectSections";
import AccessibilityFeature from "@/components/subjects/AccessibilityFeature";
import RelatedSubjects from "@/components/subjects/RelatedSubjects";
import NotFoundContent from "@/components/subjects/NotFoundContent";

const SubjectDetails = () => {
  const { subjectId } = useParams();
  const subject = SubjectData[subjectId as keyof typeof SubjectData] || null;
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  if (!subject) {
    return <NotFoundContent />;
  }

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

          <SubjectHeader subject={subject} />
          <SubjectSections sections={subject.sections} />
          <AccessibilityFeature subjectTitle={subject.title} />
          <RelatedSubjects currentSubjectTitle={subject.title} subjectData={SubjectData} />
        </div>
      </main>
      
      <Footer />
      
      <AccessibilityPanel />
    </div>
  );
};

export default SubjectDetails;
