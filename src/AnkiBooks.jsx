import DemoLink from "./components/DemoLink";
import LinksGallery from "./components/LinksDemo";
import ScrollingLinks from "./components/ScrollingLinks";

export default function AnkiBooks() {
    const allAnkiBooksPosts = [
        ["Customizing the Trix editor", "https://eggrain.blog/customizing-the-trix-editor"],
        ["Method missing in Anki Record", "https://eggrain.blog/anki_record_method_missing"],
        // ["Screenshot of Blazor Anki Books article", "https://eggrain.blog/what-ankibooks-looks-like-part-two"],
        // ["Resource-based authorization in ASP.NET Core", "https://eggrain.blog/asp-net-core-resourced-based-authorization-example"],
        ["Example of dependency inversion in Blazor Web App", "https://eggrain.blog/prerendering-razor-components-that-request-data-in-a-blazor-web-app"],
        // ["Serializing child classes in .NET", "https://eggrain.blog/serializing-derived-class-objects-net"],
        // ["First attempt at Clean Architecture", "https://eggrain.blog/ankibooks-codereview-1"]
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
                        This idea of a collaborative platform for creating Anki flashcards, documented in the form of online books, is something I have worked on for many years. This Ruby on Rails version is the most complete so far; other versions used Laravel, Ruby on Rails, and Blazor/ASP.NET Core.
  
                    </p>

                </div>
            </div>

            <LinksGallery heading={"Blog posts about Anki Books and Blazor spike"}
                links={allAnkiBooksPosts} />

        </div>
    </section>;
}
