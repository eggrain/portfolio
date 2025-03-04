export default function Hero() {
    return <section id="hero" className="d-flex justify-content-center align-items-center">
                <div className="card">
                    <div className="d-flex flex-wrap justify-content-center row-gap-1 align-items-center column-gap-3">
                        <div className="d-flex flex-column" style={{rowGap: "0.5rem"}}>
                            <h1 className="fs-1">
                                Kyle Rego
                            </h1>
                            <div>
                                Software developer
                            </div>
                            <div>
                                Tacoma, Washington, USA
                            </div>
                        </div>

                        <figure style={{margin: 0}}>
                            <img src="me_at_ups_cornerstone.jpg" alt="Me at UPS"
                                style={{width: "150px", height: "150px", borderRadius: "50%"}} />
                            <figcaption>Me at UPS</figcaption>
                        </figure>
                    </div>

                    <div className="text-center font-20px" style={{maxWidth: "720px"}}>  
                        <p>
                            <span style={{ fontSize: "28px" }}>Hi there!</span> I'm Kyle Rego, a self-taught software developer passionate about continuously improving my technical skills and trying to create great software. I love problem-solving, building applications, and exploring new technologies—especially in C#, my favorite programming language.
                        </p>
                        <p>
                            Outside of coding, you'll find me at Planet Fitness, public libraries, or working at UPS in the Port of Tacoma. My long-term goal is to secure a software engineering role, and right now, I'm preparing to transition into IT as a stepping stone toward that goal. If you're hiring in the Tacoma area, feel free to <a href="mailto:regoky@outlook.com">reach out</a>—I'd love to contribute to your team!
                        </p>
                    </div>
                </div>
        </section>;
}
