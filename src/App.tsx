
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import HowItWorks from "./pages/HowItWorks";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import SubjectDetails from "./pages/SubjectDetails";
import Subjects from "./pages/Subjects";
import Accessibility from "./pages/Accessibility";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Cart from "./pages/Cart";
import Sell from "./pages/Sell";
import SellerDashboard from "./pages/SellerDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/subjects" element={<Subjects />} />
            <Route path="/subjects/:subjectId" element={<SubjectDetails />} />
            <Route path="/accessibility" element={<Accessibility />} />
            
            {/* Grade Routes */}
            <Route path="/subjects/grade1" element={<SubjectDetails />} />
            <Route path="/subjects/grade2" element={<SubjectDetails />} />
            <Route path="/subjects/grade3" element={<SubjectDetails />} />
            <Route path="/subjects/grade4" element={<SubjectDetails />} />
            <Route path="/subjects/grade5" element={<SubjectDetails />} />
            <Route path="/subjects/grade6" element={<SubjectDetails />} />
            <Route path="/subjects/grade7" element={<SubjectDetails />} />
            <Route path="/subjects/grade8" element={<SubjectDetails />} />
            <Route path="/subjects/grade9" element={<SubjectDetails />} />
            <Route path="/subjects/grade10" element={<SubjectDetails />} />
            
            {/* E-commerce Routes */}
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:categoryId" element={<ShopCategory />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/sell" element={<Sell />} />
            <Route path="/seller-dashboard" element={<SellerDashboard />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
