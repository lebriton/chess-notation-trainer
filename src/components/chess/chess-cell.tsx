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
        variant === "light" && "bg-[#f0d9b5]",
        variant === "dark" && "bg-[#b58863]",
      )}
      {...props}
    >
      {highlighted && <div className="absolute inset-0 bg-[#ffff00]/25 pointer-events-none" />}

      <span className="opacity-50">{square}</span>
    </button>
  );
}

export { ChessCell };
