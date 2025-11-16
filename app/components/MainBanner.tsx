"use client";

import DownArrowIcon from "@/public/img/icon/down-arrow-icon";
import Image from "next/image";
import { useBannerScroll } from "../hooks/useBannerScroll";

export default function MainBanner() {
  const { scrollOpacity, handleScrollButtonClick } = useBannerScroll();

  return (
    <div className="min-h-screen flex flex-col lg:flex-row overflow-hidden">
      <div className="relative flex-1 flex group items-end justify-end">
        {/* Első kép */}
        <div className="absolute inset-0 transition-opacity duration-700 z-0">
          <Image
            src="/img/reten-mobile.webp"
            alt="Mező, dombokkal és égboltal, képen középen egy korláttal"
            fill
            className="object-cover object-[23%_center] lg:object-left block sm:hidden"
            priority
          />
          <Image
            src="/img/reten.webp"
            alt="Mező, dombokkal és égboltal, képen középen egy korláttal"
            fill
            className="object-cover object-[23%_center] lg:object-left hidden sm:block"
            priority
          />
        </div>

        {/* Második kép */}
        <div
          className="absolute inset-0 transition-opacity duration-700 z-0"
          style={{ opacity: 1 - scrollOpacity }}
        >
          <Image
            src="/img/reten-mobile-nincs-korlat.webp"
            alt="Mező, dombokkal és égboltal, képről képszerkeztővel eltávolított korláttal"
            fill
            className="object-cover object-[23%_center] lg:object-left block sm:hidden"
          />
          <Image
            src="/img/reten-nincs-korlat.webp"
            alt="Mező, dombokkal és égboltal, képről képszerkeztővel eltávolított korláttal"
            fill
            className="object-cover object-[23%_center] lg:object-left hidden sm:block"
          />
        </div>

        {/* Tartalom */}
        <div className="relative lg:hidden bg-black/60 lg:bg-neutral-800/70 text-white p-6 shadow-lg text-center mb-15 z-0 rounded-bl-3xl">
          <h3 className="text-lg lg:text-2xl text-right italic font-semibold">
            Kreatív coaching eszközökkel
            <br /> a korlátokon túlra...
          </h3>
        </div>

        <div className="hidden lg:flex absolute inset-0 bg-black/30 items-center px-16">
          <div className="text-white max-w-xl flex flex-col h-full justify-center">
            <h1 className="text-4xl font-bold drop-shadow-lg">
              Life és Business Coaching
            </h1>
            <p className="mt-4 text-lg drop-shadow">
              Játék, mozgás, művészet alapú <br />
              eszközhasználattal
            </p>
          </div>
        </div>
      </div>

      {/* Mobil szöveges blokk a kép alatt */}
      <div className="bg-white py-6 pb-8 px-4 text-center lg:hidden">
        <h1 className="text-xl font-bold text-gray-900 leading-tight">
          Life és Business <br /> Coaching
        </h1>
        <p className="mt-3 text-gray-700">
          Játék, mozgás, művészet alapú <br />
          eszközhasználattal
        </p>
      </div>

      <div className="lg:min-h-screen bg-rosemary p-10 pt-6 flex flex-col items-center text-white justify-center 2xl:justify-start lg:border-l-2 relative lg:w-[320px]">
        <div className="flex flex-col flex-1 justify-center">
          <h3 className="hidden lg:block text-lg lg:text-2xl text-right italic">
            Kreatív coaching eszközökkel
            <br /> a korlátokon túlra...
          </h3>
        </div>
        <div className="space-y-4 text-base leading-relaxed max-w-lg flex flex-col gap-6 m-4 text-center font-semibold uppercase">
          Kategóriák
        </div>
        <button
          className={`absolute left-1/2 -translate-x-1/2 bottom-4 flex flex-col items-center group transition-transform duration-300 ${
            scrollOpacity === 0 ? "translate-y-3" : ""
          }`}
          aria-label="Görgess lejjebb"
          onClick={handleScrollButtonClick}
          type="button"
        >
          <DownArrowIcon />
        </button>
      </div>
    </div>
  );
}
