import Tag from "./base/Tag";

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
      <Tag className="bg-ground!">{children}</Tag>
    </div>
  );
}
