"use client"

import { useState, useEffect } from "react";

export function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasMounted(true);
    }
    return () => setHasMounted(true);
  }, []);

  return hasMounted;
}