import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const featured = products.filter((p) => p.featured);

  return (
    <section className="container py-16 md:py-24">
      <div className="mb-12 text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3 block">
          Destaques
        </span>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
          Perfumes em Destaque
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Nossa seleção especial das fragrâncias mais desejadas do momento.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {featured.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center mt-12"
      >
        <Link
          to="/perfumes"
          className="inline-block bg-primary text-primary-foreground px-8 py-3.5 rounded-md text-xs font-bold uppercase tracking-[0.2em] transition-opacity duration-300 hover:opacity-90"
        >
          Ver Todos os Perfumes
        </Link>
      </motion.div>
    </section>
  );
};

export default FeaturedProducts;
