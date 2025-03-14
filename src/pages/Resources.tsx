
import React, { useEffect, useState } from "react";
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { FileText, Video, Download, Book, Lightbulb, Users, Search, BookOpen, GraduationCap, Star, X } from "lucide-react";
import { toast } from "sonner";

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
        link: "#",
        tags: ["adaptive", "strategies", "disabilities"],
        level: "Intermediate",
        rating: 4.7,
        downloads: 1252
      },
      {
        title: "Visual Learning Techniques",
        description: "Specialized methods for visual learners with accessibility considerations.",
        type: "PDF",
        link: "#",
        tags: ["visual", "techniques", "accessibility"],
        level: "Beginner",
        rating: 4.5,
        downloads: 983
      },
      {
        title: "Auditory Processing Guide",
        description: "Techniques to improve learning for students with auditory processing differences.",
        type: "PDF",
        link: "#",
        tags: ["auditory", "processing", "hearing"],
        level: "Advanced",
        rating: 4.8,
        downloads: 756
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
        link: "#",
        tags: ["math", "accessibility", "visual"],
        level: "Beginner",
        rating: 4.6,
        views: 3421
      },
      {
        title: "Science Experiments with Assistive Tools",
        description: "How to conduct science experiments using assistive technology and tools.",
        type: "Video",
        duration: "22 mins",
        link: "#",
        tags: ["science", "experiments", "assistive tech"],
        level: "Intermediate",
        rating: 4.9,
        views: 2187
      },
      {
        title: "Language Arts for All",
        description: "Inclusive approaches to teaching and learning language arts and literature.",
        type: "Video",
        duration: "18 mins",
        link: "#",
        tags: ["language", "literature", "inclusive"],
        level: "Beginner",
        rating: 4.4,
        views: 1856
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
        link: "#",
        tags: ["math", "formulas", "accessibility"],
        level: "All Levels",
        rating: 4.7,
        downloads: 5234
      },
      {
        title: "Visual Schedule Creator",
        description: "Create customizable visual schedules for daily learning activities.",
        type: "Web App",
        link: "#",
        tags: ["visual", "schedule", "planning"],
        level: "Beginner",
        rating: 4.8,
        downloads: 3867
      },
      {
        title: "Customizable Worksheet Templates",
        description: "Adaptable worksheet templates for different learning needs and subjects.",
        type: "Templates",
        format: "DOCX/PDF",
        link: "#",
        tags: ["worksheets", "templates", "customizable"],
        level: "Intermediate",
        rating: 4.5,
        downloads: 7123
      }
    ]
  }
];

