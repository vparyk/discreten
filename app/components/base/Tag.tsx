interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export default function Tag({ children, className = "" }: TagProps) {
  return (
    <span
      className={`-rotate-9 z-60 border-2 border-white lg:text-lg font-semibold uppercase italic text-gray-800 bg-rosemary p-2 px-6 rounded-lg text-white mx-auto ${className}`}
    >
      {children}
    </span>
  );
}
