import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Início", path: "/" },
  { label: "Nosso Catálogo", path: "/perfumes" },
  { label: "Contato", path: "/contato" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="container flex items-center justify-between py-4">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-foreground"
          aria-label="Menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <Link to="/" className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
          <h1 className="font-serif text-xl md:text-2xl font-medium tracking-tight text-foreground">
            ATR <span className="text-primary">Imports</span>
          </h1>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300 ${
                location.pathname === link.path
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Spacer for mobile centering */}
        <div className="w-5 md:hidden" />
      </div>

      {isMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="md:hidden border-t border-border bg-background px-6 pb-6 pt-4"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors text-left ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.nav>
      )}
    </header>
  );
};

export default Header;
