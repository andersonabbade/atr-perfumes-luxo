import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { getGeneralWhatsAppLink } from "@/data/products";

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href={getGeneralWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl transition-shadow duration-300"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle size={26} />
    </motion.a>
  );
};

export default FloatingWhatsApp;
