interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function SemiBold({ children, className = "" }: ContainerProps) {
  return <span className={`font-semibold ${className}`}>{children}</span>;
}
