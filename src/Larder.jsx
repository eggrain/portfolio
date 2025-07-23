import DemoLink from "./components/DemoLink";
import LinksGallery from "./components/LinksDemo";

export default function Larder() {
    const larderBlogs = [
        ["Repository unit tests in Larder" ,"https://eggrain.blog/repositoryunittestsinlarder"],
        ["ICrudServiceBase<TDto, TEntity> and ICrudRepositoryBase<TEntity>", "https://eggrain.blog/icrudservicetdotentityandicrudrepositorytentity"],
        ["Work on cooking a recipe in Larder", "https://eggrain.blog/work-on-cooking-recipe-in-larder"],
        ["Builder Pattern in Larder", "https://eggrain.blog/builder-pattern-in-larder"],
        ["Mixing object initialization and constructor syntax", "https://eggrain.blog/ef-core-constructor-and-object-initialization-syntax"],
        ["Service Locator Pattern", "https://eggrain.blog/service-locator-pattern-derived-services"],
        ["Controller-service-repository architecture", "https://eggrain.blog/comparison-of-ruby-on-rails-asp-net-core-design"],
        ["Initial work on an ASP.NET Core integration tests project", "https://eggrain.blog/aspnetcoreintegrationtesting"],
        ["[JsonConstructor] constructor for System.Text.Json", "https://eggrain.blog/jsonconstructor-constructor-for-system-text-json"]
    ];


    return <section id="larder" className="d-flex flex-wrap column-gap-3 justify-content-center align-items-center">
        <div className="card">

            <h2 className="fs-1">
                <a class="header-link" href="https://larder.eggrain.net">Larder</a>
            </h2>

            <div className="d-flex flex-wrap justify-content-center column-gap-3 align-items-center">
                <div className="flex-grow-1" style={{minWidth: "250px"}}>
                    <p>
                        Larder is a React/ASP.NET Core API and controller-service-repository architecture practice project. It was intended to be an inventory-tracking app for foods and ingredients, however the chosen architecture, as well as scope creep, made this project unwieldy for me to continue developing once I became too busy with 2 jobs.
                    </p>
                </div>
            </div>

            <LinksGallery heading={"Blog posts about Larder"} links={larderBlogs} />
        </div>
    </section>;
}