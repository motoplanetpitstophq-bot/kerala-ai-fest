import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/data/nalai";
import { Button } from "@/components/ui/button";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link to="/" className="flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="font-display text-2xl font-extrabold tracking-tight text-brand">
            NALAI
          </span>
          <span className="hidden text-xs font-medium text-muted-foreground sm:inline">
            Tomorrow&rsquo;s Keralam
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              activeProps={{ className: "text-brand" }}
              className="text-sm font-medium text-foreground/75 transition-colors hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="sm" className="rounded-full px-5">
            <Link to="/register">Register</Link>
          </Button>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <Button asChild size="sm" className="rounded-full px-4">
            <Link to="/register">Register</Link>
          </Button>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border text-foreground"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background lg:hidden">
          <ul className="mx-auto grid w-full max-w-6xl gap-1 px-5 py-4 sm:px-8">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: link.to === "/" }}
                  activeProps={{ className: "text-brand" }}
                  className="block rounded-lg px-2 py-3 text-base font-medium text-foreground/80"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
