"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost" | "icon";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-foreground text-background font-semibold hover:opacity-90 shadow-sm",
  secondary:
    "border border-border bg-transparent text-foreground font-semibold hover:bg-muted",
  ghost:
    "bg-transparent text-muted-foreground font-semibold hover:text-foreground hover:bg-muted/60",
  icon:
    "p-2 text-muted-foreground hover:bg-muted hover:text-foreground rounded-full",
};

const sizeClasses = {
  sm: "px-3.5 py-1.5 text-xs gap-1.5",
  md: "px-5 py-2.5 text-sm gap-2",
  lg: "px-6 py-3 text-sm gap-2",
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
    "inline-flex items-center justify-center rounded-full transition-colors focus-visible:outline-none",
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
