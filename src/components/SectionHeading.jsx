export const SectionHeading = ({
    text = "This is heading",
    para = "This paragraph",
}) => (
    <div className="flex flex-col items-center mb-[40px]">
        <h2 className="
            text-black 
            text-[24px] 
            md:text-[32px] 
            lg:text-[60px] 
            text-center 
            leading-none  
            font-bold">
            {text}
        </h2>
        <p className="text-black text-[16px] md:text-[18px] text-center max-w-[900px] mt-2">{para}</p>
    </div>
);