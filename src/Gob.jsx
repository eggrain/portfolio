import LinksGallery from "./components/LinksDemo";

export default function Gob() {
    const gobBlogPosts = [
        ["File uploads in lilgobguides (Razor pages)" ,"https://eggrain.blog/file-uploads-lilgobguides"],
        ["Notes on lilgobguides build and CI/CD (Razor pages)", "https://eggrain.blog/lilgobguides-build-and-cicd-notes"],
        ["Razor pages file upload model binding with EF Core", "https://eggrain.blog/img-upload-for-card-header"],
        ["Initial work integrating Trix editor into Razor pages", "https://eggrain.blog/initial-trix-editor-razor-pages"],
        ["How to seed an ASP.NET Core Identity user", "https://eggrain.blog/how-to-seed-an-asp-net-core-identity-user"],
    ]


    return <section id="gob-guides" className="d-flex justify-content-center align-items-center">
                <div className="card">
                    <h2 className="fs-1">
                        <a className="header-link" href="https://lilgobslayerguides.net">lilgobslayerguides.net</a>
                    </h2>
                    
                    
                        <p>
                           lilgobguides is my Old School Runescape blog/guides website. It was my return to server-rendered HTML, which I think is the best choice for a solo developer in most cases (embracing that opinion of Rails again!).
                        </p>
                    

                    <LinksGallery heading={"Related technical blog posts"} links={gobBlogPosts} />

                </div>

        </section>;
}
