export interface Testimonial {
  id: string;
  name: string;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Fernanda Costa",
    text: "Sempre tive medo de dentista, mas o Dr. Anderson me passou uma tranquilidade enorme. O consultório é lindo, moderno, e o atendimento é muito humanizado. Saí de lá com o sorriso renovado.",
  },
  {
    id: "2",
    name: "Marcos Albuquerque",
    text: "Profissional excelente. Fiz uma restauração e ficou perfeita, nem parece que tinha problema. Além disso, explicou tudo com muita paciência. Recomendo de olhos fechados.",
  },
  {
    id: "3",
    name: "Juliana Mendes",
    text: "Fiz o clareamento dental e estou encantada com o resultado. O Dr. Anderson é muito atencioso e competente. O ambiente do consultório transmite muita confiança e conforto.",
  },
];
