import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

function Payment() {
  const navigate = useNavigate();

  const handlePayment = () => {
    // Here, you'd integrate with your payment gateway (Stripe, PayPal, etc.)
    // For demo, we just show a toast and navigate away:
    toast({
      title: "Payment processing...",
      description: "Redirecting to confirmation page.",
    });

    setTimeout(() => {
      // Simulate successful payment
      navigate("/payment-success");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-md w-full p-6 bg-white shadow-md rounded-md">
        <h1 className="text-2xl font-bold mb-4">Payment</h1>
        <p className="text-muted-foreground mb-4">
          This is where you would show your payment form or redirect to an external payment gateway.
        </p>
        <Button onClick={handlePayment}>Process Payment</Button>
      </div>
    </div>
  );
}

export default Payment;
