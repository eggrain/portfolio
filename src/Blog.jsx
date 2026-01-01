import DemoLink from "./components/DemoLink";

export default function Blog() {
    return <section id="blog" className="d-flex justify-content-center align-items-center">
                <div className="card">
                    <h2 className="fs-1">
                        <a className="header-link" href="https://eggrain.blog">eggrain.blog</a>
                    </h2>

                    <div className="d-flex flex-wrap justify-content-center column-gap-3 align-items-center">
                        <div className="flex-grow-1" style={{minWidth: "250px"}}>
                            <p>
                                For a few years now I have had a blog. I enjoy writing and blogging and I think it's a good way to contribute to the community (including future me).
                                This GitHub pages website was my first experience with GitHub Actions, which I use for all of my free software projects.
                                The site is built using Jekyll and my fork of the Swiss theme.
                            </p>
                        </div>
                    </div>

                    <h3 className="fs-2 mb-4">
                        Also on eggrain.blog:
                    </h3>

                    <div className="d-flex flex-wrap justify-content-center column-gap-3 align-items-center">
                        <DemoLink href={"https://eggrain.blog/the-old-website"} text={"My first portfolio"} />
                        <DemoLink href={"https://eggrain.blog/the-old-website/snake/index.html"} text={"React snake game"} />
                        <DemoLink href={"https://eggrain.blog/anki_record_docs/"} text={"Anki Record API docs"} />
                    </div>

                </div>
            </section>;
}