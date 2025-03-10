
import React, { useState, useEffect } from "react";
import { ChevronsUpDown, Maximize, Minimize, Sun, Moon, Type } from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogTrigger, 
  DialogTitle,
  DialogHeader,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

type AccessibilityState = {
  fontSize: number;
  contrast: "default" | "high";
  reducedMotion: boolean;
  textToSpeech: boolean;
  darkMode: boolean;
};

const AccessibilityPanel = () => {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilityState>({
    fontSize: 100,
    contrast: "default",
    reducedMotion: false,
    textToSpeech: false,
    darkMode: false,
  });

  // Apply font size to the document
  useEffect(() => {
    document.documentElement.style.fontSize = `${settings.fontSize}%`;
  }, [settings.fontSize]);

  // Apply contrast mode
  useEffect(() => {
    if (settings.contrast === "high") {
      document.documentElement.classList.add("high-contrast");
    } else {
      document.documentElement.classList.remove("high-contrast");
    }
  }, [settings.contrast]);

  // Apply reduced motion
  useEffect(() => {
    if (settings.reducedMotion) {
      document.documentElement.classList.add("reduce-motion");
    } else {
      document.documentElement.classList.remove("reduce-motion");
    }
  }, [settings.reducedMotion]);

  // Apply dark mode
  useEffect(() => {
    if (settings.darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [settings.darkMode]);

  // Mock text-to-speech functionality
  const toggleTextToSpeech = () => {
    const newValue = !settings.textToSpeech;
    setSettings({ ...settings, textToSpeech: newValue });
    
    if (newValue) {
      toast.success("Text-to-speech enabled", { 
        description: "Screen reader functionality is now active" 
      });
    } else {
      toast.info("Text-to-speech disabled");
    }
  };

  const resetSettings = () => {
    setSettings({
      fontSize: 100,
      contrast: "default",
      reducedMotion: false,
      textToSpeech: false,
      darkMode: false,
    });
    toast.success("Settings reset to defaults");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          size="icon" 
          className="rounded-full w-10 h-10 fixed bottom-6 right-6 z-50 shadow-lg hover-lift"
          aria-label="Accessibility Options"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="animate-pulse-soft"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="m4.9 4.9 14.2 14.2" />
            <path d="M12 18.5v.5" />
            <path d="M12 5v.5" />
            <path d="M17.5 12h.5" />
            <path d="M5 12h.5" />
            <path d="M12 7v5l3 3" />
          </svg>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md glass-panel">
        <DialogHeader>
          <DialogTitle className="text-xl flex items-center gap-2">
            <span>Accessibility Settings</span>
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Type size={16} />
                <span>Text Size</span>
              </div>
              <span className="text-sm text-muted-foreground">{settings.fontSize}%</span>
            </div>
            <div className="flex gap-4 items-center">
              <Minimize size={16} />
              <Slider 
                value={[settings.fontSize]} 
                min={80} 
                max={200} 
                step={10}
                onValueChange={([value]) => setSettings({...settings, fontSize: value})}
                className="flex-1"
              />
              <Maximize size={16} />
            </div>
          </div>
          
          <Separator />
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 18v-6" />
                  <path d="M8 18v-1" />
                  <path d="M16 18v-1" />
                  <path d="M12 12V8" />
                  <path d="M12 12 8 8" />
                  <path d="m12 12 4-4" />
                </svg>
                <span>High Contrast</span>
              </div>
              <Switch 
                checked={settings.contrast === "high"}
                onCheckedChange={(checked) => 
                  setSettings({...settings, contrast: checked ? "high" : "default"})
                }
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ChevronsUpDown size={16} />
                <span>Reduced Motion</span>
              </div>
              <Switch 
                checked={settings.reducedMotion}
                onCheckedChange={(checked) => 
                  setSettings({...settings, reducedMotion: checked})
                }
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M12 18v-3" />
                  <path d="M8 14.5h8" />
                  <path d="M7 9h2v2H7z" />
                  <path d="M15 9h2v2h-2z" />
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                </svg>
                <span>Text To Speech</span>
              </div>
              <Switch 
                checked={settings.textToSpeech}
                onCheckedChange={toggleTextToSpeech}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {settings.darkMode ? <Moon size={16} /> : <Sun size={16} />}
                <span>Dark Mode</span>
              </div>
              <Switch 
                checked={settings.darkMode}
                onCheckedChange={(checked) => 
                  setSettings({...settings, darkMode: checked})
                }
              />
            </div>
          </div>
        </div>
        <DialogFooter className="sm:justify-between">
          <Button variant="outline" size="sm" onClick={resetSettings}>
            Reset Defaults
          </Button>
          <Button size="sm" onClick={() => setOpen(false)}>
            Apply
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AccessibilityPanel;
