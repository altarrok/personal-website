import { animated, useSpring } from "@react-spring/web";
import { useCallback, useEffect, useRef, useState } from "react";
import RichText, { Leaf } from "./RichText";

const scrollPercentageThreshold = 0.15;

// TODO:: The background is broken in mobile

export const RollingCard: React.FC<{
    from: "left" | "right",
    title: string,
    para: Leaf[],
}> = ({ from, title, para }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const { x } = useSpring({
        from: { x: 0 },
        to: { x: scrollPercentage },
    })

    const onScroll = useCallback(() => {
        if (cardRef.current) {
            const scrollPercentage = Math.max(0,
                Math.min(scrollPercentageThreshold,
                    1 - ((cardRef.current.getBoundingClientRect().top + cardRef.current.getBoundingClientRect().bottom) / (2 * document.documentElement.clientHeight))
                )
            );

            setScrollPercentage(scrollPercentage);
        }
    }, [cardRef])

    useEffect(() => {
        onScroll();

        window.addEventListener('scroll', onScroll, { passive: true });

        return () => window.removeEventListener('scroll', onScroll);
    }, [onScroll])

    return (
        <div
            ref={cardRef}
            className="relative overflow-hidden w-full h-full rounded-3xl"
        >
            <animated.div
                className="absolute rounded-3xl bg-repeat h-full overflow-hidden"
                style={{
                    width: x.to({
                        range: [0, scrollPercentageThreshold],
                        output: [33, 100]
                    }).to(value => `${value}%`),
                    [from]: 0,
                    backgroundImage: "url(/images/brick-wall.svg)",
                    backgroundSize: "222px 150px",
                }}
            >
                <div className="w-full h-full bg-white/80" />
            </animated.div>

            <animated.div
                className="absolute z-10 rounded-3xl w-full h-full py-3 px-6 flex flex-col justify-center"
                style={{
                    clipPath: x.to({
                        range: [0, scrollPercentageThreshold],
                        output: [67, 0]
                    }).to(value => (
                        from === "left" ? (
                            `inset(0 ${value}% 0 0)`
                        ) : (
                            `inset(0 0 0 ${value}%)`
                        )
                    )),
                    [from]: 0,
                }}
            >
                <h3 className="text-2xl font-bold">{title}</h3>
                <span className="block text-base font-semibold text-justify">
                    <RichText content={para} />
                </span>
            </animated.div>
        </div>
    );
}