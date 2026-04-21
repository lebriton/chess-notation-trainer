import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

function Layout({
  className,
  a,
  b,
  c,
}: {
  className?: string;
  a: ReactNode;
  b: ReactNode;
  c: ReactNode;
}) {
  return (
    <div
      className={cn(
        "grid gap-6",
        "grid-cols-1",
        "lg:grid-flow-col lg:grid-cols-[auto_1fr] lg:grid-rows-2",
        "xl:grid-cols-[1fr_2fr_1fr] xl:grid-rows-1",
        className,
      )}
    >
      <div className={cn("w-full", "order-1", "lg:order-2", "xl:order-1")}>{a}</div>

      <div
        className={cn(
          "w-full max-w-2xl justify-self-center",
          "order-2",
          "lg:order-1 lg:row-span-2 lg:w-2xl",
          "xl:order-2 xl:row-span-1",
        )}
      >
        {b}
      </div>

      <div className={cn("w-full", "order-3", "lg:self-end", "xl:self-auto")}>{c}</div>
    </div>
  );
}

export { Layout };
