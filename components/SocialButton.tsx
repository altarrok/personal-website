import { PropsWithChildren } from "react";

export const SocialButton: React.FC<PropsWithChildren<{ href: string }>> = ({ children, href }) => {
    return (
        <a
            href={href}
            target={"_blank"}
            rel={"noreferrer"}
            className="w-12 h-12 lg:w-8 lg:h-8 rounded-full p-2 lg:p-1.5 bg-left-top lg:bg-right-bottom hover:bg-left-top transition-all duration-500"
            style={{
                backgroundImage: "linear-gradient(to bottom right, #c33764, #1d2671)",
                backgroundSize: "150% 150%",
            }}
        >
            {children}
        </a>
    );
}