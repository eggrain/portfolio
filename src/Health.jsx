import LinksGallery from "./components/LinksDemo";

export default function Health() {

    const healthPosts = [
        ["What I want to put into a template of a Razor Pages app","https://eggrain.blog/what-i-want-in-a-razor-pages-app-template"]
    ];

    return <section id="health-section" className="d-flex justify-content-center align-items-center">
                <div className="card">
                    <h2 className="fs-1">
                        <a className="header-link" href="https://health.eggrain.net">health.eggrain.net</a>
                    </h2>
                    
                    <div>
                        <p>
                            <code>health</code> is a weight tracking app with an architecture largely overlapping with <a href="#todolist-section"><code>todolist</code></a> (Razor Pages monolith with ASP.NET Core Identity, Entity Framework Core, SQLite database, Bootstrap-specifically, compiling the Bootstrap NPM package with Dart Sass).
                        </p>
                    </div>

                    <LinksGallery heading={"Blog post:"} links={healthPosts} />

                </div>

        </section>;
}
