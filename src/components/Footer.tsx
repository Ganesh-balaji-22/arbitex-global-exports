import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img
              src="/assets/logo/logo.png"
              alt="Arbitex Global Exports"
              className="h-16 w-auto mb-4"
            />
            <p className="text-muted-foreground text-sm">
              DGFT | APEDA | MSME certified exporters — global compliance & transparent documentation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary text-sm">Home</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary text-sm">About Us</Link></li>
              <li><Link to="/products" className="text-muted-foreground hover:text-primary text-sm">Products</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary text-sm">Services</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>Import/Export Brokerage</li>
              <li>Customs Clearance</li>
              <li>Freight Forwarding</li>
              <li>Quality Assurance</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>29/30, Diwan Bahadur Rd, R.S. Puram, Coimbatore, Tamil Nadu 641002</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Phone size={16} />
                <a href="tel:+916374244869" className="hover:text-primary">+91 6374244869</a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Mail size={16} />
                <a href="mailto:Arbitexglobal@gmail.com" className="hover:text-primary">Arbitexglobal@gmail.com</a>
              </li>
              <li className="flex items-center gap-3 mt-4">
                <a
                  href="https://www.linkedin.com/in/ganeshbalaji22/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://www.instagram.com/ajay_arulkumaran?igsh=MWt5cnFrMTN3bzM2ag=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Arbitex Global Exports. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
