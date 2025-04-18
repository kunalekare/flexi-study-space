
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  companyName: z.string().min(2, "Company name must be at least 2 characters"),
  businessType: z.string({
    required_error: "Please select a business type",
  }),
  sellerCategory: z.string({
    required_error: "Please select a seller category",
  }),
  selectedPlan: z.string().optional(),
  website: z.string().optional(),
  termsAgreed: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and conditions",
  }),
});

type FormValues = z.infer<typeof formSchema>;

interface SellerRegistrationFormProps {
  selectedPlan?: string | null;
}

const SellerRegistrationForm = ({ selectedPlan }: SellerRegistrationFormProps) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      companyName: "",
      businessType: "",
      sellerCategory: "",
      selectedPlan: selectedPlan || "",
      website: "",
      termsAgreed: false,
    },
  });


// This is new registration form of submition
const onSubmit = async (data: FormValues) => {
  try {
    const response = await fetch("http://localhost:5001/api/seller/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok) {
      toast({
        title: "Registration successful!",
        description: "Your seller account is being processed.",
      });
      navigate("/seller-dashboard", { 
        state: { fromRegistration: true, selectedPlan: data.selectedPlan } 
      });
    } else {
      toast({ title: "Error", description: result.message, variant: "destructive" });
    }
  } catch (error) {
    console.error("Error submitting registration:", error);
    toast({ title: "Error", description: "Something went wrong. Please try again.", variant: "destructive" });
  }
};


  return (
    <div className="w-full max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-sm border p-6 md:p-8">
      <h2 className="text-2xl font-bold mb-6">Seller Registration</h2>
      
      {selectedPlan && (
        <div className="mb-6 p-3 bg-primary/10 rounded-md">
          <p className="font-medium">You are registering with the <span className="text-primary">{selectedPlan}</span> plan</p>
        </div>
      )}
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your first name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your last name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="your@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="(123) 456-7890" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company / Business Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your company name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="businessType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Business Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select business type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="individual">Individual/Sole Proprietor</SelectItem>
                      <SelectItem value="llc">LLC</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="corporation">Corporation</SelectItem>
                      <SelectItem value="nonprofit">Non-profit Organization</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="sellerCategory"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Primary Product Category</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select product category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="assistive-tech">Assistive Technology</SelectItem>
                      <SelectItem value="adaptive-clothing">Adaptive Clothing</SelectItem>
                      <SelectItem value="mobility-aids">Mobility Aids</SelectItem>
                      <SelectItem value="smart-home">Smart Home Accessibility</SelectItem>
                      <SelectItem value="learning-tools">Learning Tools</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          {!selectedPlan && (
            <FormField
              control={form.control}
              name="selectedPlan"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subscription Plan</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a subscription plan" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Individual">Individual ($4.99/month)</SelectItem>
                      <SelectItem value="Professional">Professional ($39.99/month)</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Choose the plan that best fits your business needs.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          
          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Website (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="https://your-website.com" {...field} />
                </FormControl>
                <FormDescription>
                  If you have an existing website, please enter it here.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="termsAgreed"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4 border">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    I agree to the terms and conditions, privacy policy, and seller agreement
                  </FormLabel>
                  <FormDescription>
                    By checking this box, you agree to abide by our seller policies and guidelines.
                  </FormDescription>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button type="submit" className="w-full">
            Submit Registration
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SellerRegistrationForm;
