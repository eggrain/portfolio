import LinksGallery from "./components/LinksDemo";

export default function Todolist() {

    const todolistPosts = [
        ["Explanation of a Program.cs file","https://eggrain.blog/programcs"]
    ];

    return <section id="todolist-section" className="d-flex justify-content-center align-items-center">
                <div className="card">
                    <h2 className="fs-1">
                        <a className="header-link" href="https://todolist.eggrain.net">todolist.eggrain.net</a>
                    </h2>
                    
                    <div>
                        <p>
                            <code>todolist</code> is an ASP.NET Core Razor Pages app where I've deliberately taken a tactical approach with no unit tests and asynchronous JavaScript assisted by ChatGPT.
                        </p>
                        <p>
                           Inspired by a planner book that I was using, todolist quickly supplanted that planner, and has become my home base with checklists, goals, progress notes, and project development planning features.
                        </p>
                    </div>

                    <LinksGallery heading={"Blog post:"} links={todolistPosts} />

                </div>

        </section>;
}
