
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AccessibilityPanel from "@/components/ui/AccessibilityPanel";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { FileText, Video, Download, Book, Lightbulb, Users } from "lucide-react";

const resourceCategories = [
  {
    id: "guides",
    name: "Learning Guides",
    icon: <FileText className="h-5 w-5" />,
    resources: [
      {
        title: "Adaptive Learning Strategies",
        description: "A comprehensive guide on different learning approaches for various disabilities.",
        type: "PDF",
        link: "#"
      },
      {
        title: "Visual Learning Techniques",
        description: "Specialized methods for visual learners with accessibility considerations.",
        type: "PDF",
        link: "#"
      },
      {
        title: "Auditory Processing Guide",
        description: "Techniques to improve learning for students with auditory processing differences.",
        type: "PDF",
        link: "#"
      }
    ]
  },
  {
    id: "videos",
    name: "Video Tutorials",
    icon: <Video className="h-5 w-5" />,
    resources: [
      {
        title: "Introduction to Accessible Math",
        description: "Learn about accessible ways to approach mathematics with visual or cognitive differences.",
        type: "Video",
        duration: "15 mins",
        link: "#"
      },
      {
        title: "Science Experiments with Assistive Tools",
        description: "How to conduct science experiments using assistive technology and tools.",
        type: "Video",
        duration: "22 mins",
        link: "#"
      },
      {
        title: "Language Arts for All",
        description: "Inclusive approaches to teaching and learning language arts and literature.",
        type: "Video",
        duration: "18 mins",
        link: "#"
      }
    ]
  },
  {
    id: "tools",
    name: "Tools & Downloads",
    icon: <Download className="h-5 w-5" />,
    resources: [
      {
        title: "Math Formula Reader",
        description: "A tool that converts mathematical formulas into accessible formats.",
        type: "Software",
        platform: "Windows/Mac",
        link: "#"
      },
      {
        title: "Visual Schedule Creator",
        description: "Create customizable visual schedules for daily learning activities.",
        type: "Web App",
        link: "#"
      },
      {
        title: "Customizable Worksheet Templates",
        description: "Adaptable worksheet templates for different learning needs and subjects.",
        type: "Templates",
        format: "DOCX/PDF",
        link: "#"
      }
    ]
  }
];

const Resources = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 md:pt-40 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Learning <span className="text-primary">Resources</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore our collection of accessible learning resources designed to support different learning needs and styles.
              </p>
            </div>
            
            <Tabs defaultValue="guides" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
                {resourceCategories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                    {category.icon}
                    <span className="hidden sm:inline">{category.name}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {resourceCategories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.resources.map((resource, index) => (
                      <Card key={index} className="hover-lift">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <CardTitle className="text-lg">{resource.title}</CardTitle>
                            <div className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                              {resource.type}
                              {resource.duration && ` • ${resource.duration}`}
                            </div>
                          </div>
                          <CardDescription>{resource.description}</CardDescription>
                        </CardHeader>
                        <CardFooter>
                          <Button variant="outline" size="sm" className="w-full" asChild>
                            <Link to={resource.link}>
                              {resource.type === "PDF" || resource.type === "Templates" ? "Download" : 
                               resource.type === "Video" ? "Watch Now" : 
                               resource.type === "Software" || resource.type === "Web App" ? "Get Access" : 
                               "View Resource"}
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
            
            <div className="mt-20 bg-muted p-8 rounded-xl border border-border">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="md:w-1/4 flex justify-center">
                  <div className="h-24 w-24 rounded-full bg-primary/20 flex items-center justify-center">
                    <Lightbulb className="h-12 w-12 text-primary" />
                  </div>
                </div>
                <div className="md:w-3/4 text-center md:text-left">
                  <h2 className="text-2xl font-bold mb-2">Need Personalized Resources?</h2>
                  <p className="text-muted-foreground mb-4">
                    Our educational specialists can help create custom learning materials tailored to specific needs.
                  </p>
                  <Button asChild>
                    <Link to="/contact">
                      <Users className="mr-2 h-4 w-4" />
                      Request Custom Resources
                    </Link>
                  </Button>
                </div>
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

export default Resources;
