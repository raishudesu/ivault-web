import { GithubLogo } from "@phosphor-icons/react";
import { ThemeToggle } from "@/components/theme-toggle";
import icon from "@/src/assets/icon.png";

const NAV_LINKS = [
  { href: "#features", label: "features" },
  { href: "#tech-stack", label: "tech stack" },
  { href: "#privacy", label: "privacy" },
  { href: "#get-started", label: "get started" },
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-[56rem] items-center justify-between px-4 sm:px-6">
        <a
          href="#top"
          className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-widest"
        >
          <img
            src={icon}
            alt=""
            className="size-6 rounded-md border border-border"
          />
          ivault
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[11px] uppercase tracking-wide text-gray-500 transition-colors duration-200 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/raishudesu/ivault"
            target="_blank"
            rel="noreferrer"
            aria-label="View source on GitHub"
            className="text-gray-500 transition-colors duration-200 hover:text-foreground"
          >
            <GithubLogo size={18} weight="bold" />
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
