import List from "./components/List"
import Screenie from "./components/Screenie";

export default function AnkiBooks() {
    return <section id="ruby-ankibooks" className="d-flex justify-content-center align-items-center">
        <div className="section-card">
            <div className="mb-4 d-flex flex-wrap justify-content-center align-items-center column-gap-3 row-gap-1">
                <h2 className="font-42px">Anki Books</h2>

                <div className="d-flex flex-column column-gap-1">
                    <span>Deployed:</span>
                    <a className="demo-link" href="https://ankibooks.io">ankibooks.io</a>
                </div>
                
                <div className="d-flex flex-column column-gap-1">
                    <span>Source code:</span>
                    <a className="demo-link" href="https://github.com/KyleRego/ankibooks">KyleRego/ankibooks</a>
                </div>
            </div>

            <div className="d-flex flex-wrap justify-content-center column-gap-3 align-items-center">
                <div className="flex-grow-1">
                    <p>
                        Anki Books is a Ruby on Rails web application for taking notes and creating flashcards.
                    </p>

                    <p>
                        The most notable feature is being able to export flashcards as an *.apkg file that the desktop app Anki (not affiliated) can import.
                    </p>

                    <p>
                        As part of the modular design of this app, I developed a Ruby gem called Anki Record for handling the Anki deck package files before starting work on the Rails app itself.
                    </p>    
                </div>

                <List heading={"Gained experience with"} items={["Ruby on Rails 7", "PostgreSQL", "Turbo", "Stimulus", "RSpec", "Selenium", "Capybara", "Trix editor", "Import maps", "Cascade Layers"]} />
            </div>

            <div className="d-flex column-gap-3 align-items-center justify-content-start overflow-x-scroll">
                <Screenie src={"ankibooks-screenshot-1.png"} alt={"Example of an Anki Books article, one with some of my notes on the Ruby book 'Service-Oriented Design.' Articles have one long text and many notes on the right side which can be basic notes or cloze notes. The notes can be inserted at any ordinal position and reordered with the HTML drag and drop API."} />

                <Screenie src={"ankibooks-screenshot-2.png"} alt={"Using the Anki Books article editor. This was developed using the Trix editor/Action Text in Rails; I added the H2-H6 heading buttons and syntax highlighting with code blocks."} />

                <Screenie src={"ankibooks-screenshot-3.png"} alt={"The Anki Books books tree."} />
            </div>
            
        </div>
    </section>;
}
