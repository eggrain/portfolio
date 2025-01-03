
export default function DemoLink({text, href, labelText = null}) {
    return <div className="d-flex flex-column justify-content-start">
                {labelText !== null && <span style={{fontWeight: 600, textAlign: "left"}}>{labelText}</span>}
                <a className="demo-link" href={href}>{text}</a>
            </div>;
}