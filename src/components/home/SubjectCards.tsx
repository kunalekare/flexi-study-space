
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Calculator, 
  Beaker, 
  BookOpen, 
  Globe, 
  Palette 
} from "lucide-react";

const subjects = [
  {
    id: "mathematics",
    title: "Mathematics",
    description: "Interactive math lessons with visual representations, audio support, and step-by-step problem solving for all learning abilities.",
    icon: <Calculator className="h-6 w-6" />,
    color: "bg-blue-50 dark:bg-blue-900/20",
    textColor: "text-blue-600 dark:text-blue-400",
    ringColor: "focus-visible:ring-blue-500",
    features: [
      "Basic number concepts with visual aids",
      "Interactive games with virtual manipulatives",
      "Color-coded equations and step-by-step solutions",
      "Adaptive difficulty levels based on progress",
      "Real-life applications like money and time",
      "Speech-to-text support for math problems"
    ]
  },
  {
    id: "science",
    title: "Science",
    description: "Explore science concepts through multi-sensory experiences, simulations, and adaptive experiments designed for diverse learning needs.",
    icon: <Beaker className="h-6 w-6" />,
    color: "bg-emerald-50 dark:bg-emerald-900/20",
    textColor: "text-emerald-600 dark:text-emerald-400",
    ringColor: "focus-visible:ring-emerald-500",
    features: [
      "Animated lessons for fundamental concepts",
      "Hands-on experiments with video tutorials",
      "Virtual labs and interactive simulations",
      "Sensory-based learning with textures and sounds",
      "Virtual field trips to natural environments",
      "Accessible scientific terminology"
    ]
  },
  {
    id: "language-arts",
    title: "Language Arts",
    description: "Improve literacy skills with text-to-speech, customizable reading formats, and assistive writing tools tailored to diverse abilities.",
    icon: <BookOpen className="h-6 w-6" />,
    color: "bg-amber-50 dark:bg-amber-900/20",
    textColor: "text-amber-600 dark:text-amber-400",
    ringColor: "focus-visible:ring-amber-500",
    features: [
      "Phonics and sight words with audio support",
      "Text-to-speech and speech-to-text tools",
      "Visual storytelling with sign language options",
      "Interactive sentence building games",
      "Picture-based communication support",
      "Customizable text formats for different needs"
    ]
  },
  {
    id: "social-studies",
    title: "Social Studies",
    description: "Experience history and cultures through accessible storytelling, interactive maps, and inclusive activities designed for all students.",
    icon: <Globe className="h-6 w-6" />,
    color: "bg-purple-50 dark:bg-purple-900/20",
    textColor: "text-purple-600 dark:text-purple-400",
    ringColor: "focus-visible:ring-purple-500",
    features: [
      "History through engaging animated stories",
      "Community roles and safety awareness",
      "Interactive maps with zoom features",
      "Diversity and inclusion activities",
      "Virtual cultural experiences",
      "Accessible historical timelines"
    ]
  },
  {
    id: "art-music",
    title: "Art & Music",
    description: "Creative expression through accessible art tools, audio-based music lessons, and adaptive activities for students of all abilities.",
    icon: <Palette className="h-6 w-6" />,
    color: "bg-rose-50 dark:bg-rose-900/20",
    textColor: "text-rose-600 dark:text-rose-400",
    ringColor: "focus-visible:ring-rose-500",
    features: [
      "Digital art tools with adaptive controls",
      "Sensory art projects and 3D modeling",
      "Music therapy and rhythm exercises",
      "Virtual instruments with simplified controls",
      "Guided movement and dance videos",
      "Creative expression for all abilities"
    ]
  }
];

const SubjectCards = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore Our <span className="text-primary">Inclusive Subjects</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Discover our range of subjects, each designed with accessibility at its core to accommodate different learning styles and needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <Link
              key={subject.id}
              to={`/subjects/${subject.id}`}
              className={`relative overflow-hidden rounded-xl p-6 border border-border hover:border-primary/30 transition-all ${subject.color} hover-lift focus-ring ${subject.ringColor}`}
            >
              <div className="flex flex-col h-full">
                <div className={`h-12 w-12 rounded-lg flex items-center justify-center mb-4 ${subject.textColor}`}>
                  {subject.icon}
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{subject.title}</h3>
                <p className="text-muted-foreground mb-6">{subject.description}</p>
                
                <div className="mt-4">
                  <h4 className="font-medium mb-2">What you'll learn:</h4>
                  <ul className="space-y-1 mb-6">
                    {subject.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 mt-1">•</span>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto">
                  <Button 
                    variant="ghost" 
                    className={`group px-0 ${subject.textColor}`}
                  >
                    Explore Lessons
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <Link to="/subjects">View All Subjects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SubjectCards;
