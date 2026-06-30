import projectImage from "../assets/images/projects/Headless-Roofing.avif";
import { tools, projects } from "../data/logos";
import ScatterGrid from "../components/ScatterGrid";

export const WordpressReact = () => (
    <section className="px-4 py-[40px] md:py-[100px] overflow-hidden">
        <div className="container-fluid m-auto">
            <div className="wrapper flex-col flex gap-10 items-start">
                <div className="w-[100%]">
                    <div className="flex">
                        <div className="w-[50%]">
                            <h2 className="
                            xirod
                            text-black 
                            text-[24px] 
                            md:text-[32px] 
                            lg:text-[30px] 
                            leading-[40px]  
                            font-bold
                            max-w-[800px]">
                                Headless WordPress + React + Automation
                            </h2>
                        </div>
                        <div className="w-[50%]">
                            <p className="text-black text-[16px] md:text-[18px] max-w-[900px] text-right">
                                Built with Headless WordPress, React, and intelligent automation to deliver faster websites, improved SEO, and streamlined workflows that help businesses save time and grow.
                            </p>
                        </div>
                    </div>
                </div>
                <ScatterGrid className="grid grid-cols-4 gap-4 w-[100%] sticky">
                    <div>
                        <img className="rounded shadow" src={projectImage} alt="" />
                    </div>
                    <div>
                        <img className="rounded shadow" src={projectImage} alt="" />
                    </div>
                    <div>
                        <img className="rounded shadow" src={projectImage} alt="" />
                    </div>
                    <div>
                        <img className="rounded shadow" src={projectImage} alt="" />
                    </div>
                </ScatterGrid>
            </div>
        </div>
    </section>
);