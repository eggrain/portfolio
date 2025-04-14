export default function Hero() {

    const resumes = [
        ["KR Tech Resume", "https://kylerego.github.io/assets/kylerego_resume.pdf"],
        ["KR Jobs Resume", "https://kylerego.github.io/assets/kyle_jobs_resume.pdf"]
    ]

    return <section id="hero" className="d-flex justify-content-center align-items-center">
                <div className="card">
                    <div className="d-flex flex-wrap justify-content-center row-gap-1 align-items-center column-gap-3">
                        <div className="d-flex flex-column align-items-center" style={{rowGap: "0.5rem"}}>
                            <h1 className="fs-1">
                                Kyle Egg Rain
                            </h1>
                            <div>
                                Tacoma, Washington, USA
                            </div>
                            <div className="d-flex column-gap-1 align-items-center">
                                {resumes.map(resume => < ResumeCard href={resume[1]} text={resume[0]} />)}
                            </div>
                            
                        </div>

                        <figure style={{ margin: 0 }}>
                            <div className="d-flex flex-column align-items-center" style={{ position: "relative" }}>
                                <img
                                    src="me_at_ups_cornerstone.jpg"
                                    alt="Me at UPS"
                                    style={{
                                        width: "150px",
                                        height: "150px",
                                        borderRadius: "50%",
                                        flexShrink: 0
                                    }}
                                />
                                <figcaption style={{
                                    transform: "rotate(4deg)",
                                    transformOrigin: "left center"
                                }}>
                                    Me in UPS (Nov, 2024)
                                </figcaption>
                            </div>
                        </figure>

                    </div>

                    <p>
                        I'm Kyle Egg Rain (formerly Kyle "Real Good" Rego). 
              
                        In these uncertain times, I am working for UPS and Domino's as a loader/unloader and delivery driver, respectively. 
             
                        I've positioned myself near Seattle, Washington as a step toward my long term goal of a career in software development.

                        To that end, I am considering starting an MS in Computer Science soon, developing several software projects, and system administrating an Azure Linux machine to showcase them (excluding the blog).
                    </p>
             

                </div>
        </section>;
}

function ResumeCard({href, text}) {
    return (
        <a href={href} style={{
            height: "86px",
            width: "78px",
            padding: "16px",
            backgroundColor: "#fff",
            boxShadow: "1px 1px 1px 1px rgb(0, 0, 0)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            fontSize: "15px",
            transform: "rotate(-1deg)",
            transformOrigin: "left center"
        }}>

            {text}
        </a>
    );
}