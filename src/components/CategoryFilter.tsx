import { motion } from "framer-motion";
import { Category, categories } from "@/data/products";

interface CategoryFilterProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

const CategoryFilter = ({ activeCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map((cat) => (
        <motion.button
          key={cat}
          onClick={() => onCategoryChange(cat)}
          whileTap={{ scale: 0.97 }}
          className={`relative whitespace-nowrap px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-300 ${
            activeCategory === cat
              ? "bg-primary text-primary-foreground shadow-card"
              : "bg-secondary text-muted-foreground hover:text-foreground"
          }`}
        >
          {cat}
        </motion.button>
      ))}
    </div>
  );
};

export default CategoryFilter;
