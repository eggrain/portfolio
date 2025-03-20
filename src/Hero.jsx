export default function Hero() {
    return <section id="hero" className="d-flex justify-content-center align-items-center">
                <div className="card">
                    <div className="d-flex flex-wrap justify-content-center row-gap-1 align-items-center column-gap-3">
                        <div className="d-flex flex-column" style={{rowGap: "0.5rem"}}>
                            <h1 className="fs-1">
                                Kyle Rego
                            </h1>
                            <div>
                                Tacoma, Washington, USA
                            </div>
                            <a href="https://kylerego.github.io/assets/kylerego_resume.pdf">
                                Software Developer Resume
                            </a>
                            <a href="https://kylerego.github.io/assets/kyle_jobs_resume.pdf">
                                Jobs Resume
                            </a>
                        </div>

                        <figure style={{margin: 0}}>
                            <div className="d-flex column-gap-1 align-items-center">
                                <img src="me_at_ups_cornerstone.jpg" alt="Me at UPS"
                                style={{width: "150px", height: "150px", borderRadius: "50%"}} />
                                <figcaption>
                                    Me at UPS
                                </figcaption>
                            </div>
                        </figure>
                    </div>

                    <p>
                        <span style={{ fontSize: "28px" }}>Hi there!</span> I'm Kyle Rego, a self-taught software developer on a quest to create great software. I like problem-solving, learning about new things, and contributing to the community.
                    </p>

                    <p>
                        Right now, I'm working at UPS while exploring different job opportunities to make ends meet. I'm open to various roles—whether in IT, technical support, or other fields—as I work toward returning to software development in the long run. If you’re hiring in the Tacoma area, feel free to <a href="mailto:regoky@outlook.com">reach out</a>—I’d love to contribute to your team!
                    </p>

                </div>
        </section>;
}
