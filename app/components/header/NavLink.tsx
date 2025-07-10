"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

export default function NavLink({
  href,
  children,
  className = "",
  onClick,
}: NavLinkProps) {
  const router = useRouter();

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (onClick) {
      event.preventDefault();
      onClick(event);
    } else {
      router.push(href);
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`text-white hover:underline transition-colors text-sm/6 font-semibold ${className}`}
    >
      {children}
    </Link>
  );
}
