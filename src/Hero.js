import List from "./components/List";

import "./hero.css";

export default function Hero() {
    return <section id="hero" className="d-flex justify-content-center align-items-center">
                <div className="section-card">
                        <div className="d-flex flex-column align-items-center column-gap-1">
                            <div className="hero-card">
                                <div className="hero-card-image">
                                    <img src="me.png" alt="Me" />
                                </div>
                                <div className="hero-card-heading">
                                    Kyle Rego
                                </div>
                                <div className="hero-card-text">
                                    Software Developer
                                </div>
                            </div>

                            <p className="text-center font-20px" style={{maxWidth: "720px"}}>
                                Objective: to be hired in a software developer, support engineer, or other technical position to grow as an IT professional.
                            </p>

                            <div className="d-flex flex-wrap align-items-start justify-content-around column-gap-3 row-gap-1">
                                <List heading={"Languages"} items={["C#", "JavaScript", "Ruby"]} />

                                <List heading={"Databases"} items={["SQLite", "PostgreSQL"]} />

                                <List heading={"Frameworks and libraries"} items={["ASP.NET Core", "React", "Blazor", "Ruby on Rails"]} />

                                <List heading={"Tools"} items={["Git", "Visual Studio Code"]} />

                            </div>
                        </div>
                </div>
        </section>;
}
