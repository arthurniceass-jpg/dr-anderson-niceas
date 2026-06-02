export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  whatsappMessage: string;
}

export const services: Service[] = [
  {
    id: "restauracao",
    icon: "Sparkles",
    title: "Restauração Dentária",
    description:
      "Restaurações em resina de alta qualidade que devolvem a forma, a função e a estética natural dos seus dentes.",
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre restauração dentária.",
  },
  {
    id: "limpeza",
    icon: "ShieldCheck",
    title: "Limpeza e Profilaxia",
    description:
      "Remoção de tártaro e placa bacteriana com equipamentos modernos para manter sua saúde bucal em dia.",
    whatsappMessage:
      "Olá! Gostaria de agendar uma limpeza dental.",
  },
  {
    id: "clareamento",
    icon: "Sun",
    title: "Clareamento Dental",
    description:
      "Clareamento seguro e eficaz que devolve o brilho e a luminosidade do seu sorriso com resultados visíveis.",
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre clareamento dental.",
  },
  {
    id: "canal",
    icon: "Activity",
    title: "Tratamento de Canal",
    description:
      "Procedimento indolor com técnicas modernas para salvar dentes comprometidos e eliminar a dor.",
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre tratamento de canal.",
  },
  {
    id: "extracao",
    icon: "Minus",
    title: "Extração Dentária",
    description:
      "Extrações simples e de terceiros molares (sisos) realizadas com segurança, anestesia eficaz e conforto.",
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre extração dentária.",
  },
  {
    id: "protese",
    icon: "Smile",
    title: "Prótese Dentária",
    description:
      "Próteses fixas e removíveis que recuperam a função mastigatória e a beleza do seu sorriso.",
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre prótese dentária.",
  },
  {
    id: "prevencao",
    icon: "HeartPulse",
    title: "Odontologia Preventiva",
    description:
      "Consultas de rotina, orientação de higiene e aplicação de flúor para prevenir cáries e doenças gengivais.",
    whatsappMessage:
      "Olá! Gostaria de agendar uma consulta preventiva.",
  },
  {
    id: "estetica",
    icon: "Star",
    title: "Estética Dental",
    description:
      "Facetas em resina, ajuste de cor e contorno para um sorriso harmonioso e natural.",
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre estética dental.",
  },
];
