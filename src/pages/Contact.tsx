import { motion } from "framer-motion";
import { MessageCircle, MapPin, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { getGeneralWhatsAppLink } from "@/data/products";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="container py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3 block">
            Contato
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Fale Conosco
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Entre em contato pelo WhatsApp para tirar dúvidas, consultar disponibilidade ou fazer seu pedido.
          </p>
        </div>

        <div className="max-w-lg mx-auto space-y-8">
          <motion.a
            href={getGeneralWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-4 p-6 rounded-lg bg-secondary shadow-card hover:shadow-card-hover transition-shadow duration-300"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366]/10 shrink-0">
              <MessageCircle size={22} className="text-[#25D366]" />
            </div>
            <div>
              <h3 className="font-serif text-lg text-foreground mb-1">WhatsApp</h3>
              <p className="text-sm text-muted-foreground">+55 (11) 99999-9999</p>
            </div>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-4 p-6 rounded-lg bg-secondary shadow-card"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 shrink-0">
              <Clock size={22} className="text-primary" />
            </div>
            <div>
              <h3 className="font-serif text-lg text-foreground mb-1">Horário de Atendimento</h3>
              <p className="text-sm text-muted-foreground">Seg a Sex: 9h às 18h · Sáb: 9h às 13h</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-4 p-6 rounded-lg bg-secondary shadow-card"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 shrink-0">
              <MapPin size={22} className="text-primary" />
            </div>
            <div>
              <h3 className="font-serif text-lg text-foreground mb-1">Localização</h3>
              <p className="text-sm text-muted-foreground">Entrega para todo o Brasil</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Contact;
