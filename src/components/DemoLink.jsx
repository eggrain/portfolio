
export default function DemoLink({text, href, labelText = null}) {
    return <div className="demo-link d-flex flex-column justify-content-start" title={text} >
                {labelText !== null && <span style={{fontWeight: 600, textAlign: "left"}}>{labelText}</span>}
                <a href={href} style={{whitespace: "normal", overflowWrap: "break-word", minWidth: "180px"}}>{text}</a>
            </div>;
}