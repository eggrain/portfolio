import { useState } from "react";
import "./Hero.css";

export default function Hero() {
    return <div className="hero">
        <div className="hero-card">
            <div className="hero-image">
                <img src="me.png" alt="Picture of me" />
            </div>
            <div className="hero-name">
                Kyle Rego
            </div>
            <div className="hero-text">
                This is my portfolio website... Please hire me ^^
            </div>
        </div>
    </div>
}
