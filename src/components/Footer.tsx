const links = [
  { label: "Path", href: "#path" },
  { label: "Why", href: "#why" },
  { label: "How It Works", href: "#how" },
  { label: "Vision", href: "#vision" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => (
  <footer className="border-t border-border bg-secondary">
    <div className="container flex flex-col items-center gap-6 py-10 md:flex-row md:justify-between">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Cenderro. All rights reserved.
      </p>
      <nav className="flex flex-wrap items-center justify-center gap-6" aria-label="Footer navigation">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            {link.label}
          </a>
        ))}
      </nav>
      <a href="mailto:hello@cenderro.com" className="text-xs text-muted-foreground hover:text-foreground">
        hello@cenderro.com
      </a>
    </div>
  </footer>
);

export default Footer;
