export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="text-white hover:underline transition-colors text-sm/6 font-semibold"
    >
      {children}
    </a>
  );
}
