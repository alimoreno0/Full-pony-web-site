import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={cn("relative", className)}
    >
      <span className="relative size-5" aria-hidden="true">
        <span
          className={cn(
            "absolute inset-0 flex items-center justify-center transition-[opacity,filter,scale] duration-300 ease-[cubic-bezier(0.2,0,0,1)]",
            isDark
              ? "scale-100 opacity-100 blur-none"
              : "scale-[0.25] opacity-0 blur-[4px]",
          )}
        >
          <Sun className="size-5" strokeWidth={2} />
        </span>
        <span
          className={cn(
            "flex items-center justify-center transition-[opacity,filter,scale] duration-300 ease-[cubic-bezier(0.2,0,0,1)]",
            isDark
              ? "scale-[0.25] opacity-0 blur-[4px]"
              : "scale-100 opacity-100 blur-none",
          )}
        >
          <Moon className="size-5" strokeWidth={2} />
        </span>
      </span>
    </Button>
  );
}
