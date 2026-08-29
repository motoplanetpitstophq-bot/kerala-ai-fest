import { Link } from "@tanstack/react-router";
import { EVENT, NAV_LINKS } from "@/data/nalai";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <p className="font-display text-3xl font-extrabold text-brand">NALAI</p>
          <p className="mt-1 text-sm font-medium">{EVENT.tagline}</p>
          <p className="mt-4 text-sm text-muted-foreground">
            {EVENT.date}
            <br />
            {EVENT.venue}
          </p>
        </div>
        <div>
          <p className="eyebrow">Explore</p>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-muted-foreground hover:text-brand">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow">Led by</p>
          <p className="mt-4 text-sm font-semibold">{EVENT.lead}</p>
          <p className="mt-2 text-sm text-muted-foreground">
            In collaboration with Government of Kerala, Kerala IT Mission and ecosystem
            participants.
          </p>
          <Link
            to="/register"
            className="mt-5 inline-flex items-center justify-center rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90"
          >
            REGISTER NOW
          </Link>
        </div>
      </div>
      <div className="border-t border-border/70 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} NALAI · An AI festival led by {EVENT.lead}
      </div>
    </footer>
  );
}
