"use client";

import { Camera, MessageCircle, Phone } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";
import { useInView } from "@/lib/useInView";
import { cn } from "@/lib/utils";

export function CTA() {
  const { ref, inView } = useInView(0.15);

  return (
    <section
      id="contato"
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-[#2D2D2D] py-16 sm:py-24"
    >
      <div
        className={cn(
          "mx-auto max-w-3xl px-4 text-center sm:px-8 opacity-0",
          inView && "animate-fade-in-up opacity-100"
        )}
      >
        <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
          Agende sua avaliação e transforme seu sorriso.
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-gray-400 sm:text-base">
          Entre em contato pelo WhatsApp e marque sua consulta com praticidade e
          agilidade.
        </p>
        <a
          href={whatsappLink("Olá! Gostaria de agendar uma avaliação.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-pill mt-8 bg-[#25D366] text-white hover:bg-[#20bd5a] shadow-lg inline-flex"
        >
          Agendar Avaliação
        </a>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
          <a
            href={`tel:+${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
            className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
          >
            <Phone className="h-4 w-4 text-[#C5A47E]" />
            {process.env.NEXT_PUBLIC_PHONE_DISPLAY}
          </a>
          <a
            href={process.env.NEXT_PUBLIC_INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
          >
            <Camera className="h-4 w-4 text-[#C5A47E]" />
            @dr.andersonniceas
          </a>
        </div>

        <p className="mt-6 text-xs text-gray-500">CRO/PE 22320</p>
      </div>
    </section>
  );
}
