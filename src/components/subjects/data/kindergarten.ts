
import React from "react";
import { Smile } from "lucide-react";

const kindergartenData = {
  title: "For Kindergarten",
  description: "Fun and engaging lessons designed to support early learners through interactive storytelling, songs, and games.",
  icon: React.createElement(Smile, { className: "h-6 w-6" }),
  color: "bg-pink-50 dark:bg-pink-900/20",
  textColor: "text-pink-600 dark:text-pink-400",
  image: "https://www.eurokidsindia.com/blog/wp-content/uploads/2023/07/ideas-to-make-learning-interesting-870x570.jpg",
  sections: [
    {
      id: "stories",
      title: "Storytelling & Songs",
      content: "Engaging storytelling and sing-along songs designed to improve language and listening skills.",
      lessons: [
        { 
          title: "The Little Red Hen", 
          type: "Story", 
          duration: "10 mins", 
          grade: "grade1",
          content: "A classic folk tale teaching children about the importance of hard work and helping others. Students will follow along as the Little Red Hen plants wheat, harvests it, and bakes bread, with no help from her lazy friends."
        },
        { 
          title: "Counting with Songs", 
          type: "Sing-along", 
          duration: "8 mins", 
          grade: "grade1",
          content: "Learn to count from 1 to 10 with fun, catchy songs that incorporate movement and visual aids. Perfect for auditory and kinesthetic learners to build number recognition."
        },
        { 
          title: "Fairy Tale Adventures", 
          type: "Story", 
          duration: "12 mins", 
          grade: "grade2",
          content: "Explore classic fairy tales with interactive elements where students can make choices that affect the story. Features simplified language and vibrant illustrations."
        },
        { 
          title: "Alphabet Song Plus", 
          type: "Sing-along", 
          duration: "5 mins", 
          grade: "grade2",
          content: "An enhanced alphabet song that connects each letter to objects, animals, and actions, reinforcing letter recognition and phonetic awareness."
        },
        { 
          title: "Rhyming Word Fun", 
          type: "Game", 
          duration: "10 mins", 
          grade: "grade3",
          content: "A playful introduction to rhyming words through interactive games. Students will identify and create rhyming pairs, building phonological awareness."
        },
        { 
          title: "Storytelling Journey", 
          type: "Story", 
          duration: "15 mins", 
          grade: "grade3",
          content: "A more advanced storytelling experience where students engage with longer narratives and begin to identify story elements like characters, setting, and plot."
        }
      ]
    },
    {
      id: "shapes",
      title: "Shapes & Colors",
      content: "Interactive activities to help young learners recognize and differentiate basic shapes and colors.",
      lessons: [
        { 
          title: "Color Matching Game", 
          type: "Interactive", 
          duration: "10 mins", 
          grade: "grade1",
          content: "A fun, interactive game where students match colors to corresponding objects. This activity builds color recognition and vocabulary development."
        },
        { 
          title: "Shape Hunt", 
          type: "Game", 
          duration: "12 mins", 
          grade: "grade1",
          content: "Students identify basic shapes (circle, square, triangle) in everyday objects through an engaging virtual scavenger hunt."
        },
        { 
          title: "Sorting by Color", 
          type: "Activity", 
          duration: "15 mins", 
          grade: "grade2",
          content: "Learn to sort objects by color attributes. This activity introduces classification skills and reinforces color recognition."
        },
        { 
          title: "Drawing with Shapes", 
          type: "Creative", 
          duration: "20 mins", 
          grade: "grade3",
          content: "Create pictures using basic geometric shapes. This activity connects artistic expression with mathematical concepts."
        },
        { 
          title: "Rainbow Colors", 
          type: "Song", 
          duration: "8 mins", 
          grade: "grade2",
          content: "Learn about the colors of the rainbow through music. This multisensory approach combines visual and auditory learning."
        },
        { 
          title: "Advanced Shapes", 
          type: "Advanced", 
          duration: "10 mins", 
          grade: "grade4",
          content: "Introduction to more complex shapes like hexagons, octagons, and 3D shapes. Includes interactive exploration and identification activities."
        }
      ]
    },
    {
      id: "early-math",
      title: "Early Math Skills",
      content: "Simple and interactive math exercises to introduce young learners to numbers and counting.",
      lessons: [
        { 
          title: "Counting 1 to 10", 
          type: "Simple", 
          duration: "10 mins", 
          grade: "grade1",
          content: "Learn to count from 1 to 10 using visual aids, songs, and interactive counting activities. Builds number recognition skills."
        },
        { 
          title: "Sorting & Matching", 
          type: "Game", 
          duration: "12 mins", 
          grade: "grade2",
          content: "Develop classification skills by sorting objects by various attributes such as size, shape, and color."
        },
        { 
          title: "Simple Addition", 
          type: "Interactive", 
          duration: "15 mins", 
          grade: "grade3",
          content: "Introduction to addition concepts using visual manipulatives to represent adding small numbers together."
        },
        { 
          title: "Number Tracing", 
          type: "Activity", 
          duration: "15 mins", 
          grade: "grade1",
          content: "Practice writing numbers 1-10 with guided tracing activities. Develops fine motor skills and number formation."
        },
        { 
          title: "Counting with Animals", 
          type: "Video", 
          duration: "8 mins", 
          grade: "grade2",
          content: "A fun video lesson where children count different animals, reinforcing counting skills and animal recognition."
        },
        { 
          title: "Patterns and Sequences", 
          type: "Advanced", 
          duration: "12 mins", 
          grade: "grade4",
          content: "Introduction to simple patterns and sequences. Students identify, continue, and create patterns using shapes, colors, and numbers."
        },
        { 
          title: "Skip Counting", 
          type: "Intermediate", 
          duration: "15 mins", 
          grade: "grade3",
          content: "Learn to count by 2s, 5s, and 10s with interactive activities and visual supports."
        },
        { 
          title: "Place Value Basics", 
          type: "Advanced", 
          duration: "18 mins", 
          grade: "grade5",
          content: "Introduction to ones and tens place values using manipulatives and visual models to represent two-digit numbers."
        }
      ]
    },
    {
      id: "logic",
      title: "Memory & Logic",
      content: "Fun puzzles and games to enhance early cognitive skills like memory and problem-solving.",
      lessons: [
        { 
          title: "Find the Pattern", 
          type: "Puzzle", 
          duration: "15 mins", 
          grade: "grade3",
          content: "Identify and continue patterns in shapes, colors, and objects. Develops logical thinking and pattern recognition."
        },
        { 
          title: "Matching Game", 
          type: "Interactive", 
          duration: "10 mins", 
          grade: "grade1",
          content: "A simple memory matching game where students find pairs of cards. Builds visual memory and concentration."
        },
        { 
          title: "Memory Challenge", 
          type: "Game", 
          duration: "12 mins", 
          grade: "grade2",
          content: "Remember and recall sequences of images, sounds, and words. Progressive difficulty levels adapt to student abilities."
        },
        { 
          title: "Spot the Difference", 
          type: "Puzzle", 
          duration: "10 mins", 
          grade: "grade3",
          content: "Compare images to find subtle differences. Develops attention to detail and visual discrimination skills."
        },
        { 
          title: "Logic Puzzles", 
          type: "Advanced", 
          duration: "12 mins", 
          grade: "grade4",
          content: "Simple logic problems using pictures and stories. Students use deductive reasoning to solve problems."
        },
        { 
          title: "Maze Challenges", 
          type: "Activity", 
          duration: "15 mins", 
          grade: "grade2",
          content: "Navigate through mazes of increasing complexity. Develops planning, problem-solving, and spatial awareness."
        },
        { 
          title: "Sequencing Stories", 
          type: "Interactive", 
          duration: "15 mins", 
          grade: "grade3",
          content: "Arrange pictures in the correct sequence to tell a story. Builds narrative understanding and logical ordering."
        },
        { 
          title: "Critical Thinking Games", 
          type: "Advanced", 
          duration: "20 mins", 
          grade: "grade5",
          content: "Games that require strategy and planning. Students make decisions and see the consequences in a safe, supportive environment."
        }
      ]
    },
    {
      id: "learn-alphabets",
      title: "Learn Alphabets",
      content: "Engaging activities to help young learners recognize, write, and pronounce letters of the alphabet.",
      lessons: [
        { 
          title: "A to Z Letter Recognition", 
          type: "Interactive", 
          duration: "10 mins", 
          grade: "grade1",
          content: "Interactive activities to identify and recognize all 26 letters in both uppercase and lowercase forms."
        },
        { 
          title: "Phonics Sounds", 
          type: "Video", 
          duration: "12 mins", 
          grade: "grade2",
          content: "Learn the basic phonetic sounds of each letter through engaging videos with clear audio and visual examples."
        },
        { 
          title: "Letter Tracing Practice", 
          type: "Activity", 
          duration: "15 mins", 
          grade: "grade1",
          content: "Guided practice for forming letters correctly, with animated demonstrations and interactive tracing activities."
        },
        { 
          title: "Alphabet Song", 
          type: "Sing-along", 
          duration: "8 mins", 
          grade: "grade1",
          content: "A catchy alphabet song with visual representations of each letter and corresponding objects."
        },
        { 
          title: "Matching Letters with Objects", 
          type: "Game", 
          duration: "10 mins", 
          grade: "grade2",
          content: "Match letters to objects that begin with that letter sound. Reinforces letter-sound associations."
        },
        { 
          title: "Alphabet Flashcards", 
          type: "Memory Game", 
          duration: "12 mins", 
          grade: "grade1",
          content: "Interactive flashcards that show each letter, how to pronounce it, and words that begin with it."
        },
        { 
          title: "Letter Blends", 
          type: "Intermediate", 
          duration: "15 mins", 
          grade: "grade3",
          content: "Introduction to common letter blends (sh, ch, th) and how they create new sounds when combined."
        },
        { 
          title: "Word Building", 
          type: "Advanced", 
          duration: "18 mins", 
          grade: "grade4",
          content: "Create simple words by combining letters. Introduces early reading and spelling concepts."
        },
        { 
          title: "Phonics Rules", 
          type: "Advanced", 
          duration: "20 mins", 
          grade: "grade5",
          content: "Learn basic phonics rules that help with reading and spelling, presented through interactive games and activities."
        }
      ]
    }    
  ]
};

export default kindergartenData;
