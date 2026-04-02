import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { getGeneralWhatsAppLink } from "@/data/products";

const Footer = () => {
  return (
    <footer className="bg-secondary mt-24">
      <div className="container py-16">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          <div>
            <Link to="/">
              <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                ATR <span className="text-primary">Imports</span>
              </h3>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Perfumes importados originais com garantia de autenticidade. Entrega para todo o Brasil.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">
              Navegação
            </span>
            <Link to="/" className="text-sm text-foreground/70 hover:text-primary transition-colors">
              Início
            </Link>
            <Link to="/perfumes" className="text-sm text-foreground/70 hover:text-primary transition-colors">
              Perfumes
            </Link>
            <Link to="/contato" className="text-sm text-foreground/70 hover:text-primary transition-colors">
              Contato
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">
              Contato
            </span>
            <a
              href={getGeneralWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors"
            >
              <MessageCircle size={14} />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} ATR Imports. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
