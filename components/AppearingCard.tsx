import { animated, useSpring } from "@react-spring/web";
import { useCallback, useEffect, useRef, useState } from "react";

const scrollPercentageThreshold = 0.25;

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
        const scrollPercentage = Math.max(0,
            Math.min(scrollPercentageThreshold,
                1 - ((cardRef.current.getBoundingClientRect().top + cardRef.current.getBoundingClientRect().bottom) / (2 * document.documentElement.clientHeight))
            )
        );

        setScrollPercentage(scrollPercentage);
    }, [cardRef.current])

    useEffect(() => {
        if (cardRef.current) {
            window.addEventListener('scroll', onScroll, { passive: true });

            return () => window.removeEventListener('scroll', onScroll);
        }
    }, [cardRef.current])

    return (
        <animated.div
            ref={cardRef}
            className="overflow-hidden w-full h-full rounded-3xl bg-repeat bg-contain"
            style={{
                opacity: x.to({
                    range: [0, scrollPercentageThreshold],
                    output: [25, 100]
                }).to(value => `${value}%`),
                backgroundImage: "url(/images/brick-wall.svg)",
            }}
        >
            <div className="w-full h-full bg-white/50 p-3 flex flex-col items-center justify-center">
                <img src={img.src} alt={img.alt} width="80%" />
                <h2 className="text-4xl font-bold">{title}</h2>
                <h3 className="text-2xl font-semibold">{subtitle}</h3>
                <h4 className="text-lg italic">{footer}</h4>
            </div>
        </animated.div>
    );
}