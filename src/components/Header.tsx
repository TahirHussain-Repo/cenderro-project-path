import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import CenderroLogo from "./CenderroLogo";

const navLinks = [
  { label: "Path", href: "#path" },
  { label: "Why", href: "#why" },
  { label: "How It Works", href: "#how" },
  { label: "Vision", href: "#vision" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-display text-xl font-bold tracking-tight text-foreground">
          <CenderroLogo size={28} />
          Cenderro
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <Button asChild variant="outline" size="sm">
            <a href="/login">Log In</a>
          </Button>
          <Button asChild size="sm">
            <a href="#contact">Join the Journey</a>
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-border bg-background px-6 pb-6 pt-4 md:hidden" aria-label="Mobile navigation">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button asChild variant="outline" size="sm" className="w-full">
              <a href="/login" onClick={() => setOpen(false)}>Log In</a>
            </Button>
            <Button asChild size="sm" className="w-full">
              <a href="#contact" onClick={() => setOpen(false)}>Join the Journey</a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
