import DemoLink from "./components/DemoLink";
import LinksGallery from "./components/LinksDemo";

export default function AnkiBooks() {
    const allAnkiBooksPosts = [
        ["Setting up Anki Books for development on WSL2 Ubuntu","https://eggrain.blog/setting-up-development-ankibooks"],
        ["Customizing the Trix editor", "https://eggrain.blog/customizing-the-trix-editor"],
        ["Method missing in Anki Record", "https://eggrain.blog/anki_record_method_missing"],
        ["Considerations when prerendering Razor components that request data in a Blazor Web App", "https://eggrain.blog/prerendering-razor-components-that-request-data-in-a-blazor-web-app"],
    ];

    return <section id="ruby-ankibooks" className="d-flex justify-content-center align-items-center">
        <div className="card">
            <div className="mb-4 d-flex flex-wrap justify-content-center align-items-center column-gap-3 row-gap-1">
                <h2 className="fs-1">Anki Books</h2>

                <DemoLink href="https://ankibooks.io"
                            text="ankibooks.io"
                            labelText="Deployed app:" />

                <DemoLink href="https://rubygems.org/gems/anki_record/versions/0.4.1"
                            text="Anki Record"
                            labelText="Ruby gem:" />

            </div>

            <div className="d-flex flex-wrap justify-content-center column-gap-3 align-items-center">
                <div className="flex-grow-1 min-w-50">
                    <p>
                        Anki Books is an app that combines flashcards with online books; it is able to create Anki deck package files (*.apkg files which are zipped SQLite databases) for download that the desktop app Anki (not affiliated) can import, using Anki Record, a Ruby gem that I developed.
                    </p>
                    <p>
                        The idea of a collaborative platform for creating Anki flashcards, documented in the form of online books, was the app idea that lead me to teach myself programming in 2021 and something I worked on off and on for many years. This Ruby on Rails version is the most complete so far; other versions used Laravel, Ruby on Rails, and Blazor/ASP.NET Core.
  
                    </p>

                </div>
            </div>

            <LinksGallery heading={"Blog posts about Anki Books and Blazor spike"}
                links={allAnkiBooksPosts} />

        </div>
    </section>;
}
