import {
    FaLinkedin,
    FaFacebook,
    FaGithub,
    FaPhone,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const socials = [
    {
        icon: FaLinkedin,
        href: "https://linkedin.com/in/yourprofile",
        label: "LinkedIn",
    },
    {
        icon: FaFacebook,
        href: "https://facebook.com/yourprofile",
        label: "Facebook",
    },
    {
        icon: FaGithub,
        href: "https://github.com/yourusername",
        label: "GitHub",
    },
    {
        icon: MdEmail,
        href: "mailto:you@example.com",
        label: "Email",
    },
    {
        icon: FaPhone,
        href: "tel:+639123456789",
        label: "Phone",
    },
];

export const Socials = () => (
    <div className="flex flex-col gap-1 fixed top-1/2 -translate-y-1/2 right-[16px] z-9">
        {socials.map(({ icon: Icon, href, label }) => (
            <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="text-2xl hover:scale-110 transition-transform bg-[#73031b] text-white p-1 rounded"
            >
                <Icon />
            </a>
        ))}
    </div>
);