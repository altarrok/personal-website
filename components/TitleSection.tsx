import { PropsWithChildren, useCallback, useEffect, useRef } from "react";

export const TitleSection: React.FC<PropsWithChildren> = ({ children }) => {
    const textRef = useRef<HTMLHeadingElement>(null);

    
    const handleResize = useCallback(() => {
        if (textRef.current) {
            textRef.current.style.setProperty(
                'transform',
                `scaleX(min(1, ${(textRef.current.parentNode?.parentElement?.clientWidth || 0) / textRef.current.scrollWidth}))`
            )
        }
    }, [textRef]);

    useEffect(() => {
        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);;
    }, [handleResize])

    return (
        <div className="h-full w-full" style={{ containerType: "size" }}>
            <h1
                ref={textRef}
                className="text-white text-6xl font-bold max-w-min origin-left absolute bottom-0"
                style={{ fontSize: "50cqh" }}
            >
                {children}
            </h1>
        </div>
    );
}