import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-base">R</span>
            </div>
            <span className="font-display text-xl font-bold text-secondary-foreground">ResiPilot</span>
          </div>
          <p className="text-secondary-foreground/60 text-sm leading-relaxed">
            Empowering foster care agencies with intelligent tools for better outcomes.
          </p>
        </div>

        {/* Platform */}
        <div>
          <h4 className="font-sans text-sm font-semibold text-secondary-foreground mb-4 uppercase tracking-wider">Platform</h4>
          <ul className="space-y-2.5">
            <li><Link to="/features" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">Features</Link></li>
            <li><Link to="/care-models" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">Care Models</Link></li>
            <li><a href="/#pricing" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">Pricing</a></li>
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h4 className="font-sans text-sm font-semibold text-secondary-foreground mb-4 uppercase tracking-wider">Solutions</h4>
          <ul className="space-y-2.5">
            <li><Link to="/for-agencies" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">For Agencies</Link></li>
            <li><Link to="/family-journey" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">Family Journey</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-sans text-sm font-semibold text-secondary-foreground mb-4 uppercase tracking-wider">Company</h4>
          <ul className="space-y-2.5">
            <li><a href="#" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">About Us</a></li>
            <li><a href="#" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">Contact</a></li>
            <li><a href="#" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div className="border-t border-secondary-foreground/10">
      <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
        <p className="text-secondary-foreground/40 text-xs">
          © {new Date().getFullYear()} ResiPilot. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-secondary-foreground/40 hover:text-primary text-xs transition-colors">Terms</a>
          <a href="#" className="text-secondary-foreground/40 hover:text-primary text-xs transition-colors">Privacy</a>
          <a href="#" className="text-secondary-foreground/40 hover:text-primary text-xs transition-colors">Security</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
