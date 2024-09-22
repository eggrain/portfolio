import List from "./components/List";

export default function Blog() {
    return <section id="blog" className="d-flex justify-content-center align-items-center">
                <div className="section-card">
                    <div className="mb-4 d-flex flex-wrap justify-content-center align-items-center column-gap-3 row-gap-1">
                        <h2 className="font-42px">My blog</h2>

                        <div className="d-flex flex-column column-gap-1">
                            <span>Deployed:</span>
                            <a className="demo-link" href="https://kylerego.github.io">kylerego.github.io</a>
                        </div>
                        
                        <div className="d-flex flex-column column-gap-1">
                            <span>Source code:</span>
                            <a className="demo-link" href="https://github.com/KyleRego/KyleRego.github.io">KyleRego/KyleRego.github.io</a>
                        </div>
                    </div>

                    <div className="d-flex flex-wrap justify-content-center column-gap-3 align-items-center">
                        <div className="flex-grow-1">
                            <p>
                                For a few years now I have had a blog. I enjoy writing and blogging and I think it's a good way to contribute to the larger community including future me to refer back to.
                            </p>
                        </div>

                        <List heading={"Gained experience with"} items={["Jekyll", "HTML", "CSS", "JavaScript", "GitHub Pages"]} />
                    </div>

                </div>
            </section>;
}