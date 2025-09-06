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
                            Hi, I am Kyle Rain! I am a loader/unloader at UPS and manager at Domino's 😁. This is a portfolio of software projects I've developed. I am experienced with C#/.NET, ASP.NET Core, and Ruby on Rails.
                        </p>
                 
                        <p>
                            In my free time, I like to cook, hit the gym, write code, and play Old School Runescape. My objective is to live a happy life and help the community toward the ideal of social interest with my thinking influenced by <a href="https://ankibooks.io/articles/c00ea634-4dbd-4a43-81e9-0d850d9587ea">Ichiro Kishimi and Fumitake Koga's interpretation of Adlerian psychology.</a>
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

function SelfieOfMe() {
    return <Picture imgSrc={"dominos-hat-selfie.png"} text={"Me (August 2025)"}/>
}

function Picture({imgSrc, text}) {
    return <figure  className="flex-1" style={{margin: 0, width: "145px",
                                            transform: "rotate(-10deg)",
                                            transformOrigin: "left center"
                    }}>
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
                    <figcaption>
                        {text}
                    </figcaption>
                </div>
        </figure>
}
