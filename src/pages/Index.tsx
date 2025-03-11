
import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import SubjectCards from "@/components/home/SubjectCards";
import AccessibilityPanel from "@/components/ui/AccessibilityPanel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <Features />
        
        <SubjectCards />
        
        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Our <span className="text-primary">Students Say</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Hear from students who have experienced the benefits of our inclusive learning platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-border hover-lift">
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                    <span className="text-lg font-semibold text-primary">M</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Michael R.</h4>
                    <p className="text-sm text-muted-foreground">Visual Impairment Student</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "The text-to-speech and high contrast options have made learning a joy again. I can finally access educational materials independently."
                </p>
                <div className="flex text-amber-500">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              </div>
              
              {/* Testimonial 2 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-border hover-lift">
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                    <span className="text-lg font-semibold text-primary">S</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Sarah L.</h4>
                    <p className="text-sm text-muted-foreground">Hearing Impaired Student</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "The sign language videos and visual learning tools have transformed my educational experience. I feel fully included for the first time."
                </p>
                <div className="flex text-amber-500">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              </div>
              
              {/* Testimonial 3 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-border hover-lift">
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                    <span className="text-lg font-semibold text-primary">J</span>
                  </div>
                  <div>
                    <h4 className="font-medium">James T.</h4>
                    <p className="text-sm text-muted-foreground">Parent</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "My son with dyslexia has thrived using this platform. The customizable text formats and audio support have boosted his confidence tremendously."
                </p>
                <div className="flex text-amber-500">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-primary/10 dark:bg-primary/5 rounded-2xl p-8 md:p-12 border border-primary/20 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl opacity-70"></div>
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-primary/30 rounded-full blur-3xl opacity-70"></div>
              
              <div className="relative z-10 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Experience Inclusive Learning?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join thousands of students who are already benefiting from our accessible educational platform. Start your learning journey today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="w-full sm:w-auto" asChild>
                    <Link to="/signup">
                      Sign Up Free
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                    <Link to="/contact">
                      Request Demo
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* Accessibility Panel */}
      <AccessibilityPanel />
    </div>
  );
};

export default Index;
