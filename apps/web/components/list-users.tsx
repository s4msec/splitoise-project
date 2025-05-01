"use client";

import { Button } from "@repo/ui/components/button";
import { useToast } from "@repo/ui/hooks/use-toast";
import { Pyramid } from "lucide-react";

const ListUsers = () => {
  const { toast } = useToast();

  // Simplicity - Just a simple button to list users
  const handleClick = async () => {
    const response = await fetch("http://localhost:3001/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      toast.error("Failed to connect to the backend");
      console.log(response);
    }

    const data = await response.json();
    toast.success(
      data.map((user: { email: string }) => `Email: ${user.email}`).join(", ")
    );
  };

  return (
    <div>
      <Button size="lg" variant="secondary" onClick={handleClick}>
        <Pyramid className="w-4 h-4 mr-2" /> List Users
      </Button>
    </div>
  );
};

export default ListUsers;
