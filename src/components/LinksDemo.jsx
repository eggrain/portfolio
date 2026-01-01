import { useState } from "react";
import ScrollingLinks from "./ScrollingLinks";
import DemoLink from "./DemoLink";

export default function LinksGallery({ heading, links }) {
    if (links.length === 1) {
        const [text, href] = links[0];

        return (
            <div className="justify-content-center d-flex column-gap-1">
                <h3 className="fs-2 mb-3 text-center">
                    {heading}
                </h3>

                <div className="d-flex justify-content-center">
                    <DemoLink href={href} text={text} />
                </div>
            </div>
        );
    }

    const [expanded, setExpanded] = useState(false);

    return (
        <>
            <div className="mb-4 d-flex column-gap-1 align-items-cs justify-content-center">
                <h3 className="fs-2">
                    {heading}
                </h3>

                <button
                    type="button"
                    className="btn mt-2"
                    title="Toggle links view"
                    onClick={() => setExpanded(!expanded)}
                >
                    Toggle
                </button>
            </div>

            {expanded === false ? (
                <ScrollingLinks links={links} />
            ) : (
                <div
                    className="d-flex flex-wrap align-items-center
                               justify-content-center column-gap-1 row-gap-1"
                >
                    {links.map(link => (
                        <DemoLink
                            key={link[1]}
                            href={link[1]}
                            text={link[0]}
                        />
                    ))}
                </div>
            )}
        </>
    );
}
