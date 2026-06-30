import meshBg from "../assets/images/black-mesh.svg";
import autoImg from "../assets/images/automation/AI-Chatbot.avif";
import { Button } from "../components/Button";
import ScatterGrid from "../components/ScatterGrid";

export const Automation = () => (
    <section className="px-4 py-[40px] md:py-[80px] bg-center bg-no-repeat bg-cover">
        <div className="container-fluid m-auto">
            <div className="wrapper">
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
                                AI Automation & Workflow Solutions
                            </h2>
                        </div>
                        <div className="w-[50%]">
                            <p className="text-black text-[16px] md:text-[18px] max-w-[900px] text-right">
                                Automating repetitive tasks and connecting business tools to reduce manual work, improve efficiency, and help teams focus on higher-value activities.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <ScatterGrid className="grid grid-cols-3 gap-4">
                        <div className="p-4 border shadow bg-white rounded">
                            <img className="rounded shadow" src={autoImg} alt="" />
                            <h4 className="xirod mt-4">AI Lead Qualification</h4>
                            <p className="mt-2"> Automatically captures and qualifies leads submitted through your website by analyzing inquiry details with AI.
                                High-quality prospects are scored, routed to the appropriate sales representative,
                                and delivered via email or CRM, helping your team respond faster and focus on opportunities with the highest potential.</p>
                            <div className="flex">
                                <Button newClass="bg-[#73031b] text-white hover:bg-[#8d0624] mt-10"
                                    text="Let's Build Yours"
                                />
                            </div>
                        </div>
                        <div className="p-4 border shadow bg-white rounded">
                            <img className="rounded shadow" src={autoImg} alt="" />
                            <h4 className="xirod mt-4">AI Appointment Booking Assistant</h4>
                            <p className="mt-2">An intelligent virtual assistant that answers customer questions, checks real-time availability,
                                and schedules appointments without manual intervention. By integrating with calendars and notification systems,
                                it streamlines the booking process, reduces scheduling conflicts, and provides a seamless experience for both customers and staff.</p>
                            <div className="flex">
                                <Button newClass="bg-[#73031b] text-white hover:bg-[#8d0624] mt-10"
                                    text="Let's Build Yours"
                                />
                            </div>
                        </div>
                        <div className="p-4 border shadow bg-white rounded">
                            <img className="rounded shadow" src={autoImg} alt="" />
                            <h4 className="xirod mt-4">WordPress Blog Automation</h4>
                            <p className="mt-2">Automate your content publishing workflow by generating AI-assisted blog drafts, optimizing them for SEO,
                                and publishing directly to WordPress. This workflow streamlines content creation, reduces manual effort,
                                maintains a consistent publishing schedule, and helps businesses grow their online visibility more efficiently.</p>
                            <div className="flex">
                                <Button newClass="bg-[#73031b] text-white hover:bg-[#8d0624] mt-10"
                                    text="Let's Build Yours"
                                />
                            </div>
                        </div>
                    </ScatterGrid>
                </div>
            </div>
        </div>
    </section>
);