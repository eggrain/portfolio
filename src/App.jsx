import Hero from "./Hero";

import "./css/App.css";
import "./css/utility.css";
import "./css/flex.css";
import "./css/fonts.css";
import "./css/backgrounds.css";

export default function App() {
    return <>
        <div className="App" style={{ width: "100%", maxWidth: "100vw" }}>
            <Hero />
        </div>
    </>;
}