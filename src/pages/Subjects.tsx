
import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AccessibilityPanel from "@/components/ui/AccessibilityPanel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SubjectData from "@/components/subjects/SubjectData";

const Subjects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Convert SubjectData object to an array for easier mapping
  const subjects = Object.entries(SubjectData).map(([id, subject]) => ({
    id,
    ...subject
  }));

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

          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              All <span className="text-primary">Subjects</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore our complete range of accessible subjects designed for students of all abilities.
              Each subject features customized learning paths and inclusive teaching methods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {subjects.map((subject) => (
              <div 
                key={subject.id}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-border hover:border-primary/50 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div 
                  className="h-48 bg-cover bg-center" 
                  style={{ backgroundImage: `url(${subject.image})` }}
                >
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-t from-black/70 to-transparent p-6">
                    <h2 className="text-2xl font-bold text-white mt-auto">{subject.title}</h2>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-6">{subject.description}</p>
                  <div className="space-y-3 mb-6">
                    <h3 className="font-medium">Key Features:</h3>
                    <ul className="space-y-1">
                      {subject.sections.slice(0, 3).map((section) => (
                        <li key={section.id} className="flex items-start">
                          <span className="mr-2 text-primary">•</span>
                          <span className="text-sm text-muted-foreground">{section.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button asChild className="w-full group">
                    <Link to={`/subjects/${subject.id}`}>
                      Explore {subject.title}
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
      
      <AccessibilityPanel />
    </div>
  );
};

export default Subjects;
