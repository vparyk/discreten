"use client";

import DownArrowIcon from "@/public/img/icon/down-arrow-icon";
import { useState, useEffect } from "react";

export default function MainBanner() {
  const [scrollOpacity, setScrollOpacity] = useState(1);

  const handleScrollButtonClick = () => {
    setScrollOpacity(0);
    setTimeout(() => {
      const target = window.innerHeight;
      const duration = 1000;
      const start = window.scrollY;
      const startTime = performance.now();

      function animateScroll(now: number) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        window.scrollTo(0, start + (target - start) * ease);
        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      }

      requestAnimationFrame(animateScroll);
    }, 500);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = window.innerHeight; // A teljes képernyő magassága
      const startTransition = maxScroll * 0.05; // 5%-os görgetési távolság
      const endTransition = maxScroll * 0.5; // 50%-os görgetési távolság

      // Számítsd ki az átlátszóságot a 20%-40% közötti tartományban
      if (scrollTop >= startTransition) {
        const opacity = Math.max(
          0,
          1 - (scrollTop - startTransition) / (endTransition - startTransition)
        );
        setScrollOpacity(opacity);
      } else {
        setScrollOpacity(1); // Teljesen látható az első kép, ha 5% alatt vagyunk
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-screen">
      <div className="relative h-2/3 lg:h-1/2 lg:bg-bottom order-first lg:order-none flex items-end justify-end group">
        {/* Sötétítés az egész képen */}
        <div className="absolute inset-0 bg-black opacity-25 z-10 hidden lg:block"></div>

        {/* Első kép */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-700 z-0"
          style={{
            backgroundImage: "url(/img/reten.webp)",
          }}
        ></div>

        {/* Második kép */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-700 z-0"
          style={{
            backgroundImage: "url(/img/reten-nincs-korlat.webp)",
            opacity: 1 - scrollOpacity,
          }}
        ></div>
      </div>

      <div className="h-1/3 flex flex-col">
        {/* Mobil szöveges blokk a kép alatt */}
        <div className="h-full 2xl:hidden bg-white py-6 pb-8 px-4 text-center">
          <h1 className="text-xl font-bold text-gray-900">
            Life és business coaching
          </h1>
          <p className="mt-3 text-gray-700">
            Művész, játték és mozgás alapű <br /> eszközhasználattal
          </p>
        </div>

        {/* Szövegdoboz – jobbra desktopon, alul mobilon */}
        <div className="w-full h-full bg-rosemary p-10 flex items-center text-white justify-center 2xl:justify-start 2xl:border-l-2 relative">
          <div className="space-y-4 text-base leading-relaxed max-w-lg flex flex-col gap-6 m-4 text-center">
            Kreatív coaching eszközökkel
            <br /> a korlátokon túlra...
          </div>
          {/* Lefelé mutató fehér kacsacsőr ikon */}
          <button
            className={`absolute left-1/2 -translate-x-1/2 bottom-4 flex flex-col items-center group transition-transform duration-300 ${
              scrollOpacity === 0 ? "translate-y-4" : ""
            }`}
            aria-label="Görgess lejjebb"
            onClick={handleScrollButtonClick}
            type="button"
          >
            <DownArrowIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
