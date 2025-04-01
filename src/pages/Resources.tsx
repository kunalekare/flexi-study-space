
import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AccessibilityPanel from "@/components/ui/AccessibilityPanel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  BookOpen, 
  FileText, 
  Video, 
  Download,
  Globe,
  Clock,
  X,
  Heart,
  Play,
  Filter
} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

// Define resource types
type ResourceType = "video" | "article" | "pdf" | "interactive" | "worksheet" | "tool";

// Resource interface
interface Resource {
  id: string;
  title: string;
  description: string;
  type: ResourceType | string; 
  link: string;
  tags: string[];
  level: string;
  rating: number;
  thumbnail?: string;
  // These properties might not exist on all resources
  duration?: string;
  views?: number;
  downloads?: number;
  format?: string;
  platform?: string;
}

const resources: Resource[] = [
  {
    id: "r1",
    title: "Understanding Learning Disabilities",
    description: "A comprehensive introduction to different types of learning disabilities and effective teaching strategies.",
    type: "video",
    duration: "18:45",
    link: "https://example.com/video1",
    tags: ["learning disabilities", "teaching strategies", "education"],
    level: "beginner",
    rating: 4.8,
    views: 12500,
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
  },
  {
    id: "r2",
    title: "Assistive Technology Guide",
    description: "Explore various technologies that can help students with different learning needs.",
    type: "pdf",
    format: "PDF Guide",
    link: "https://example.com/pdf1",
    tags: ["assistive technology", "accessibility", "inclusive education"],
    level: "intermediate",
    rating: 4.5,
    downloads: 8750,
    thumbnail: "https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80"
  },
  {
    id: "r3",
    title: "Inclusive Classroom Strategies",
    description: "Learn how to create an inclusive classroom environment for students with diverse needs.",
    type: "article",
    duration: "10 min read",
    link: "https://example.com/article1",
    tags: ["inclusive education", "classroom management", "teaching strategies"],
    level: "beginner",
    rating: 4.7,
    views: 9500,
    thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "r4",
    title: "Math Manipulatives for Visual Learners",
    description: "Interactive tools and strategies for teaching math concepts to visual learners.",
    type: "interactive",
    duration: "Self-paced",
    link: "https://example.com/interactive1",
    tags: ["mathematics", "visual learning", "manipulatives"],
    level: "intermediate",
    rating: 4.9,
    views: 7200,
    thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "r5",
    title: "Adapting Materials for Different Learning Styles",
    description: "A guide to modifying educational materials to accommodate various learning styles and needs.",
    type: "worksheet",
    format: "Printable Guide",
    link: "https://example.com/worksheet1",
    tags: ["learning styles", "material adaptation", "differentiation"],
    level: "advanced",
    rating: 4.6,
    downloads: 6300,
    thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    id: "r6",
    title: "Social Skills Development",
    description: "Strategies for helping students develop social skills through inclusive activities.",
    type: "video",
    duration: "22:15",
    link: "https://example.com/video2",
    tags: ["social skills", "inclusive activities", "emotional intelligence"],
    level: "intermediate",
    rating: 4.7,
    views: 8300,
    thumbnail: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    id: "r7",
    title: "Text-to-Speech Tools Comparison",
    description: "An in-depth analysis of various text-to-speech tools and their applications in education.",
    type: "article",
    duration: "15 min read",
    link: "https://example.com/article2",
    tags: ["text-to-speech", "assistive technology", "educational tools"],
    level: "beginner",
    rating: 4.4,
    views: 5600,
    thumbnail: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
  },
  {
    id: "r8",
    title: "Individualized Education Program (IEP) Guide",
    description: "A comprehensive guide to creating effective IEPs for students with special educational needs.",
    type: "pdf",
    format: "Comprehensive Guide",
    link: "https://example.com/pdf2",
    tags: ["IEP", "special education", "educational planning"],
    level: "advanced",
    rating: 4.9,
    downloads: 12400,
    thumbnail: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    id: "r9",
    title: "Multisensory Teaching Techniques",
    description: "Explore teaching methods that engage multiple senses to enhance learning retention.",
    type: "tool",
    platform: "Web Application",
    link: "https://example.com/tool1",
    tags: ["multisensory learning", "teaching techniques", "sensory engagement"],
    level: "intermediate",
    rating: 4.6,
    downloads: 9800,
    thumbnail: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  }
];

