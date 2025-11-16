import { useEffect, useState } from "react";

export function useBannerScroll() {
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
      const screenWidth = window.innerWidth;
      const scrollTop = window.scrollY;
      const maxScroll = window.innerHeight;
      const startTransition = maxScroll * 0.05;
      const endTransition =
        screenWidth > 1024 ? maxScroll * 0.8 : maxScroll * 0.3;

      if (scrollTop >= startTransition) {
        const opacity = Math.max(
          0,
          1 - (scrollTop - startTransition) / (endTransition - startTransition)
        );
        setScrollOpacity(opacity);
      } else {
        setScrollOpacity(1);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { scrollOpacity, handleScrollButtonClick };
}
