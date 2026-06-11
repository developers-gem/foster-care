import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const platformLinks = [
  { label: "Platform Features", href: "/features" },
  { label: "Care Models", href: "/care-models" },
];

const solutionLinks = [
  { label: "For Agencies", href: "/for-agencies" },
  { label: "Family Journey", href: "/family-journey" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-base">HP</span>
          </div>
          <span className="font-display text-xl font-bold text-foreground tracking-tight">Habitat Pilot</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          <Link
            to="/"
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
              location.pathname === "/" ? "text-primary" : "text-foreground hover:text-primary"
            }`}
          >
            Home
          </Link>

          {/* Platform Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("platform")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary rounded-lg transition-colors">
              Platform <ChevronDown size={14} className={`transition-transform ${openDropdown === "platform" ? "rotate-180" : ""}`} />
            </button>
            {openDropdown === "platform" && (
              <div className="absolute top-full left-0 mt-1 w-56 bg-background border border-border rounded-xl shadow-xl p-2 animate-fade-up">
                {platformLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`block px-4 py-2.5 text-sm rounded-lg transition-colors ${
                      location.pathname === link.href
                        ? "text-primary bg-primary/5"
                        : "text-foreground hover:text-primary hover:bg-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Solutions Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("solutions")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary rounded-lg transition-colors">
              Solutions <ChevronDown size={14} className={`transition-transform ${openDropdown === "solutions" ? "rotate-180" : ""}`} />
            </button>
            {openDropdown === "solutions" && (
              <div className="absolute top-full left-0 mt-1 w-56 bg-background border border-border rounded-xl shadow-xl p-2 animate-fade-up">
                {solutionLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`block px-4 py-2.5 text-sm rounded-lg transition-colors ${
                      location.pathname === link.href
                        ? "text-primary bg-primary/5"
                        : "text-foreground hover:text-primary hover:bg-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <a href="/#pricing" className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary rounded-lg transition-colors">
            Pricing
          </a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
 <a href="https://app.habitatpilots.com">
  <Button variant="ghost" size="sm">
    Log In
  </Button>
</a>
          <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 rounded-full">
            Get a demo
          </Button>
          <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/5 font-semibold px-6 rounded-full">
            Start free
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-b border-border px-4 py-4 space-y-1 animate-fade-up">
          <Link to="/" className="block px-4 py-2.5 text-sm font-medium text-foreground hover:text-primary rounded-lg" onClick={() => setMobileOpen(false)}>Home</Link>
          <p className="px-4 pt-3 pb-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Platform</p>
          {platformLinks.map((link) => (
            <Link key={link.href} to={link.href} className="block px-4 py-2.5 text-sm font-medium text-foreground hover:text-primary rounded-lg" onClick={() => setMobileOpen(false)}>
              {link.label}
            </Link>
          ))}
          <p className="px-4 pt-3 pb-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Solutions</p>
          {solutionLinks.map((link) => (
            <Link key={link.href} to={link.href} className="block px-4 py-2.5 text-sm font-medium text-foreground hover:text-primary rounded-lg" onClick={() => setMobileOpen(false)}>
              {link.label}
            </Link>
          ))}
          <a href="/#pricing" className="block px-4 py-2.5 text-sm font-medium text-foreground hover:text-primary rounded-lg" onClick={() => setMobileOpen(false)}>Pricing</a>
          <div className="flex gap-3 pt-3 px-4">
            <Button size="sm" className="flex-1 rounded-full">Get a demo</Button>
            <Button variant="outline" size="sm" className="flex-1 rounded-full border-primary text-primary">Start free</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
