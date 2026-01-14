import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import "./Preloader.css";
import ISTELogo from "../../assets/logo.png";

const typingText = ["ISTE MITS", "Learn", "Lead", "Innovate"];

export default function Preloader() {
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const [typed, setTyped] = useState("");
  const [index, setIndex] = useState(0);
  const [exit, setExit] = useState(false);
  const [mounted, setMounted] = useState(false);

  /** Prevent preloader on internal SPA navigation */
  useEffect(() => {
    const navEntry = performance.getEntriesByType("navigation")[0];
    const navType = navEntry?.type || "";

    // Show only on cold load, not on SPA navigation
    if (navType !== "navigate") {
      setMounted(false);
      return;
    }

    setMounted(true);
  }, []);

  /** Typing Effect */
  useEffect(() => {
    if (!mounted || index >= typingText.length) return;

    let i = 0;
    const timerId = setInterval(() => {
      i++;
      setTyped(typingText[index].slice(0, i));

      if (i >= typingText[index].length) {
        clearInterval(timerId);
        setTimeout(() => setIndex(index + 1), 600);
      }
    }, 80);

    return () => clearInterval(timerId);
  }, [index, mounted]);

  /** Logo animation */
  useEffect(() => {
    if (!mounted || !logoRef.current) return;

    gsap.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.85, y: 25 },
      { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );

    const timer = setTimeout(() => setExit(true), 4500);
    return () => clearTimeout(timer);
  }, [mounted]);

  /** Exit animation */
  useEffect(() => {
    if (!exit) return;

    const preloaderEl = document.querySelector(".preloader");
    if (preloaderEl) {
      gsap.to(preloaderEl, {
        opacity: 0,
        filter: "blur(6px)",
        scale: 0.96,
        duration: 0.9,
        ease: "power2.out",
        onComplete: () => {
          preloaderEl.style.display = "none";
        }
      });
    }
  }, [exit]);

  if (!mounted) return null;

  return (
    <div className={`preloader ${exit ? "preloader-exit" : ""}`}>
      <div className="preloader-content">
        <img
          ref={logoRef}
          src={ISTELogo}
          alt="ISTE Logo"
          className="iste-logo-img"
          draggable={false}
        />
        <div ref={textRef} className="typing-text">
          {typed}
          <span style={{ opacity: 0 }}>|</span>
        </div>
      </div>
    </div>
  );
}
