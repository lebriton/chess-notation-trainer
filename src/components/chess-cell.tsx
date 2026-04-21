import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

function ChessCell({
  className,
  square,
  variant,
  children,
  ...props
}: React.ComponentProps<"button"> & {
  className?: string;
  square: string;
  variant: "light" | "dark";
  children?: ReactNode;
}) {
  return (
    <button
      type="button"
      className={cn(
        "group/cell relative aspect-square",
        variant === "light" && "bg-chesswhite",
        variant === "dark" && "bg-chessblack",
        className,
      )}
      {...props}
    >
      <span
        className={cn(
          "absolute top-1 right-1 text-xs sm:text-sm font-medium z-10",
          variant === "light" && "text-chessblack",
          variant === "dark" && "text-chesswhite",
        )}
      >
        {square}
      </span>

      {children}
    </button>
  );
}

export { ChessCell };
