import Link from "next/link";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

export default function TextLink({
  href,
  children,
  className = "",
  target,
  rel,
}: LinkProps) {
  return (
    <Link
      href={href}
      className={`text-rosemary font-semibold ${className}`}
      target={target}
      rel={rel}
    >
      {children}
    </Link>
  );
}
