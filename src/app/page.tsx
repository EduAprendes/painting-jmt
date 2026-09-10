import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { Services } from "@/components/Services";
import { Results } from "@/components/Results";
import { Process } from "@/components/Process";
import { Differentiator } from "@/components/Differentiator";
import { GoogleModule } from "@/components/GoogleModule";
import { About } from "@/components/About";
import { CtaBig } from "@/components/CtaBig";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { StickyCall } from "@/components/StickyCall";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <TrustStrip />
      <Services />
      <Results />
      <Process />
      <Differentiator />
      <GoogleModule />
      <About />
      <CtaBig />
      <Contact />
      <Footer />
      <StickyCall />
    </>
  );
}
