import List from "./components/List";
import DemoLink from "./components/DemoLink";

export default function Larder() {
    return <section id="larder" className="d-flex justify-content-center align-items-center">
        <div className="section-card">
            <div className="mb-4 d-flex flex-wrap justify-content-center align-items-center column-gap-3 row-gap-1">
                <h2 className="font-42px">Larder</h2>

                <DemoLink href="https://larder.lol"
                            text="larder.lol"
                            labelText="Deployed:" />
            </div>

            <div className="d-flex flex-wrap justify-content-center column-gap-3 align-items-center">
                <div className="flex-grow-1">
                    <p>
                        Larder is a React and ASP.NET Core web app mainly for taking inventories of foods and ingredients.
                    </p>
                </div>

                <List heading={"Gained experience with"} items={["React", "ASP.NET Core", "ASP.NET Core Identity", "Entity Framework Core", "Bootstrap", "SQLite", "GitHub Actions", "Controller-service-repository architecture"]} />
            </div>

        </div>
    </section>;
}