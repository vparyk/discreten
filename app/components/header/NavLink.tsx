import React from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function NavLink({
  href,
  children,
  className = "",
}: NavLinkProps) {
  return (
    <a
      href={href}
      className={`text-white hover:underline transition-colors text-sm/6 font-semibold ${className}`}
    >
      {children}
    </a>
  );
}
