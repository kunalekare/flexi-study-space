
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, ChevronRight, ChevronLeft } from "lucide-react";

const CountingWithSongs = () => {
  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const countingSongs = [
    {
      title: "Five Little Ducks",
      lyrics: [
        "Five little ducks went out one day,",
        "Over the hills and far away.",
        "Mother duck said, 'Quack, quack, quack, quack.'",
        "But only four little ducks came back."
      ],
      emoji: "🦆",
      counts: 5
    },
    {
      title: "Ten in the Bed",
      lyrics: [
        "There were ten in the bed and the little one said,",
        "'Roll over, roll over.'",
        "So they all rolled over and one fell out.",
        "There were nine in the bed..."
      ],
      emoji: "🛏️",
      counts: 10
    },
    {
      title: "Five Little Monkeys",
      lyrics: [
        "Five little monkeys jumping on the bed,",
        "One fell off and bumped his head.",
        "Mama called the doctor and the doctor said,",
        "'No more monkeys jumping on the bed!'"
      ],
      emoji: "🐵",
      counts: 5
    }
  ];
  
  const song = countingSongs[currentSong];
  
  const handlePrevSong = () => {
    if (currentSong > 0) {
      setCurrentSong(currentSong - 1);
      setIsPlaying(false);
    }
  };
  
  const handleNextSong = () => {
    if (currentSong < countingSongs.length - 1) {
      setCurrentSong(currentSong + 1);
      setIsPlaying(false);
    }
  };
  
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Counting with Songs</h2>
      <div className="bg-muted p-4 rounded-lg mb-6">
        <div className="flex items-center justify-between mb-4">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handlePrevSong}
            disabled={currentSong === 0}
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Previous
          </Button>
          <h3 className="font-medium text-lg">{song.title}</h3>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleNextSong}
            disabled={currentSong === countingSongs.length - 1}
          >
            Next
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
        
        <div className="bg-primary/10 p-4 rounded-lg mb-4">
          <div className="flex justify-center my-4">
            <div className="flex items-center justify-center">
              {Array(song.counts).fill(0).map((_, idx) => (
                <span 
                  key={idx} 
                  className="text-3xl mx-1"
                  style={{ 
                    opacity: isPlaying ? (idx < song.counts - Math.floor(Date.now() / 1000) % song.counts ? 1 : 0.3) : 1,
                    transition: "opacity 0.5s ease"
                  }}
                >
                  {song.emoji}
                </span>
              ))}
            </div>
          </div>
          
          <div className="space-y-2">
            {song.lyrics.map((line, idx) => (
              <p 
                key={idx} 
                className="text-center"
                style={{ 
                  fontWeight: isPlaying && idx === Math.floor(Date.now() / 2000) % song.lyrics.length ? "bold" : "normal",
                  color: isPlaying && idx === Math.floor(Date.now() / 2000) % song.lyrics.length ? "var(--primary)" : ""
                }}
              >
                {line}
              </p>
            ))}
          </div>
          
          <div className="flex justify-center mt-4">
            <Button 
              variant="default"
              size="sm"
              onClick={togglePlay}
              className="gap-2"
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              {isPlaying ? "Pause Song" : "Play Song"}
            </Button>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg">
          <h4 className="font-medium mb-2">How to Use This Activity</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Sing along with your child, emphasizing the numbers as they appear in the song</li>
            <li>• Use fingers to count down with the song</li>
            <li>• Encourage your child to act out the movements in the song</li>
            <li>• Ask questions about the numbers: "How many ducks are left now?"</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CountingWithSongs;
