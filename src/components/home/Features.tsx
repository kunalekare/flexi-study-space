
import React from "react";
import { CheckCircle } from "lucide-react";

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 10.42A4 4 0 1 1 12 6c0 1.1.9 2 2 2s2-.9 2-2a4 4 0 1 1-4 4v4" />
        <path d="M4 22h16" />
        <path d="M10 22V10" />
      </svg>
    ),
    title: "Text-to-Speech Integration",
    description: "Our advanced text-to-speech technology reads content aloud with natural voices and adjustable speeds to support students with visual impairments or reading difficulties."
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M7 9h2v2H7z" />
        <path d="M15 9h2v2h-2z" />
        <path d="M8 17h8" />
      </svg>
    ),
    title: "Visual Adjustments",
    description: "Customize the visual experience with options for color contrasts, font sizes, reduced motion, and specialized color schemes for dyslexia and visual sensitivities."
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 4v10.54a4 4 0 1 1-4-3.54" />
        <path d="M18 2v10.54a4 4 0 1 1-4-3.54" />
      </svg>
    ),
    title: "Interactive Audio Lessons",
    description: "Access rich audio content with interactive elements designed for students with visual impairments, featuring clear narration and sound cues."
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 20V7l6-5v18" />
        <path d="M18 9.5v-5" />
        <path d="M18 17.5v-5" />
        <path d="M8 11.5v-5" />
        <path d="M8 19.5v-5" />
      </svg>
    ),
    title: "Sign Language Videos",
    description: "Most content is available with sign language interpretation videos, enabling deaf and hard-of-hearing students to fully engage with the learning material."
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 8h14" />
        <path d="M5 12h14" />
        <path d="M5 16h10" />
      </svg>
    ),
    title: "Simplified Navigation",
    description: "Our intuitive interface features simplified navigation options with keyboard shortcuts and screen reader compatibility for effortless platform use."
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: "Multi-Device Compatibility",
    description: "Access your learning content seamlessly across all devices, with responsive design that adapts to assistive technologies and various screen sizes."
  }
];

const Features = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Designed for <span className="text-primary">All Learning Needs</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Our platform adapts to each student's unique requirements, providing personalized accessibility features for an inclusive learning experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-border hover-lift"
            >
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto bg-primary/5 rounded-xl p-8 border border-primary/10">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-2">Fully Compliant with Accessibility Standards</h3>
              <p className="text-muted-foreground">Our platform meets WCAG 2.1 AA compliance standards, ensuring an inclusive experience for all users.</p>
            </div>
            <div className="shrink-0 space-y-2 w-full md:w-auto">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>WCAG 2.1 AA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>ADA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Section 508 Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
