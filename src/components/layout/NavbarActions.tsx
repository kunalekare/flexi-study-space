import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Store } from "lucide-react";
import { Button } from "@/components/ui/button";

type NavbarActionsProps = {
  cartCount: number;
  user: any; // Accepts user data to check login state
};

const NavbarActions = ({ cartCount, user }: NavbarActionsProps) => {
  return (
    <div className="hidden md:flex items-center gap-3">
      <Button variant="outline" size="icon" className="relative" asChild>
        <Link to="/cart">
          <ShoppingCart className="h-4 w-4" />
          <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full w-4 h-4 text-[10px] flex items-center justify-center">
            {cartCount}
          </span>
        </Link>
      </Button>
      <Button variant="outline" size="icon" asChild>
        <Link to="/seller-dashboard">
          <Store className="h-4 w-4" />
        </Link>
      </Button>

      {!user && (
        <>
          <Button variant="ghost" asChild>
            <Link to="/login">Log in</Link>
          </Button>
          <Button asChild>
            <Link to="/signup">Sign up free</Link>
          </Button>
        </>
      )}
    </div>
  );
};

export default NavbarActions;
