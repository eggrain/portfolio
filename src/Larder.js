import List from "./components/List";

export default function Larder() {
    return <section id="larder" className="d-flex justify-content-center align-items-center">
        <div className="section-card">
            <div className="mb-4 d-flex flex-wrap justify-content-center align-items-center column-gap-3 row-gap-1">
                <h2 className="font-42px">Larder</h2>

                <div className="d-flex flex-column column-gap-1">
                    <span>Deployed:</span>
                    <a className="demo-link" href="https://larder.lol">larder.lol</a>
                </div>
                
                <div className="d-flex flex-column column-gap-1">
                    <span>Source code:</span>
                    <a className="demo-link" href="https://github.com/KyleRego/Larder">KyleRego/Larder</a>
                </div>
            </div>

            <div className="d-flex flex-wrap justify-content-center column-gap-3 align-items-center">
                <div className="flex-grow-1">
                    <p>
                        Larder is a React app and ASP.NET Core backend for taking inventories of foods and ingredients and nutrition tracking.
                    </p>
                </div>

                <List heading={"Gained experience with"} items={["React", "ASP.NET Core", "Bootstrap", "SQLite", "GitHub Actions", "Controller-service-repository architecture"]} />
            </div>

        </div>
    </section>;
}