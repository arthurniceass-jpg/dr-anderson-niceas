"use client";

import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink("Olá! Gostaria de mais informações.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 animate-pulse-ring"
    >
      <MessageCircle className="size-6" />
    </a>
  );
}
