
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface VideoLessonDialogProps {
  selectedVideo: string | null;
  setSelectedVideo: (video: string | null) => void;
}

const VideoLessonDialog = ({ selectedVideo, setSelectedVideo }: VideoLessonDialogProps) => {
  return (
    <Dialog open={!!selectedVideo} onOpenChange={(open) => !open && setSelectedVideo(null)}>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle className="flex justify-between items-center">
            <span>Video Lesson</span>
            <DialogClose asChild>
              <Button variant="ghost" size="icon">
                <X className="h-4 w-4" />
              </Button>
            </DialogClose>
          </DialogTitle>
        </DialogHeader>
        {selectedVideo && (
          <div className="aspect-video w-full">
            <iframe 
              width="100%" 
              height="100%" 
              src={`https://www.youtube.com/embed/YKNKY8Tk_vk?autoplay=1`}
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default VideoLessonDialog;
