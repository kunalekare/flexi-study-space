
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AccessibilityFeatures = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Designed for Everyone</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform includes these accessibility features to ensure everyone can shop with ease.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center hover-lift">
            <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 dark:text-blue-400">
                <path d="M8 3h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path>
                <path d="M12 18h.01"></path>
              </svg>
            </div>
            <h3 className="font-medium text-lg mb-2">Screen Reader Compatible</h3>
            <p className="text-muted-foreground text-sm">
              Our website works seamlessly with popular screen readers like JAWS and NVDA.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center hover-lift">
            <div className="bg-purple-100 dark:bg-purple-900/30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600 dark:text-purple-400">
                <path d="M15 7.5V9"></path><path d="M12 6v6"></path><path d="M9 9v3"></path>
                <path d="M8 16h8"></path>
                <path d="M12 6q-2.9 0-4.45 1.55Q6.525 20.313 10 20.975v-2.05q-2.675-.625-4.138-2.537Q4.4 14.475 4.4 11.6q0-3.45 2.063 6.081Q9.1 18 12 18q2.9 0 4.45-1.55Q18 14.9 18 12q0-2.9-1.55-4.45Q14.9 6 12 6"></path>
              </svg>
            </div>
            <h3 className="font-medium text-lg mb-2">Voice Navigation</h3>
            <p className="text-muted-foreground text-sm">
              Navigate through our site using just your voice commands.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center hover-lift">
            <div className="bg-amber-100 dark:bg-amber-900/30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600 dark:text-amber-400">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 8v8"></path>
                <path d="M8 12h8"></path>
              </svg>
            </div>
            <h3 className="font-medium text-lg mb-2">High Contrast Mode</h3>
            <p className="text-muted-foreground text-sm">
              Switch to high contrast colors for better visibility.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center hover-lift">
            <div className="bg-green-100 dark:bg-green-900/30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 dark:text-green-400">
                <path d="M12 2q-4.025 0-6.812 2.787Q2.4 7.575 2.4 11.6q0 3.45 2.063 6.081Q6.525 20.313 10 20.975v-2.05q-2.675-.625-4.138-2.537Q4.4 14.475 4.4 11.6q0-3.15 2.225-5.375T12 4q3.15 0 5.375 2.225T19.6 11.6q0 2.875-1.463 4.788Q16.675 18.3 14 18.925v2.05q3.475-.663 5.537-3.294Q21.6 15.05 21.6 11.6q0-4.025-2.788-6.813Q16.025 2 12 2"></path>
                <path d="M11 22h2v-8h-2z"></path>
              </svg>
            </div>
            <h3 className="font-medium text-lg mb-2">Keyboard-Friendly</h3>
            <p className="text-muted-foreground text-sm">
              Full keyboard navigation for motor-impaired users.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button asChild>
            <Link to="/accessibility">
              Learn More About Our Accessibility Features
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AccessibilityFeatures;
