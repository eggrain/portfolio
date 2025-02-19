export default function List({heading, items}) {
    const listItems = items.map((item) => {
        return <li key={item}>{item}</li>
    })

    return <div className="" style={{ textWrap: "wrap", wordBreak: "break-all", maxWidth: "214px"}}>
            <h4 className="text-start mb-2 border-bottom">
                {heading}:
            </h4>
            <ul>
                {listItems}
            </ul>
        </div>;
}