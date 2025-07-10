type TagProps = {
  children: React.ReactNode;
  className?: string;
  hasBorder?: boolean;
};

export default function Tag({
  children,
  className = "",
  hasBorder = true,
}: TagProps) {
  return (
    <span
      className={`-rotate-9 z-60 lg:text-lg font-semibold uppercase italic text-gray-800 bg-rosemary p-2 px-6 rounded-lg text-white mx-auto
        ${hasBorder ? "border-2 border-white" : "border-0"}
        ${className}`}
    >
      {children}
    </span>
  );
}
