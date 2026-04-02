import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Product, getWhatsAppLink, formatPrice } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.04,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex flex-col gap-4"
    >
      <div className="aspect-[3/4] overflow-hidden rounded-lg bg-secondary shadow-card transition-shadow duration-300 group-hover:shadow-card-hover">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          style={{ outline: "1px solid rgba(0,0,0,0.05)", outlineOffset: "-1px" }}
        />
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-[10px] uppercase tracking-widest text-primary font-semibold">
          {product.category}
        </span>
        <h3 className="font-serif text-lg text-foreground leading-tight" style={{ textWrap: "balance" }}>
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {product.description}
        </p>
      </div>

      <div className="flex items-center justify-between pt-1 mt-auto">
        {product.price ? (
          <span className="font-sans font-bold text-lg text-foreground tabular-nums">
            {formatPrice(product.price)}
          </span>
        ) : (
          <span className="text-sm text-muted-foreground italic">Consulte o preço</span>
        )}
        <motion.a
          href={getWhatsAppLink(product)}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider transition-opacity duration-300 hover:opacity-90"
        >
          <MessageCircle size={14} />
          Comprar
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ProductCard;
