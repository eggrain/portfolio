import { useEffect, useRef, useMemo } from "react";
import DemoLink from "./DemoLink";

export default function ScrollingLinks({ links }) {
    const containerRef = useRef(null);
    const scrollDirectionRef = useRef(1);
    const duplicatedLinks = useMemo(() => links.concat(links), [links]);
    let baseScrollAmount = 0.8;
    let zoomFactor = window.devicePixelRatio; // Detect zoom level
    let scrollAmount = baseScrollAmount * zoomFactor; // Adjust scroll step size

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
            className="d-flex overflow-x-auto whitespace-nowrap column-gap-3 justify-content-center"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none", overflow: "hidden" }}
        >
            {duplicatedLinks.map(([text, href], index) => (
                <DemoLink text={text} href={href} key={index} />
            ))}
        </div>
    );
}
