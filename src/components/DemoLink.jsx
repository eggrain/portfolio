
export default function DemoLink({text, href, labelText = null}) {
    return <div className="d-flex flex-column">
                {labelText !== null && <span>{labelText}</span>}
                <a className="demo-link" href={href}>{text}</a>
            </div>;
}