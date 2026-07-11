import { Desktop, Moon, Sun } from "@phosphor-icons/react";
import { useTheme, type ThemeMode } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";

const OPTIONS: { mode: ThemeMode; label: string; icon: typeof Sun }[] = [
  { mode: "light", label: "Light", icon: Sun },
  { mode: "dark", label: "Dark", icon: Moon },
  { mode: "system", label: "System", icon: Desktop },
];

export function ThemeToggle() {
  const { mode, setMode } = useTheme();

  return (
    <div
      role="radiogroup"
      aria-label="Theme"
      className="flex items-center gap-0.5 rounded-full border border-border p-0.5"
    >
      {OPTIONS.map(({ mode: optionMode, label, icon: Icon }) => (
        <button
          key={optionMode}
          type="button"
          role="radio"
          aria-checked={mode === optionMode}
          aria-label={label}
          title={label}
          onClick={() => setMode(optionMode)}
          className={cn(
            "flex size-6 items-center justify-center rounded-full transition-colors duration-200",
            mode === optionMode
              ? "bg-ink text-background"
              : "text-gray-400 hover:text-foreground"
          )}
        >
          <Icon size={13} weight="bold" />
        </button>
      ))}
    </div>
  );
}
