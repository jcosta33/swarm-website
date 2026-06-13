import type { ButtonHTMLAttributes, ReactNode, AnchorHTMLAttributes } from "react";
import Link from "next/link";

type BaseButtonProps = {
  variant?: "primary" | "secondary";
  children: ReactNode;
  className?: string;
  disabled?: boolean;
};

type ButtonAsButton = BaseButtonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> & {
    asChild?: false;
  };

type ButtonAsChild = BaseButtonProps & {
  asChild: true;
  children: React.ReactElement<AnchorHTMLAttributes<HTMLAnchorElement>>;
};

export type ButtonProps = ButtonAsButton | ButtonAsChild;

export function Button({
  variant = "primary",
  children,
  className = "",
  disabled,
  asChild,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold transition-colors focus-ring";

  const styles = {
    primary:
      "bg-swarm-yellow text-factory-950 hover:bg-yellow-300 active:bg-yellow-400 disabled:bg-concrete-400 disabled:text-factory-900",
    secondary:
      "border border-factory-700 bg-transparent text-concrete-100 hover:border-swarm-yellow hover:text-swarm-yellow active:border-yellow-400 active:text-yellow-400 disabled:border-factory-800 disabled:text-concrete-400",
  };

  const classes = `${base} ${styles[variant]} ${disabled ? "cursor-not-allowed" : "cursor-pointer"} ${className}`;

  if (asChild) {
    const child = children as React.ReactElement<AnchorHTMLAttributes<HTMLAnchorElement>>;
    const { href, ...childProps } = child.props;
    return (
      <Link
        href={href ?? "/"}
        {...childProps}
        className={`${classes} ${child.props.className ?? ""}`}
      >
        {child.props.children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      disabled={disabled}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
