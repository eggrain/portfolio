import { useState } from "react";
import ScrollingLinks from "./ScrollingLinks";
import DemoLink from "./DemoLink";

export default function LinksGallery({heading, links}) {
    const [expanded, setExpanded] = useState(false);
    
    return <>
        <div className="mb-4 d-flex column-gap-1 align-items-center justify-content-center">
            <h3 className="fs-2">
                {heading}
            </h3>

            <button type="button" className="btn mt-2" title="Toggle links view"
                    onClick={() => setExpanded(!expanded)}>
                Toggle 
            </button>
        </div>
        
        { expanded === false ?
            <ScrollingLinks links={links} />
            :
            <div className="d-flex flex-wrap align-items-start
                            justify-content-center column-gap-1 row-gap-1">
                {links.map(link => <DemoLink href={link[1]} text={link[0]} />)}
            </div>
        }
    </>;
}