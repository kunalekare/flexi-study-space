
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface LittleRedHenProps {
  storyProgress: number;
  setStoryProgress: (progress: number) => void;
}

const LittleRedHen = ({ storyProgress, setStoryProgress }: LittleRedHenProps) => {
  const storyPages = [
    {
      text: "Once upon a time, there was a little red hen who lived on a farm with her friends: a lazy dog, a sleepy cat, and a noisy duck.",
      image: "🐔🐕🐱🦆"
    },
    {
      text: "One day, the little red hen found some wheat seeds. 'Who will help me plant these wheat seeds?' asked the little red hen.",
      image: "🐔🌾"
    },
    {
      text: "'Not I,' said the dog. 'Not I,' said the cat. 'Not I,' said the duck. 'Then I will do it myself,' said the little red hen.",
      image: "🐔🙅‍♂️🐕🙅‍♂️🐱🙅‍♂️🦆"
    },
    {
      text: "The little red hen planted the wheat seeds all by herself. Soon the wheat grew tall.",
      image: "🐔🌾🌾🌾"
    },
    {
      text: "'Who will help me cut the wheat?' asked the little red hen. 'Not I,' said the dog. 'Not I,' said the cat. 'Not I,' said the duck.",
      image: "🐔✂️🌾🙅‍♂️🐕🙅‍♂️🐱🙅‍♂️🦆"
    },
    {
      text: "'Then I will do it myself,' said the little red hen. And she cut the wheat all by herself.",
      image: "🐔✂️🌾"
    },
    {
      text: "The little red hen asked who would help her take the wheat to the mill, but again, no one would help. So she did it herself.",
      image: "🐔🏠🌾"
    },
    {
      text: "Then she asked who would help her bake bread from the flour. Again, no one would help. So she baked the bread herself.",
      image: "🐔👩‍🍳🍞"
    },
    {
      text: "When the bread was ready, she asked, 'Who will help me eat the bread?' 'I will!' said the dog. 'I will!' said the cat. 'I will!' said the duck.",
      image: "🐔🍞🙋‍♂️🐕🙋‍♂️🐱🙋‍♂️🦆"
    },
    {
      text: "'No, you won't,' said the little red hen. 'You didn't help me plant the wheat, cut it, take it to the mill, or bake the bread. So I will eat it myself.' And she did!",
      image: "🐔😋🍞😢🐕😢🐱😢🦆"
    },
    {
      text: "The moral of the story: If you want to enjoy the rewards, you must help with the work.",
      image: "👨‍🏫"
    }
  ];

  const currentPage = storyPages[storyProgress];

  const handlePrevPage = () => {
    if (storyProgress > 0) {
      setStoryProgress(storyProgress - 1);
    }
  };

  const handleNextPage = () => {
    if (storyProgress < storyPages.length - 1) {
      setStoryProgress(storyProgress + 1);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">The Little Red Hen</h2>
      <div className="bg-muted p-4 rounded-lg mb-6">
        <div className="bg-primary/10 p-6 rounded-lg mb-4">
          <div className="text-center mb-4">
            <div className="text-4xl mb-6">{currentPage.image}</div>
            <p className="text-lg">{currentPage.text}</p>
          </div>
          <div className="flex justify-between items-center mt-6">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handlePrevPage}
              disabled={storyProgress === 0}
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Previous
            </Button>
            <span className="text-sm">
              Page {storyProgress + 1} of {storyPages.length}
            </span>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleNextPage}
              disabled={storyProgress === storyPages.length - 1}
            >
              Next
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg">
          <h4 className="font-medium mb-2">Reading Comprehension</h4>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium mb-1">Who is the main character in the story?</p>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">The Dog</Button>
                <Button size="sm" variant="outline">The Cat</Button>
                <Button size="sm" variant="outline" className="bg-green-500 text-white">The Little Red Hen</Button>
                <Button size="sm" variant="outline">The Duck</Button>
              </div>
            </div>
            
            <div>
              <p className="text-sm font-medium mb-1">What is the moral of the story?</p>
              <p className="text-sm text-muted-foreground">
                Help children understand that we should participate in work to enjoy the benefits, and that teamwork is important.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LittleRedHen;
