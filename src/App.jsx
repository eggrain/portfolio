import Hero from "./Hero";
import AnkiBooks from "./AnkiBooks";
import Larder from "./Larder";
import Menu from "./Menu";
import Blog from "./Blog";
import Gob from "./Gob";

import "./css/App.css";
import "./css/hero.css";
import "./css/utility.css";
import "./css/flex.css";
import "./css/fonts.css";
import "./css/sections.css";

export default function App() {
    return <>
        <Menu />

        <div className="App" style={{width: "100%", maxWidth: "100vw"}}>
            <Hero />
            <AnkiBooks />
            <Gob />
            <Larder />
            <Blog />
        </div>
    </>;
}
