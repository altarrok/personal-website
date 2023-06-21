import { animated, useSpring } from "@react-spring/web";
import { useCallback, useEffect, useRef, useState } from "react";

const scrollPercentageThreshold = 0.3;

export const AppearingCard: React.FC = () => {
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
                        output: [50, 100]
                    }).to(value => `${value}%`),
                    backgroundImage: "url(/images/brick-wall.svg)",
                }}
        >

            </animated.div>
    );
}