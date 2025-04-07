"use client";

import { useState, useEffect } from "react";

export default function MainBanner() {
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = window.innerHeight; // A teljes képernyő magassága
      const startTransition = maxScroll * 0.2; // 20%-os görgetési távolság
      const endTransition = maxScroll * 0.4; // 40%-os görgetési távolság

      // Számítsd ki az átlátszóságot a 20%-40% közötti tartományban
      if (scrollTop >= startTransition) {
        const opacity = Math.max(
          0,
          1 - (scrollTop - startTransition) / (endTransition - startTransition)
        );
        setScrollOpacity(opacity);
      } else {
        setScrollOpacity(1); // Teljesen látható az első kép, ha 20% alatt vagyunk
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-screen lg:h-1/2 lg:bg-bottom order-first lg:order-none flex items-end justify-end group">
      {/* Első kép */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
        style={{
          backgroundImage: "url(/img/reten.jpg)",
        }}
      ></div>

      {/* Második kép */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
        style={{
          backgroundImage: "url(/img/reten-nincs-korlat.webp)",
          opacity: 1 - scrollOpacity,
        }}
      ></div>

      {/* Tartalom */}
      <div className="relative bg-black/40 text-white p-6 shadow-lg text-center mb-15">
        <h2 className="text-2xl lg:text-2xl text-right italic">
          Kreatív coaching eszközökkel
          <br /> a korlátokon túlra...
        </h2>
      </div>
    </div>
  );
}
