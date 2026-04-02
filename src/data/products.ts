import perfumeFemPureXs from "@/assets/PureXs.png";
import perfumeFem212Nyc from "@/assets/212Nyc.pnj.webp";
import perfumeFem212Sexy from "@/assets/212Sexy.pnj.webp";
import perfumeFem212Vip from "@/assets/212Vip.pnj.webp";
import perfumeFem212VipRose from "@/assets/perfume-fem-212-vip-rose.jpg";
import perfumeFemCh from "@/assets/CH.pnj.webp";
import perfumeFemOlympea from "@/assets/Olympea.webp";
import perfumeFemMoschinoToy2 from "@/assets/Moschino.jpg";
import perfumeFemMillionGold from "@/assets/MillionGold.avif";
import perfumeFemLightBlue from "@/assets/Lightblue.webp";
import perfumeFemLightBlueIntense from "@/assets/LightBlue-Intense.webp";
import perfumeFemScandal from "@/assets/Scandal.webp";
import perfumeMas212MenHeroes from "@/assets/212MenHeroes.webp";
import perfumeFem212heroes from "@/assets/perfume-fem-212-heroes.jpg"
import perfumeMas212Men from "@/assets/212Men.avif"
import perfumeMas212SexyMen from "@/assets/212SexyMen.webp"
import perfumeMasAnimaleMen from "@/assets/AnimaleMen.webp"
import perfumeMasBlackXS from "@/assets/BlackXS.avif"
import perFumeMasBadBoy from "@/assets/BadBoy.png"
import perFumeMas212VipMen from "@/assets/212VipMen.webp"
import perFumeMasAllureSport from "@/assets/AllureSport2.webp"






export type Category =  "Todos" | "Masculino" | "Feminino" | "Árabes" | "Victoria's Secret";

export interface Product {
  id: string;
  name: string;
  description: string;
  price?: number;
  category: Category;
  image: string;
  featured?: boolean;
}

export const categories: Category[] = [

  "Masculino",
  "Feminino",
  "Árabes",
  "Victoria's Secret",
];

