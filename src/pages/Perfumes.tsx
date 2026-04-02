import { useState, useMemo } from "react";
import Header from "@/components/Header";
import CategoryFilter from "@/components/CategoryFilter";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { products, Category } from "@/data/products";

const Perfumes = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("Todos");

  const filteredProducts = useMemo(() => {
    if (activeCategory === "Todos") return products;
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="container py-16 md:py-24">
        <div className="mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3 block">
            Nosso Catálogo
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
            Fragrâncias Selecionadas
          </h2>
          <CategoryFilter
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground">Nenhum produto encontrado nesta categoria.</p>
          </div>
        )}
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Perfumes;
