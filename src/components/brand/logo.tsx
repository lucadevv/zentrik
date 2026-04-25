import { cn } from "@/lib/utils";

export function Logo({
  className,
  showWordmark = true,
}: {
  className?: string;
  showWordmark?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-heading text-base font-semibold tracking-tight text-foreground",
        className,
      )}
    >
      <span
        aria-hidden
        className="grid size-7 place-items-center rounded-lg bg-gradient-to-br from-primary to-chart-4 text-primary-foreground shadow-sm"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="size-4"
        >
          <path
            d="M5 5h14a1 1 0 0 1 .78 1.625l-9.7 12.125H19a1 1 0 1 1 0 2H5a1 1 0 0 1-.78-1.625l9.7-12.125H5a1 1 0 1 1 0-2Z"
            fill="currentColor"
          />
        </svg>
      </span>
      {showWordmark ? (
        <span className="text-[15px] tracking-[-0.01em]">Zentrik</span>
      ) : null}
    </span>
  );
}
