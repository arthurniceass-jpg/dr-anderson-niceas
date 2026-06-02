"use client";

import { MapPin, Clock, ExternalLink } from "lucide-react";
import { schedule } from "@/data/hours";
import { useInView } from "@/lib/useInView";
import { cn } from "@/lib/utils";

export function Location() {
  const { ref, inView } = useInView(0.1);

  const street = process.env.NEXT_PUBLIC_ADDRESS_STREET;
  const complement = process.env.NEXT_PUBLIC_ADDRESS_COMPLEMENT;
  const neighborhood = process.env.NEXT_PUBLIC_ADDRESS_NEIGHBORHOOD;
  const city = process.env.NEXT_PUBLIC_ADDRESS_CITY;
  const state = process.env.NEXT_PUBLIC_ADDRESS_STATE;
  const postal = process.env.NEXT_PUBLIC_ADDRESS_POSTAL;

  return (
    <section
      id="localizacao"
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-[#F5F0EB] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <div className="mb-10 text-center sm:mb-14">
          <span className="section-tag mb-4 inline-flex">Localização</span>
          <h2 className="font-heading text-2xl font-bold text-[#2D2D2D] sm:text-3xl lg:text-4xl">
            Fácil acesso no RioMar Trade Center.
          </h2>
        </div>

        <div
          className={cn(
            "grid grid-cols-1 gap-6 lg:grid-cols-2 opacity-0",
            inView && "animate-fade-in-up opacity-100"
          )}
        >
          <div className="flex flex-col gap-6">
            <div className="card-premium">
              <div className="mb-3 flex items-center gap-2 text-[#C5A47E]">
                <MapPin className="size-5" />
                <h3 className="font-heading text-base font-semibold text-[#2D2D2D]">
                  Endereço
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {street}
                <br />
                {complement}
                <br />
                {neighborhood} - {city}/{state}
                <br />
                CEP: {postal}
              </p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=RioMar+Trade+Center+Recife+PE"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill mt-4 border border-[#C5A47E] text-[#A8875F] hover:bg-[#C5A47E] hover:text-white text-sm inline-flex"
              >
                <ExternalLink className="size-4" />
                Como chegar
              </a>
            </div>

            <div className="card-premium">
              <div className="mb-3 flex items-center gap-2 text-[#C5A47E]">
                <Clock className="size-5" />
                <h3 className="font-heading text-base font-semibold text-[#2D2D2D]">
                  Horário de Funcionamento
                </h3>
              </div>
              <ul className="space-y-1">
                {schedule.map((s) => (
                  <li
                    key={s.day}
                    className="flex justify-between text-sm text-muted-foreground"
                  >
                    <span>{s.day}</span>
                    <span className="font-medium text-[#2D2D2D]">
                      {s.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=RioMar+Trade+Center+Recife+PE&output=embed"
              width="100%"
              height="100%"
              className="min-h-[350px] border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do consultório"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
