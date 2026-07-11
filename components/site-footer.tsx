import { GithubLogo } from "@phosphor-icons/react";

const LINKS = [
  { href: "#features", label: "features" },
  { href: "#tech-stack", label: "tech stack" },
  { href: "#privacy", label: "privacy" },
  { href: "#get-started", label: "get started" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[56rem] flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs">
          <p className="font-display text-sm font-semibold uppercase tracking-widest">
            ivault
          </p>
          <p className="mt-3 text-sm text-gray-500">
            A private, offline-first vault to scan, store, and view your
            important documents. Nothing ever leaves your device.
          </p>
          <p className="mono-label mt-4">MIT LICENSE · BUILT WITH EXPO</p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[11px] uppercase tracking-wide text-gray-500 transition-colors duration-200 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="https://github.com/raishudesu/ivault"
          target="_blank"
          rel="noreferrer"
          className="link-underline flex items-center gap-2 font-mono text-[11px] uppercase tracking-wide text-gray-500 hover:text-foreground"
        >
          <GithubLogo size={16} weight="bold" />
          github.com/raishudesu/ivault ↗
        </a>
      </div>

      <div className="mx-auto flex max-w-[56rem] items-center justify-between border-t border-border px-4 py-4 sm:px-6">
        <p className="mono-label">© {new Date().getFullYear()} IVAULT</p>
        <p className="mono-label">NO ACCOUNTS · NO TELEMETRY · NO CLOUD</p>
      </div>
    </footer>
  );
}
