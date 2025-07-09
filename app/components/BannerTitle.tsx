interface BannerTitleProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export default function BennerTitle({
  id,
  children,
  className = "",
}: BannerTitleProps) {
  return (
    <div
      id={id}
      className={`flex justify-center bg-deep p-[10px] mt-[3px] scroll-mt-18 xl:scroll-mt-24 ${className}`}
    >
      <span className="-rotate-9 z-60 border-2 border-white lg:text-lg font-semibold uppercase italic text-gray-800 bg-ground p-2 px-6 rounded-lg text-white">
        {children}
      </span>
    </div>
  );
}
