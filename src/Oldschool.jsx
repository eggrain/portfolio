import LinksGallery from "./components/LinksDemo";

export default function Oldschool() {
    const gobBlogPosts = [
        ["File uploads in lilgobguides (Razor pages)" ,"https://eggrain.blog/file-uploads-lilgobguides"],
        ["Notes on lilgobguides build and CI/CD (Razor pages)", "https://eggrain.blog/lilgobguides-build-and-cicd-notes"],
        ["Razor pages file upload model binding with EF Core", "https://eggrain.blog/img-upload-for-card-header"],
        ["Initial work integrating Trix editor into Razor pages", "https://eggrain.blog/initial-trix-editor-razor-pages"],
        ["How to seed an ASP.NET Core Identity user", "https://eggrain.blog/how-to-seed-an-asp-net-core-identity-user"],
    ]

    return <section id="oldschool" className="d-flex justify-content-center align-items-center">
                <div className="card">
                    <h2 className="fs-1">
                        <a className="header-link" href="https://oldschool.eggrain.net">oldschool.eggrain.net</a>
                    </h2>
                    
                    <p>
                        An Old School RuneScape hobby site built with Razor Pages; after working on Larder (React + ASP.NET Core Web API) and the Blazor Anki Books (Blazor Web App with mixed client- and server-rendered HTML), I found server-rendered HTML to be a much better experience as a solo developer.
                    </p>

                    <LinksGallery heading={"Related technical blog posts"} links={gobBlogPosts} />

                </div>

        </section>;
}
