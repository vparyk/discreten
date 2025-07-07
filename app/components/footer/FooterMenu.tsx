"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import NavLink from "../header/NavLink";

export default function FooterMenu() {
  return (
    <footer className="text-white w-full bg-ground border-t-2">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-full items-center justify-between p-6 lg:px-8 bg-transparent"
      >
        <div className="flex lg:flex-1 mr-8">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="font-bold">discRéten</span>
          </a>
        </div>
        <NavLink href="jelentkezem">
          <div className="underline">Jelentkezem</div>
        </NavLink>
      </nav>
    </footer>
  );
}
