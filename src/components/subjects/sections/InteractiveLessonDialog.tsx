
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, CheckCircle, Play, Download } from "lucide-react";
import LetterRecognition from "../LetterRecognition";

interface Lesson {
  title: string;
  type: string;
  duration: string;
}

interface InteractiveLessonDialogProps {
  selectedLesson: Lesson | null;
  setSelectedLesson: (lesson: Lesson | null) => void;
  selectedVideo: string | null;
}

const InteractiveLessonDialog = ({ selectedLesson, setSelectedLesson, selectedVideo }: InteractiveLessonDialogProps) => {
  const [activityStarted, setActivityStarted] = useState(false);

  const handleStartActivity = () => {
    setActivityStarted(true);
  };

  return (
    <Dialog open={!!selectedLesson && !selectedVideo} onOpenChange={(open) => !open && setSelectedLesson(null)}>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle className="flex justify-between items-center">
            <span>{selectedLesson?.title}</span>
            <DialogClose asChild>
              <Button variant="ghost" size="icon" aria-label="Close">
                <X className="h-4 w-4" />
              </Button>
            </DialogClose>
          </DialogTitle>
          <DialogDescription>
            Interactive lesson with learning objectives and practice activities
          </DialogDescription>
        </DialogHeader>
        
        {!activityStarted ? (
          <div className="space-y-4">
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="text-lg font-medium mb-2">Learning Objectives</h3>
              <ul className="space-y-2" aria-label="Learning objectives">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0" aria-hidden="true" />
                  <span>Understand key concepts of {selectedLesson?.title}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0" aria-hidden="true" />
                  <span>Practice through interactive exercises</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0" aria-hidden="true" />
                  <span>Apply knowledge to real-world scenarios</span>
                </li>
              </ul>
            </div>
            
            <div className="aspect-video w-full bg-muted/50 rounded-lg flex items-center justify-center border-2 border-dashed border-muted-foreground/20">
              <div className="text-center p-4">
                <Play className="h-12 w-12 text-primary mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-lg font-medium">Interactive {selectedLesson?.type} Content</h3>
                <p className="text-muted-foreground text-sm mt-2">
                  This is a placeholder for the interactive content that would be loaded for {selectedLesson?.title}
                </p>
              </div>
            </div>
            
            <div className="flex justify-end space-x-2">
              <Button 
                variant="outline"
                aria-label={`Download materials for ${selectedLesson?.title}`}
              >
                <Download className="mr-2 h-4 w-4" aria-hidden="true" />
                Download Materials
              </Button>
              <Button 
                onClick={handleStartActivity}
                aria-label={`Start ${selectedLesson?.title} activity`}
                aria-describedby="activity-description"
              >
                <Play className="mr-2 h-4 w-4" aria-hidden="true" />
                Start activity
              </Button>
              <span id="activity-description" className="sr-only">
                Starting this activity will present interactive content related to {selectedLesson?.title}
              </span>
            </div>
          </div>
        ) : (
          <div>
            {/* Sample interactive content */}
            <LetterRecognition />
            
            <div className="flex justify-end mt-4">
              <Button 
                variant="outline" 
                onClick={() => setActivityStarted(false)}
                aria-label="Return to lesson overview"
              >
                Return to overview
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default InteractiveLessonDialog;
