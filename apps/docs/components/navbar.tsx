import Link from "next/link";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-bg-surface/80 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="st-heading-sm text-text">
          Stera Icons
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/docs"
            className="st-body-md text-text-secondary hover:text-text transition-colors"
          >
            Docs
          </Link>
          <a
            href="https://github.com/hauntedjpeg/Stera-Icons"
            target="_blank"
            rel="noopener noreferrer"
            className="st-body-md text-text-secondary hover:text-text transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
