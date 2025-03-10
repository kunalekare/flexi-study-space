
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 right-0 h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[35%] h-[50%] bg-primary/5 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute top-[20%] -left-[10%] w-[40%] h-[30%] bg-primary/10 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute -bottom-[10%] right-[20%] w-[30%] h-[30%] bg-accent rounded-full blur-3xl opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left order-2 lg:order-1 animate-fade-in">
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-2">
              Inclusive Education for All
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              <span className="text-primary">Accessible</span> Learning for Specially-Abled Students
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0">
              A customizable platform designed to adapt to diverse learning needs, making education accessible and engaging for everyone.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="group">
                <span>Get Started for Free</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/how-it-works">
                  How It Works
                </Link>
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-4">
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-3xl font-bold text-primary">1000+</span>
                <span className="text-sm text-muted-foreground">Learning Resources</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-3xl font-bold text-primary">15+</span>
                <span className="text-sm text-muted-foreground">Accessibility Features</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-3xl font-bold text-primary">100%</span>
                <span className="text-sm text-muted-foreground">Customizable Experience</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 animate-fade-in">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="aspect-w-5 aspect-h-4 rounded-xl overflow-hidden glass-panel shadow-xl">
                <img 
                  src="/placeholder.svg" 
                  alt="Students using the FlexiLearn platform" 
                  className="object-cover w-full h-full"
                />
                
                {/* Floating UI elements to show accessibility features */}
                <div className="absolute -right-6 top-10 glass-panel px-4 py-3 rounded-lg shadow-lg hover-lift">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <path d="M11 8a1 1 0 0 1 2 0v8a1 1 0 0 1-2 0z" />
                        <path d="M18.63 8.55a.8.8 0 1 1-1.26-.98 7.5 7.5 0 0 1 0 8.86.8.8 0 0 1 1.26-.98 5.9 5.9 0 0 0 0-6.9z" />
                        <path d="M6.37 8.55a5.9 5.9 0 0 0 0 6.89.8.8 0 1 1-1.26.98 7.5 7.5 0 0 1 0-8.86.8.8 0 0 1 1.26.98z" />
                      </svg>
                    </div>
                    <div className="text-sm text-left">
                      <p className="font-medium">Voice Assistance</p>
                      <p className="text-muted-foreground text-xs">Enabled</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -left-6 bottom-12 glass-panel px-4 py-3 rounded-lg shadow-lg hover-lift">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 18v-3" />
                        <path d="M8 14.5h8" />
                        <path d="M7 9h2v2H7z" />
                        <path d="M15 9h2v2h-2z" />
                      </svg>
                    </div>
                    <div className="text-sm text-left">
                      <p className="font-medium">Adaptive UI</p>
                      <p className="text-muted-foreground text-xs">Personalized</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bottom badge */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 glass-panel px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-sm font-medium">Accessibility First Design</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
