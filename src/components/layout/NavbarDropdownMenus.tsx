
import React from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ShoppingCart, Store, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

type NavbarDropdownMenusProps = {
  subjects: { name: string; path: string }[];
  grades: { name: string; path: string }[];
  accessibilityCategories: { name: string; path: string; icon: React.ReactNode }[];
};

const NavbarDropdownMenus = ({ subjects, grades, accessibilityCategories }: NavbarDropdownMenusProps) => {
  return (
    <nav className="hidden md:flex items-center gap-2">
      <Link to="/" className="px-3 py-2 text-foreground/80 hover:text-primary transition-colors">
        Home
      </Link>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="px-3 py-2 flex items-center gap-1">
            Accessible Shopping <ChevronDown className="h-4 w-4 opacity-50" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="center" className="w-56 glass-panel">
          <DropdownMenuGroup>
            {accessibilityCategories.map((category) => (
              <DropdownMenuItem key={category.name} asChild>
                <Link 
                  to={category.path}
                  className="w-full cursor-pointer flex items-center"
                >
                  {category.icon}
                  {category.name}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link to="/shop/all-accessibility" className="w-full cursor-pointer flex items-center">
              <ShoppingCart className="h-4 w-4 mr-2" />
              View All Products
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="px-3 py-2 flex items-center gap-1">
            Subjects <ChevronDown className="h-4 w-4 opacity-50" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="center" className="w-48 glass-panel">
          {subjects.map((subject) => (
            <DropdownMenuItem key={subject.name} asChild>
              <Link 
                to={subject.path}
                className="w-full cursor-pointer"
              >
                {subject.name}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="px-3 py-2 flex items-center gap-1">
            Grades <ChevronDown className="h-4 w-4 opacity-50" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="center" className="w-48 glass-panel">
          {grades.map((grade) => (
            <DropdownMenuItem key={grade.name} asChild>
              <Link 
                to={grade.path}
                className="w-full cursor-pointer flex items-center"
              >
                <GraduationCap className="h-4 w-4 mr-2" />
                {grade.name}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      
      <Link to="/how-it-works" className="px-3 py-2 text-foreground/80 hover:text-primary transition-colors">
        How It Works
      </Link>
      
      <Link to="/resources" className="px-3 py-2 text-foreground/80 hover:text-primary transition-colors">
        Resources
      </Link>
      
      <Link to="/sell" className="px-3 py-2 text-foreground/80 hover:text-primary transition-colors flex items-center">
        <Store className="h-4 w-4 mr-1" />
        Sell on EduAccess
      </Link>
    </nav>
  );
};

export default NavbarDropdownMenus;
