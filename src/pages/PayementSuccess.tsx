// PaymentSuccess.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function PaymentSuccess() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-md w-full p-6 bg-white shadow-md rounded-md text-center">
        <h1 className="text-2xl font-bold mb-4">Payment Successful!</h1>
        <p className="text-muted-foreground mb-6">
          Thank you for your purchase. Your order has been processed successfully.
        </p>
        <Button asChild>
          <Link to="#">Go to Homepage</Link>
        </Button>
      </div>
    </div>
  );
}

export default PaymentSuccess;
