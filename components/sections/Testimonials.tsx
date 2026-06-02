"use client";

import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { useInView } from "@/lib/useInView";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const { ref, inView } = useInView(0.1);

  return (
    <section
      id="depoimentos"
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-white py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <div className="mb-10 text-center sm:mb-14">
          <span className="section-tag mb-4 inline-flex">Depoimentos</span>
          <h2 className="font-heading text-2xl font-bold text-[#2D2D2D] sm:text-3xl lg:text-4xl">
            O que nossos pacientes dizem.
          </h2>
        </div>

        <div
          className={cn(
            "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 opacity-0",
            inView && "animate-fade-in-up opacity-100"
          )}
        >
          {testimonials.map((t) => (
            <div key={t.id} className="card-premium flex flex-col">
              <Quote className="mb-3 size-6 text-[#C5A47E]/40" />
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="mt-4 text-sm font-semibold text-[#2D2D2D]">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
