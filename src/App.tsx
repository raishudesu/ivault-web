import {
  AndroidLogo,
  Camera,
  Check,
  Database,
  DownloadSimple,
  EyeSlash,
  Fingerprint,
  FlipHorizontal,
  GithubLogo,
  Lock,
  Moon,
  ShieldCheck,
  Warning,
  WifiSlash,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import icon from "./assets/icon.png";
import { Badge } from "@/components/ui/badge";

const REPO_URL = "https://github.com/raishudesu/ivault";

const FEATURES = [
  {
    icon: Camera,
    title: "Document scanning",
    description:
      "Native document scanner captures the front and back of ID cards sequentially.",
  },
  {
    icon: WifiSlash,
    title: "Offline by design",
    description:
      "No network requests, no accounts, no telemetry — everything runs on-device.",
  },
  {
    icon: FlipHorizontal,
    title: "3D flip viewer",
    description:
      "Swipe or tap to flip between sides, powered by Reanimated shared values.",
  },
  {
    icon: DownloadSimple,
    title: "Save to gallery",
    description:
      "Export card images to your device's photo library any time you need them.",
  },
  {
    icon: Moon,
    title: "Light, dark & system",
    description:
      "A persisted, clean monochrome theme that quietly follows your OS.",
  },
  {
    icon: Database,
    title: "On-device database",
    description:
      "Cards, notes, and images stored locally with SQLite and Drizzle ORM.",
  },
];

const TECH_STACK = [
  { label: "Framework", value: "Expo SDK 54" },
  { label: "UI", value: "React Native 0.81, Reanimated 4, Gesture Handler 2" },
  { label: "Navigation", value: "Expo Router (file-based)" },
  { label: "Database", value: "SQLite via expo-sqlite + Drizzle ORM" },
  { label: "Fonts", value: "JetBrains Mono" },
  { label: "Language", value: "TypeScript, strict mode" },
];

const PRIVACY_POINTS = [
  {
    icon: Lock,
    title: "Stored locally",
    description: "Documents and images live exclusively on your device.",
  },
  {
    icon: ShieldCheck,
    title: "No servers, ever",
    description: "Nothing is sent to any server, API, or third party.",
  },
  {
    icon: EyeSlash,
    title: "No tracking",
    description: "No accounts, no telemetry, no analytics baked in.",
  },
];

const CONTRIBUTING_STEPS = [
  "Fork the repository",
  "Create a feature branch",
  "Commit your changes",
  "Push to the branch",
  "Open a Pull Request",
];

const STATS = [
  { value: "100%", label: "Offline" },
  { value: "0", label: "Trackers" },
  { value: "MIT", label: "License" },
  { value: "Android", label: "Primary platform" },
];

function SectionMarker({ index, label }: { index: string; label: string }) {
  return (
    <p className="section-marker">
      {index} — {label}
    </p>
  );
}

function App() {
  return (
    <>
      <SiteHeader />

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div
            className="halftone halftone-fade-radial absolute -top-24 right-[-8rem] h-[28rem] w-[28rem]"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-[42rem] px-4 pt-32 pb-20 text-center sm:px-6 sm:pt-40 sm:pb-28">
            <img
              src={icon}
              alt="IVault app icon"
              className="animate-rise mx-auto size-16 rounded-2xl border border-border shadow-[0_8px_22px_-14px_rgb(0_0_0_/_0.25)]"
              style={{ animationDelay: "0ms" }}
            />

            <Badge
              variant={"secondary"}
              className="animate-rise mono-label mt-5"
              style={{ animationDelay: "50ms" }}
            >
              Open Source · MIT Licensed
            </Badge>

            <h1
              className="animate-rise font-display mt-5 text-[3rem] leading-none font-semibold uppercase tracking-tight sm:text-[4rem]"
              style={{ animationDelay: "120ms" }}
            >
              IVault
            </h1>

            <p
              className="animate-rise mt-6 text-base text-gray-500 sm:text-lg"
              style={{ animationDelay: "190ms" }}
            >
              A private, offline-first vault to scan, store, and view your
              important documents. No accounts. No cloud. No tracking —
              everything stays on your device.
            </p>

            <div
              className="animate-rise mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
              style={{ animationDelay: "260ms" }}
            >
              <Button
                render={<a href={REPO_URL} target="_blank" rel="noreferrer" />}
                nativeButton={false}
                size="lg"
                className="h-10 gap-2 rounded-md px-5 text-[13px]"
              >
                <GithubLogo size={16} weight="bold" />
                View on GitHub
              </Button>
              <a
                href={`${REPO_URL}#readme`}
                target="_blank"
                rel="noreferrer"
                className="link-underline font-mono text-[13px] text-gray-500 hover:text-foreground"
              >
                Read the docs ↗
              </a>
            </div>

            <div
              className="animate-rise mt-10 flex flex-wrap items-center justify-center gap-2"
              style={{ animationDelay: "330ms" }}
            >
              {[
                "MIT License",
                "Expo + React Native",
                "Android First",
                "No Telemetry",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-gray-300 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wide text-gray-500"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto grid max-w-[56rem] grid-cols-4 divide-x divide-border border-t border-border">
            {STATS.map((stat) => (
              <div key={stat.label} className="px-2 py-6 text-center sm:px-4">
                <p className="font-display text-xl leading-tight font-semibold sm:text-2xl">
                  {stat.value}
                </p>
                <p className="mono-label mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-16 sm:py-24">
          <div className="mx-auto max-w-[56rem] px-4 sm:px-6">
            <SectionMarker index="01" label="features" />
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              everything your documents need
            </h2>
            <p className="mt-3 max-w-md text-sm text-gray-500">
              Scan, review, and revisit your documents through a small, focused
              feature set — nothing more than it needs to be.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {FEATURES.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="bg-background p-6 transition-colors duration-200 hover:bg-gray-50"
                >
                  <Icon size={20} weight="regular" className="text-gray-400" />
                  <h3 className="mt-4 text-sm font-semibold">{title}</h3>
                  <p className="mt-1.5 text-sm text-gray-500">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech stack */}
        <section
          id="tech-stack"
          className="border-t border-border py-16 sm:py-24"
        >
          <div className="mx-auto max-w-[42rem] px-4 sm:px-6">
            <SectionMarker index="02" label="tech stack" />
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              built on a modern, open stack
            </h2>
            <p className="mt-3 max-w-md text-sm text-gray-500">
              No proprietary services, no vendor lock-in — just Expo, React
              Native, and a local database.
            </p>

            <dl className="mt-10 divide-y divide-border border-t border-border">
              {TECH_STACK.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-[7rem_1fr] gap-4 py-4 sm:grid-cols-[9rem_1fr]"
                >
                  <dt className="mono-label pt-0.5">{row.label}</dt>
                  <dd className="text-sm">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Privacy */}
        <section id="privacy" className="border-t border-border py-16 sm:py-24">
          <div className="mx-auto max-w-[56rem] px-4 sm:px-6">
            <SectionMarker index="03" label="privacy" />
            <div className="mt-2 flex flex-wrap items-center gap-4">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                your documents never leave your device
              </h2>
              <span className="rounded-full bg-ink px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-wide text-background">
                100% Offline
              </span>
            </div>
            <p className="mt-3 max-w-md text-sm text-gray-500">
              IVault is built as an offline-first application, from the ground
              up.
            </p>

            <div className="mt-10 grid grid-cols-1 divide-y divide-border border-t border-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {PRIVACY_POINTS.map(({ icon: Icon, title, description }) => (
                <div key={title} className="py-6 sm:px-8 sm:py-4">
                  <Icon size={20} weight="regular" className="text-gray-400" />
                  <h3 className="mt-4 text-sm font-semibold">{title}</h3>
                  <p className="mt-1.5 text-sm text-gray-500">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Get started */}
        <section
          id="get-started"
          className="relative overflow-hidden border-t border-border py-16 sm:py-24"
        >
          <div
            className="halftone halftone-fade-radial absolute bottom-[-10rem] left-[-8rem] hidden h-[24rem] w-[24rem] sm:block"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-[56rem] px-4 sm:px-6">
            <SectionMarker index="04" label="get started" />
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              run it, fork it, ship it
            </h2>
            <p className="mt-3 max-w-md text-sm text-gray-500">
              IVault is MIT-licensed, developed Android-first, and welcomes
              contributions of any size.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="rounded-xl border border-border bg-gray-50 p-6">
                <p className="mono-label flex items-center gap-1.5">
                  <AndroidLogo size={12} />
                  clone &amp; run on android
                </p>
                <pre className="mt-4 overflow-x-auto font-mono text-[13px] leading-relaxed text-foreground">
                  <code>
                    {`git clone ${REPO_URL}.git
cd ivault
npm install
npx expo run:android`}
                  </code>
                </pre>
                <p className="mt-4 text-sm text-gray-500">
                  This builds a development client with the native scanner
                  included. Just exploring the UI?{" "}
                  <code className="font-mono">npm start</code> with Expo Go
                  works too — scanning just won't be available.
                </p>
              </div>

              <div className="rounded-xl border border-border p-6">
                <p className="mono-label">contribute</p>
                <ol className="mt-4 space-y-3">
                  {CONTRIBUTING_STEPS.map((step, i) => (
                    <li key={step} className="flex items-start gap-3 text-sm">
                      <span className="font-mono text-[11px] text-gray-400">
                        0{i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
                <a
                  href={`${REPO_URL}/pulls`}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline mt-6 inline-flex items-center gap-1 font-mono text-[13px] text-gray-500 hover:text-foreground"
                >
                  <Fingerprint size={14} />
                  Open a pull request ↗
                </a>
              </div>
            </div>

            <div className="mt-8 rounded-lg border border-gray-300 px-4 py-3">
              <p className="mono-label flex items-center gap-1.5">
                <Warning size={12} />
                good to know
              </p>
              <ul className="mt-2 space-y-1.5 text-sm text-gray-600">
                <li>
                  IVault is built and tested on Android first. iOS isn't
                  officially supported yet — fork the repo and run{" "}
                  <code className="font-mono text-[12px]">
                    npx expo run:ios
                  </code>{" "}
                  on macOS with Xcode to try it there.
                </li>
                <li>
                  The document scanner relies on a native module, so it only
                  works inside a development build — it won't work in Expo Go.
                </li>
              </ul>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              {[
                "Node.js ≥ 18",
                "Expo CLI",
                "Android Studio",
                "Xcode (iOS forks)",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-gray-300 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wide text-gray-500"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-2 text-sm text-gray-500">
              <Check size={16} className="text-gray-400" />
              Licensed under MIT — use it, fork it, build on it.
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

export default App;