const featuredCollections = [
  {
    title: "Getting Started with Inclusive Education",
    description: "Essential resources for educators new to inclusive teaching practices",
    resources: ["r1", "r3", "r7"],
    icon: BookOpen
  },
  {
    title: "Technology for Accessibility",
    description: "Tools and guides for implementing assistive technology in the classroom",
    resources: ["r2", "r7", "r9"],
    icon: Globe
  },
  {
    title: "Advanced Teaching Strategies",
    description: "In-depth resources for experienced educators looking to enhance their skills",
    resources: ["r5", "r8", "r9"],
    icon: FileText
  }
];

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
  const [savedResources, setSavedResources] = useState<string[]>([]);
  const [filterType, setFilterType] = useState<string>("all");
  const [filterLevel, setFilterLevel] = useState<string>("all");
  
  const filteredResources = resources.filter(resource => {
    const matchesSearch = 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesType = filterType === "all" || resource.type === filterType;
    const matchesLevel = filterLevel === "all" || resource.level === filterLevel;
    
    return matchesSearch && matchesType && matchesLevel;
  });
  
  const toggleSaveResource = (id: string) => {
    if (savedResources.includes(id)) {
      setSavedResources(savedResources.filter(r => r !== id));
    } else {
      setSavedResources([...savedResources, id]);
    }
  };
  
  const getResourceIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Video className="h-4 w-4" />;
      case "pdf":
        return <FileText className="h-4 w-4" />;
      case "article":
        return <BookOpen className="h-4 w-4" />;
      case "interactive":
        return <Play className="h-4 w-4" />;
      case "worksheet":
        return <FileText className="h-4 w-4" />;
      case "tool":
        return <Download className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };
  
  const formatDurationOrDownloads = (resource: Resource) => {
    if ('duration' in resource && resource.duration) {
      return (
        <div className="flex items-center text-xs text-muted-foreground">
          <Clock className="h-3 w-3 mr-1" />
          <span>{resource.duration}</span>
        </div>
      );
    }
    
    if ('downloads' in resource && resource.downloads) {
      return (
        <div className="flex items-center text-xs text-muted-foreground">
          <Download className="h-3 w-3 mr-1" />
          <span>{resource.downloads.toLocaleString()} downloads</span>
        </div>
      );
    }
    
    return null;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Learning Resources</h1>
            <p className="text-xl text-muted-foreground">
              Discover carefully curated educational materials designed for 
              inclusive learning and accessible to students of all abilities.
            </p>
          </div>
          
          {/* Search and Filter Controls */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input 
                  placeholder="Search resources..." 
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <select
                  className="border border-input bg-background px-3 py-2 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                >
                  <option value="all">All Types</option>
                  <option value="video">Videos</option>
                  <option value="article">Articles</option>
                  <option value="pdf">PDFs</option>
                  <option value="interactive">Interactive</option>
                  <option value="worksheet">Worksheets</option>
                  <option value="tool">Tools</option>
                </select>
                <select
                  className="border border-input bg-background px-3 py-2 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                  value={filterLevel}
                  onChange={(e) => setFilterLevel(e.target.value)}
                >
                  <option value="all">All Levels</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* Resource Content */}
          <Tabs defaultValue="browse" className="mb-16">
            <TabsList className="mb-8 mx-auto w-fit">
              <TabsTrigger value="browse">Browse All</TabsTrigger>
              <TabsTrigger value="collections">Featured Collections</TabsTrigger>
              {savedResources.length > 0 && (
                <TabsTrigger value="saved">Saved ({savedResources.length})</TabsTrigger>
              )}
            </TabsList>
            
            <TabsContent value="browse">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources.length > 0 ? (
                  filteredResources.map((resource) => (
                    <Card key={resource.id} className="hover-lift overflow-hidden">
                      {resource.thumbnail && (
                        <div 
                          className="h-40 bg-cover bg-center" 
                          style={{ backgroundImage: `url(${resource.thumbnail})` }}
                        >
                          <div className="w-full h-full bg-gradient-to-t from-background/80 to-transparent flex items-end p-4">
                            <Badge variant="secondary" className="flex items-center gap-1">
                              {getResourceIcon(resource.type)}
                              {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                            </Badge>
                          </div>
                        </div>
                      )}
                      <CardHeader className={resource.thumbnail ? "pt-3" : ""}>
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">{resource.title}</CardTitle>
                          <Button 
                            variant="ghost" 
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => toggleSaveResource(resource.id)}
                          >
                            <Heart 
                              className={`h-4 w-4 ${savedResources.includes(resource.id) ? "fill-red-500 text-red-500" : ""}`} 
                            />
                          </Button>
                        </div>
                        <CardDescription className="line-clamp-2">
                          {resource.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex flex-wrap gap-1 mb-3">
                          {resource.tags.slice(0, 2).map((tag, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                          {resource.tags.length > 2 && (
                            <Badge variant="outline" className="text-xs">
                              +{resource.tags.length - 2} more
                            </Badge>
                          )}
                        </div>
                        
                        <div className="flex items-center justify-between text-sm mt-2">
                          {formatDurationOrDownloads(resource)}
                          <Badge className="capitalize">{resource.level}</Badge>
                        </div>
                      </CardContent>
                      <CardFooter className="pt-0">
                        <Button 
                          className="w-full"
                          variant="outline"
                          onClick={() => setSelectedResource(resource)}
                        >
                          View Resource
                        </Button>
                      </CardFooter>
                    </Card>
                  ))
                ) : (
                  <div className="col-span-3 py-12 text-center">
                    <h3 className="text-lg font-medium mb-2">No resources found</h3>
                    <p className="text-muted-foreground">
                      Try adjusting your search or filters to find what you're looking for.
                    </p>
                    {(searchQuery || filterType !== "all" || filterLevel !== "all") && (
                      <Button
                        variant="outline"
                        className="mt-4"
                        onClick={() => {
                          setSearchQuery("");
                          setFilterType("all");
                          setFilterLevel("all");
                        }}
                      >
                        <Filter className="h-4 w-4 mr-2" />
                        Clear Filters
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="collections">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {featuredCollections.map((collection, index) => {
                  const collectionResources = collection.resources.map(id => 
                    resources.find(r => r.id === id)
                  ).filter((r): r is Resource => r !== undefined);
                  
                  return (
                    <Card key={index} className="hover-lift">
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-2 mb-2">
                          {React.createElement(collection.icon, { className: "h-5 w-5 text-primary" })}
                          <CardTitle className="text-xl">{collection.title}</CardTitle>
                        </div>
                        <CardDescription>{collection.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {collectionResources.map((resource) => (
                            <div 
                              key={resource.id} 
                              className="flex items-start gap-2 p-2 rounded-md hover:bg-muted cursor-pointer"
                              onClick={() => setSelectedResource(resource)}
                            >
                              <div className="mt-0.5">
                                {getResourceIcon(resource.type)}
                              </div>
                              <div className="flex-1">
                                <h4 className="text-sm font-medium">{resource.title}</h4>
                                <p className="text-xs text-muted-foreground line-clamp-1">
                                  {resource.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" size="sm" className="w-full">
                          View All Resources
                        </Button>
                      </CardFooter>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>
            
            {savedResources.length > 0 && (
              <TabsContent value="saved">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {resources
                    .filter(resource => savedResources.includes(resource.id))
                    .map((resource) => (
                      <Card key={resource.id} className="hover-lift overflow-hidden">
                        {resource.thumbnail && (
                          <div 
                            className="h-40 bg-cover bg-center" 
                            style={{ backgroundImage: `url(${resource.thumbnail})` }}
                          >
                            <div className="w-full h-full bg-gradient-to-t from-background/80 to-transparent flex items-end p-4">
                              <Badge variant="secondary" className="flex items-center gap-1">
                                {getResourceIcon(resource.type)}
                                {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                              </Badge>
                            </div>
                          </div>
                        )}
                        <CardHeader className={resource.thumbnail ? "pt-3" : ""}>
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-lg">{resource.title}</CardTitle>
                            <Button 
                              variant="ghost" 
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => toggleSaveResource(resource.id)}
                            >
                              <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                            </Button>
                          </div>
                          <CardDescription className="line-clamp-2">
                            {resource.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="flex flex-wrap gap-1 mb-3">
                            {resource.tags.slice(0, 2).map((tag, i) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                            {resource.tags.length > 2 && (
                              <Badge variant="outline" className="text-xs">
                                +{resource.tags.length - 2} more
                              </Badge>
                            )}
                          </div>
                          
                          <div className="flex items-center justify-between text-sm mt-2">
                            {formatDurationOrDownloads(resource)}
                            <Badge className="capitalize">{resource.level}</Badge>
                          </div>
                        </CardContent>
                        <CardFooter className="pt-0">
                          <Button 
                            className="w-full"
                            variant="outline"
                            onClick={() => setSelectedResource(resource)}
                          >
                            View Resource
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            )}
          </Tabs>
        </div>
      </main>
      
      {/* Resource Preview Dialog */}
      <Dialog open={!!selectedResource} onOpenChange={(open) => !open && setSelectedResource(null)}>
        <DialogContent className="sm:max-w-[800px] max-h-[90vh] flex flex-col">
          <DialogHeader>
            <DialogTitle className="flex justify-between items-center">
              <span className="pr-8">{selectedResource?.title}</span>
              <DialogClose asChild>
                <Button variant="ghost" size="icon">
                  <X className="h-4 w-4" />
                </Button>
              </DialogClose>
            </DialogTitle>
          </DialogHeader>
          
          <ScrollArea className="flex-1 max-h-[70vh]">
            <div className="space-y-6">
              {selectedResource?.thumbnail && (
                <div className="aspect-video w-full overflow-hidden rounded-md">
                  <img 
                    src={selectedResource.thumbnail} 
                    alt={selectedResource.title} 
                    className="w-full h-full object-cover" 
                  />
                </div>
              )}
              
              <div className="flex flex-wrap gap-2 items-center">
                <Badge variant="secondary" className="flex items-center gap-1">
                  {selectedResource && getResourceIcon(selectedResource.type)}
                  {selectedResource?.type.charAt(0).toUpperCase() + selectedResource?.type.slice(1)}
                </Badge>
                <Badge className="capitalize">{selectedResource?.level}</Badge>
                <div className="flex-1"></div>
                {selectedResource && formatDurationOrDownloads(selectedResource)}
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Description</h3>
                <p className="text-muted-foreground">
                  {selectedResource?.description}
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Topics Covered</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedResource?.tags.map((tag, i) => (
                    <Badge key={i} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="text-lg font-medium mb-2">Learning Objectives</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Understand key concepts related to {selectedResource?.tags[0]}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Learn practical strategies for implementation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Apply knowledge in classroom settings</span>
                  </li>
                </ul>
              </div>
              
              {selectedResource?.type === "video" && (
                <div className="aspect-video w-full bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Play className="h-12 w-12 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">Click to play video</p>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
          
          <div className="flex justify-between items-center pt-4 mt-4 border-t border-border">
            <Button 
              variant="outline"
              onClick={() => selectedResource && toggleSaveResource(selectedResource.id)}
            >
              <Heart 
                className={`h-4 w-4 mr-2 ${selectedResource && savedResources.includes(selectedResource.id) ? "fill-red-500 text-red-500" : ""}`} 
              />
              {selectedResource && savedResources.includes(selectedResource.id) ? "Saved" : "Save for later"}
            </Button>
            
            <Button>
              Access Resource
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      
      <Footer />
      
      <AccessibilityPanel />
    </div>
  );
};

export default Resources;
