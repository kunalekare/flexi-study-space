import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, GraduationCap, User } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import NavbarDropdownMenus from "./NavbarDropdownMenus";
import NavbarMobileMenu from "./NavbarMobileMenu";
import NavbarActions from "./NavbarActions";
import { subjects, accessibilityCategories } from "./navbarData";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);

  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  
  useEffect(() => {
    const checkUser = () => {
      const storedUser = localStorage.getItem("user");
      setUser(storedUser ? JSON.parse(storedUser) : null);
    };
  
    // Listen for storage changes (Login/Logout)
    window.addEventListener("storage", checkUser);
    return () => window.removeEventListener("storage", checkUser);
  }, []);
  

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setShowDropdown(false);
    window.dispatchEvent(new Event("storage")); // Force update across tabs
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-white py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-primary font-bold text-xl"
          onClick={closeMobileMenu}
        >
          <GraduationCap className="h-6 w-6" />
          <span className="tracking-tight">EduAccess</span>
        </Link>

        <NavbarDropdownMenus
          subjects={subjects}
          accessibilityCategories={accessibilityCategories}
        />

        <div className="flex items-center gap-4">
  <NavbarActions cartCount={cartCount} user={user} />
  {user && (  // Show user dropdown only if logged in
    <div className="relative">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="relative p-2"
      >
        <User className="h-6 w-6 text-primary cursor-pointer" />
      </button>
      {showDropdown && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-2">
          <p className="text-gray-700 text-sm px-2">{user.email}</p>
          <button
            onClick={handleLogout}
            className="block w-full text-left px-2 py-2 text-red-500 hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  )}
</div>


        <button
          className="md:hidden p-2 text-foreground rounded-md hover:bg-muted/60"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <NavbarMobileMenu
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        subjects={subjects}
        accessibilityCategories={accessibilityCategories}
      />
    </header>
  );
};

export default Navbar;
