import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dr-anderson-niceas.vercel.app"),
  title: "Dr. Anderson Nicéas | Cirurgião-Dentista em Recife",
  description:
    "Cirurgião-Dentista em Recife. Clínica odontológica no RioMar Trade Center. Restauração, clareamento, prótese, canal e mais. Agende sua consulta.",
  openGraph: {
    title: "Dr. Anderson Nicéas | Cirurgião-Dentista em Recife",
    description:
      "Cirurgião-Dentista em Recife. Clínica odontológica no RioMar Trade Center.",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Anderson Nicéas | Cirurgião-Dentista em Recife",
    description:
      "Cirurgião-Dentista em Recife. Clínica odontológica no RioMar Trade Center.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Dr. Anderson Nicéas - Cirurgião-Dentista",
              image: "https://dr-anderson-niceas.vercel.app/og.png",
              telephone: "+55-81-99113-3220",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Av. República do Líbano, 251",
                addressLocality: "Recife",
                addressRegion: "PE",
                postalCode: "51110-160",
                addressCountry: "BR",
              },
              sameAs: [
                "https://www.instagram.com/dr.andersonniceas",
              ],
              url: "https://dr-anderson-niceas.vercel.app",
              priceRange: "$$",
              openingHours: [
                "Mo-Fr 08:30-18:00",
                "Sa 09:00-14:00",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
