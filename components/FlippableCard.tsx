import { useState } from "react";
import { HiCursorClick } from "react-icons/hi";

export const FlippableCard: React.FC<{
    title: string;
    icon: React.ReactNode;
    para: string;
}> = ({ title, icon, para }) => {
    const [open, setOpen] = useState(false);
    const [overlayHovered, setOverlayHovered] = useState(false);

    return (
        <div
            onClick={() => setOpen((prevOpen) => !prevOpen)}
            className="w-full h-full overflow-hidden rounded-3xl relative cursor-pointer hover:scale-[0.95] transition-all duration-300 border-4 border-solid border-transparent"
            style={{
                background: "linear-gradient(white, white) padding-box, linear-gradient(to bottom right, #c33764, #1d2671) border-box",
            }}
        >
            <div
                className="absolute transition-all delay-500 left-5 text-white/75 z-20 text-xs"
                style={
                    (!open && overlayHovered) ? {
                        bottom: "0.5rem",
                        opacity: "100%",
                    } : {
                        bottom: "-100%",
                        opacity: "0%",
                        transitionDelay: "0ms",
                    }
                }
            >
                <span className="text-white/75 text-xs flex gap-1 items-center italic"><HiCursorClick /> Click to Reveal</span>
            </div>
            <div
                onMouseEnter={() => setOverlayHovered(true)}
                onMouseLeave={() => setOverlayHovered(false)}
                className="w-full bg-black hover:bg-black/90 text-white flex items-center absolute transition-all duration-700 z-10"
                style={
                    open ? {
                        height: "2rem",
                        fontSize: "1rem",
                        top: "10%",
                    } : {
                        height: "100%",
                        fontSize: "3rem",
                        top: 0,
                    }}
            >
                <div className="whitespace-nowrap w-full overflow-hidden">
                    {Array.from({ length: 10 }).map((_, index) =>
                        <div
                            key={index}
                            className="animate-h-scroll will-change-transform inline-block px-8"
                        >
                            <h3 className="font-bold">
                                {title}
                            </h3>
                        </div>
                    )}
                </div>
            </div>
            <div
                className='p-8 flex flex-col lg:flex-row gap-4 items-center justify-center top-[10%] absolute pt-16 h-[90%] w-full transition-all duration-500'
                style={{
                    ...(
                        open ? {
                            top: "10%",
                        } : {
                            top: "0",
                        }
                    )
                }}
            >
                <i className="text-5xl lg:text-3xl">
                    {icon}
                </i>
                <p className="text-base lg:flex-1 font-semibold text-justify">
                    {para}
                </p>
            </div>
        </div>
    );
}