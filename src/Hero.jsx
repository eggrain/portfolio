export default function Hero() {

    const resumes = [
        ["KR Tech Resume", "https://eggrain.blog/assets/kylerego_resume.pdf"],
        ["KR Jobs Resume", "https://eggrain.blog/assets/kyle_jobs_resume.pdf"]
    ]

    return <section id="hero" className="d-flex justify-content-center align-items-center">
                <div className="card">
                    <div className="float-end d-none d-md-block">
                        <SelfieOfMe />
                    </div>

                    <div className="d-flex flex-wrap justify-content-center row-gap-1 column-gap-3 align-items-center">
                        <HeroHeader />

                        {/* <PaperishLink href={resumes[0][1]} text={resumes[0][0]} />

                        <PaperishLink href={resumes[1][1]} text={resumes[1][0]} /> */}
                    </div>


                    <div>
                        <div className="float-end d-md-none">
                            <SelfieOfMe />
                        </div>
                        <p> 
                            Hi, I am Kyle Rain! I am a loader/unloader at UPS, manager at Domino's, and free software developer--this website is my portfolio of software projects. I am experienced with C#/.NET, ASP.NET Core, and Ruby on Rails.
                        </p>
                 
                        <p>
                            In my free time, I like to cook, hit the gym, write code, and play Old School Runescape.
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
                <h1 className="fs-1">
                    Kyle Rain
                </h1>
                <div>
                    Tacoma, Washington, USA
                </div>                       
            </div>;
}

function SelfieOfMe() {
    return <Picture imgSrc={"bright-kitchen-selfie.jpg"} text={"Me"}/>
}

function Picture({imgSrc, text}) {
    return <figure  className="flex-1" style={{margin: 0, width: "145px",
                                            
                    }}>
                <div className="d-flex flex-column align-items-center" style={{ position: "relative" }}>
                    <img
                        src={imgSrc}
                        alt={text}
                        style={{
                            width: "120px", // when changing picture, adjust aspect ratio here
                            height: "144px",
                            borderRadius: "12px",
                            objectFit: "cover"
                        }}
                        />

                    <figcaption>
                        {text}
                    </figcaption>
                </div>
        </figure>
}
