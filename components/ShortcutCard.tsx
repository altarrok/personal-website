import { useState } from "react";


export const ShortcutCard: React.FC<{
    onScrollTrigger: () => void,
    text: string,
}> = ({ onScrollTrigger, text }) => {
    const [hover, setHover] = useState(false);
    const [leaveAnimation, setLeaveAnimation] = useState(false);

    return (
        <button
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => {
                setLeaveAnimation(true);
                setTimeout(() => {
                    setLeaveAnimation(false);
                }, 1000)
                setTimeout(() => {
                    onScrollTrigger();
                }, 500)
            }}
            className="w-full h-full bg-white rounded-3xl cursor-pointer relative overflow-hidden"
        >
            <div className="absolute top-4 left-4">
                <h2 className={`${hover ? "scale-50" : "scale-100"} origin-top-left text-7xl font-semibold transition-all duration-500`}>
                    {text}
                </h2>
            </div>
            <div
                className="w-full h-4 bg-contain bg-repeat-x absolute bottom-[10%]"
                style={{
                    backgroundImage: "url(/images/train-rails.svg)"
                }}
            />
            <div
                className="w-12 h-12 absolute bottom-[10%] bg-contain transition-all ease-out duration-[1000ms] z-10"
                style={{
                    backgroundImage: "url(/images/train.svg)",
                    ...(leaveAnimation ? {
                        left: "100%",
                        transitionTimingFunction: "ease-in",
                    } : (
                        hover ? {
                            left: "10%",
                        } : {
                            left: "-3rem",
                        }
                    ))
                }}
            />
        </button>
    );
}