const Resources = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("guides");
  const [selectedResource, setSelectedResource] = useState<any>(null);
  const [isResourceOpen, setIsResourceOpen] = useState(false);
  const [savedResources, setSavedResources] = useState<string[]>([]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would filter resources based on the search query
    toast.success(`Searching for "${searchQuery}"...`);
  };

  const filteredResources = resourceCategories.find(cat => cat.id === activeCategory)?.resources.filter(resource => 
    resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (resource.tags && resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  const handleResourceClick = (resource: any) => {
    setSelectedResource(resource);
    setIsResourceOpen(true);
  };

  const handleSaveResource = (title: string) => {
    if (savedResources.includes(title)) {
      setSavedResources(savedResources.filter(r => r !== title));
      toast.success(`Removed "${title}" from saved resources`);
    } else {
      setSavedResources([...savedResources, title]);
      toast.success(`Saved "${title}" to your resources`);
    }
  };

  const handleDownload = (resource: any) => {
    // In a real app, this would trigger an actual download
    toast.success(`Downloading "${resource.title}"`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 md:pt-40 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Learning <span className="text-primary">Resources</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Explore our collection of accessible learning resources designed to support different learning needs and styles.
              </p>
              
              {/* Search Bar */}
              <form onSubmit={handleSearch} className="relative max-w-md mx-auto mb-4">
                <Input
                  type="text"
                  placeholder="Search resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Button type="submit" size="sm" className="absolute right-1 top-1/2 transform -translate-y-1/2">
                  Search
                </Button>
              </form>
              
              {/* Resource Stats */}
              <div className="flex flex-wrap justify-center gap-4 mb-10">
                <div className="bg-muted px-4 py-2 rounded-full flex items-center">
                  <BookOpen className="h-4 w-4 mr-2 text-primary" />
                  <span className="text-sm">100+ Learning Resources</span>
                </div>
                <div className="bg-muted px-4 py-2 rounded-full flex items-center">
                  <GraduationCap className="h-4 w-4 mr-2 text-primary" />
                  <span className="text-sm">All Learning Levels</span>
                </div>
                <div className="bg-muted px-4 py-2 rounded-full flex items-center">
                  <Users className="h-4 w-4 mr-2 text-primary" />
                  <span className="text-sm">Teacher & Student Resources</span>
                </div>
              </div>
            </div>
            
            <Tabs defaultValue="guides" className="w-full" onValueChange={setActiveCategory}>
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
                  {filteredResources && filteredResources.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredResources.map((resource, index) => (
                        <Card key={index} className="hover-lift group cursor-pointer transition-all duration-300">
                          <CardHeader>
                            <div className="flex items-start justify-between">
                              <CardTitle 
                                className="text-lg group-hover:text-primary transition-colors" 
                                onClick={() => handleResourceClick(resource)}
                              >
                                {resource.title}
                              </CardTitle>
                              <div className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                                {resource.type}
                                {resource.duration && ` • ${resource.duration}`}
                              </div>
                            </div>
                            <CardDescription>{resource.description}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="flex flex-wrap gap-1 mb-3">
                              {resource.tags && resource.tags.map((tag: string, i: number) => (
                                <Badge key={i} variant="outline" className="text-xs">{tag}</Badge>
                              ))}
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <div className="flex items-center">
                                <Star className="h-4 w-4 text-amber-500 mr-1" />
                                <span>{resource.rating}</span>
                              </div>
                              <span className="text-muted-foreground">
                                {resource.level}
                              </span>
                            </div>
                          </CardContent>
                          <CardFooter className="flex justify-between">
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="text-xs"
                              onClick={() => handleSaveResource(resource.title)}
                            >
                              {savedResources.includes(resource.title) ? 'Saved' : 'Save for Later'}
                            </Button>
                            <Button variant="default" size="sm" className="text-xs" onClick={() => handleResourceClick(resource)}>
                              {resource.type === "PDF" || resource.type === "Templates" ? "Preview" : 
                              resource.type === "Video" ? "Watch Now" : 
                              resource.type === "Software" || resource.type === "Web App" ? "Get Access" : 
                              "View Resource"}
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-medium mb-2">No resources found</h3>
                      <p className="text-muted-foreground">
                        Try adjusting your search query or browse another category.
                      </p>
                    </div>
                  )}
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
            
            {/* Featured Collections */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6 text-center">Featured Resource Collections</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="hover-lift">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <BookOpen className="h-5 w-5 mr-2 text-primary" />
                      Math Learning Path
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      A comprehensive collection of resources for learning mathematics at any level.
                    </p>
                    <div className="flex justify-between text-sm">
                      <span>12 resources</span>
                      <span className="text-primary">Beginner to Advanced</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">
                      Explore Collection
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card className="hover-lift">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <Video className="h-5 w-5 mr-2 text-primary" />
                      Literacy Development
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      Resources focused on reading and writing skills for diverse learning needs.
                    </p>
                    <div className="flex justify-between text-sm">
                      <span>15 resources</span>
                      <span className="text-primary">All Levels</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">
                      Explore Collection
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card className="hover-lift">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <GraduationCap className="h-5 w-5 mr-2 text-primary" />
                      Teacher Toolkit
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      Essential resources for educators working with diverse learning abilities.
                    </p>
                    <div className="flex justify-between text-sm">
                      <span>20 resources</span>
                      <span className="text-primary">Professional</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">
                      Explore Collection
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      
      <AccessibilityPanel />
      
      {/* Resource Preview Dialog */}
      <Dialog open={isResourceOpen} onOpenChange={setIsResourceOpen}>
        <DialogContent className="sm:max-w-[800px]">
          <DialogHeader>
            <DialogTitle className="flex justify-between items-center">
              <span>{selectedResource?.title}</span>
              <DialogClose asChild>
                <Button variant="ghost" size="icon">
                  <X className="h-4 w-4" />
                </Button>
              </DialogClose>
            </DialogTitle>
          </DialogHeader>
          
          {selectedResource && (
            <div className="space-y-6">
              <div className="bg-muted p-4 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                    {selectedResource.type}
                    {selectedResource.duration && ` • ${selectedResource.duration}`}
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-amber-500 mr-1" />
                    <span className="text-sm font-medium">{selectedResource.rating}</span>
                    <span className="mx-2 text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">
                      {selectedResource.downloads ? `${selectedResource.downloads} downloads` : 
                       selectedResource.views ? `${selectedResource.views} views` : ''}
                    </span>
                  </div>
                </div>
                
                <p className="text-sm mb-4">{selectedResource.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  <span className="text-sm font-medium mr-2">Tags:</span>
                  {selectedResource.tags && selectedResource.tags.map((tag: string, i: number) => (
                    <Badge key={i} variant="outline" className="text-xs">{tag}</Badge>
                  ))}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Resource Type:</span> {selectedResource.type}
                    {selectedResource.format && ` (${selectedResource.format})`}
                  </div>
                  <div>
                    <span className="font-medium">Level:</span> {selectedResource.level}
                  </div>
                  {selectedResource.platform && (
                    <div>
                      <span className="font-medium">Platform:</span> {selectedResource.platform}
                    </div>
                  )}
                  {selectedResource.duration && (
                    <div>
                      <span className="font-medium">Duration:</span> {selectedResource.duration}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Preview Area */}
              <div className="aspect-video w-full bg-black/5 rounded-lg border-2 border-dashed border-muted-foreground/20 flex items-center justify-center">
                {selectedResource.type === "Video" ? (
                  <div className="text-center">
                    <Play className="h-12 w-12 text-primary mx-auto mb-2" />
                    <p className="text-muted-foreground">Click to play video</p>
                  </div>
                ) : selectedResource.type === "PDF" || selectedResource.type === "Templates" ? (
                  <div className="text-center">
                    <FileText className="h-12 w-12 text-primary mx-auto mb-2" />
                    <p className="text-muted-foreground">Preview document</p>
                  </div>
                ) : (
                  <div className="text-center">
                    <Download className="h-12 w-12 text-primary mx-auto mb-2" />
                    <p className="text-muted-foreground">Get {selectedResource.type}</p>
                  </div>
                )}
              </div>
              
              {/* Related Resources */}
              <div>
                <h3 className="text-lg font-medium mb-3">You might also like:</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {resourceCategories
                    .find(cat => cat.id === activeCategory)?.resources
                    .filter(res => res.title !== selectedResource?.title)
                    .slice(0, 3)
                    .map((res, i) => (
                      <Card key={i} className="hover-lift cursor-pointer" onClick={() => handleResourceClick(res)}>
                        <CardHeader className="p-3">
                          <CardTitle className="text-sm">{res.title}</CardTitle>
                        </CardHeader>
                      </Card>
                    ))}
                </div>
              </div>
              
              <DialogFooter>
                <Button 
                  variant="outline" 
                  onClick={() => handleSaveResource(selectedResource.title)}
                >
                  {savedResources.includes(selectedResource.title) ? 'Saved' : 'Save for Later'}
                </Button>
                <Button onClick={() => handleDownload(selectedResource)}>
                  {selectedResource.type === "PDF" || selectedResource.type === "Templates" ? "Download" : 
                   selectedResource.type === "Video" ? "Watch Now" : 
                   selectedResource.type === "Software" || selectedResource.type === "Web App" ? "Get Access" : 
                   "Access Resource"}
                </Button>
              </DialogFooter>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Resources;
