import Link from "next/link";

interface ActionButtonProps {
  label: string;
  href?: string;
  className?: string;
  variant?: "primary" | "backToBlog" | "danger";
  as?: "a" | "button";
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLElement | HTMLAnchorElement>;
  form?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  label,
  href,
  className,
  variant = "primary",
  as = "a",
  type = "button",
  onClick,
  form,
}) => {
  const variantClass =
    variant === "backToBlog"
      ? "action-button-back"
      : variant === "danger"
        ? "action-button-danger"
        : "action-button-primary";

  const classes = `action-button ${variantClass}${className ? " " + className : ""}`;

  if (as === "button") {
    return (
      <button type={type} className={classes} onClick={onClick} form={form}>
        {label}
      </button>
    );
  }

  return (
    <Link
      href={href ?? "#"}
      className={classes}
      onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
    >
      {label}
    </Link>
  );
};

export default ActionButton;
