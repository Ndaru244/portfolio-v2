"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost" | "icon";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-foreground text-background font-semibold hover:opacity-90 active:opacity-80 shadow-sm",
  secondary:
    "border border-border bg-transparent text-foreground font-semibold hover:bg-muted active:bg-muted/80",
  ghost:
    "bg-transparent text-muted-foreground font-semibold hover:text-foreground hover:bg-muted active:bg-muted/80",
  icon:
    "h-10 w-10 p-0 text-muted-foreground hover:bg-muted hover:text-foreground active:bg-muted/80 rounded-full",
};

const sizeClasses = {
  sm: "px-3.5 py-2 text-xs gap-1.5 min-h-9",
  md: "px-5 py-2.5 text-sm gap-2 min-h-10",
  lg: "px-6 py-3 text-sm gap-2 min-h-11",
};

type CommonProps = {
  variant?: ButtonVariant;
  size?: keyof typeof sizeClasses;
  className?: string;
  children?: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    href?: undefined;
  };

type ButtonAsAnchor = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className"> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button(
  { variant = "primary", size = "md", className, children, ...props },
  ref,
) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full transition-colors duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-50",
    variant !== "icon" && sizeClasses[size],
    variantClasses[variant],
    className,
  );

  if ("href" in props && props.href != null) {
    const { href, ...anchorProps } = props as ButtonAsAnchor;
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={classes}
        {...anchorProps}
      >
        {children}
      </a>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={buttonProps.type ?? "button"}
      className={classes}
      {...buttonProps}
    >
      {children}
    </button>
  );
});

export default Button;
