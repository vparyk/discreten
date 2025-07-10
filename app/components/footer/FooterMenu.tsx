"use client";

import Link from "next/link";
import NavLink from "../header/NavLink";

export default function FooterMenu() {
  const handleAttendClick = () => {
    const el = document.getElementById("jelentkezem");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="text-white w-full bg-ground">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-full items-center justify-between p-6 lg:px-8 bg-transparent"
      >
        <div className="flex lg:flex-1 mr-8">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="font-bold">discRéten</span>
          </Link>
        </div>

        <NavLink href="/#jelentkezem">
          <div className="underline" onClick={handleAttendClick}>
            Jelentkezem
          </div>
        </NavLink>
      </nav>
    </footer>
  );
}
