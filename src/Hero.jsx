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
                            <span style={{fontSize: "28px"}}>Hi there!</span> I'm Kyle Rego, a self-taught software developer on a quest to create great software (or become the best computer programmer I can be).
                            My favorite food is pizza, my favorite places are Planet Fitness, public libraries, and UPS in the Port of Tacoma (where I work), and my favorite programming language is C#.
                        </p>
                        <p>   
                            My current long-term goal is to land a company software engineering job. If you are in need of someone to fill a position like that, kindly <a href="mailto:regoky@outlook.com">email me</a>; I would love to help your team.
                        </p>
                    </div>
                </div>
        </section>;
}
