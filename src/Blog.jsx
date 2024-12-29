import List from "./components/List";
import DemoLink from "./components/DemoLink";

export default function Blog() {
    return <section id="blog" className="d-flex justify-content-center align-items-center">
                <div className="section-card">
                    <div className="mb-4 d-flex flex-wrap justify-content-center align-items-center column-gap-3 row-gap-1">
                        <h2 className="font-42px">Developer blog</h2>
                        
                        <DemoLink href="https://kylerego.github.io"
                                    text="kylerego.github.io"
                                    labelText="GitHub pages deployment:" />
                        
                    </div>

                    <div className="d-flex flex-wrap justify-content-center column-gap-3 align-items-center">
                        <div className="flex-grow-1" style={{minWidth: "250px"}}>
                            <p>
                                For a few years now I have had a blog. I enjoy writing and blogging and I think it's a good way to contribute to the community (including future me).
                            </p>
                            <p>
                                The site is built using Jekyll and my fork of the Swiss theme. It also has <a href="https://kylerego.github.io/the-old-website/">my first portfolio</a>, an old <a href="https://kylerego.github.io/the-old-website/snake/index.html">React snake game</a>, and the <a href="https://kylerego.github.io/anki_record_docs/">Anki Record API docs</a> generated with SDoc.
                            </p>
                        </div>

                        <List heading={"Gained experience with"} items={["Jekyll", "HTML", "CSS", "JavaScript", "GitHub Pages"]} />
                    </div>

                </div>
            </section>;
}