import { projects } from "../data/logos";
import ScatterGrid from "../components/ScatterGrid";

export const WordpressElementor = () => (
    <section className="px-4 py-[40px] md:pb-[100px] overflow-hidden">
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
                                WordPress & Elementor Websites
                            </h2>
                        </div>
                        <div className="w-[50%]">
                            <p className="text-black text-[16px] md:text-[18px] max-w-[900px] text-right">
                                A collection of WordPress and Elementor websites I developed while working at GodesQ Digital Marketing Services, 
                                helping businesses establish a professional online presence through responsive, user-friendly web experiences.
                            </p>
                        </div>
                    </div>
                </div>
                <ScatterGrid className="grid grid-cols-[repeat(5,1fr)] gap-6 mt-4 w-[100%]">
                    {projects.map((project) => (
                        <div key={project.id}>
                            <img
                                src={project.image}
                                alt={project.name}
                                className="h-[400px] w-full object-cover object-top rounded shadow-lg"
                            />
                        </div>
                    ))}
                </ScatterGrid>
            </div>
        </div>
    </section>
);