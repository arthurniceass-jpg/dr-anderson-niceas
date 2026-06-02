export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "Como faço para agendar uma consulta?",
    answer:
      "Você pode agendar sua consulta diretamente pelo nosso WhatsApp. Basta clicar no botão de agendamento em qualquer parte do site.",
  },
  {
    question: "O clareamento dental enfraquece os dentes?",
    answer:
      "Não. O clareamento realizado por um profissional qualificado é totalmente seguro e não causa danos à estrutura dos dentes.",
  },
  {
    question: "Os tratamentos são doloridos?",
    answer:
      "Utilizamos técnicas modernas e anestesia eficaz para garantir o máximo de conforto durante todos os procedimentos. A grande maioria dos pacientes não sente dor.",
  },
  {
    question: "Qual a importância da consulta de rotina?",
    answer:
      "A consulta de rotina permite identificar problemas precocemente, evitando tratamentos mais complexos e custosos. O ideal é visitar o dentista a cada 6 meses.",
  },
  {
    question: "Vocês atendem com hora marcada?",
    answer:
      "Sim, trabalhamos exclusivamente com agendamento prévio para garantir pontualidade e um atendimento dedicado a cada paciente.",
  },
  {
    question: "Onde fica o consultório?",
    answer:
      "Estamos localizados no RioMar Trade Center, na Av. República do Líbano, 251, bairro do Pina, Recife/PE. Fácil acesso e estacionamento disponível no local.",
  },
];
