import DemoLink from "./components/DemoLink";
import LinksGallery from "./components/LinksDemo";

export default function Larder() {
    const larderBlogs = [
        ["ICrudServiceBase<TDto, TEntity> and ICrudRepositoryBase<TEntity>", "https://kylerego.github.io/icrudservicetdotentityandicrudrepositorytentity"],
        ["Work on cooking a recipe in Larder", "https://kylerego.github.io/work-on-cooking-recipe-in-larder"],
        ["Builder Pattern in Larder", "https://kylerego.github.io/builder-pattern-in-larder"],
        // ["Mock repositories vs Moq", "https://kylerego.github.io/mock-repositories-vs-moq"],
        // ["Mixing object initialization and constructor syntax", "https://kylerego.github.io/ef-core-constructor-and-object-initialization-syntax"],
        ["Service Locator Pattern", "https://kylerego.github.io/service-locator-pattern-derived-services"],
        ["Controller-service-repository architecture", "https://kylerego.github.io/comparison-of-ruby-on-rails-asp-net-core-design"],
        // ["Resource-based authorization with polymorphic UserId", "https://kylerego.github.io/resource-based-authorization-with-polymorp-user-id"],
        // ["Mocking an HTTP user", "https://kylerego.github.io/mocking-http-user"],
        // ["Fixing a data bug", "https://kylerego.github.io/fixing-a-data-bug"],
        // ["React context to track authentication state", "https://kylerego.github.io/react-context-to-track-client-side-authentication-state"],
        // ["CI/CD notes", "https://kylerego.github.io/notes-on-larder-ci-cd-setup"]
    ];


    return <section id="larder" className="d-flex flex-wrap column-gap-3 justify-content-center align-items-center">
        <div className="card">
            <div className=" d-flex flex-wrap justify-content-center align-items-center column-gap-3 row-gap-1">
                <h2 className="fs-1">Larder</h2>

                <DemoLink href="https://larder.lol"
                            text="larder.lol"
                            labelText="Deployed app:" />
            </div>

            <div className="d-flex flex-wrap justify-content-center column-gap-3 align-items-center">
                <div className="flex-grow-1" style={{minWidth: "250px"}}>
                    <p>
                        Larder is an inventory-taking app with a focus on foods and ingredients.
                    </p>
                    <p>
                        I mainly work on Larder to improve my understanding of ASP.NET Core, React, and enterprise design patterns like controller-service-repository-architecture (especially after working on a Blazor/ASP.NET Core rewrite of Anki Books where I made a lot of design mistakes implementing a "Clean Architecture").
                    </p>
                </div>

                {/* <List heading={"Gained experience with"} items={["React", "TypeScript", "ASP.NET Core", "ASP.NET Core Identity", "Entity Framework Core", "Bootstrap", "SQLite", "GitHub Actions", "Controller-service-repository architecture"]} /> */}
            </div>

            <LinksGallery heading={"Blog posts about Larder"} links={larderBlogs} />
        </div>
    </section>;
}