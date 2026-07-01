import React from "react";
import ThemedImage from '@theme/ThemedImage';
import "./HeroSection.css";

export const HeroSection: React.FC = () => {
    function downloadNowClick() {
        window.open( "https://github.com/CodeGlassDotIO/CodeGlass")?.focus();
    }

    function gotoDocsClick() {
        window.location.href = "./docs/intro";
    }

    return (
        <section className="cg-hero">
            <div className="hero-bg">
                <div className="bg-primary" />
                <div className="bg-secondary" />
            </div>

            <div className="hero-grid">
                <div className="hero-left">
                    <h1 className="hero-title">
                        Understand your Julia application <br />
                        <span className="highlight">at runtime</span>
                    </h1>

                    <p className="hero-desc">
                        CodeGlass traces every executed instruction, allocation, and runtime event back to the lines of Julia code responsible, so you can locate performance and memory issues from a single run, without rewriting your code or creating a minimum working example.
                    </p>

                    <div className="hero-actions">
                        <a className="btn-primary" href="https://github.com/CodeGlassDotIO/CodeGlass" target="_blank">Download Trial</a>
                        <a className="btn-secondary" href="./docs/intro">Read the docs</a>
                    </div>
                </div>

                <div className="hero-media">
                    <ThemedImage className="hero-img"
                      sources={{
                            // dark: "./img/Beeldtaal_Dark_Hexagon_Pattern_3.svg", //TODO can be re added once colors are fixed
                            light: "./img/Beeldtaal_Light_Hexagon_Pattern_3.svg",
                            dark: "./img/Beeldtaal_Light_Hexagon_Pattern_3.svg",
                        }}>
                    </ThemedImage>
                    <div className="hero-overlay" />
                </div>
            </div>
        </section>
    );
};