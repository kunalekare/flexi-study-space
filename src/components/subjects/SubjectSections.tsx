
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LevelSelector from "./sections/LevelSelector";
import SectionContent from "./sections/SectionContent";
import VideoLessonDialog from "./sections/VideoLessonDialog";
import InteractiveLessonDialog from "./sections/InteractiveLessonDialog";
import ResourcesDialog from "./sections/ResourcesDialog";
import { Pencil, Lightbulb, Calculator, Book, Target } from "lucide-react";

interface Lesson {
  title: string;
  type: string;
  duration: string;
  content?: string;
  educationalContent?: React.ReactNode;
}

interface Section {
  id: string;
  title: string;
  content: string;
  lessons: Lesson[];
}

interface SubjectSectionsProps {
  sections: Section[];
}

const SubjectSections = ({ sections }: SubjectSectionsProps) => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [showResourcesDialog, setShowResourcesDialog] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>(sections[0].id);
  const [selectedLevel, setSelectedLevel] = useState<string>("beginner");
  
  // Function to generate a YouTube video ID based on the lesson title
  // In a real app, you would store actual YouTube IDs in your data
  const getYoutubeId = (title: string) => {
    // This is a placeholder - in a real app, you would have actual YouTube IDs
    const videoMappings: Record<string, string> = {
      "Addition Adventure": "mjlySYZfCP4",
      "Subtraction Safari": "aK3FKEFkJco",
      "Multiplication Quest": "gywZLQ0TTZ4",
      "Division Discovery": "KGTqPWRfZMU",
      "Color-Coded Equations": "9GgAbyYDFHQ",
      "Step-by-Step Problem Solving": "yWhJsiYm7SA",
      "Visual Fractions": "tDQipFj7FZk",
      "Geometry Visualizer": "7v-Y7BdNwmY",
      "Money Math": "ur87MKzumcA",
      "Telling Time": "IBBQXBhSNUs",
      "Measurement Madness": "xKUFXv9GqeM",
      "Shopping Simulator": "C3Mft5h-T2c"
    };
    
    return videoMappings[title] || "dQw4w9WgXcQ"; // Fallback ID
  };
  
  const handlePlayVideo = (lesson: Lesson) => {
    if (lesson.type === "Video") {
      setSelectedVideo(getYoutubeId(lesson.title));
    } else {
      setSelectedLesson(lesson);
    }
  };

  const handleViewResources = (sectionId: string) => {
    setActiveSection(sectionId);
    setShowResourcesDialog(true);
  };

  // Defined levels for learning paths
  const levels = [
    { id: "beginner", name: "Beginner", color: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" },
    { id: "intermediate", name: "Intermediate", color: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400" },
    { id: "advanced", name: "Advanced", color: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400" },
  ];

  // Enhanced educational content for math lessons
  const educationalContent: Record<string, React.ReactNode> = {
    "Addition Adventure": (
      <div className="space-y-4">
        <div className="bg-primary/10 p-4 rounded-lg">
          <h3 className="font-medium text-lg mb-2 flex items-center">
            <Target className="h-5 w-5 mr-2 text-primary" />
            Learning Objectives
          </h3>
          <ul className="list-disc ml-5 space-y-1 text-muted-foreground">
            <li>Understand addition concepts using visual models</li>
            <li>Solve addition problems with one and two-digit numbers</li>
            <li>Learn strategies for mental addition</li>
            <li>Understand the commutative property of addition</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-800 border rounded-lg p-4">
          <h3 className="font-medium text-lg mb-2 flex items-center">
            <Calculator className="h-5 w-5 mr-2 text-primary" />
            Key Concepts
          </h3>
          <div className="space-y-3">
            <div>
              <h4 className="font-medium">Addition as Combining</h4>
              <p className="text-sm text-muted-foreground">Addition means combining two or more quantities to find their total.</p>
              <div className="mt-2 bg-muted p-3 rounded text-center">
                <span className="text-2xl">3 + 4 = 7</span>
                <div className="flex justify-center mt-2 space-x-1">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-6 h-6 rounded-full bg-blue-500"></div>
                  ))}
                  <span className="mx-2 text-xl">+</span>
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-6 h-6 rounded-full bg-green-500"></div>
                  ))}
                  <span className="mx-2 text-xl">=</span>
                  {[...Array(7)].map((_, i) => (
                    <div key={i} className="w-6 h-6 rounded-full bg-primary"></div>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium">Commutative Property</h4>
              <p className="text-sm text-muted-foreground">The order of the numbers doesn't change the sum: a + b = b + a</p>
              <div className="mt-2 bg-muted p-3 rounded text-center">
                <div className="flex justify-center items-center">
                  <span className="text-xl">4 + 2 = 6</span>
                  <span className="mx-4">and</span>
                  <span className="text-xl">2 + 4 = 6</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 border rounded-lg p-4">
          <h3 className="font-medium text-lg mb-2 flex items-center">
            <Pencil className="h-5 w-5 mr-2 text-primary" />
            Practice Activities
          </h3>
          <div className="space-y-4">
            <div className="bg-muted p-3 rounded">
              <p className="font-medium">Addition Fact Families</p>
              <p className="text-sm text-muted-foreground mb-2">Complete the fact family for the numbers 3, 5, and 8:</p>
              <div className="grid grid-cols-2 gap-2 text-center">
                <div className="p-2 border rounded bg-white dark:bg-gray-700">3 + 5 = 8</div>
                <div className="p-2 border rounded bg-white dark:bg-gray-700">5 + 3 = 8</div>
                <div className="p-2 border rounded bg-white dark:bg-gray-700">8 - 5 = 3</div>
                <div className="p-2 border rounded bg-white dark:bg-gray-700">8 - 3 = 5</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    
    "Subtraction Safari": (
      <div className="space-y-4">
        <div className="bg-primary/10 p-4 rounded-lg">
          <h3 className="font-medium text-lg mb-2 flex items-center">
            <Target className="h-5 w-5 mr-2 text-primary" />
            Learning Objectives
          </h3>
          <ul className="list-disc ml-5 space-y-1 text-muted-foreground">
            <li>Understand subtraction as taking away or finding the difference</li>
            <li>Use count-back and count-up strategies for subtraction</li>
            <li>Solve subtraction problems using visual models</li>
            <li>Understand the relationship between addition and subtraction</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-800 border rounded-lg p-4">
          <h3 className="font-medium text-lg mb-2 flex items-center">
            <Calculator className="h-5 w-5 mr-2 text-primary" />
            Key Concepts
          </h3>
          <div className="space-y-3">
            <div>
              <h4 className="font-medium">Subtraction as Taking Away</h4>
              <p className="text-sm text-muted-foreground">Subtraction can represent removing a quantity from another.</p>
              <div className="mt-2 bg-muted p-3 rounded text-center">
                <span className="text-2xl">7 - 3 = 4</span>
                <div className="flex flex-col items-center mt-2 space-y-2">
                  <div className="flex space-x-1">
                    {[...Array(7)].map((_, i) => (
                      <div key={i} className="w-6 h-6 rounded-full bg-primary"></div>
                    ))}
                  </div>
                  <div className="text-xl">−</div>
                  <div className="flex space-x-1">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-6 h-6 rounded-full bg-red-500"></div>
                    ))}
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-6 h-6 rounded-full opacity-0"></div>
                    ))}
                  </div>
                  <div className="text-xl">=</div>
                  <div className="flex space-x-1">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-6 h-6 rounded-full bg-green-500"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium">Subtraction as Finding the Difference</h4>
              <p className="text-sm text-muted-foreground">Subtraction can also be seen as comparing two quantities.</p>
              <div className="mt-2 bg-muted p-3 rounded text-center">
                <span className="text-xl">The difference between 8 and 5 is 3</span>
                <div className="flex justify-center mt-2 space-x-1">
                  <div className="flex space-x-1">
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className="w-6 h-6 rounded-full bg-blue-500"></div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center mt-2">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-6 h-6 rounded-full bg-blue-500"></div>
                    ))}
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-6 h-6 rounded-full bg-amber-500"></div>
                    ))}
                  </div>
                </div>
                <p className="text-sm mt-2">The difference (yellow) is 3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    
    "Multiplication Quest": (
      <div className="space-y-4">
        <div className="bg-primary/10 p-4 rounded-lg">
          <h3 className="font-medium text-lg mb-2 flex items-center">
            <Target className="h-5 w-5 mr-2 text-primary" />
            Learning Objectives
          </h3>
          <ul className="list-disc ml-5 space-y-1 text-muted-foreground">
            <li>Understand multiplication as repeated addition</li>
            <li>Visualize multiplication using arrays and area models</li>
            <li>Develop fluency with multiplication facts</li>
            <li>Apply multiplication to solve real-world problems</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-800 border rounded-lg p-4">
          <h3 className="font-medium text-lg mb-2 flex items-center">
            <Calculator className="h-5 w-5 mr-2 text-primary" />
            Key Concepts
          </h3>
          <div className="space-y-3">
            <div>
              <h4 className="font-medium">Multiplication as Repeated Addition</h4>
              <p className="text-sm text-muted-foreground">Multiplication represents adding the same number multiple times.</p>
              <div className="mt-2 bg-muted p-3 rounded">
                <div className="text-center">
                  <span className="text-2xl">3 × 4 = 12</span>
                </div>
                <div className="mt-2">
                  <div className="flex flex-col space-y-2">
                    <div className="flex space-x-1">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-6 h-6 rounded-full bg-primary"></div>
                      ))}
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-6 h-6 rounded-full bg-primary"></div>
                      ))}
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-6 h-6 rounded-full bg-primary"></div>
                      ))}
                    </div>
                  </div>
                  <div className="text-center mt-2">
                    <span className="text-lg">4 + 4 + 4 = 12</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium">Array Model</h4>
              <p className="text-sm text-muted-foreground">Visualizing multiplication using rows and columns.</p>
              <div className="mt-2 bg-muted p-3 rounded text-center">
                <span className="text-xl">3 × 4 = 12</span>
                <div className="mt-2 inline-grid grid-cols-4 gap-1">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="w-6 h-6 rounded-full bg-green-500"></div>
                  ))}
                </div>
                <p className="text-sm mt-2">3 rows × 4 columns = 12 total</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 border rounded-lg p-4">
          <h3 className="font-medium text-lg mb-2 flex items-center">
            <Lightbulb className="h-5 w-5 mr-2 text-primary" />
            Multiplication Properties
          </h3>
          <div className="space-y-2">
            <div className="bg-muted p-3 rounded">
              <h4 className="font-medium">Commutative Property</h4>
              <p className="text-sm text-muted-foreground">a × b = b × a</p>
              <div className="text-center mt-1">
                <span>3 × 4 = 4 × 3</span>
              </div>
            </div>
            <div className="bg-muted p-3 rounded">
              <h4 className="font-medium">Associative Property</h4>
              <p className="text-sm text-muted-foreground">(a × b) × c = a × (b × c)</p>
              <div className="text-center mt-1">
                <span>(2 × 3) × 4 = 2 × (3 × 4)</span>
              </div>
            </div>
            <div className="bg-muted p-3 rounded">
              <h4 className="font-medium">Distributive Property</h4>
              <p className="text-sm text-muted-foreground">a × (b + c) = (a × b) + (a × c)</p>
              <div className="text-center mt-1">
                <span>3 × (4 + 2) = (3 × 4) + (3 × 2)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    
    "Division Discovery": (
      <div className="space-y-4">
        <div className="bg-primary/10 p-4 rounded-lg">
          <h3 className="font-medium text-lg mb-2 flex items-center">
            <Target className="h-5 w-5 mr-2 text-primary" />
            Learning Objectives
          </h3>
          <ul className="list-disc ml-5 space-y-1 text-muted-foreground">
            <li>Understand division as fair sharing or grouping</li>
            <li>Visualize division using manipulatives and models</li>
            <li>Recognize the relationship between multiplication and division</li>
            <li>Solve division problems with and without remainders</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-800 border rounded-lg p-4">
          <h3 className="font-medium text-lg mb-2 flex items-center">
            <Calculator className="h-5 w-5 mr-2 text-primary" />
            Key Concepts
          </h3>
          <div className="space-y-3">
            <div>
              <h4 className="font-medium">Division as Sharing</h4>
              <p className="text-sm text-muted-foreground">Division can represent distributing items equally among groups.</p>
              <div className="mt-2 bg-muted p-3 rounded text-center">
                <span className="text-2xl">12 ÷ 3 = 4</span>
                <p className="text-sm mt-1">12 items shared equally among 3 groups</p>
                <div className="mt-2 flex justify-center space-x-4">
                  <div className="border rounded p-2">
                    <div className="flex flex-wrap gap-1 justify-center w-20">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-5 h-5 rounded-full bg-primary"></div>
                      ))}
                    </div>
                    <p className="text-xs mt-1">Group 1</p>
                  </div>
                  <div className="border rounded p-2">
                    <div className="flex flex-wrap gap-1 justify-center w-20">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-5 h-5 rounded-full bg-primary"></div>
                      ))}
                    </div>
                    <p className="text-xs mt-1">Group 2</p>
                  </div>
                  <div className="border rounded p-2">
                    <div className="flex flex-wrap gap-1 justify-center w-20">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-5 h-5 rounded-full bg-primary"></div>
                      ))}
                    </div>
                    <p className="text-xs mt-1">Group 3</p>
                  </div>
                </div>
                <p className="text-sm mt-2">Each group gets 4 items</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium">Division as Grouping</h4>
              <p className="text-sm text-muted-foreground">Division can represent organizing items into groups of a specific size.</p>
              <div className="mt-2 bg-muted p-3 rounded text-center">
                <span className="text-2xl">12 ÷ 4 = 3</span>
                <p className="text-sm mt-1">Making groups of 4 from 12 items</p>
                <div className="mt-2 flex justify-center space-x-4">
                  <div className="border rounded p-2">
                    <div className="flex flex-wrap gap-1 justify-center w-20">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-5 h-5 rounded-full bg-green-500"></div>
                      ))}
                    </div>
                    <p className="text-xs mt-1">Group 1</p>
                  </div>
                  <div className="border rounded p-2">
                    <div className="flex flex-wrap gap-1 justify-center w-20">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-5 h-5 rounded-full bg-green-500"></div>
                      ))}
                    </div>
                    <p className="text-xs mt-1">Group 2</p>
                  </div>
                  <div className="border rounded p-2">
                    <div className="flex flex-wrap gap-1 justify-center w-20">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-5 h-5 rounded-full bg-green-500"></div>
                      ))}
                    </div>
                    <p className="text-xs mt-1">Group 3</p>
                  </div>
                </div>
                <p className="text-sm mt-2">We can make 3 groups of 4</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    
    "Color-Coded Equations": (
      <div className="space-y-4">
        <div className="bg-primary/10 p-4 rounded-lg">
          <h3 className="font-medium text-lg mb-2 flex items-center">
            <Target className="h-5 w-5 mr-2 text-primary" />
            Learning Objectives
          </h3>
          <ul className="list-disc ml-5 space-y-1 text-muted-foreground">
            <li>Use color coding to visually distinguish parts of equations</li>
            <li>Understand the order of operations in multi-step equations</li>
            <li>Simplify complex equations by identifying component parts</li>
            <li>Develop visual strategies for solving equations</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-800 border rounded-lg p-4">
          <h3 className="font-medium text-lg mb-2 flex items-center">
            <Book className="h-5 w-5 mr-2 text-primary" />
            Color Coding System
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-muted p-3 rounded text-center">
              <div className="w-full h-6 bg-green-100 rounded flex items-center justify-center border border-green-300">
                <span className="text-green-800 font-medium">Addition Terms</span>
              </div>
            </div>
            <div className="bg-muted p-3 rounded text-center">
              <div className="w-full h-6 bg-red-100 rounded flex items-center justify-center border border-red-300">
                <span className="text-red-800 font-medium">Subtraction Terms</span>
              </div>
            </div>
            <div className="bg-muted p-3 rounded text-center">
              <div className="w-full h-6 bg-blue-100 rounded flex items-center justify-center border border-blue-300">
                <span className="text-blue-800 font-medium">Multiplication Terms</span>
              </div>
            </div>
            <div className="bg-muted p-3 rounded text-center">
              <div className="w-full h-6 bg-amber-100 rounded flex items-center justify-center border border-amber-300">
                <span className="text-amber-800 font-medium">Division Terms</span>
              </div>
            </div>
          </div>
          
          <h4 className="font-medium mt-4">Example Equations</h4>
          <div className="space-y-3 mt-2">
            <div className="bg-muted p-3 rounded">
              <div className="flex items-center justify-center text-xl">
                <span className="text-green-600 font-medium">5</span>
                <span className="mx-1">+</span>
                <span className="text-green-600 font-medium">3</span>
                <span className="mx-1">=</span>
                <span className="text-green-600 font-medium">8</span>
              </div>
            </div>
            
            <div className="bg-muted p-3 rounded">
              <div className="flex items-center justify-center text-xl">
                <span className="text-blue-600 font-medium">4</span>
                <span className="mx-1">×</span>
                <span className="text-blue-600 font-medium">3</span>
                <span className="mx-1">+</span>
                <span className="text-green-600 font-medium">2</span>
                <span className="mx-1">=</span>
                <span className="mx-1">?</span>
              </div>
              <div className="mt-2 flex flex-col items-center space-y-1 text-sm">
                <div className="flex items-center">
                  <span className="text-blue-600 font-medium">4 × 3</span>
                  <span className="mx-1">=</span>
                  <span className="text-blue-600 font-medium">12</span>
                  <span className="ml-2 text-muted-foreground">(Calculate multiplication first)</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 font-medium">12</span>
                  <span className="mx-1">+</span>
                  <span className="text-green-600 font-medium">2</span>
                  <span className="mx-1">=</span>
                  <span className="font-medium">14</span>
                  <span className="ml-2 text-muted-foreground">(Then addition)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    
    "Step-by-Step Problem Solving": (
      <div className="space-y-4">
        <div className="bg-primary/10 p-4 rounded-lg">
          <h3 className="font-medium text-lg mb-2 flex items-center">
            <Target className="h-5 w-5 mr-2 text-primary" />
            Learning Objectives
          </h3>
          <ul className="list-disc ml-5 space-y-1 text-muted-foreground">
            <li>Learn a systematic approach to solving math problems</li>
            <li>Break down complex problems into manageable steps</li>
            <li>Apply problem-solving strategies to different types of math problems</li>
            <li>Check and verify solutions for accuracy</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-800 border rounded-lg p-4">
          <h3 className="font-medium text-lg mb-2 flex items-center">
            <Pencil className="h-5 w-5 mr-2 text-primary" />
            The UPSC Method
          </h3>
          <div className="space-y-3">
            <div className="bg-primary/5 p-3 rounded">
              <h4 className="font-medium text-primary">U: Understand the problem</h4>
              <ul className="list-disc ml-5 text-sm text-muted-foreground">
                <li>Read the problem carefully</li>
                <li>Identify what you're asked to find</li>
                <li>Identify the given information</li>
                <li>Define any unknown variables</li>
              </ul>
            </div>
            
            <div className="bg-primary/5 p-3 rounded">
              <h4 className="font-medium text-primary">P: Plan your solution</h4>
              <ul className="list-disc ml-5 text-sm text-muted-foreground">
                <li>Choose a strategy (e.g., draw a picture, make a table)</li>
                <li>Identify formulas or operations needed</li>
                <li>Determine sequence of steps</li>
                <li>Think about similar problems you've solved</li>
              </ul>
            </div>
            
            <div className="bg-primary/5 p-3 rounded">
              <h4 className="font-medium text-primary">S: Solve the problem</h4>
              <ul className="list-disc ml-5 text-sm text-muted-foreground">
                <li>Execute your plan step by step</li>
                <li>Write out each step clearly</li>
                <li>Perform calculations carefully</li>
                <li>Keep track of units</li>
              </ul>
            </div>
            
            <div className="bg-primary/5 p-3 rounded">
              <h4 className="font-medium text-primary">C: Check your answer</h4>
              <ul className="list-disc ml-5 text-sm text-muted-foreground">
                <li>Verify that your answer makes sense</li>
                <li>Double-check your calculations</li>
                <li>Make sure your answer addresses the original question</li>
                <li>Consider if there are alternative methods to verify</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 border rounded-lg p-4">
          <h3 className="font-medium text-lg mb-2">Example Problem</h3>
          <div className="bg-muted p-3 rounded">
            <p className="font-medium">Problem:</p>
            <p className="text-sm text-muted-foreground mb-4">
              Maria buys 3 notebooks for $4 each and 2 pens for $2 each. 
              How much change will she receive from a $20 bill?
            </p>
            
            <div className="space-y-3">
              <div className="border-l-4 border-primary/60 pl-3">
                <p className="font-medium text-sm text-primary">Understand</p>
                <p className="text-xs text-muted-foreground">
                  We need to find how much change Maria will receive from $20.
                  She buys 3 notebooks at $4 each and 2 pens at $2 each.
                </p>
              </div>
              
              <div className="border-l-4 border-primary/60 pl-3">
                <p className="font-medium text-sm text-primary">Plan</p>
                <p className="text-xs text-muted-foreground">
                  1. Calculate the cost of the notebooks: 3 × $4
                  2. Calculate the cost of the pens: 2 × $2
                  3. Find the total cost by adding these amounts
                  4. Subtract the total cost from $20 to find the change
                </p>
              </div>
              
              <div className="border-l-4 border-primary/60 pl-3">
                <p className="font-medium text-sm text-primary">Solve</p>
                <div className="text-xs text-muted-foreground">
                  <p>Cost of notebooks: 3 × $4 = $12</p>
                  <p>Cost of pens: 2 × $2 = $4</p>
                  <p>Total cost: $12 + $4 = $16</p>
                  <p>Change: $20 - $16 = $4</p>
                </div>
              </div>
              
              <div className="border-l-4 border-primary/60 pl-3">
                <p className="font-medium text-sm text-primary">Check</p>
                <p className="text-xs text-muted-foreground">
                  We can verify by working backward:
                  $20 - $4 (change) = $16 (amount spent)
                  $16 = $12 (notebooks) + $4 (pens) ✓
                </p>
              </div>
            </div>
            
            <p className="font-medium mt-4">Answer: Maria will receive $4 in change.</p>
          </div>
        </div>
      </div>
    ),
    
    // Additional lessons with educational content
    "Visual Fractions": (
      <div className="space-y-4">
        <div className="bg-primary/10 p-4 rounded-lg">
          <h3 className="font-medium text-lg mb-2 flex items-center">
            <Target className="h-5 w-5 mr-2 text-primary" />
            Learning Objectives
          </h3>
          <ul className="list-disc ml-5 space-y-1 text-muted-foreground">
            <li>Understand fractions as parts of a whole</li>
            <li>Visualize equivalent fractions using models</li>
            <li>Compare fractions using visual representations</li>
            <li>Perform operations with fractions using visual models</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-800 border rounded-lg p-4">
          <h3 className="font-medium text-lg mb-2 flex items-center">
            <Book className="h-5 w-5 mr-2 text-primary" />
            Fraction Models
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-muted p-3 rounded text-center">
              <h4 className="font-medium">Area Models</h4>
              <div className="mt-2 flex justify-center">
                <div className="w-32 h-32 border border-gray-400 grid grid-cols-2 grid-rows-2">
                  <div className="border border-gray-400 bg-primary"></div>
                  <div className="border border-gray-400"></div>
                  <div className="border border-gray-400"></div>
                  <div className="border border-gray-400"></div>
                </div>
              </div>
              <p className="text-sm mt-2">1/4 is shaded</p>
            </div>
            
            <div className="bg-muted p-3 rounded text-center">
              <h4 className="font-medium">Number Line Models</h4>
              <div className="mt-4 mb-2 flex justify-center">
                <div className="w-full h-8 relative border-b-2 border-gray-400">
                  <div className="absolute left-0 -bottom-2 w-0.5 h-4 bg-gray-800"></div>
                  <div className="absolute left-1/4 -bottom-2 w-0.5 h-4 bg-gray-800"></div>
                  <div className="absolute left-2/4 -bottom-2 w-0.5 h-4 bg-gray-800"></div>
                  <div className="absolute left-3/4 -bottom-2 w-0.5 h-4 bg-gray-800"></div>
                  <div className="absolute right-0 -bottom-2 w-0.5 h-4 bg-gray-800"></div>
                  
                  <div className="absolute left-0 -bottom-8 text-xs">0</div>
                  <div className="absolute left-1/4 -bottom-8 text-xs">1/4</div>
                  <div className="absolute left-2/4 -bottom-8 text-xs">2/4</div>
                  <div className="absolute left-3/4 -bottom-8 text-xs">3/4</div>
                  <div className="absolute right-0 -bottom-8 text-xs">1</div>
                  
                  <div className="absolute left-2/4 -top-5 w-5 h-5 rounded-full bg-primary"></div>
                </div>
              </div>
              <p className="text-sm mt-8">Point at 2/4 or 1/2</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 border rounded-lg p-4">
          <h3 className="font-medium text-lg mb-2">Equivalent Fractions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <div className="bg-muted p-3 rounded text-center">
              <div className="w-full h-8 border border-gray-400">
                <div className="h-full w-1/2 bg-primary"></div>
              </div>
              <p className="text-sm mt-1">1/2</p>
            </div>
            
            <div className="bg-muted p-3 rounded text-center">
              <div className="w-full h-8 border border-gray-400 flex">
                <div className="h-full w-1/4 bg-primary"></div>
                <div className="h-full w-1/4 bg-primary"></div>
                <div className="h-full w-1/4"></div>
                <div className="h-full w-1/4"></div>
              </div>
              <p className="text-sm mt-1">2/4</p>
            </div>
            
            <div className="bg-muted p-3 rounded text-center">
              <div className="w-full h-8 border border-gray-400 flex">
                <div className="h-full w-1/6 bg-primary"></div>
                <div className="h-full w-1/6 bg-primary"></div>
                <div className="h-full w-1/6 bg-primary"></div>
                <div className="h-full w-1/6"></div>
                <div className="h-full w-1/6"></div>
                <div className="h-full w-1/6"></div>
              </div>
              <p className="text-sm mt-1">3/6</p>
            </div>
          </div>
          <p className="text-center text-sm mt-3">1/2 = 2/4 = 3/6</p>
        </div>
      </div>
    ),
    
    "Shopping Simulator": (
      <div className="space-y-4">
        <div className="bg-primary/10 p-4 rounded-lg">
          <h3 className="font-medium text-lg mb-2 flex items-center">
            <Target className="h-5 w-5 mr-2 text-primary" />
            Learning Objectives
          </h3>
          <ul className="list-disc ml-5 space-y-1 text-muted-foreground">
            <li>Apply math skills to real-world shopping scenarios</li>
            <li>Calculate costs, discounts, and change</li>
            <li>Compare prices to find the best value</li>
            <li>Practice budgeting and making financial decisions</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-800 border rounded-lg p-4">
          <h3 className="font-medium text-lg mb-2 flex items-center">
            <Lightbulb className="h-5 w-5 mr-2 text-primary" />
            Shopping Skills
          </h3>
          <div className="space-y-3">
            <div className="bg-muted p-3 rounded">
              <h4 className="font-medium">Calculating Total Cost</h4>
              <div className="mt-2 space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span>Notebook</span>
                  <span>$3.50</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>Pencil Pack</span>
                  <span>$2.25</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>Ruler</span>
                  <span>$1.75</span>
                </div>
                <div className="border-t pt-1 flex justify-between items-center font-medium">
                  <span>Total</span>
                  <span>$7.50</span>
                </div>
              </div>
            </div>
            
            <div className="bg-muted p-3 rounded">
              <h4 className="font-medium">Finding Discounts</h4>
              <div className="mt-2">
                <p className="text-sm">Original price: $20.00</p>
                <p className="text-sm">Discount: 25%</p>
                <p className="text-sm text-primary font-medium mt-1">Calculation:</p>
                <ul className="text-sm list-disc ml-5">
                  <li>Discount amount: $20 × 0.25 = $5</li>
                  <li>Sale price: $20 - $5 = $15</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-muted p-3 rounded">
              <h4 className="font-medium">Comparing Unit Prices</h4>
              <div className="mt-2 grid grid-cols-2 gap-3">
                <div className="p-2 border rounded text-center">
                  <p className="text-sm font-medium">Small Box</p>
                  <p className="text-xs">$3.49 for 12 oz</p>
                  <p className="text-xs text-primary mt-1">$0.29 per oz</p>
                </div>
                <div className="p-2 border rounded text-center">
                  <p className="text-sm font-medium">Large Box</p>
                  <p className="text-xs">$5.99 for 24 oz</p>
                  <p className="text-xs text-primary mt-1">$0.25 per oz</p>
                </div>
              </div>
              <p className="text-xs text-center mt-2">The large box is a better value!</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 border rounded-lg p-4">
          <h3 className="font-medium text-lg mb-2">Practice Scenario</h3>
          <div className="bg-muted p-3 rounded">
            <p className="font-medium">Shopping List:</p>
            <ul className="text-sm list-disc ml-5 mb-3">
              <li>2 shirts at $12.50 each</li>
              <li>1 pair of shoes for $29.99</li>
              <li>3 pairs of socks at $4.50 each</li>
            </ul>
            <p className="text-sm">You have a 10% off coupon for your entire purchase and $60 to spend.</p>
            <div className="mt-3 p-3 bg-primary/10 rounded">
              <p className="font-medium">Questions:</p>
              <ol className="text-sm list-decimal ml-5">
                <li>What is the total cost before the discount?</li>
                <li>What is the final price after applying the 10% coupon?</li>
                <li>How much change will you receive from $60?</li>
                <li>If you only had $50, could you still purchase everything?</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    ),
    
    "Money Math": (
      <div className="space-y-4">
        <div className="bg-primary/10 p-4 rounded-lg">
          <h3 className="font-medium text-lg mb-2 flex items-center">
            <Target className="h-5 w-5 mr-2 text-primary" />
            Learning Objectives
          </h3>
          <ul className="list-disc ml-5 space-y-1 text-muted-foreground">
            <li>Recognize and identify different coins and bills</li>
            <li>Count money accurately and make change</li>
            <li>Calculate discounts and taxes</li>
            <li>Practice real-world money management skills</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-800 border rounded-lg p-4">
          <h3 className="font-medium text-lg mb-2 flex items-center">
            <Book className="h-5 w-5 mr-2 text-primary" />
            U.S. Currency Values
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center">
            <div className="bg-muted p-2 rounded">
              <p className="text-sm font-medium">Penny</p>
              <p className="text-xs">1¢</p>
            </div>
            <div className="bg-muted p-2 rounded">
              <p className="text-sm font-medium">Nickel</p>
              <p className="text-xs">5¢</p>
            </div>
            <div className="bg-muted p-2 rounded">
              <p className="text-sm font-medium">Dime</p>
              <p className="text-xs">10¢</p>
            </div>
            <div className="bg-muted p-2 rounded">
              <p className="text-sm font-medium">Quarter</p>
              <p className="text-xs">25¢</p>
            </div>
            <div className="bg-muted p-2 rounded">
              <p className="text-sm font-medium">Half Dollar</p>
              <p className="text-xs">50¢</p>
            </div>
            <div className="bg-muted p-2 rounded">
              <p className="text-sm font-medium">Dollar</p>
              <p className="text-xs">$1.00</p>
            </div>
            <div className="bg-muted p-2 rounded">
              <p className="text-sm font-medium">Five Dollars</p>
              <p className="text-xs">$5.00</p>
            </div>
            <div className="bg-muted p-2 rounded">
              <p className="text-sm font-medium">Ten Dollars</p>
              <p className="text-xs">$10.00</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 border rounded-lg p-4">
          <h3 className="font-medium text-lg mb-2">Making Change</h3>
          <div className="bg-muted p-3 rounded">
            <h4 className="font-medium">Example: Making change for $5.00 when the cost is $3.45</h4>
            <div className="mt-2 p-2 bg-gray-50 dark:bg-gray-700 rounded">
              <div className="flex justify-between">
                <span className="text-sm">Cost:</span>
                <span className="text-sm">$3.45</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Paid:</span>
                <span className="text-sm">$5.00</span>
              </div>
              <div className="flex justify-between font-medium border-t mt-1 pt-1">
                <span className="text-sm">Change due:</span>
                <span className="text-sm">$1.55</span>
              </div>
            </div>
            
            <h4 className="font-medium mt-3">How to make $1.55 in change:</h4>
            <div className="mt-1 text-sm space-y-1">
              <div className="flex items-center">
                <span className="w-24">1 dollar</span>
                <span>= $1.00</span>
              </div>
              <div className="flex items-center">
                <span className="w-24">2 quarters</span>
                <span>= $0.50</span>
              </div>
              <div className="flex items-center">
                <span className="w-24">1 nickel</span>
                <span>= $0.05</span>
              </div>
              <div className="flex items-center border-t mt-1 pt-1">
                <span className="w-24 font-medium">Total:</span>
                <span className="font-medium">$1.55</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    
    "Telling Time": (
      <div className="space-y-4">
        <div className="bg-primary/10 p-4 rounded-lg">
          <h3 className="font-medium text-lg mb-2 flex items-center">
            <Target className="h-5 w-5 mr-2 text-primary" />
            Learning Objectives
          </h3>
          <ul className="list-disc ml-5 space-y-1 text-muted-foreground">
            <li>Read analog and digital clocks accurately</li>
            <li>Tell time to the hour, half-hour, quarter-hour, and minute</li>
            <li>Calculate elapsed time</li>
            <li>Understand AM and PM</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-800 border rounded-lg p-4">
          <h3 className="font-medium text-lg mb-2 flex items-center">
            <Book className="h-5 w-5 mr-2 text-primary" />
            Reading Analog Clocks
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-muted p-3 rounded text-center">
              <h4 className="font-medium">Clock Parts</h4>
              <div className="mt-2 relative w-32 h-32 rounded-full border-2 border-gray-400 mx-auto">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs">12</div>
                <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 text-xs">3</div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-xs">6</div>
                <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 text-xs">9</div>
                
                <div className="absolute top-1/2 left-1/2 w-1 h-14 bg-black origin-bottom -rotate-45 transform -translate-x-1/2 -translate-y-full"></div>
                <div className="absolute top-1/2 left-1/2 w-0.5 h-10 bg-blue-500 origin-bottom rotate-90 transform -translate-x-1/2 -translate-y-full"></div>
                <div className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full bg-red-500 transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>
              <div className="mt-2 grid grid-cols-3 gap-2 text-sm">
                <div className="p-1 bg-gray-100 dark:bg-gray-700 rounded">
                  <span className="font-medium text-xs">Hour Hand</span>
                  <div className="h-1 w-8 bg-black mx-auto mt-1"></div>
                </div>
                <div className="p-1 bg-gray-100 dark:bg-gray-700 rounded">
                  <span className="font-medium text-xs">Minute Hand</span>
                  <div className="h-0.5 w-8 bg-blue-500 mx-auto mt-1"></div>
                </div>
                <div className="p-1 bg-gray-100 dark:bg-gray-700 rounded">
                  <span className="font-medium text-xs">Center Point</span>
                  <div className="h-2 w-2 rounded-full bg-red-500 mx-auto mt-1"></div>
                </div>
              </div>
            </div>
            
            <div className="bg-muted p-3 rounded">
              <h4 className="font-medium text-center mb-2">Time Examples</h4>
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded text-center">
                  <p className="text-xs font-medium">3:00</p>
                  <p className="text-xs">Three o'clock</p>
                </div>
                <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded text-center">
                  <p className="text-xs font-medium">6:30</p>
                  <p className="text-xs">Half past six</p>
                </div>
                <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded text-center">
                  <p className="text-xs font-medium">9:15</p>
                  <p className="text-xs">Quarter past nine</p>
                </div>
                <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded text-center">
                  <p className="text-xs font-medium">11:45</p>
                  <p className="text-xs">Quarter to twelve</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 border rounded-lg p-4">
          <h3 className="font-medium text-lg mb-2">Elapsed Time</h3>
          <div className="bg-muted p-3 rounded">
            <h4 className="font-medium">Finding How Much Time Has Passed</h4>
            <div className="mt-2 p-2 grid grid-cols-2 gap-4 items-center">
              <div className="text-center">
                <p className="text-sm font-medium">Start Time</p>
                <p className="text-lg">9:30 AM</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-medium">End Time</p>
                <p className="text-lg">11:15 AM</p>
              </div>
            </div>
            
            <div className="mt-3 border-t pt-2">
              <h4 className="font-medium text-sm">Calculation:</h4>
              <ul className="text-sm list-disc ml-5 mt-1">
                <li>From 9:30 to 10:00 = 30 minutes</li>
                <li>From 10:00 to 11:00 = 60 minutes</li>
                <li>From 11:00 to 11:15 = 15 minutes</li>
                <li>Total elapsed time: 30 + 60 + 15 = 105 minutes (1 hour and 45 minutes)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),
    
    "Measurement Madness": (
      <div className="space-y-4">
        <div className="bg-primary/10 p-4 rounded-lg">
          <h3 className="font-medium text-lg mb-2 flex items-center">
            <Target className="h-5 w-5 mr-2 text-primary" />
            Learning Objectives
          </h3>
          <ul className="list-disc ml-5 space-y-1 text-muted-foreground">
            <li>Understand standard and metric units of measurement</li>
            <li>Convert between different units within the same system</li>
            <li>Estimate measurements using benchmarks</li>
            <li>Apply measurement skills to real-world problems</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-800 border rounded-lg p-4">
          <h3 className="font-medium text-lg mb-2 flex items-center">
            <Book className="h-5 w-5 mr-2 text-primary" />
            Common Units of Measurement
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-muted p-3 rounded">
              <h4 className="font-medium text-center">U.S. Standard System</h4>
              <div className="mt-2 space-y-2">
                <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded">
                  <p className="text-sm font-medium">Length:</p>
                  <p className="text-xs text-muted-foreground">inch, foot, yard, mile</p>
                </div>
                <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded">
                  <p className="text-sm font-medium">Weight:</p>
                  <p className="text-xs text-muted-foreground">ounce, pound, ton</p>
                </div>
                <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded">
                  <p className="text-sm font-medium">Volume:</p>
                  <p className="text-xs text-muted-foreground">cup, pint, quart, gallon</p>
                </div>
              </div>
            </div>
            
            <div className="bg-muted p-3 rounded">
              <h4 className="font-medium text-center">Metric System</h4>
              <div className="mt-2 space-y-2">
                <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded">
                  <p className="text-sm font-medium">Length:</p>
                  <p className="text-xs text-muted-foreground">millimeter, centimeter, meter, kilometer</p>
                </div>
                <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded">
                  <p className="text-sm font-medium">Mass:</p>
                  <p className="text-xs text-muted-foreground">gram, kilogram, metric ton</p>
                </div>
                <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded">
                  <p className="text-sm font-medium">Volume:</p>
                  <p className="text-xs text-muted-foreground">milliliter, liter, kiloliter</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 border rounded-lg p-4">
          <h3 className="font-medium text-lg mb-2">Conversion Practice</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-muted p-3 rounded">
              <h4 className="font-medium">Standard Unit Conversions</h4>
              <ul className="text-sm list-disc ml-5 mt-2">
                <li>12 inches = 1 foot</li>
                <li>3 feet = 1 yard</li>
                <li>5,280 feet = 1 mile</li>
                <li>16 ounces = 1 pound</li>
                <li>2,000 pounds = 1 ton</li>
                <li>8 fluid ounces = 1 cup</li>
                <li>2 cups = 1 pint</li>
                <li>2 pints = 1 quart</li>
                <li>4 quarts = 1 gallon</li>
              </ul>
            </div>
            
            <div className="bg-muted p-3 rounded">
              <h4 className="font-medium">Metric Unit Conversions</h4>
              <p className="text-xs text-muted-foreground mt-1 mb-2">Metric units are based on powers of 10</p>
              <div className="text-sm space-y-1">
                <div className="grid grid-cols-3 gap-1 text-center">
                  <div className="p-1 bg-gray-50 dark:bg-gray-700 rounded">kilo-</div>
                  <div className="p-1">×1,000</div>
                  <div className="p-1">1 km = 1,000 m</div>
                </div>
                <div className="grid grid-cols-3 gap-1 text-center">
                  <div className="p-1 bg-gray-50 dark:bg-gray-700 rounded">hecto-</div>
                  <div className="p-1">×100</div>
                  <div className="p-1">1 hm = 100 m</div>
                </div>
                <div className="grid grid-cols-3 gap-1 text-center">
                  <div className="p-1 bg-gray-50 dark:bg-gray-700 rounded">deka-</div>
                  <div className="p-1">×10</div>
                  <div className="p-1">1 dam = 10 m</div>
                </div>
                <div className="grid grid-cols-3 gap-1 text-center">
                  <div className="p-1 bg-gray-50 dark:bg-gray-700 rounded">deci-</div>
                  <div className="p-1">÷10</div>
                  <div className="p-1">1 dm = 0.1 m</div>
                </div>
                <div className="grid grid-cols-3 gap-1 text-center">
                  <div className="p-1 bg-gray-50 dark:bg-gray-700 rounded">centi-</div>
                  <div className="p-1">÷100</div>
                  <div className="p-1">1 cm = 0.01 m</div>
                </div>
                <div className="grid grid-cols-3 gap-1 text-center">
                  <div className="p-1 bg-gray-50 dark:bg-gray-700 rounded">milli-</div>
                  <div className="p-1">÷1,000</div>
                  <div className="p-1">1 mm = 0.001 m</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  };

  return (
    <>
      <LevelSelector 
        selectedLevel={selectedLevel} 
        setSelectedLevel={setSelectedLevel} 
        levels={levels} 
      />

      <Tabs defaultValue={sections[0].id} className="mb-16">
        <TabsList className="mb-8 flex flex-wrap h-auto">
          {sections.map((section) => (
            <TabsTrigger key={section.id} value={section.id} className="md:py-3">
              {section.title}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {sections.map((section) => (
          <TabsContent key={section.id} value={section.id}>
            <SectionContent
              section={{
                ...section,
                lessons: section.lessons.map(lesson => ({
                  ...lesson,
                  educationalContent: educationalContent[lesson.title]
                }))
              }}
              selectedLevel={selectedLevel}
              levels={levels}
              handleViewResources={handleViewResources}
              handlePlayVideo={handlePlayVideo}
            />
          </TabsContent>
        ))}
      </Tabs>
      
      {/* Dialogs */}
      <VideoLessonDialog 
        selectedVideo={selectedVideo}
        setSelectedVideo={setSelectedVideo}
      />
      
      <InteractiveLessonDialog
        selectedLesson={selectedLesson}
        setSelectedLesson={setSelectedLesson}
        selectedVideo={selectedVideo}
      />
      
      <ResourcesDialog
        showResourcesDialog={showResourcesDialog}
        setShowResourcesDialog={setShowResourcesDialog}
        activeSection={activeSection}
        sections={sections}
        selectedLevel={selectedLevel}
        levels={levels}
      />
    </>
  );
};

export default SubjectSections;
