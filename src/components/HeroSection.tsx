import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logoAtr from "@/assets/logo-atr.jpeg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-foreground">
      <div className="absolute inset-0">
        <img
          src={logoAtr}
          alt="Perfume de luxo"
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      <div className="container relative z-10 py-24 md:py-36 lg:py-44">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          <span className="text-primary text-xs uppercase tracking-[0.3em] font-semibold mb-4 block">
            Coleção Exclusiva
          </span>
          <h2
            className="font-serif text-primary-foreground leading-[1.1] mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            A essência do luxo internacional, selecionada para você.
          </h2>
          <p className="text-primary-foreground/70 text-base md:text-lg max-w-md leading-relaxed mb-8">
            Perfumes importados das melhores casas de fragrância do mundo, com curadoria especial ATR Imports.
          </p>
          <Link
            to="/perfumes"
            className="inline-block bg-primary text-primary-foreground px-8 py-3.5 rounded-md text-xs font-bold uppercase tracking-[0.2em] transition-opacity duration-300 hover:opacity-90"
          >
            Explorar Catálogo
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
