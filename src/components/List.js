export default function List({heading, items}) {
    const listItems = items.map((item) => {
        return <li key={item}>{item}</li>
    })

    return <ul className="font-18px">
                <h4 className="mb-2 font-20px m-auto w-fit border-bottom">{heading}:</h4>
                {listItems}
            </ul>
}