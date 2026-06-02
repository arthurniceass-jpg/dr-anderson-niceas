"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { faqItems } from "@/data/faq";
import { whatsappLink } from "@/lib/whatsapp";
import { useInView } from "@/lib/useInView";
import { cn } from "@/lib/utils";

export function FAQ() {
  const { ref, inView } = useInView(0.1);

  return (
    <section
      id="faq"
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-white py-16 sm:py-24"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-8">
        <div className="mb-10 text-center sm:mb-14">
          <span className="section-tag mb-4 inline-flex">
            Duvidas Frequentes
          </span>
          <h2 className="font-heading text-2xl font-bold text-[#2D2D2D] sm:text-3xl lg:text-4xl">
            Perguntas Frequentes
          </h2>
        </div>

        <div
          className={cn(
            "opacity-0",
            inView && "animate-fade-in-up opacity-100"
          )}
        >
          <Accordion defaultValue={[]}>
            {faqItems.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-b border-[#E8E0D8]">
                <AccordionTrigger className="py-4 text-sm font-semibold text-[#2D2D2D] sm:text-base">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-10 text-center">
          <p className="mb-4 text-sm text-muted-foreground">
            Ficou com duvida? Fale conosco pelo WhatsApp.
          </p>
          <a
            href={whatsappLink("Ola! Tenho uma duvida e gostaria de ajuda.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill bg-[#25D366] text-white hover:bg-[#20bd5a] inline-flex"
          >
            Falar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
