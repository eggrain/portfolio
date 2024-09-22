export default function List({heading, items}) {
    const listItems = items.map((item) => {
        return <li key={item}>{item}</li>
    })

    return <div className="font-18px">
            <h4 className="mb-2 font-20px border-bottom">{heading}:</h4>
            <ul>
                {listItems}
            </ul>
            </div>
}