"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { whatsappLink } from "@/lib/whatsapp";

const navItems = [
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 glass transition-all duration-300",
        scrolled && "border-b border-[#E8E0D8] shadow-sm"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-8">
        <a href="#" className="flex flex-col">
          <span className="font-heading text-lg font-bold text-[#3C3C3C] sm:text-xl">
            Dr. Anderson Nicéas
          </span>
          <span className="text-[0.65rem] tracking-wide text-muted-foreground sm:text-xs">
            Cirurgião-Dentista | CRO/PE 22320
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#3C3C3C] transition-colors hover:text-[#C5A47E]"
            >
              {item.label}
            </a>
          ))}
          <a
            href={whatsappLink("Olá! Gostaria de agendar uma consulta.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill bg-[#25D366] text-white hover:bg-[#20bd5a] text-sm"
          >
            Agendar Consulta
          </a>
        </nav>

        <button
          className="flex items-center justify-center rounded-lg p-2 text-[#3C3C3C] md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-[#E8E0D8] bg-white px-4 pb-4 md:hidden">
          <nav className="flex flex-col gap-3 pt-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-[#3C3C3C] transition-colors hover:text-[#C5A47E]"
              >
                {item.label}
              </a>
            ))}
            <a
              href={whatsappLink("Olá! Gostaria de agendar uma consulta.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill bg-[#25D366] text-center text-white hover:bg-[#20bd5a] text-sm mt-1"
            >
              Agendar Consulta
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
