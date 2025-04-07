
import React from "react";

interface DefaultContentProps {
  selectedLesson: {
    title: string;
    type: string;
    duration: string;
    content?: string;
  } | null;
}

const DefaultContent = ({ selectedLesson }: DefaultContentProps) => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{selectedLesson?.title || "Lesson"}</h2>
      <div className="bg-muted rounded-lg p-4">
        <div className="mb-4">
          <p className="text-muted-foreground mb-2">
            <span className="font-medium">Type:</span> {selectedLesson?.type}
          </p>
          <p className="text-muted-foreground">
            <span className="font-medium">Duration:</span> {selectedLesson?.duration}
          </p>
        </div>
        
        <div className="bg-background rounded-lg p-4 mb-4">
          <p className="font-medium mb-2">Description:</p>
          <p className="text-muted-foreground">
            {selectedLesson?.content || "This interactive lesson provides engaging activities for early childhood learning."}
          </p>
        </div>
        
        <div className="bg-primary/10 rounded-lg p-4">
          <h3 className="font-medium mb-2">Getting Started</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Click the "Start Activity" button to begin exploring this interactive lesson.
          </p>
          <ul className="space-y-1 pl-5 text-sm list-disc text-muted-foreground">
            <li>Interactive elements to engage with</li>
            <li>Visual and audio learning aids</li>
            <li>Progress tracking as you go</li>
            <li>Fun challenges to reinforce learning</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DefaultContent;
