import List from "./components/List";
import DemoLink from "./components/DemoLink";

export default function Larder() {
    return <section id="larder" className="d-flex flex-wrap column-gap-3 justify-content-center align-items-center">
        <div className="card">
            <div className=" d-flex flex-wrap justify-content-center align-items-center column-gap-3 row-gap-1">
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
                        One of my motivations with Larder was to work through the implications 
                        of popular enterprise design patterns such as controller-service-repository architecture (especially after working on a Blazor/ASP.NET Core rewrite of Anki Books where I made a lot of mistakes implementing a "Clean Architecture").
                    </p>
                    <p>               
                        Additionally, the design of items in Larder evolved toward an entity-component architecture after it was initially inheritance based.
                    </p>
                </div>

                <List heading={"Gained experience with"} items={["React", "TypeScript", "ASP.NET Core", "ASP.NET Core Identity", "Entity Framework Core", "Bootstrap", "SQLite", "GitHub Actions", "Controller-service-repository architecture"]} />
            </div>

            <h3 className="mt-2 mb-4 font-24px">
                Blog posts about Larder
            </h3>

            <div className="d-flex column-gap-1 flex-wrap row-gap-1 justify-content-center">
                <DemoLink text="Builder Pattern in Larder" href="https://kylerego.github.io/builder-pattern-in-larder" />
                <DemoLink text="Mock repositories vs Moq" href="https://kylerego.github.io/mock-repositories-vs-moq" />
                <DemoLink text="Mixing object initialization and constructor syntax" href="https://kylerego.github.io/ef-core-constructor-and-object-initialization-syntax" />
                <DemoLink text="Service Locator Pattern" href="https://kylerego.github.io/service-locator-pattern-derived-services" />
                <DemoLink text="Controller, service, and repository layers" href="https://kylerego.github.io/comparison-of-ruby-on-rails-asp-net-core-design" />
                <DemoLink text="Resource based authorization with polymorphic UserId (ASP.NET Core Identity)" href="https://kylerego.github.io/resource-based-authorization-with-polymorp-user-id" />
                <DemoLink text="Mocking an HTTP user" href="https://kylerego.github.io/mocking-http-user" />
                <DemoLink text="Fixing a data bug" href="https://kylerego.github.io/fixing-a-data-bug" />
                <DemoLink text="React context to track authentication state" href="https://kylerego.github.io/react-context-to-track-client-side-authentication-state" />
                <DemoLink text="CI/CD notes" href="https://kylerego.github.io/notes-on-larder-ci-cd-setup" />
            </div>
        </div>
    </section>;
}