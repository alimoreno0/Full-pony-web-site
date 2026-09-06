import { cn } from "@/lib/utils";

type PonyCoinProps = {
  className?: string;
  imgClassName?: string;
  alt?: string;
  priority?: boolean;
};

export function PonyCoin({
  className,
  imgClassName,
  alt = "$PONY logo — Pony the smiling Shiba Inu",
  priority = false,
}: PonyCoinProps) {
  return (
    <div
      className={cn(
        "relative aspect-square rounded-full bg-primary p-1.5 shadow-lift",
        className,
      )}
    >
      <div className="h-full w-full overflow-hidden rounded-full bg-bg p-1">
        <img
          src="/pony-logo.webp"
          alt={alt}
          width={640}
          height={640}
          draggable={false}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          className={cn(
            "h-full w-full rounded-full object-cover",
            imgClassName,
          )}
        />
      </div>
    </div>
  );
}
