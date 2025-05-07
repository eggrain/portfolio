export default function Hero() {

    const resumes = [
        ["KR Tech Resume", "https://kylerego.github.io/assets/kylerego_resume.pdf"],
        ["KR Jobs Resume", "https://kylerego.github.io/assets/kyle_jobs_resume.pdf"]
    ]

    return <section id="hero" className="d-flex justify-content-center align-items-center">
                <div className="">
                    <div className="card">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="d-flex flex-wrap column-gap-1 row-gap-1 align-items-center justify-content-center">
                                <div className="d-flex column-gap-1 align-items-end">
                                    <ResumeCard href={resumes[0][1]} text={resumes[0][0]} />

                                    <HeroHeader />

                                    <ResumeCard href={resumes[1][1]} text={resumes[1][0]} />
                                </div>

                            </div>
                        </div>
                        <p> 
                            Hi, I am Kyle Rain, and this website is my software developer portfolio. 
                        </p>

                        <p>
                            I work for UPS and Domino's as a loader/unloader and delivery driver, respectively, while I work toward a software developer role (onsite or hybrid with a C# stack preferably).  
                        </p>
                        <p>
                            In my free time, I enjoy cooking, hitting the gym, writing code, and learning stuff.
                        </p>
                    </div>

                    <div className="d-flex justify-content-end">
                        <UPSPicture />
                    </div>
                    
                </div>

                
            </section>;
}

function ResumeCard({href, text}) {
    return (
        <a href={href} target="_blank" style={{
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

function HeroHeader() {
    return <div className="d-flex flex-column align-items-center" style={{rowGap: "0.5rem"}}>
                                <h1 className="fs-1">
                                    Kyle Rain
                                </h1>
                                <div>
                                    Tacoma, Washington, USA
                                </div>                       
                            </div>;
}

function UPSPicture() {
    return <figure style={{ margin: 0, width: "205px" }} className="flex-1">
                                <div className="d-flex align-items-center" style={{ position: "relative" }}>
                                    <img
                                        src="me_at_ups_cornerstone.jpg"
                                        alt="Me at UPS"
                                        style={{
                                            width: "120px",
                                            height: "120px",
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
}