import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "glass";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const variants = {
      primary:
        "bg-emerald-500 text-black hover:bg-emerald-400 border border-transparent shadow-[0_0_10px_rgba(16,185,129,0.3)] hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]",
      secondary:
        "bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/30 backdrop-blur-sm",
      outline:
        "bg-transparent text-white border border-white/20 hover:border-emerald-500/50 hover:text-emerald-400",
      ghost: "bg-transparent text-gray-400 hover:text-white hover:bg-white/5",
      glass:
        "bg-white/5 text-white border border-white/10 hover:bg-white/10 backdrop-blur-md shadow-lg",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-base",
      lg: "h-14 px-8 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          sizes[size],
          className
        )}
        whileHover={{
          // Explicitly NO scale transform as per instructions
          filter: "brightness(1.1)",
        }}
        whileTap={{
          // No scale on tap either to be super safe with strict "no scale" rule, or minimal
          scale: 1, 
        }}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
      </motion.button>
    );
  }
);
Button.displayName = "Button";

export { Button };
