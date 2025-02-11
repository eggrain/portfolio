import List from "./components/List";
import DemoLink from "./components/DemoLink";

export default function Larder() {
    return <section id="larder" className="d-flex flex-wrap column-gap-3 justify-content-center align-items-center">
        <div className="card">
            <div className="mb-4 d-flex flex-wrap justify-content-center align-items-center column-gap-3 row-gap-1">
                <h2 className="font-42px">Larder</h2>

                <DemoLink href="https://larder.lol"
                            text="larder.lol"
                            labelText="Deployed app:" />
            </div>

            <div className="d-flex flex-wrap justify-content-center column-gap-3 align-items-center">
                <div className="flex-grow-1" style={{minWidth: "250px"}}>
                    <p>
                        Larder is an inventory-taking app with a focus on foods, cooking, and nutrition.
                    </p>
                    <p>
                        One of my motivations with this project was to work through implications of some popular enterprise design patterns (implications of controller-service-repository architecture for unit testing and OO design).
                    </p>
                    <p>
                        Additionally, the design of items in Larder evolved toward an entity-component architecture after it was initially inheritance based.
                    </p>
                </div>

                <List heading={"Gained experience with"} items={["React", "TypeScript", "ASP.NET Core", "ASP.NET Core Identity", "Entity Framework Core", "Bootstrap", "SQLite", "GitHub Actions", "Controller-service-repository architecture"]} />
            </div>

        </div>
    </section>;
}