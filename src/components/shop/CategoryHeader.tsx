
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface CategoryHeaderProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  colorClass: string;
}

const CategoryHeader = ({ icon, title, description, colorClass }: CategoryHeaderProps) => {
  return (
    <section className={`${colorClass} py-12`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="flex items-start gap-4 mb-6 md:mb-0">
            <div className={`w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-sm`}>
              {icon}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Link 
                  to="/shop" 
                  className="text-sm text-muted-foreground hover:text-primary flex items-center"
                >
                  <ArrowLeft className="h-3 w-3 mr-1" />
                  Back to Shop
                </Link>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
              <p className="text-muted-foreground mt-2 max-w-lg">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryHeader;
