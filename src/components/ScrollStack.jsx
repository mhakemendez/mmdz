import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import roofing from "../assets/images/roofing.webp";
import dental from "../assets/images/dental.webp";
import resort from "../assets/images/resort.avif";

const cards = [
    {
        title: "Web Development",
        description:
            "A modern roofing business website designed to increase customer inquiries, streamline lead capture, and improve response times through AI-powered automation. The project combined a professional web presence with an intelligent chatbot capable of answering customer questions and collecting qualified leads 24/7.",
        color: "#ffffff",
        image: roofing,
    },
    {
        title: "WordPress Development",
        description:
            "Flexible WordPress solutions with custom themes and optimized performance.",
        color: "#f8fafc",
        image: dental,
    },
    {
        title: "AI Automation",
        description:
            "Automate repetitive workflows using AI to save time and increase productivity.",
        color: "#f4f4f5",
        image: resort,
    },
];

function Card({ card, index, progress }) {
    const scale = useTransform(progress, [0, 1], [1, 0.88 + index * 0.03]);

    return (
        <motion.div
            style={{
                scale,
                background: card.color,
            }}
            className="sticky w-[100%] top-24 rounded-3xl border border-zinc-200 shadow-xl flex items-center justify-center"
        >
            <div className="p-5 w-[100%] flex gap-[80px]">
                <div className="w-[60%]">
                    <h3 className="text-lg font-bold mb-6">{card.title}</h3>
                    <p className="text-md leading-relaxed">
                        {card.description}
                    </p>
                </div>
                <div className="w-[40%] flex justify-end">
                    <img className="w-[80%]" src={card.image} alt={`${card.image}-headeless-project`} />
                </div>
            </div>
        </motion.div>
    );
}

export default function ScrollStack() {
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    });

    return (
        <section
            ref={container}
            className="relative"
        >
            <div className="inset-0 flex flex-col gap-5">
                {cards.map((card, index) => {
                    const start = index / cards.length;
                    const end = (index + 1) / cards.length;

                    const progress = useTransform(scrollYProgress, [start, end], [0, 1]);

                    return (
                        <div
                            key={index}
                            className="sticky top-0 flex items-center justify-center"
                        >
                            <Card
                                card={card}
                                index={index}
                                progress={progress}
                            />
                        </div>
                    );
                })}
            </div>
        </section>
    );
}