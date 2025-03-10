
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Lightbulb, Users } from "lucide-react";

interface AccessibilityFeatureProps {
  subjectTitle: string;
}

const AccessibilityFeature = ({ subjectTitle }: AccessibilityFeatureProps) => {
  return (
    <div className="bg-muted p-8 rounded-xl border border-border mb-16">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="md:w-1/4 flex justify-center">
          <div className="h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center">
            <Lightbulb className="h-10 w-10 text-primary" />
          </div>
        </div>
        <div className="md:w-3/4 text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2">Accessibility Features</h2>
          <p className="text-muted-foreground mb-4">
            Our {subjectTitle} curriculum includes customizable learning paths, sign language support, 
            voice-controlled navigation, and progress tracking to ensure all students can access and engage with the content.
          </p>
          <Button asChild>
            <Link to="/accessibility">
              <Users className="mr-2 h-4 w-4" />
              Learn About Our Accessibility Features
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityFeature;
