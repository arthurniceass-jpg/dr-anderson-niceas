import { Phone, MessageCircle } from "lucide-react";

export function Footer() {
  const phone = process.env.NEXT_PUBLIC_PHONE_DISPLAY;
  const instagram = process.env.NEXT_PUBLIC_INSTAGRAM_URL;
  const street = process.env.NEXT_PUBLIC_ADDRESS_STREET;
  const complement = process.env.NEXT_PUBLIC_ADDRESS_COMPLEMENT;
  const neighborhood = process.env.NEXT_PUBLIC_ADDRESS_NEIGHBORHOOD;
  const city = process.env.NEXT_PUBLIC_ADDRESS_CITY;
  const state = process.env.NEXT_PUBLIC_ADDRESS_STATE;

  return (
    <footer className="bg-[#2D2D2D] py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-heading text-lg font-bold text-white">
              Dr. Anderson Nicéas
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              Seu sorriso, nosso compromisso.
            </p>
            <p className="mt-3 text-xs text-gray-500">CRO/PE 22320</p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-300">
              Contato
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="size-4 text-[#C5A47E]" />
                {phone}
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="size-4 text-[#25D366]" />
                <a
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-300">
              Endereço
            </h4>
            <p className="text-sm leading-relaxed text-gray-400">
              {street}
              <br />
              {complement}
              <br />
              {neighborhood} - {city}/{state}
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-300">
              Horário
            </h4>
            <p className="text-sm leading-relaxed text-gray-400">
              Seg a Sex: 08:30 - 18:00
              <br />
              Sab: 09:00 - 14:00
              <br />
              Dom: Fechado
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-gray-500">
          &copy; 2025 Dr. Anderson Nicéas. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
