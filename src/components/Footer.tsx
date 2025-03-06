import { NavLink } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white border-t border-white/5">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <span className="text-itek-400">I-TEK</span>
              <span className="ml-1 text-white/80">Solutions Ltd</span>
            </h3>
            <p className="text-slate-300 max-w-md">
              A complete hardware and software company specializing in
              state-of-the-art surveillance devices and intelligence solutions.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="text-slate-400 hover:text-itek-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-itek-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-itek-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <NavLink
                  to="/"
                  className="text-slate-300 hover:text-itek-400 transition-colors"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="text-slate-300 hover:text-itek-400 transition-colors"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className="text-slate-300 hover:text-itek-400 transition-colors"
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="text-slate-300 hover:text-itek-400 transition-colors"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-itek-400 shrink-0 mt-1" />
                <span className="text-slate-300">
                  🇳🇬 Lord Lugard street Abuja Nigeria <br /> 🇬🇧 52 Woodbank Road Kent
                  BR1 5HH
                </span>
              </li>

              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-itek-400 shrink-0" />
                <a
                  href="tel:+441234567890"
                  className="text-slate-300 hover:text-itek-400 transition-colors"
                >
                  +447545375860, +23409078532121, +234 816 989 4950,
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-itek-400 shrink-0" />
                <a
                  href="mailto:info@i-tek.com"
                  className="text-slate-300 hover:text-itek-400 transition-colors"
                >
                  info@i-tek.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            &copy; {currentYear} I-TEK Information Solutions Ltd. All rights
            reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-slate-400 hover:text-itek-400 text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-itek-400 text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
