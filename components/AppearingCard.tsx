import { animated, useSpring } from "@react-spring/web";
import { useCallback, useEffect, useRef, useState } from "react";

const scrollPercentageThreshold = 0.2;

export const AppearingCard: React.FC<{
    img: {
        src: string,
        alt: string,
    },
    title: string,
    subtitle: string,
    footer: string,
}> = ({ img, title, subtitle, footer }) => {
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
                    1 - (cardRef.current.getBoundingClientRect().top / document.documentElement.clientHeight)
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
        <animated.div
            ref={cardRef}
            className="overflow-hidden w-full h-full rounded-3xl bg-repeat bg-contain"
            style={{
                opacity: x.to({
                    range: [0, scrollPercentageThreshold],
                    output: [20, 100]
                }).to(value => `${value}%`),
                backgroundImage: "url(/images/brick-wall.svg)",
                backgroundSize: "7.4rem 5rem",
            }}
        >
            <div className="w-full h-full bg-white/80 p-3 flex xl:flex-col items-center justify-evenly xl:justify-center">
                <img src={img.src} alt={img.alt} className="max-h-24 max-w-[35%] xl:max-w-[80%]" />
                <div className="flex flex-col xl:items-center">
                    <h2 className="text-4xl font-bold">{title}</h2>
                    <h3 className="text-2xl font-semibold">{subtitle}</h3>
                    <h4 className="text-lg italic">{footer}</h4>
                </div>
            </div>
        </animated.div>
    );
}