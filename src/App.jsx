import Hero from "./Hero";
import AnkiBooks from "./AnkiBooks";
import Larder from "./Larder";
import Menu from "./Menu";
import Blog from "./Blog";
import Oldschool from "./Oldschool";
import Todolist from "./Todolist";
import Health from "./Health";

import "./css/App.css";

import "./css/utility.css";
import "./css/flex.css";
import "./css/fonts.css";
import "./css/backgrounds.css";

export default function App() {
    return <>
        <Menu />

        <div className="App" style={{width: "100%", maxWidth: "100vw"}}>
            <Hero />
            <Health />
            <Todolist />
            <Oldschool />
            <Larder />
            <AnkiBooks />
            <Blog />
        </div>
    </>;
}
