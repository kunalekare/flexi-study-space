
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AccessibilityPanel from "@/components/ui/AccessibilityPanel";

const HowItWorks = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 md:pt-40 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center">
              How <span className="text-primary">FlexiLearn</span> Works
            </h1>
            
            <div className="space-y-16 mt-12">
              {/* Step 1 */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-7 order-2 md:order-1">
                  <div className="rounded-lg p-1 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent">
                    <div className="bg-background rounded-lg p-6">
                      <h2 className="text-2xl font-semibold mb-4">1. Personalize Your Learning Experience</h2>
                      <p className="text-muted-foreground mb-4">
                        Every student has unique needs and preferences. Start by customizing your learning environment through the accessibility panel to adjust text size, color contrast, enable text-to-speech, or activate sign language support.
                      </p>
                      <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
                        <li>Adjust visual presentation for better visibility</li>
                        <li>Enable audio assistance for content reading</li>
                        <li>Customize navigation controls to your preferences</li>
                        <li>Save your settings for future sessions</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-5 order-1 md:order-2">
                  <div className="aspect-square rounded-xl overflow-hidden glass-panel shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                      alt="Personalization options" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-5 order-1">
                  <div className="aspect-square rounded-xl overflow-hidden glass-panel shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                      alt="Subject selection" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:col-span-7 order-2">
                  <div className="rounded-lg p-1 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent">
                    <div className="bg-background rounded-lg p-6">
                      <h2 className="text-2xl font-semibold mb-4">2. Choose Your Subjects and Learning Path</h2>
                      <p className="text-muted-foreground mb-4">
                        Browse our diverse range of subjects and select the ones that interest you. Each subject offers multiple learning paths tailored to different learning styles and needs.
                      </p>
                      <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
                        <li>Explore subjects from Mathematics to Arts and Music</li>
                        <li>Select difficulty levels appropriate to your needs</li>
                        <li>Choose between visual, auditory, or interactive learning approaches</li>
                        <li>Track progress across different subjects</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-7 order-2 md:order-1">
                  <div className="rounded-lg p-1 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent">
                    <div className="bg-background rounded-lg p-6">
                      <h2 className="text-2xl font-semibold mb-4">3. Engage With Interactive Lessons</h2>
                      <p className="text-muted-foreground mb-4">
                        Our lessons combine text, visuals, audio, and interactive elements to create an immersive learning experience. Complete quizzes, participate in discussions, and track your progress.
                      </p>
                      <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
                        <li>Multi-modal learning with text, audio, and visual components</li>
                        <li>Interactive exercises that adapt to your learning speed</li>
                        <li>Real-time feedback to guide your understanding</li>
                        <li>Save progress and resume anytime, anywhere</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-5 order-1 md:order-2">
                  <div className="aspect-square rounded-xl overflow-hidden glass-panel shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                      alt="Interactive lessons" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Get Started?</h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/signup">Sign Up Free</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/">Explore Subjects</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      
      <AccessibilityPanel />
    </div>
  );
};

export default HowItWorks;
