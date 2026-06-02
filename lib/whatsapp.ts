export function whatsappLink(message: string) {
  const num = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  return `https://wa.me/${num}?text=${encodeURIComponent(message)}`;
}
