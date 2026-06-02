"use client";

import { Target, Eye, Heart } from "lucide-react";
import { useInView } from "@/lib/useInView";
import { cn } from "@/lib/utils";

const values = [
  {
    icon: Target,
    title: "Missão",
    content:
      "Oferecer tratamentos odontológicos com excelência técnica, conforto e empatia, transformando o sorriso e a autoconfiança de cada paciente.",
  },
  {
    icon: Eye,
    title: "Visão",
    content:
      "Ser referência em odontologia moderna e humanizada em Recife, reconhecido pela qualidade, transparência e resultados consistentes.",
  },
  {
    icon: Heart,
    title: "Valores",
    list: [
      "Ética e compromisso com o paciente",
      "Atualização constante e tecnologia de ponta",
      "Atendimento humanizado e individualizado",
      "Excelência e responsabilidade em cada procedimento",
    ],
  },
];

export function About() {
  const { ref, inView } = useInView(0.15);

  return (
    <section
      id="sobre"
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-white py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <div
          className={cn(
            "mb-12 max-w-3xl opacity-0 sm:mb-16",
            inView && "animate-fade-in-up opacity-100"
          )}
        >
          <span className="section-tag mb-4">Sobre o Dr. Anderson</span>

          <h2 className="font-heading text-2xl font-bold text-[#2D2D2D] sm:text-3xl lg:text-4xl">
            Excelência construída com experiência e dedicação.
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            O Dr. Anderson Nicéas é cirurgião-dentista inscrito no CRO/PE 22320,
            com formação sólida e experiência clínica em diversas especialidades
            da odontologia. Graduado e dedicado à clínica geral, atua com foco
            em restaurações, próteses, clareamento, endodontia e cirurgias
            orais menores.
          </p>

          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Seu compromisso é oferecer um atendimento humanizado, com escuta
            ativa e planejamento individualizado, em um ambiente moderno e
            acolhedor no RioMar Trade Center, em Recife.
          </p>
        </div>

        <div
          className={cn(
            "text-center opacity-0",
            inView && "animate-fade-in-up opacity-100"
          )}
          style={{ animationDelay: "0.15s" }}
        >
          <h3 className="font-heading text-xl font-bold text-[#2D2D2D] sm:text-2xl lg:text-3xl">
            Nosso propósito vai além do sorriso.
          </h3>
        </div>

        <div className="mt-8 grid gap-6 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((item, i) => (
            <div
              key={item.title}
              className={cn(
                "card-premium border border-[#E8E0D8] bg-white p-6 sm:p-8 opacity-0",
                inView && "animate-fade-in-up opacity-100"
              )}
              style={{ animationDelay: `${(i + 2) * 0.15}s` }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#2D2D2D]">
                <item.icon className="h-5 w-5 text-white" />
              </div>
              <h4 className="font-heading text-lg font-bold text-[#2D2D2D]">
                {item.title}:
              </h4>
              {"content" in item && (
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.content}
                </p>
              )}
              {"list" in item && (
                <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-muted-foreground">
                  {item.list?.map((v) => (
                    <li key={v} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C5A47E]" />
                      {v}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
