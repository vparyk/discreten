"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import NavLink from "./NavLink";

export default function HeaderMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const menuItems = [
    { href: "tarsas", label: "Társasjáték" },
    { href: "d20", label: "D20" },
    { href: "szabadban", label: "Szabadban" },
    { href: "onthesup", label: "On the Sup" },
    { href: "verses", label: "Verses" },
    { href: "zenes", label: "Zenés" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowMenu(true);
      } else {
        setShowMenu(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAttendClick = () => {
    const el = document.getElementById("jelentkezem");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setShowMenu(false);
    }
  };

  return (
    <header
      className={`fixed text-white w-full z-50 transition-opacity duration-300 group bg-[rgba(0,0,0,0.17)] ${
        showMenu ? "bg-[rgba(0,0,0,0.25)]" : "lg:bg-[rgba(0,0,0,0.08)]"
      }`}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-full items-center justify-between p-6 xl:px-8 bg-transparent"
      >
        <div className="flex xl:flex-1 mr-8">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="font-bold">discRéten</span>
          </a>
        </div>
        <div className="flex xl:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6 text-white" />
          </button>
        </div>
        <PopoverGroup className="hidden xl:flex xl:gap-x-10 items-center">
          <div
            className={`xl:flex xl:gap-x-12 transition-transform duration-300 ${
              showMenu
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-full group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0"
            }`}
          >
            {menuItems.map((item) => (
              <NavLink key={item.href} href={item.href}>
                <div>{item.label}</div>
                <div className="ml-5 opacity-40">Coaching</div>
              </NavLink>
            ))}
          </div>

          <NavLink href="rolam">
            <div>Rólam</div>
          </NavLink>
          <NavLink href="/#jelentkezem">
            <div className="underline" onClick={handleAttendClick}>
              Jelentkezem
            </div>
          </NavLink>
        </PopoverGroup>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="xl:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-rosemary px-6 py-6 sm:max-w-full sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5 flex items-center">
              <span className="text-white font-bold">discRéten</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="flex flex-col mt-13 justify-between h-[78vh] sm:mt-20 sm:h-[50vh]">
            {menuItems.map((item) => (
              <NavLink key={item.href} href={item.href}>
                <div className="text-center text-base ">
                  {item.label}{" "}
                  <div className="block opacity-40 text-center text-xs">
                    Coaching
                  </div>
                </div>
              </NavLink>
            ))}
            <NavLink href="rolam ">
              <div className="text-center text-base">Rólam</div>
            </NavLink>

            <NavLink href="/#jelentkezem">
              <div
                className="underline text-center text-lg uppercase tracking-wider"
                onClick={handleAttendClick}
              >
                Jelentkezem
              </div>
            </NavLink>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
