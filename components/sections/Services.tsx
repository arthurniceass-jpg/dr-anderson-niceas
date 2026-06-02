"use client";

import {
  Sparkles,
  ShieldCheck,
  Sun,
  Activity,
  Minus,
  Smile,
  HeartPulse,
  Star,
} from "lucide-react";
import { services } from "@/data/services";
import { whatsappLink } from "@/lib/whatsapp";
import { useInView } from "@/lib/useInView";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  ShieldCheck,
  Sun,
  Activity,
  Minus,
  Smile,
  HeartPulse,
  Star,
};

export function Services() {
  const { ref, inView } = useInView(0.1);

  return (
    <section
      id="tratamentos"
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-[#F5F0EB] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <div className="mb-10 text-center sm:mb-14">
          <span className="section-tag mb-4 inline-flex">
            Nossos Tratamentos
          </span>
          <h2 className="font-heading text-2xl font-bold text-[#2D2D2D] sm:text-3xl lg:text-4xl">
            Tratamentos que unem tecnologia, cuidado e confianca.
          </h2>
        </div>

        <div
          className={cn(
            "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 opacity-0",
            inView && "animate-fade-in-up opacity-100"
          )}
        >
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="card-premium flex flex-col items-start"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="mb-3 flex size-10 items-center justify-center rounded-full bg-[#C5A47E]/15 text-[#C5A47E]">
                  {Icon && <Icon className="size-5" />}
                </div>
                <h3 className="font-heading text-base font-semibold text-[#2D2D2D]">
                  {service.title}
                </h3>
                <p className="mt-1 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <a
                  href={whatsappLink(service.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 text-sm font-semibold text-[#C5A47E] transition-colors hover:text-[#A8875F]"
                >
                  Saiba mais &rarr;
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
