
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from "lucide-react";
import { toast } from "sonner";

const AlphabetSong = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentLetter, setCurrentLetter] = useState(0);
  const [muted, setMuted] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const [completedPlays, setCompletedPlays] = useState(0);
  
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const intervalRef = useRef<number | null>(null);
  
  // Educational info for each letter
  const letterInfo = {
    A: "Apple, Alligator, Airplane",
    B: "Ball, Banana, Butterfly",
    C: "Cat, Car, Cookie",
    D: "Dog, Duck, Dinosaur",
    E: "Elephant, Egg, Eagle",
    F: "Fish, Flower, Frog",
    G: "Goat, Grapes, Giraffe",
    H: "Hat, Horse, House",
    I: "Ice cream, Igloo, Insect",
    J: "Jam, Jellyfish, Jacket",
    K: "Kite, Kangaroo, Key",
    L: "Lion, Leaf, Lemon",
    M: "Monkey, Moon, Milk",
    N: "Nest, Nose, Nut",
    O: "Orange, Octopus, Owl",
    P: "Pig, Pizza, Pencil",
    Q: "Queen, Quilt, Question",
    R: "Rabbit, Rainbow, Robot",
    S: "Sun, Snake, Star",
    T: "Tiger, Tree, Train",
    U: "Umbrella, Unicorn, Underwear",
    V: "Violin, Volcano, Vegetable",
    W: "Whale, Wagon, Water",
    X: "Xylophone, X-ray, Box",
    Y: "Yo-yo, Yarn, Yellow",
    Z: "Zebra, Zoo, Zipper"
  };
  
  // Create audio element on component mount
  useEffect(() => {
    audioRef.current = new Audio('/alphabet-song.mp3');
    
    // This would be the actual song in a real implementation
    // For now we're simulating it with letter progression
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);
  
  // Handle mute toggle
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = muted;
    }
  }, [muted]);

  // Simulated playback logic
  const togglePlay = () => {
    if (isPlaying) {
      // Pause playback
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (audioRef.current) audioRef.current.pause();
      setIsPlaying(false);
    } else {
      // Start playback
      setIsPlaying(true);
      let letterIndex = currentLetter;
      
      // Simulate audio playback
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(e => console.error("Audio playback failed:", e));
      }
      
      // Advance through letters
      intervalRef.current = window.setInterval(() => {
        setCurrentLetter(letterIndex);
        letterIndex++;
        
        // End of alphabet reached
        if (letterIndex >= alphabet.length) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setIsPlaying(false);
          setCurrentLetter(0);
          setCompletedPlays(prev => prev + 1);
          
          toast.success("You've completed the alphabet song!", {
            description: "Great job singing along!",
          });
          
          // Auto-replay after a delay
          if (autoPlay) {
            setTimeout(() => {
              togglePlay();
            }, 3000);
          }
        }
      }, 500); // Change letter every 500ms
    }
  };
  
  const skipToLetter = (index: number) => {
    // Stop current playback
    if (isPlaying) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setIsPlaying(false);
    }
    
    // Set new letter
    setCurrentLetter(index);
  };
  
  const skipPrevious = () => {
    skipToLetter(Math.max(0, currentLetter - 1));
  };
  
  const skipNext = () => {
    skipToLetter(Math.min(alphabet.length - 1, currentLetter + 1));
  };
  
  const toggleMute = () => {
    setMuted(!muted);
  };
  
  const toggleAutoPlay = () => {
    setAutoPlay(!autoPlay);
    toast.info(autoPlay ? "Auto-play disabled" : "Auto-play enabled");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Alphabet Song</h2>
      <div className="bg-muted p-6 rounded-lg mb-6">
        <div className="text-center mb-8">
          <h3 className="font-medium mb-6">Learn the Alphabet through Song</h3>
          
          <div className="grid grid-cols-9 md:grid-cols-13 gap-1 mb-8">
            {alphabet.map((letter, index) => (
              <div 
                key={index}
                className={`p-2 rounded-md text-center cursor-pointer ${
                  index === currentLetter && isPlaying
                    ? "bg-primary text-white animate-bounce"
                    : index < currentLetter
                    ? "bg-primary/30"
                    : "bg-primary/10"
                }`}
                onClick={() => skipToLetter(index)}
              >
                <span className="text-lg font-bold">{letter}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-3 mb-6">
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="icon"
                onClick={skipPrevious}
                disabled={currentLetter === 0}
                aria-label="Previous letter"
              >
                <SkipBack className="h-4 w-4" />
              </Button>
              
              <Button 
                variant="default"
                size="lg"
                onClick={togglePlay}
                className="gap-2 min-w-[160px]"
                aria-label={isPlaying ? "Pause song" : "Play song"}
              >
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                {isPlaying ? "Pause Song" : "Play Song"}
              </Button>
              
              <Button 
                variant="outline" 
                size="icon"
                onClick={skipNext}
                disabled={currentLetter === alphabet.length - 1}
                aria-label="Next letter"
              >
                <SkipForward className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={toggleMute}
                aria-label={muted ? "Unmute" : "Mute"}
              >
                {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </Button>
              
              <Button
                variant="outline"
                size={autoPlay ? "default" : "default"}
                onClick={toggleAutoPlay}
                className={autoPlay ? "bg-primary/20" : ""}
              >
                {autoPlay ? "Auto-Play: ON" : "Auto-Play: OFF"}
              </Button>
            </div>
          </div>
          
          {/* Current letter display */}
          <div className="flex flex-col items-center gap-3">
            <div className="text-7xl font-bold text-primary animate-bounce">
              {alphabet[currentLetter]}
            </div>
            
            <div className="mt-2 px-4 py-2 bg-background rounded-lg">
              <p className="text-lg">
                <strong>{alphabet[currentLetter]}</strong> is for 
                <span className="font-medium ml-1">
                  {letterInfo[alphabet[currentLetter] as keyof typeof letterInfo]}
                </span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-medium mb-2">Learning Tips</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Sing along with your child</li>
              <li>• Point to each letter as you sing it</li>
              <li>• Encourage your child to dance along</li>
              <li>• Practice identifying letters after singing</li>
            </ul>
          </div>
          
          <div className="bg-primary/10 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Activity Extensions</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Find objects that start with different letters</li>
              <li>• Draw letters in sand or with finger paint</li>
              <li>• Create an alphabet collage with magazine cutouts</li>
              <li>• Use alphabet flashcards for additional practice</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-4 text-center text-sm text-muted-foreground">
          <p>Song completed {completedPlays} times</p>
        </div>
      </div>
    </div>
  );
};

export default AlphabetSong;
