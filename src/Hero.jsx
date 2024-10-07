import List from "./components/List";

import "./css/hero.css";

export default function Hero() {
    return <section id="hero" className="d-flex justify-content-center align-items-center">
                <div className="section-card">
                        <div className="d-flex flex-column align-items-center column-gap-1">
                            <div className="hero-card d-flex flex-wrap-reverse justify-content-center column-gap-3 align-items-center">

                                <div>
                                    <h1 className="mb-2 hero-card-heading">
                                        Kyle Rego
                                    </h1>
                                    <div className="mb-2 hero-card-text">
                                        Software Developer (Web)
                                    </div>
                                    <div className="d-flex justify-content-around">
                                        <a href="mailto:regoky@outlook.com">Email</a>
                                        <a href="https://www.linkedin.com/in/kyle-rego-117b25139/">LinkedIn</a>
                                    </div>
                                </div>

                                <div className="hero-card-image">
                                    <img src="me.png" alt="Me" />
                                </div> 
                            </div>

                            <p className="text-center font-20px mt-0" style={{maxWidth: "720px"}}>
                                <h2 className="border-bottom font-20px w-fit d-inline">Portfolio Objective: </h2>
                                to be hired in a software developer, support engineer, or other technical position to grow as an IT professional.
                            </p>
                            

                            <div className="d-flex flex-wrap align-items-start justify-content-around column-gap-3 row-gap-1 mb-4">
                                <List heading={"Languages"} items={["Java (learning)", "C#", "JavaScript", "Ruby"]} />

                                <List heading={"Frameworks and libraries"} items={["Spring Boot (learning)", "ASP.NET Core", "React", "Blazor", "Ruby on Rails"]} />

                                <List heading={"Databases"} items={["SQLite", "PostgreSQL"]} />

                                <List heading={"Tools"} items={["Git", "Visual Studio Code"]} />

                                <List heading={"Operating Systems"} items={["Windows", "Linux"]} />
                            </div>
                        </div>
                </div>
        </section>;
}
