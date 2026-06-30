import logo from "../assets/images/Michael-Mendez-Logo-White.webp";
import { Button } from "../components/Button";

export const Navbar = () => (
    <header className="">
        <div className="container-fluid">
            <div className="wrapper">
                <nav className="flex items-center justify-between">
                    <a> <span className="xirod text-black text-[20px] font-extrabold">MMDZ</span> </a>
                    <Button newClass="bg-[#73031b] text-white hover:bg-[#8d0624]"
                        text="Let's get started"
                    />
                </nav>
            </div>
        </div>
    </header>
);