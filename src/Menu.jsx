import "./css/menu.css";

export default function Menu() {
    return <div className="menu">
        <div className="card card-sm">
            <h2 className="mb-2">Portfolio Contents:</h2>
            <nav>
                <ol>
                    <li><a href="#hero">Kyle Rain</a></li>
                    <li><a href="#larder">Larder</a></li>
                    <li><a href="#gob-guides">Gob Guides</a></li>
                    <li><a href="#ruby-ankibooks">Anki Books</a></li>
                    <li><a href="#blog">Blog</a></li>
                </ol>
            </nav>
        </div>
    </div>;
}
