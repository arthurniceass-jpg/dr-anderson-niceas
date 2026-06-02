import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Location } from "@/components/sections/Location";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { FloatingWhatsApp } from "@/components/sections/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <FAQ />
      <Location />
      <CTA />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
