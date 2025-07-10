interface SemiBoldProps {
  children: React.ReactNode;
  className?: string;
}

export default function SemiBold({ children, className = "" }: SemiBoldProps) {
  return <span className={`font-semibold ${className}`}>{children}</span>;
}
