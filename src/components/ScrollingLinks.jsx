import { useEffect, useRef, useMemo } from "react";
import DemoLink from "./DemoLink";

export default function ScrollingLinks({ links }) {
    const containerRef = useRef(null);
    const scrollDirectionRef = useRef(1);
    const duplicatedLinks = useMemo(() => links.concat(links), [links]);
    const scrollAmount = 1.5;

    useEffect(() => {
        if (!containerRef.current) return;
        const container = containerRef.current;
        let animationFrameId;

        const scroll = () => {
            container.scrollLeft += scrollAmount * scrollDirectionRef.current;

            if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 24) {
                scrollDirectionRef.current = -1;
            } else if (container.scrollLeft <= 0) {
                scrollDirectionRef.current = 1;
            }

            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);

        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <div
            ref={containerRef}
            className="d-flex column-gap-1 justify-content-center align-items-center"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none", overflow: "hidden" }}
        >
            {duplicatedLinks.map(([text, href], index) => (
                <DemoLink text={text} href={href} key={index} />
            ))}
        </div>
    );
}
