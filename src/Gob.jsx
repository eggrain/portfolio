import DemoLink from "./components/DemoLink";

export default function Gob() {
    return <section id="gob-guides" className="d-flex justify-content-center align-items-center">
                <div className="card">
                    <div className="mb-4 d-flex flex-wrap justify-content-center align-items-center column-gap-3 row-gap-1">
                        <h2 className="font-42px" style={{wordBreak: "break-all"}}>Lilgobslayerguides.NET</h2>
                        
                        <DemoLink href="https://lilgobslayerguides.net"
                                            text="Gob Guides" />
                        
                    </div>

                    <div>
                        <p>
                            My biggest hobby other than programming is playing Old School Runescape.
                            I mostly play this MMORPG as an "Ultimate Iron", which is an account type that restricts both trading with other players and banking one's items. 
                        </p>
                        <p>
                           Today this Java game which I have played since I was a kid is one of my biggest inspirations to keep learning and practicing software development.
                        </p>
                    </div>

                    
                </div>

        </section>;
}
