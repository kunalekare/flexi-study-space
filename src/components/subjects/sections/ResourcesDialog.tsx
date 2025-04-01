
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X, FileText, Video, BookOpen, Play, Download } from "lucide-react";

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
  const activeTitle = sections.find(s => s.id === activeSection)?.title || "";
  const levelName = levels.find(l => l.id === selectedLevel)?.name || "";
  
  const handleDownload = (resourceType: string) => {
    // In a real application, this would trigger actual download functionality
    console.log(`Downloading ${resourceType} for ${activeTitle} - ${levelName} level`);
  };

  return (
    <Dialog open={showResourcesDialog} onOpenChange={setShowResourcesDialog}>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle className="flex justify-between items-center">
            <span>Learning Resources</span>
            <DialogClose asChild>
              <Button variant="ghost" size="icon" aria-label="Close resources dialog">
                <X className="h-4 w-4" />
              </Button>
            </DialogClose>
          </DialogTitle>
          <DialogDescription>
            Educational materials for {activeTitle} - {levelName} level
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Resources for {activeTitle}</h3>
            <Badge className={levels.find(l => l.id === selectedLevel)?.color}>
              {levelName} Level
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Printable Worksheets</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between items-center">
                    <div className="flex items-center">
                      <FileText className="h-4 w-4 mr-2 text-primary" aria-hidden="true" />
                      <span>Practice Worksheet (PDF)</span>
                    </div>
                    <Button 
                      size="sm" 
                      variant="ghost"
                      onClick={() => handleDownload("Practice Worksheet")}
                      aria-label="Download practice worksheet PDF"
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  </li>
                  <li className="flex justify-between items-center">
                    <div className="flex items-center">
                      <FileText className="h-4 w-4 mr-2 text-primary" aria-hidden="true" />
                      <span>Answer Key (PDF)</span>
                    </div>
                    <Button 
                      size="sm" 
                      variant="ghost"
                      onClick={() => handleDownload("Answer Key")}
                      aria-label="Download answer key PDF"
                    >
                      <Download className="h-4 w-4" />
                    </Button>
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
                  <li className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Video className="h-4 w-4 mr-2 text-red-500" aria-hidden="true" />
                      <span>Instructional Videos</span>
                    </div>
                    <Button 
                      size="sm" 
                      variant="ghost"
                      onClick={() => handleDownload("Instructional Videos")}
                      aria-label="Access instructional videos"
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  </li>
                  <li className="flex justify-between items-center">
                    <div className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-2 text-blue-500" aria-hidden="true" />
                      <span>Digital Textbook</span>
                    </div>
                    <Button 
                      size="sm" 
                      variant="ghost"
                      onClick={() => handleDownload("Digital Textbook")}
                      aria-label="Access digital textbook"
                    >
                      <Download className="h-4 w-4" />
                    </Button>
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
                  <li className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Play className="h-4 w-4 mr-2 text-green-500" aria-hidden="true" />
                      <span>Online Simulations</span>
                    </div>
                    <Button 
                      size="sm" 
                      variant="ghost"
                      onClick={() => handleDownload("Online Simulations")}
                      aria-label="Access online simulations"
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  </li>
                  <li className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Play className="h-4 w-4 mr-2 text-green-500" aria-hidden="true" />
                      <span>Virtual Labs</span>
                    </div>
                    <Button 
                      size="sm" 
                      variant="ghost"
                      onClick={() => handleDownload("Virtual Labs")}
                      aria-label="Access virtual labs"
                    >
                      <Download className="h-4 w-4" />
                    </Button>
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
                  <li className="flex justify-between items-center">
                    <div className="flex items-center">
                      <FileText className="h-4 w-4 mr-2 text-amber-500" aria-hidden="true" />
                      <span>Lesson Plan Guide</span>
                    </div>
                    <Button 
                      size="sm" 
                      variant="ghost"
                      onClick={() => handleDownload("Lesson Plan Guide")}
                      aria-label="Download lesson plan guide"
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  </li>
                  <li className="flex justify-between items-center">
                    <div className="flex items-center">
                      <FileText className="h-4 w-4 mr-2 text-amber-500" aria-hidden="true" />
                      <span>Assessment Tools</span>
                    </div>
                    <Button 
                      size="sm" 
                      variant="ghost"
                      onClick={() => handleDownload("Assessment Tools")}
                      aria-label="Download assessment tools"
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex justify-end">
            <Button 
              onClick={() => handleDownload("All Resources")}
              aria-label={`Download all educational resources for ${activeTitle} ${levelName} level`}
            >
              <Download className="mr-2 h-4 w-4" aria-hidden="true" />
              Download All Resources
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResourcesDialog;
