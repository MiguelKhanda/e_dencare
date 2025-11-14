import About from "@/components/About";
import Choice from "@/components/Choice";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

import Services from "@/components/Services";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Choice/>
      <Contact/>
    </div>
  );
}
