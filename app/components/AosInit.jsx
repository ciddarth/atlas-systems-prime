"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AosInit() {
  useEffect(() => {
    // Delay initialization to guarantee React's hydration has completed
    // and painted the full DOM tree before AOS manipulates class names.
    const timer = setTimeout(() => {
      AOS.init({
        duration: 800,
        once: true,
        easing: "ease-out-quad",
      });
      AOS.refresh();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
