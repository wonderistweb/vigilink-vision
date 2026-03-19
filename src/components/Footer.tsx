import { Link } from "react-router-dom";
import logo from "@/assets/vigillink-logo.svg";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img src={logo} alt="Vigillink Security Group" className="h-8" />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Elite physical security for mission-critical infrastructure. Protecting the hardware that powers the future.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm tracking-wider text-foreground mb-4">NAVIGATION</h4>
            <div className="flex flex-col gap-2">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Services" },
                { to: "/careers", label: "Careers" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm tracking-wider text-foreground mb-4">SERVICES</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span>AI Data Center Security</span>
              <span>Executive Protection</span>
              <span>Critical Infrastructure</span>
              <span>Event Security</span>
              <span>Surveillance & Monitoring</span>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm tracking-wider text-foreground mb-4">CONTACT</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span>info@vigillink.com</span>
              <span>(716) 555-0100</span>
              <span>United States — National Operations</span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Vigillink Security Group. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Licensed & Insured — National Operations
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
