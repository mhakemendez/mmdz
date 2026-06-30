import meshBg from "../assets/images/white-mesh.svg";
import { Button } from "../components/Button";
import ScrollFloat from '../components/ScrollFloat';

export const CallToAction = () => (
    <section className="bg-black px-4 py-[40px] md:py-[200px] bg-center bg-no-repeat bg-cover relative" style={{ backgroundImage: `url(${meshBg})`, }}>
        <h2 className="hero-back-text-logo text-white/10 uppercase font-extrabold m-0 leading-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            MMDZ
        </h2>
        <p className="text-white text-center italic absolute bottom-[16px] left-1/2 -translate-x-1/2 z-1">
            © {new Date().getFullYear()} <a href="#">Michael Mendez.</a> All rights reserved.
        </p>
        <div className="container-fluid m-auto z-2">
            <div className="wrapper z-2">
                <div className="relative text-center flex flex-col items-center">
                    <ScrollFloat
                        animationDuration={1}
                        ease='back.inOut(2)'
                        scrollStart='center bottom+=50%'
                        scrollEnd='bottom bottom-=40%'
                        stagger={0.03}
                        textClassName='xirod text-white text-[100px] max-w-[1200px]'
                    >
                        Ready to Build Something Exceptional?
                    </ScrollFloat>
                    <p className="text-white text-[20px] max-w-[900px]">
                        Whether you need a high-performance website, a headless WordPress solution, or AI-powered automation, let's create a digital experience that helps your business grow.
                    </p>
                    <div className="mt-10">
                        <Button newClass="bg-[#73031b] text-white hover:bg-[#8d0624] me-2"
                            text="Let's get started"
                        />
                        <Button newClass="bg-white text-[#73031b] hover:bg-[#8d0624] hover:text-white"
                            text="Download CV"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
);