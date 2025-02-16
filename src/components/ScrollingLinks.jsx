import { useEffect, useRef, useState } from "react";
import DemoLink from "./DemoLink";

export default function ScrollingLinks({ links }) {
    const containerRef = useRef(null);

    links = links.concat(links);

    useEffect(() => {
        if (!containerRef.current) return;
        const container = containerRef.current;
        let scrollAmount = 0.8;
        
        const scroll = () => {
            container.scrollLeft += scrollAmount;
            if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 24) {
                container.scrollLeft = 0;
            }

            requestAnimationFrame(scroll);
        };
        
        const animation = requestAnimationFrame(scroll);
        return () => cancelAnimationFrame(animation);
    }, []);

    return (
        <div
            ref={containerRef}
            className="d-flex overflow-x-auto whitespace-nowrap column-gap-3 justify-content-center"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none", overflow: "hidden" }}
        >
            {links.map(([text, href], index) => (
                <div
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                >
                    <DemoLink text={text} href={href} />
                </div>
            ))}
        </div>
    );
}
