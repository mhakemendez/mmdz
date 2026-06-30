import { logos } from "../data/logos";
import meshBg from "../assets/images/black-mesh.svg";

export const Logos = () => (
    <section className="px-4 py-[40px] md:py-[80px] bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${meshBg})`, }}>
        <div className="container-fluid m-auto">
            <div className="wrapper">
                <div className="grid grid-cols-3 md:grid-cols-[repeat(6,1fr)] lg:grid-cols-[repeat(8,1fr)] xl:grid-cols-[repeat(11,1fr)] gap-4">
                    {logos.map((logo) => (
                        <div className="bg-white shadow p-3 flex justify-center items-center flex-col" key={logo.id}>
                            <img
                                src={logo.image}
                                alt={logo.name}
                                className="w-[25px] md:w-[50px]"
                            />
                            <h6 className="text-center mt-2 text-[12px]">{logo.name}</h6>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);