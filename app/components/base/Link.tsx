import Link from "next/link";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function TextLink({
  href,
  children,
  className = "",
}: LinkProps) {
  return (
    <Link href={href} className={`text-rosemary font-semibold  ${className}`}>
      {children}
    </Link>
  );
}
