"use client";

import Image from "next/image";
import { whatsappLink } from "@/lib/whatsapp";
import { useInView } from "@/lib/useInView";
import { cn } from "@/lib/utils";

export function Hero() {
  const { ref, inView } = useInView(0.15);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative overflow-hidden bg-gradient-to-br from-[#FAFAFA] via-white to-[#F5F0EB] pt-28 pb-12 sm:pt-36 sm:pb-20"
    >
      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-8 px-4 sm:px-8 lg:flex-row lg:gap-12">
        <div
          className={cn(
            "flex flex-1 flex-col items-center text-center lg:items-start lg:text-left opacity-0",
            inView && "animate-fade-in-up opacity-100"
          )}
        >
          <span className="section-tag mb-4">
            Cirurgiao-Dentista | Clinica Geral
          </span>

          <h1 className="font-heading text-3xl font-bold leading-tight text-[#2D2D2D] sm:text-4xl lg:text-5xl">
            Mais do que um consultorio,{" "}
            <br className="hidden sm:inline" />
            um compromisso com o seu{" "}
            <span className="text-[#C5A47E]">sorriso</span>.
          </h1>

          <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
            Atendimento humanizado, tecnologia de ponta e um ambiente pensado
            para o seu conforto. Cuide da sua saude bucal com quem entende do
            assunto.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href={whatsappLink("Olá! Gostaria de agendar uma avaliação.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill bg-[#25D366] text-white hover:bg-[#20bd5a] shadow-lg"
            >
              Agendar Avaliação
            </a>
            <a
              href="#tratamentos"
              className="btn-pill border border-[#3C3C3C] text-[#3C3C3C] hover:bg-[#3C3C3C] hover:text-white"
            >
              Conheça os tratamentos
            </a>
          </div>
        </div>

        <div
          className={cn(
            "relative flex-1 opacity-0",
            inView && "animate-fade-in-up opacity-100"
          )}
          style={{ animationDelay: "0.2s" }}
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl shadow-xl lg:max-w-md">
            <Image
              src="/dr-anderson.jpg"
              alt="Dr. Anderson Niceas"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
