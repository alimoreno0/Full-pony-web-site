import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-display font-medium transition-[transform,background-color,color,box-shadow,opacity] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-disabled:scale-[0.96]",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-fg shadow-soft hover:brightness-110",
        secondary:
          "bg-surface text-fg shadow-border hover:shadow-border-hover",
        ghost: "bg-transparent text-fg hover:bg-fg/5",
        outline:
          "bg-transparent text-fg shadow-border hover:bg-fg/5 hover:shadow-border-hover",
      },
      size: {
        sm: "h-10 rounded-lg px-3.5 text-sm [&_svg]:size-4",
        md: "h-11 rounded-xl px-5 text-sm [&_svg]:size-4",
        lg: "h-14 rounded-2xl px-7 text-base [&_svg]:size-5",
        icon: "size-11 rounded-xl [&_svg]:size-5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
