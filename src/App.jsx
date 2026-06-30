import { Navbar } from "@/layouts/Navbar";
import { Hero } from "@/sections/Hero";
import { Logos } from "@/sections/Logos";
import { WordpressReact } from "@/sections/WordpressReact";
import { WordpressElementor } from "@/sections/WordpressElementor";
import { Automation } from "@/sections/Automation";
import { CallToAction } from "@/sections/CallToAction";
import { Socials } from '@/components/Socials';
import heroImage from "./assets/images/Hero-Brain-AI-Reflection.avif";

function App() {

  return (
    <div id="main-page">
      <div className="h-[100vh] overflow-hidden bg-center bg-white bg-no-repeat p-4 pb-10 flex flex-col justify-between">
        <img
          className="absolute bottom-[320px] md:bottom-0 left-1/2 -translate-x-1/2 h-[40%] md:h-[75%] xl:h-[90%] z-9"
          src={heroImage}
          alt="Hero Image"
        />
        <Navbar />
        <Hero />
        <Socials />
      </div>
      <Logos />
      <WordpressReact />
      <WordpressElementor />
      <Automation />
      <CallToAction />
    </div>
  );
};

export default App
