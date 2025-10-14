import Link from "next/link";

interface ActionButtonProps {
  label: string;
  href: string;
  className?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  label,
  href,
  className,
}) => (
  <Link
    href={href}
    className={`action-button${className ? " " + className : ""}`}
  >
    {label}
  </Link>
);

export default ActionButton;
