import Magnet from './Magnet'

export const Button = ({
    text = "Click Me",
    link = "#",
    newClass = "",
}) => (

    <Magnet padding={20} disabled={false} magnetStrength={10}>
        <a
            href={link}
            className={`uppercase text-[12px] md:text-[16px] border border-[#73031b] inline-block px-4 py-2 rounded cursor-pointer ${newClass}`}
        >
            {text}
        </a>
    </Magnet>
);