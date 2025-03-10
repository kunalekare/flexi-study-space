
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const subjects = [
  {
    id: "mathematics",
    title: "Mathematics",
    description: "Interactive math lessons with visual representations, audio support, and step-by-step problem solving.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 5 5 19" />
        <circle cx="6.5" cy="6.5" r="2.5" />
        <circle cx="17.5" cy="17.5" r="2.5" />
      </svg>
    ),
    color: "bg-blue-50 dark:bg-blue-900/20",
    textColor: "text-blue-600 dark:text-blue-400",
    ringColor: "focus-visible:ring-blue-500"
  },
  {
    id: "science",
    title: "Science",
    description: "Explore science concepts through multi-sensory experiences, simulations, and adaptive experiments.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 2v8.5a2.5 2.5 0 0 1-5 0V2" />
        <path d="M7 2v8.5a2.5 2.5 0 0 0 5 0V2" />
        <path d="M8.5 2h7.1a3 3 0 0 1 2.8 2.8c.1 2-.6 3.1-2.2 3.1h-2.2a3 3 0 0 0-2.8 2.8c-.1 2 .6 3.1 2.2 3.1h2.2a3 3 0 0 1 2.8 2.8c.1 2-.6 3.1-2.2 3.1h-7.5a3 3 0 0 1-2.8-2.8c-.1-2 .6-3.1 2.2-3.1h2.2a3 3 0 0 0 2.8-2.8c.1-2-.6-3.1-2.2-3.1h-2.2a3 3 0 0 1-2.8-2.8C5.4 3.2 6.1 2 7.7 2h.8" />
      </svg>
    ),
    color: "bg-emerald-50 dark:bg-emerald-900/20",
    textColor: "text-emerald-600 dark:text-emerald-400",
    ringColor: "focus-visible:ring-emerald-500"
  },
  {
    id: "language-arts",
    title: "Language Arts",
    description: "Improve literacy skills with text-to-speech, customizable reading formats, and assistive writing tools.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1" />
        <path d="M7 22h1a4 4 0 0 0 4-4v-1" />
        <path d="M7 2h1a4 4 0 0 1 4 4v1" />
      </svg>
    ),
    color: "bg-amber-50 dark:bg-amber-900/20",
    textColor: "text-amber-600 dark:text-amber-400",
    ringColor: "focus-visible:ring-amber-500"
  },
  {
    id: "social-studies",
    title: "Social Studies",
    description: "Experience history and cultures through accessible storytelling, audio narrations, and visual aids.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
      </svg>
    ),
    color: "bg-purple-50 dark:bg-purple-900/20",
    textColor: "text-purple-600 dark:text-purple-400",
    ringColor: "focus-visible:ring-purple-500"
  },
  {
    id: "art-music",
    title: "Art & Music",
    description: "Creative expression through accessible art tools, audio-based music lessons, and tactile experiences.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m9 18 6-6" />
        <path d="m15 18-6-6" />
      </svg>
    ),
    color: "bg-rose-50 dark:bg-rose-900/20",
    textColor: "text-rose-600 dark:text-rose-400",
    ringColor: "focus-visible:ring-rose-500"
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
