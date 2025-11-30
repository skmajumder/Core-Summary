"use client";

import { Button } from "@/components/ui/button";

export default function Home() {
  const handleClick = () => {
    console.log("Button clicked");
  };
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-200 font-sans">
      <Button className="cursor-pointer" onClick={handleClick}>Click me</Button>
    </div>
  );
}
