import { cn } from "@/lib/utils";

function ChessCell({
  square,
  variant,
  highlighted = false,
  ...props
}: React.ComponentProps<"button"> & {
  square: string;
  variant: "light" | "dark";
  highlighted?: boolean;
}) {
  return (
    <button
      type="button"
      className={cn(
        "relative aspect-square w-full flex items-center justify-center text-xs sm:text-sm font-medium select-none cursor-pointer transition",
        variant === "light" && "bg-chesswhite",
        variant === "dark" && "bg-chessblack",
      )}
      {...props}
    >
      {highlighted && <div className="absolute inset-0 bg-[#ffff00]/25 pointer-events-none" />}

      <span
        className={cn(
          "absolute top-1 right-1 opacity-50 text-xs sm:text-sm font-medium uppercase",
          variant === "light" && "text-chessblack",
          variant === "dark" && "text-chesswhite",
        )}
      >
        {square}
      </span>
    </button>
  );
}

export { ChessCell };
