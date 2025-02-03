export default function List({heading, items}) {
    const listItems = items.map((item) => {
        return <li key={item}>{item}</li>
    })

    return <div className="font-18px" style={{ textWrap: "wrap", wordBreak: "break-all", maxWidth: "214px"}}>
            <h4 className="text-start mb-2 font-20px border-bottom">
                {heading}:
            </h4>
            <ul>
                {listItems}
            </ul>
        </div>;
}