import LinksGallery from "./components/LinksDemo";

export default function Larder() {
    const larderBlogs = [
        ["Initial work on an ASP.NET Core integration tests project", "https://eggrain.github.io/aspnetcoreintegrationtesting"],
        ["Repository unit tests in Larder" ,"https://eggrain.github.io/repositoryunittestsinlarder"],
        ["ICrudServiceBase<TDto, TEntity> and ICrudRepositoryBase<TEntity>", "https://eggrain.github.io/icrudservicetdotentityandicrudrepositorytentity"],
        ["Work on cooking a recipe in Larder", "https://eggrain.github.io/work-on-cooking-recipe-in-larder"],
        ["Builder Pattern in Larder (C#)", "https://eggrain.github.io/builder-pattern-in-larder"],
        ["Mixing constructor and object initialization syntax (EF Core)", "https://eggrain.github.io/ef-core-constructor-and-object-initialization-syntax"],
        ["Service Locator Pattern to provide services to an abstract base class (ASP.NET Core)", "https://eggrain.github.io/service-locator-pattern-derived-services"],
        ["Controller-service-repository architecture", "https://eggrain.github.io/comparison-of-ruby-on-rails-asp-net-core-design"],
        
        ["[JsonConstructor] constructor for System.Text.Json", "https://eggrain.github.io/jsonconstructor-constructor-for-system-text-json"]
    ];


    return <section id="larder" className="video-section d-flex flex-wrap column-gap-3 justify-content-center align-items-center">
        <div className="bg-video">
            <video autoPlay muted loop playsInline preload="metadata">
            <source src="/videos/larder.mp4" type="video/mp4" />
            </video>
        </div>
        <div className="card">

            <h2 className="fs-1">
                <a className="header-link" href="https://larder.eggrain.net">larder.eggrain.net</a>
            </h2>

            <div className="d-flex flex-wrap justify-content-center column-gap-3 align-items-center">
                <div className="flex-grow-1" style={{minWidth: "250px"}}>
                    <p>
                        Larder is a React/ASP.NET Core API and controller-service-repository practice project. It was intended to be an inventory-tracking app for foods and ingredients, however the chosen architecture, as well as scope creep, made this project unwieldy for me to continue developing once I became too busy with 2 jobs. 
                    </p>
                    <p>
                        Despite its unfinished state and backend features developed with no UI to utilize them, Larder was a good learning experience for the architecture emphasizing separation of concerns, React, ASP.NET Core, and design patterns like service locator, builder, and entity-component-system.
                    </p>
                </div>
            </div>

            <LinksGallery heading={"Blog posts:"} links={larderBlogs} />
        </div>
    </section>;
}