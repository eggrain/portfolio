export default function Hero() {
    return <section id="hero" className="d-flex justify-content-center align-items-center">
                <div className="card">
                    <div className="float-end d-none d-md-block">
                        <SelfieOfMe />
                    </div>

                    <div className="d-flex flex-wrap justify-content-center row-gap-1 column-gap-3 align-items-center">
                        <HeroHeader />
                    </div>


                    <div>
                        <div className="float-end d-md-none">
                            <SelfieOfMe />
                        </div>
                        <p> 
                            Hi, I'm <span className="z">Z</span>oe (she/her). I'm an unloader at UPS.
                        </p>
                        <p>
                            This website is a portfolio of some of my software projects. I am looking for another part-time job doing software development work. 
                        </p>
                 
                        <p>
                            In my free time, I like to cook, hit the gym, write code, and play video games.
                        </p>
                    </div>
            
                </div>     
            </section>;
}

function HeroHeader() {
    return <div className="d-flex flex-column align-items-center" style={{rowGap: "0.5rem"}}>
                <h1 className="fs-1">
                    <span className="z">Z</span>oe E. Rain
                </h1>
                <div>
                    Tacoma, Washington, USA
                </div>                       
            </div>;
}

function SelfieOfMe() {
    return <Picture imgSrc={"standing-selfie.jpg"} text={"Me"}/>
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
                            height: "213px",
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
