import Hero from "./Hero";
import AnkiBooks from "./AnkiBooks";
import Menu from "./Menu";

import "./App.css";
import "./utility.css";
import "./flex.css";
import "./fonts.css";

function App() {
    return <>
        <Menu />

        <div className="App" style={{width: "100%", maxWidth: "100vw"}}>
   
            <Hero />
            <AnkiBooks />

        </div>
    </>;
}

export default App;
