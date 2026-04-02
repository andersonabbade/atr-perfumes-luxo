import { motion } from "framer-motion";
import { ShieldCheck, Truck, MessageCircle } from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Perfumes Originais",
    description: "100% autênticos com garantia de procedência internacional.",
  },
  {
    icon: Truck,
    title: "Entrega Rápida",
    description: "Envio para todo o Brasil com rastreamento completo.",
  },
  {
    icon: MessageCircle,
    title: "Atendimento via WhatsApp",
    description: "Tire suas dúvidas e faça seu pedido diretamente pelo WhatsApp.",
  },
];

const Benefits = () => {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3 block">
            Por que escolher a ATR?
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            Nossos Diferenciais
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-center flex flex-col items-center gap-4 p-8"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <benefit.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-serif text-xl text-foreground">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
