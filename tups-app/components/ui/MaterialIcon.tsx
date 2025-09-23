interface MaterialIconProps {
  icon: string;
  className?: string;
  size?: number;
}

export default function MaterialIcon({ icon, className = "", size = 24 }: MaterialIconProps) {
  return (
    <span
      className={`material-icons ${className}`}
      style={{ fontSize: `${size}px`, verticalAlign: 'middle', lineHeight: 1 }}
    >
      {icon}
    </span>
  );
}