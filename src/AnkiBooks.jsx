import List from "./components/List"
import Screenie from "./components/Screenie";
import DemoLink from "./components/DemoLink";

export default function AnkiBooks() {
    return <section id="ruby-ankibooks" className="d-flex justify-content-center align-items-center">
        <div className="card">
            <div className="mb-4 d-flex flex-wrap justify-content-center align-items-center column-gap-3 row-gap-1">
                <h2 className="font-42px">Anki Books</h2>

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
                        Anki Books is a flashcards and note-taking app that creates Anki deck package files (*.apkg files) from the user's data for download that the desktop app Anki (not affiliated) can import.
                    </p>
                    <p>
                        As part of the modular design of this app, I developed a Ruby gem called Anki Record which provides a Ruby API for creating and updating *.apkg files, which are zipped SQLite databases.
                    </p>    
                </div>

                <List heading={"Gained experience with"} items={["Ruby on Rails 7", "Hotwire", "Import maps", "RSpec", "Cucumber", "Selenium WebDriver", "Bootstrap", "PostgreSQL", "SQLite", "Ruby gems"]} />
            </div>

            <h3 className="my-4 font-24px">
                Blog posts about Anki Books
            </h3>

            <div className="my-4 d-flex column-gap-1 flex-wrap row-gap-1 justify-content-center">
                <DemoLink text="Customizing the Trix editor" href="https://kylerego.github.io/customizing-the-trix-editor" />
                <DemoLink text="Method missing in the Anki Record gem" href="https://kylerego.github.io/anki_record_method_missing" />
            </div>

            <h3 className="mt-2 mb-4 font-24px">
                Blog posts about Blazor/ASP.NET Core Anki Books spike
            </h3>

            <div className="d-flex column-gap-1 flex-wrap row-gap-1 justify-content-center">
                <DemoLink text="Screenshot of Blazor Anki Books article" href="https://kylerego.github.io/what-ankibooks-looks-like-part-two" />
                <DemoLink text="Resource based authorization in ASP.NET Core" href="https://kylerego.github.io/asp-net-core-resourced-based-authorization-example" />
                <DemoLink text="Example of dependency injection in Blazor Web App" href="https://kylerego.github.io/prerendering-razor-components-that-request-data-in-a-blazor-web-app" />
                <DemoLink text="Serializing child classes in .NET" href="https://kylerego.github.io/serializing-derived-class-objects-net" />
                <DemoLink text="Frst attempt at Clean Architecture" href="https://kylerego.github.io/ankibooks-codereview-1" />
            </div>
        </div>
    </section>;
}
