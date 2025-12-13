import "./css/menu.css";

export default function Menu() {
    return <div className="menu">
        <div className="card card-sm">
            <h2 className="mb-2">Portfolio Contents:</h2>
            <nav>
                <ol>
                    <li><a href="#health-section">health</a></li>
                    <li><a href="#todolist-section">todolist</a></li>
                    <li><a href="#gob-guides">lilgobguides</a></li>
                    <li><a href="#larder">larder</a></li>
                    
                    <li><a href="#ruby-ankibooks">ankibooks</a></li>
                    <li><a href="#blog">blog</a></li>
                </ol>
            </nav>
        </div>
    </div>;
}
