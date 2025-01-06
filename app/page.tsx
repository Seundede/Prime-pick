"use client"

import { useStore } from "@/hooks/use-store";
import { useEffect } from "react";


export default function Home() {
  const isOpen = useStore((state) => state.isOpen);
  const onOpen = useStore((state) => state.onOpen)

  useEffect(() => {
    if(!isOpen) {
      onOpen()
    }
  },[isOpen, onOpen])
  return (
    <div className="p-4">
    <h2>This is a protected route</h2>
    </div>
  );
}
