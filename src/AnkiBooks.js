import List from "./components/List"

export default function AnkiBooks() {
    return <section id="ruby-ankibooks">
        <div className="mb-4 d-flex flex-wrap justify-content-around align-items-center row-gap-1">
            <h2 className="font-42px">Anki Books</h2>

            <a className="demo-link" href="https://ankibooks.io">ankibooks.io</a>

            <a className="demo-link" href="https://github.com/KyleRego/ankibooks">KyleRego/ankibooks</a>
        </div>

        <div className="d-flex flex-wrap justify-content-around column-gap-3 align-items-center">
            <div className="flex-grow-1" style={{maxWidth: "720px", minWidth: "460px"}}>
                <p>
                    Anki Books is a Ruby on Rails web application for taking notes and creating flashcards.
                </p>

                <p>
                    The most notable feature is that the user's data can be exported as an *.apkg file that can be imported into the desktop app Anki (not affiliated).
                </p>

                <p>
                    As part of the modular design of this app, I developed a Ruby gem called Anki Record for handling the Anki deck package files before starting work on the Rails app itself.
                </p>    
            </div>

            <List heading={"Gained experience with"} items={["Ruby on Rails 7", "PostgreSQL", "Turbo", "Stimulus", "RSpec", "Selenium", "Capybara", "Trix editor", "Import maps"]} />
        </div>

        <div>
            <h3 className="text-center mb-4 font-36px">Screenshots:</h3>

            <div className="overflow-x-scroll">
                <div className="w-100 d-flex column-gap-3 align-items-center justify-content-start">
                    <img className="demo-screenshot" src="ankibooks-screenshot-1.png" alt="Anki Books article" />

                    <img className="demo-screenshot" src="ankibooks-screenshot-2.png" alt="Anki Books article editor" />

                    <img className="demo-screenshot" src="ankibooks-screenshot-3.png" alt="Anki Books books tree" />
                </div>
            </div> 
        </div>
            
    </section>  
}
