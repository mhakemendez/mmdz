import { Button } from "../components/Button";
import Shuffle from '../components/Shuffle';

export const Hero = () => (
    <section id="Hero" className="z-[5] flex-1 flex items-end relative">
        <Shuffle className="hero-back-text-logo text-black/10 uppercase font-extrabold m-0 leading-none absolute top-[25px] left-1/2 -translate-x-1/2"
            text="MMDZ"
            shuffleDirection="right"
            duration={1.5}
            animationMode="evenodd"
            shuffleTimes={1}
            ease="power3.out"
            stagger={0.03}
            threshold={0.1}
            triggerOnce={true}
            triggerOnHover
            respectReducedMotion={true}
            loop
            loopDelay={4}
        />
        <div className="container-fluid w-[100%] static p-4 xl:p-0 bg-white/10
                backdrop-blur-xl
                border border-[#73031b]/10
                shadow-[0_8px_32px_rgba(115,3,27,0.1)]
                rounded-2xl

                xl:bg-transparent
                xl:backdrop-blur-none
                xl:border-none
                xl:shadow-none">
            <div className="wrapper flex flex-col items-center xl:block ">
                <h1 className="text-black xirod text-[12px] md:text-[17px] max-w-[500px] uppercase font-bold text-center xl:text-left">Website Developer. AI Automation Specialist.</h1>
                <p className="text-black uppercase text-[16px] md:text-[20px] max-w-[500px] mt-[12px] mb-[42px] text-center xl:text-left">
                    Combining modern web development with intelligent automation,
                    I create digital solutions that simplify workflows, enhance user experiences, and support long-term business growth.</p>
                <div className="flex sm:block">
                    <Button newClass="bg-[#73031b] text-white hover:bg-[#8d0624] me-2"
                        text="Let's get started"
                    />
                    <Button newClass="bg-white text-[#73031b] hover:bg-[#8d0624] hover:text-white"
                        text="Download CV"
                    />
                </div>
            </div>
        </div>
    </section>
);