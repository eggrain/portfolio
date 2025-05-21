export default function Hero() {

    const resumes = [
        ["KR Tech Resume", "https://kylerego.github.io/assets/kylerego_resume.pdf"],
        ["KR Jobs Resume", "https://kylerego.github.io/assets/kyle_jobs_resume.pdf"]
    ]

    return <section id="hero" className="d-flex justify-content-center align-items-center">
                <div className="card">
                    <div className="float-end d-none d-md-block">
                        <UPSPicture />
                    </div>

                    <div className="d-flex justify-content-center column-gap-1 align-items-center">
                        <PaperishLink href={resumes[0][1]} text={resumes[0][0]} />

                        <HeroHeader />

                        <PaperishLink href={resumes[1][1]} text={resumes[1][0]} />
                    </div>


                    <div>
                        <div className="float-end d-md-none">
                            <UPSPicture />
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
            
                </div>     
            </section>;
}

function PaperishLink({href, text}) {
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
                <h1 className="fs-2">
                    Kyle Rain
                </h1>
                <div>
                    Tacoma, Washington, USA
                </div>                       
            </div>;
}

function UPSPicture() {
    return <Picture imgSrc={"me-at-ups-unloading-may.jpg"} text={"Me unloading at UPS in May 2025 (belt was stopped)"}/>
}

function Picture({imgSrc, text}) {
    return <figure style={{ margin: 0, width: "145px" }} className="flex-1">
                <div className="d-flex flex-column align-items-center" style={{ position: "relative" }}>
                    <img
                        src={imgSrc}
                        alt="Me at UPS"
                        style={{
                            width: "120px",
                            height: "120px",
                            borderRadius: "50%",
                            flexShrink: 0
                        }}
                    />
                    <figcaption style={{
                        transform: "rotate(3deg)",
                        transformOrigin: "left center"
                    }}>
                        {text}
                    </figcaption>
                </div>
        </figure>
}