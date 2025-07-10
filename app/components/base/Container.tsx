interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`container mx-auto px-4 py-8 flex flex-col gap-8 max-w-5xl ${className}`}
    >
      {children}
    </div>
  );
}
