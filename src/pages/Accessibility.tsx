
import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AccessibilityPanel from "@/components/ui/AccessibilityPanel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Eye, Volume2, Lightbulb, MousePointer2, Type, ChevronsUpDown, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Accessibility = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Button variant="ghost" size="sm" asChild className="hover:bg-transparent p-0">
              <Link to="/" className="flex items-center text-muted-foreground hover:text-foreground">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Accessibility Features</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Our platform is designed with accessibility as a core principle, not an afterthought. 
              We're committed to ensuring all students can access and engage with educational content regardless of their abilities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card className="hover-lift">
                <CardHeader>
                  <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                    <Eye className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Visual Accessibility</CardTitle>
                  <CardDescription>Features for users with visual impairments</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>High contrast mode for better visibility</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Text resizing with preserved layout</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Screen reader compatibility</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Color-blind friendly palette options</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardHeader>
                  <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                    <Volume2 className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Auditory Accessibility</CardTitle>
                  <CardDescription>Features for users with hearing impairments</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Closed captioning for all video content</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Sign language video alternatives</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Visual cues for audio notifications</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Transcript alternatives for audio content</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardHeader>
                  <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                    <Lightbulb className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Cognitive Accessibility</CardTitle>
                  <CardDescription>Features for users with cognitive differences</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Simplified interface options</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Consistent navigation patterns</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Predictable content organization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Progress tracking with visual indicators</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardHeader>
                  <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                    <MousePointer2 className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Motor Accessibility</CardTitle>
                  <CardDescription>Features for users with physical disabilities</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Voice navigation and commands</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Keyboard navigation with visible focus</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Adjustable timing controls</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Large clickable areas for easier targeting</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-primary/5 rounded-xl p-8 mb-12 border border-primary/20">
              <h2 className="text-2xl font-bold mb-4">Customizable Learning Experience</h2>
              <p className="text-lg mb-6">
                Our platform adapts to individual needs, allowing students and teachers to customize the learning environment for optimal accessibility:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mr-4 mt-1">
                    <Type className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Text Customization</h3>
                    <p className="text-muted-foreground">Adjust font size, spacing, and style to improve readability for different visual needs.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mr-4 mt-1">
                    <ChevronsUpDown className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Adaptive Content</h3>
                    <p className="text-muted-foreground">Content difficulty automatically adjusts based on student progress and learning style.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mr-4 mt-1">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Collaborative Tools</h3>
                    <p className="text-muted-foreground">Accessible communication tools to facilitate peer learning and teacher support.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mr-4 mt-1">
                    <Lightbulb className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Multi-modal Learning</h3>
                    <p className="text-muted-foreground">Content presented in multiple formats to accommodate different learning preferences.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold mb-4">Committed to Continuous Improvement</h2>
              <p className="text-lg mb-6">
                We're constantly working to enhance our accessibility features based on user feedback and evolving standards.
                Our goal is to create the most inclusive learning environment possible.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">
                  Share Your Accessibility Feedback
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      
      {/* Accessibility Panel */}
      <AccessibilityPanel />
    </div>
  );
};

export default Accessibility;
