import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Portfolio } from "@/components/portfolio";
import { Process } from "@/components/process";
import { Services } from "@/components/services";
import { WhyUs } from "@/components/why-us";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <WhyUs />
        <About />
        <Services />
        <Portfolio />
        <Process />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
