
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X, FileText, Video, BookOpen, Play } from "lucide-react";

interface Section {
  id: string;
  title: string;
}

interface ResourcesDialogProps {
  showResourcesDialog: boolean;
  setShowResourcesDialog: (show: boolean) => void;
  activeSection: string;
  sections: Section[];
  selectedLevel: string;
  levels: {
    id: string;
    name: string;
    color: string;
  }[];
}

const ResourcesDialog = ({ 
  showResourcesDialog, 
  setShowResourcesDialog, 
  activeSection, 
  sections, 
  selectedLevel,
  levels
}: ResourcesDialogProps) => {
  return (
    <Dialog open={showResourcesDialog} onOpenChange={setShowResourcesDialog}>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle className="flex justify-between items-center">
            <span>Learning Resources</span>
            <DialogClose asChild>
              <Button variant="ghost" size="icon">
                <X className="h-4 w-4" />
              </Button>
            </DialogClose>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Resources for {sections.find(s => s.id === activeSection)?.title}</h3>
            <Badge className={levels.find(l => l.id === selectedLevel)?.color}>
              {levels.find(l => l.id === selectedLevel)?.name} Level
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Printable Worksheets</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <FileText className="h-4 w-4 mr-2 text-primary" />
                    <span>Practice Worksheet (PDF)</span>
                  </li>
                  <li className="flex items-center">
                    <FileText className="h-4 w-4 mr-2 text-primary" />
                    <span>Answer Key (PDF)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Digital Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Video className="h-4 w-4 mr-2 text-red-500" />
                    <span>Instructional Videos</span>
                  </li>
                  <li className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-2 text-blue-500" />
                    <span>Digital Textbook</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Interactive Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Play className="h-4 w-4 mr-2 text-green-500" />
                    <span>Online Simulations</span>
                  </li>
                  <li className="flex items-center">
                    <Play className="h-4 w-4 mr-2 text-green-500" />
                    <span>Virtual Labs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Teacher Materials</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <FileText className="h-4 w-4 mr-2 text-amber-500" />
                    <span>Lesson Plan Guide</span>
                  </li>
                  <li className="flex items-center">
                    <FileText className="h-4 w-4 mr-2 text-amber-500" />
                    <span>Assessment Tools</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex justify-end">
            <Button>
              Download All Resources
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResourcesDialog;