export const products: Product[] = [
  {

    id: "1",
    name: "Scandal Le Parfum",
    description: "Eau de Parfum feminino 80ml. Ousadia e sedução com gardênia, mel e caramelo.",
    price: 929.90,
    category: "Feminino",
    image: perfumeFemScandal,


  },


  {


    id: "2",
    name: "CH Fem",
    description: "Eau de Parfum feminino 100ml. O clássico Carolina Herrera com notas de bergamota e jasmim.",
    price: 799.90,
    category: "Feminino",
    image: perfumeFemCh,
    featured: false,
    
  },
  {
   

    id: "3",
    name: "Light Blue",
    description: "Eau de Toilette feminino 100ml. Frescor mediterrâneo com cedro, maçã e jasmim.",
    price: 879.90,
    category: "Feminino",
    image: perfumeFemLightBlue,

    
  },
  {
    id: "4",
    name: "212 VIP Fem",
    description: "Eau de Parfum feminino 50ml. Exclusividade e glamour para mulheres que ditam tendências.",
    price: 619.90,
    category: "Feminino",
    image: perfumeFem212Vip,
    featured: true,
  },
  {
    id: "5",
    name: "212 VIP Rosé",
    description: "Eau de Parfum feminino 80ml. Uma fragrância rosé vibrante e festiva, cheia de atitude.",
    price: 789.90,
    category: "Feminino",
    image: perfumeFem212VipRose,
  },
  {
    

    id: "6",
    name: "Pure XS Fem",
    description: "Eau de Parfum feminino 80ml. Intensidade pura com popcorn, baunilha e flor de laranjeira.",
    price: 679.90,
    category: "Feminino",
    image: perfumeFemPureXs,

  },
  {
    

    id: "7",
    name: "212 NYC Fem",
    description: "Eau de Toilette feminino 100ml. O espírito vibrante de Nova York em uma fragrância fresca e sofisticada.",
    price: 749.90,
    category: "Feminino",
    image: perfumeFem212Nyc,
    featured: true,


  },
  {
    id: "8",
    name: "Moschino Toy 2 Parfum",
    description: "Parfum feminino 100ml. Divertida e sofisticada com notas de maçã, magnólia e almíscar.",
    price: 589.90,
    category: "Feminino",
    image: perfumeFemMoschinoToy2,
  },
  {
    id: "9",
    name: "Million Gold For Her",
    description: "Eau de Parfum feminino 90ml. Luxo dourado com notas de flor de laranjeira, jasmim e mel.",
    price: 919.90,
    category: "Feminino",
    image: perfumeFemMillionGold,
  },
  {
    
    id: "10",
    name: "212 Sexy",
    description: "Eau de Parfum feminino 60ml. Sensualidade e elegância em notas florais e amadeiradas.",
    price: 609.90,
    category: "Feminino",
    image: perfumeFem212Sexy,

  },
  {
    id: "11",
    name: "Light Blue Eau Intense",
    description: "Eau de Parfum feminino 100ml. Uma versão mais intensa e envolvente do clássico Light Blue.",
    price: 964.90,
    category: "Feminino",
    image: perfumeFemLightBlueIntense,
  },
  {
    


    id: "12",
    name: "212 Heroes",
    description: "Eau de Parfum feminino 80ml. Uma fragrância moderna e poderosa com personalidade marcante.",
    price: 729.90,
    category: "Feminino",
    image: perfumeFem212heroes,
    featured: true,


  },
  {
   
    id: "13",
    name: "Olympéa",
    description: "Eau de Parfum feminino 80ml. Uma fragrância divina com sal marinho, baunilha e cashmere.",
    price: 789.90,
    category: "Feminino",
    image: perfumeFemOlympea,


  },

  {
    id: "14",
    name: "teste novo",
    description: "Eau de Parfum feminino 80ml. Intensidade pura com popcorn, baunilha e flor de laranjeira.",
    price: 679.90,
    category: "Feminino",
    image: perfumeFemPureXs,
    featured: true,
  },

  {
    id: "15",
    name: "teste novo",
    description: "Eau de Parfum feminino 80ml. Intensidade pura com popcorn, baunilha e flor de laranjeira.",
    price: 679.90,
    category: "Feminino",
    image: perfumeFemPureXs,
    featured: true,
  },

  {
    id: "16",
    name: "teste novo",
    description: "Eau de Parfum feminino 80ml. Intensidade pura com popcorn, baunilha e flor de laranjeira.",
    price: 679.90,
    category: "Feminino",
    image: perfumeFemPureXs,
    featured: true,
  },

  {
    id: "17",
    name: "teste novo",
    description: "Eau de Parfum feminino 80ml. Intensidade pura com popcorn, baunilha e flor de laranjeira.",
    price: 679.90,
    category: "Feminino",
    image: perfumeFemPureXs,
    featured: true,
  },

  {
    id: "18",
    name: "teste novo",
    description: "Eau de Parfum feminino 80ml. Intensidade pura com popcorn, baunilha e flor de laranjeira.",
    price: 679.90,
    category: "Feminino",
    image: perfumeFemPureXs,
    featured: true,
  },

  {
    id: "19",
    name: "teste novo",
    description: "Eau de Parfum feminino 80ml. Intensidade pura com popcorn, baunilha e flor de laranjeira.",
    price: 679.90,
    category: "Feminino",
    image: perfumeFemPureXs,
    featured: true,
  },

  {
    id: "20",
    name: "teste novo",
    description: "Eau de Parfum feminino 80ml. Intensidade pura com popcorn, baunilha e flor de laranjeira.",
    price: 679.90,
    category: "Feminino",
    image: perfumeFemPureXs,
    featured: true,
  },

  {
    id: "21",
    name: "teste novo",
    description: "Eau de Parfum feminino 80ml. Intensidade pura com popcorn, baunilha e flor de laranjeira.",
    price: 679.90,
    category: "Feminino",
    image: perfumeFemPureXs,
    featured: true,
  },

  {
    id: "22",
    name: "teste novo",
    description: "Eau de Parfum feminino 80ml. Intensidade pura com popcorn, baunilha e flor de laranjeira.",
    price: 679.90,
    category: "Feminino",
    image: perfumeFemPureXs,
    featured: true,
  },

  {
    id: "23",
    name: "teste novo",
    description: "Eau de Parfum feminino 80ml. Intensidade pura com popcorn, baunilha e flor de laranjeira.",
    price: 679.90,
    category: "Masculino",
    image:  perfumeMas212MenHeroes,
    featured: true,
  },

  {
    id: "24",
    name: "teste novo",
    description: "Eau de Parfum feminino 80ml. Intensidade pura com popcorn, baunilha e flor de laranjeira.",
    price: 679.90,
    category: "Masculino",
    image: perfumeMas212Men ,
    featured: true,
  },

  {
    id: "25",
    name: "212 SexyMen",
    description: "Eau de Parfum feminino 80ml. Intensidade pura com popcorn, baunilha e flor de laranjeira.",
    price: 679.90,
    category: "Masculino",
    image: perfumeMas212SexyMen,
    featured: true,
  },

  {
    id: "26",
    name: "Animale Men",
    description: "Eau de Parfum feminino 80ml. Intensidade pura com popcorn, baunilha e flor de laranjeira.",
    price: 679.90,
    category: "Masculino",
    image: perfumeMasAnimaleMen,
    featured: true,
  },

  {
    id: "27",
    name: "BlackXS",
    description: "Eau de Parfum feminino 80ml. Intensidade pura com popcorn, baunilha e flor de laranjeira.",
    price: 679.90,
    category: "Masculino",
    image: perfumeMasBlackXS,
    featured: true,
  },

  {
    id: "28",
    name: "BadBoy",
    description: "Eau de Parfum feminino 80ml. Intensidade pura com popcorn, baunilha e flor de laranjeira.",
    price: 699.90,
    category: "Masculino",
    image:perFumeMasBadBoy    ,
    featured: true,
  },

  {
    id: "29",
    name: " 212 VipMen ",
    description: "Eau de Parfum feminino 80ml. Intensidade pura com popcorn, baunilha e flor de laranjeira.",
    price: 639.90,
    category: "Masculino",
    image:  perFumeMas212VipMen,
    featured: true,
  },

  {
    id: "30",
    name: "ALLURE SPORT ",
    description: "Eau de Parfum feminino 80ml. Intensidade pura com popcorn, baunilha e flor de laranjeira.",
    price: 909.90,
    category: "Masculino",
    image: perFumeMasAllureSport ,
    featured: true,
  },

  {
    id: "31",
    name: "teste novo",
    description: "Eau de Parfum feminino 80ml. Intensidade pura com popcorn, baunilha e flor de laranjeira.",
    price: 679.90,
    category: "Masculino",
    image: perfumeFemPureXs,
    featured: true,
  },

  {
    id: "32",
    name: "teste novo",
    description: "Eau de Parfum feminino 80ml. Intensidade pura com popcorn, baunilha e flor de laranjeira.",
    price: 679.90,
    category: "Masculino",
    image: perfumeFemPureXs,
    featured: true,
  },

  {
    id: "33",
    name: "teste novo",
    description: "Eau de Parfum feminino 80ml. Intensidade pura com popcorn, baunilha e flor de laranjeira.",
    price: 679.90,
    category: "Masculino",
    image: perfumeFemPureXs,
    featured: true,
  },

  {
    id: "34",
    name: "teste novo",
    description: "Eau de Parfum feminino 80ml. Intensidade pura com popcorn, baunilha e flor de laranjeira.",
    price: 679.90,
    category: "Masculino",
    image: perfumeFemPureXs,
    featured: true,
  },

  {
    id: "35",
    name: "teste novo",
    description: "Eau de Parfum feminino 80ml. Intensidade pura com popcorn, baunilha e flor de laranjeira.",
    price: 679.90,
    category: "Masculino",
    image: perfumeFemPureXs,
    featured: true,
  },

  {
    id: "36",
    name: "teste novo",
    description: "Eau de Parfum feminino 80ml. Intensidade pura com popcorn, baunilha e flor de laranjeira.",
    price: 679.90,
    category: "Masculino",
    image: perfumeFemPureXs,
    featured: true,
  },

  {
    id: "37",
    name: "teste novo",
    description: "Eau de Parfum feminino 80ml. Intensidade pura com popcorn, baunilha e flor de laranjeira.",
    price: 679.90,
    category: "Masculino",
    image: perfumeFemPureXs,
    featured: true,
  },

  {
    id: "38",
    name: "teste novo",
    description: "Eau de Parfum feminino 80ml. Intensidade pura com popcorn, baunilha e flor de laranjeira.",
    price: 679.90,
    category: "Masculino",
    image: perfumeFemPureXs,
    featured: true,
  },

  {
    id: "39",
    name: "teste novo",
    description: "Eau de Parfum feminino 80ml. Intensidade pura com popcorn, baunilha e flor de laranjeira.",
    price: 679.90,
    category: "Masculino",
    image: perfumeFemPureXs,
    featured: true,
  },

  {
    id: "40",
    name: "teste novo",
    description: "Eau de Parfum feminino 80ml. Intensidade pura com popcorn, baunilha e flor de laranjeira.",
    price: 679.90,
    category: "Masculino",
    image: perfumeFemPureXs,
    featured: true,
  },

  {
    id: "41",
    name: "teste novo",
    description: "Eau de Parfum feminino 80ml. Intensidade pura com popcorn, baunilha e flor de laranjeira.",
    price: 679.90,
    category: "Masculino",
    image: perfumeFemPureXs,
    featured: true,
  },

  {
    id: "42",
    name: "teste novo",
    description: "Eau de Parfum feminino 80ml. Intensidade pura com popcorn, baunilha e flor de laranjeira.",
    price: 679.90,
    category: "Masculino",
    image: perfumeFemPureXs,
    featured: true,
  },

  {
    id: "43",
    name: "teste novo",
    description: "Eau de Parfum feminino 80ml. Intensidade pura com popcorn, baunilha e flor de laranjeira.",
    price: 679.90,
    category: "Masculino",
    image: perfumeFemPureXs,
    featured: true,
  },

  {
    id: "44",
    name: "teste novo",
    description: "Eau de Parfum feminino 80ml. Intensidade pura com popcorn, baunilha e flor de laranjeira.",
    price: 679.90,
    category: "Árabes",
    image: perfumeFemPureXs,
    featured: true,
  },

  {
    id: "45",
    name: "teste novo",
    description: "Eau de Parfum feminino 80ml. Intensidade pura com popcorn, baunilha e flor de laranjeira.",
    price: 679.90,
    category: "Árabes",
    image: perfumeFemPureXs,
    featured: true,
  },

  {
    id: "46",
    name: "teste novo",
    description: "Eau de Parfum feminino 80ml. Intensidade pura com popcorn, baunilha e flor de laranjeira.",
    price: 679.90,
    category: "Árabes",
    image: perfumeFemPureXs,
    featured: true,
  },

  {
    id: "47",
    name: "teste novo",
    description: "Eau de Parfum feminino 80ml. Intensidade pura com popcorn, baunilha e flor de laranjeira.",
    price: 679.90,
    category: "Árabes",
    image: perfumeFemPureXs,
    featured: true,
  },

  {
    id: "48",
    name: "teste novo",
    description: "Eau de Parfum feminino 80ml. Intensidade pura com popcorn, baunilha e flor de laranjeira.",
    price: 679.90,
    category: "Árabes",
    image: perfumeFemPureXs,
    featured: true,
  },

  {
    id: "49",
    name: "teste novo",
    description: "Eau de Parfum feminino 80ml. Intensidade pura com popcorn, baunilha e flor de laranjeira.",
    price: 679.90,
    category: "Árabes",
    image: perfumeFemPureXs,
    featured: true,
  },

  {
    id: "50",
    name: "teste novo",
    description: "Eau de Parfum feminino 80ml. Intensidade pura com popcorn, baunilha e flor de laranjeira.",
    price: 679.90,
    category: "Árabes",
    image: perfumeFemPureXs,
    featured: true,
  },

  {
    id: "51",
    name: "teste novo",
    description: "Eau de Parfum feminino 80ml. Intensidade pura com popcorn, baunilha e flor de laranjeira.",
    price: 679.90,
    category: "Árabes",
    image: perfumeFemPureXs,
    featured: true,
  },

  {
    id: "52",
    name: "teste novo",
    description: "Eau de Parfum feminino 80ml. Intensidade pura com popcorn, baunilha e flor de laranjeira.",
    price: 679.90,
    category: "Árabes",
    image: perfumeFemPureXs,
    featured: true,
  },

  {
    id: "53",
    name: "teste novo",
    description: "Eau de Parfum feminino 80ml. Intensidade pura com popcorn, baunilha e flor de laranjeira.",
    price: 679.90,
    category: "Árabes",
    image: perfumeFemPureXs,
    featured: true,
  },

  {
    id: "54",
    name: "teste novo",
    description: "Eau de Parfum feminino 80ml. Intensidade pura com popcorn, baunilha e flor de laranjeira.",
    price: 679.90,
    category: "Árabes",
    image: perfumeFemPureXs,
    featured: true,
  },

  {
    id: "55",
    name: "teste novo",
    description: "Eau de Parfum feminino 80ml. Intensidade pura com popcorn, baunilha e flor de laranjeira.",
    price: 679.90,
    category: "Árabes",
    image: perfumeFemPureXs,
    featured: true,
  },

  {
    id: "56",
    name: "teste novo",
    description: "Eau de Parfum feminino 80ml. Intensidade pura com popcorn, baunilha e flor de laranjeira.",
    price: 679.90,
    category: "Árabes",
    image: perfumeFemPureXs,
    featured: true,
  },

  {
    id: "57",
    name: "teste novo",
    description: "Eau de Parfum feminino 80ml. Intensidade pura com popcorn, baunilha e flor de laranjeira.",
    price: 679.90,
    category: "Árabes",
    image: perfumeFemPureXs,
    featured: true,
  },

  {
    id: "58",
    name: "teste novo",
    description: "Eau de Parfum feminino 80ml. Intensidade pura com popcorn, baunilha e flor de laranjeira.",
    price: 679.90,
    category: "Árabes",
    image: perfumeFemPureXs,
    featured: true,
  },

  {
    id: "59",
    name: "teste novo",
    description: "Eau de Parfum feminino 80ml. Intensidade pura com popcorn, baunilha e flor de laranjeira.",
    price: 679.90,
    category: "Árabes",
    image: perfumeFemPureXs,
    featured: true,
  },

  {
    id: "60",
    name: "teste novo",
    description: "Eau de Parfum feminino 80ml. Intensidade pura com popcorn, baunilha e flor de laranjeira.",
    price: 679.90,
    category: "Árabes",
    image: perfumeFemPureXs,
    featured: true,
  },

  {
    id: "61",
    name: "teste novo",
    description: "Eau de Parfum feminino 80ml. Intensidade pura com popcorn, baunilha e flor de laranjeira.",
    price: 679.90,
    category: "Árabes",
    image: perfumeFemPureXs,
    featured: true,
  },

  {
    id: "62",
    name: "teste novo",
    description: "Eau de Parfum feminino 80ml. Intensidade pura com popcorn, baunilha e flor de laranjeira.",
    price: 679.90,
    category: "Árabes",
    image: perfumeFemPureXs,
    featured: true,
  },

  {
    id: "63",
    name: "teste novo",
    description: "Eau de Parfum feminino 80ml. Intensidade pura com popcorn, baunilha e flor de laranjeira.",
    price: 679.90,
    category: "Árabes",
    image: perfumeFemPureXs,
    featured: true,
  },

  {
    id: "64",
    name: "teste novo",
    description: "Eau de Parfum feminino 80ml. Intensidade pura com popcorn, baunilha e flor de laranjeira.",
    price: 679.90,
    category: "Árabes",
    image: perfumeFemPureXs,
    featured: true,
  },





];

export const WHATSAPP_NUMBER = "5511999999999";

export function getWhatsAppLink(product: Product): string {
  const message = encodeURIComponent(
    `Olá, tenho interesse neste perfume: *${product.name}*${product.price ? ` (R$ ${product.price.toFixed(2).replace(".", ",")})` : ""}. Vi no site da ATR Imports.`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

export function getGeneralWhatsAppLink(): string {
  const message = encodeURIComponent("Olá, tenho interesse em perfumes da ATR Imports!");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

export function formatPrice(price: number): string {
  return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
