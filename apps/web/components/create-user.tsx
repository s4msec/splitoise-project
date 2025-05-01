"use client";

import { Button } from "@repo/ui/components/button";
import { useToast } from "@repo/ui/hooks/use-toast";
import { Pyramid } from "lucide-react";

const CreateUser = () => {
  const { toast } = useToast();

  // Simplicity - Just a simple button to create a user
  const handleClick = async () => {
    const response = await fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "example@example.com",
        password: "example",
      }),
    });

    if (!response.ok) {
      toast.error("Failed to create user");
      console.log(response);
      return;
    }

    const data = await response.json();
    toast.success("User created successfully", {
      description: `Email: ${data.email}, Password: ${data.password}`,
    });
  };

  return (
    <div>
      <Button size="lg" variant="secondary" onClick={handleClick}>
        <Pyramid className="w-4 h-4 mr-2" />
        Create User
      </Button>
    </div>
  );
};

export default CreateUser;
