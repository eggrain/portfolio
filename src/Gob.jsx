import DemoLink from "./components/DemoLink";

export default function Gob() {
    return <section id="gob-guides" className="d-flex justify-content-center align-items-center">
                <div className="section-card">
                    <div className="mb-4 d-flex flex-wrap justify-content-center align-items-center column-gap-3 row-gap-1">
                        <h2 className="font-42px" style={{wordBreak: "break-all"}}>Lilgobslayerguides.NET</h2>
                        
                        <DemoLink href="https://lilgobslayerguides.net"
                                            text="Gob Guides" />
                        
                    </div>

                    
                </div>

        </section>;
}
