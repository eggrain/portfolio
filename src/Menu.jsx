import "./css/menu.css";

export default function Menu() {
    return <div className="menu">
        <div className="card card-sm">
            <h2 className="mb-4">Portfolio Contents:</h2>
            <nav>
                <ol>
                    <li><a href="#hero">Kyle Rego</a></li>
                    <li><a href="#ruby-ankibooks">Anki Books</a></li>
                    <li><a href="#gob-guides">Gob Guides</a></li>
                    <li><a href="#larder">Larder</a></li>
                    <li><a href="#blog">Developer blog</a></li>
                </ol>
            </nav>
        </div>
    </div>;
}
