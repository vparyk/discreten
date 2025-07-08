import NavLink from "./header/NavLink";

type BannerNavLinkProps = {
  href: string;
  title: string;
  subtitle?: string;
  className?: string;
  isRight?: boolean;
};

export default function BannerNavLink({
  href,
  title,
  subtitle = "Coaching",
  className = "",
  isRight = false,
}: BannerNavLinkProps) {
  // Oldalspecifikus stílusok
  const sideClass = isRight
    ? "rounded-bl-2xl border-l-2 border-t-2 border-b-2 border-white"
    : "rounded-tr-2xl border-r-2 border-t-2 border-b-2 border-white";

  return (
    <NavLink
      href={href}
      className={`relative z-10 text-white p-2.5 lg:p-3 bg-rosemary block transition-transform duration-200 hover:scale-110 focus:scale-110 ${sideClass} ${className}`}
    >
      <div className={`${isRight ? "mr-2 lg:mr-5" : "ml-2 lg:ml-5"}`}>
        <h2 className="text-sm sm:text-base md:text-lg leading-5">
          <div className="text-white opacity-100 underline">{title}</div>
          <div className={`${isRight ? "ml-9" : "ml-5"} opacity-40`}>
            {subtitle}
          </div>
        </h2>
      </div>
    </NavLink>
  );
}
