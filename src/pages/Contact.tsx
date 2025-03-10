
import React, { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AccessibilityPanel from "@/components/ui/AccessibilityPanel";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const { toast } = useToast();
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(data: ContactFormValues) {
    // For demonstration purposes, show success toast
    toast({
      title: "Message sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    
    console.log("Contact form data:", data);
    form.reset();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 md:pt-40 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Contact <span className="text-primary">Us</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Have questions or need assistance? We're here to help you with any inquiries about our inclusive learning platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-card rounded-xl p-6 shadow-sm border border-border flex flex-col items-center text-center hover-lift">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <p className="text-muted-foreground mb-4">For general inquiries and support</p>
                <a href="mailto:support@flexilearn.example" className="text-primary hover:underline">
                  support@flexilearn.example
                </a>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-sm border border-border flex flex-col items-center text-center hover-lift">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <p className="text-muted-foreground mb-4">Speak with our accessibility experts</p>
                <a href="tel:+1234567890" className="text-primary hover:underline">
                  +1 (234) 567-890
                </a>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-sm border border-border flex flex-col items-center text-center hover-lift">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Office Hours</h3>
                <p className="text-muted-foreground mb-4">We're available to assist you</p>
                <p className="text-sm">
                  Monday - Friday: 9AM - 6PM<br />
                  Saturday: 10AM - 4PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <div className="lg:col-span-2 order-2 lg:order-1">
                <div className="bg-card rounded-xl p-6 shadow-sm border border-border h-full">
                  <h2 className="text-2xl font-semibold mb-6">Visit Our Office</h2>
                  
                  <div className="flex items-start gap-4 mb-6">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Main Headquarters</h3>
                      <p className="text-muted-foreground text-sm">
                        123 Accessibility Avenue<br />
                        Innovation District<br />
                        San Francisco, CA 94103<br />
                        United States
                      </p>
                    </div>
                  </div>
                  
                  <div className="aspect-video w-full rounded-lg overflow-hidden mt-4 border border-border">
                    <img 
                      src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                      alt="Map location" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-3 order-1 lg:order-2">
                <div className="bg-card rounded-xl p-6 md:p-8 shadow-sm border border-border">
                  <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Your name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input placeholder="Your email" type="email" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone (Optional)</FormLabel>
                              <FormControl>
                                <Input placeholder="Your phone number" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Subject</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select a subject" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="general">General Inquiry</SelectItem>
                                  <SelectItem value="support">Technical Support</SelectItem>
                                  <SelectItem value="accessibility">Accessibility Question</SelectItem>
                                  <SelectItem value="feedback">Feedback</SelectItem>
                                  <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="How can we help you?" 
                                className="min-h-32 resize-none"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button type="submit" className="w-full md:w-auto">
                        Send Message
                      </Button>
                    </form>
                  </Form>
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

export default Contact;
