import React from "react";
import "./HeroSection.css";

export const HeroSection: React.FC = () => {
    function downloadNowClick() {
        window.open( "https://github.com/CodeGlassDotIO/CodeGlassDotIO")?.focus();
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
                        <a className="btn-primary" href="https://github.com/CodeGlassDotIO/CodeGlassDotIO" target="_blank">Download Trial</a>
                        <a className="btn-secondary" href="./docs/intro">Read the docs</a>
                    </div>
                </div>

                <div className="hero-media">
                    <img
                        alt="Kinetic Flame Chart Visualization"
                        className="hero-img"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCddBBUzny0h1hnkab637tMZcl8BYLZQ7vXKWSy_lnLviZSBUMvy-87v3VoohbVzuqDHTyrRo5rvyDU-7OoOWuIzbKBnrES6pZ_F9RA-hUValbXF9cvBxc96s57rZAV6D_AMSLttCWPxyLW6wguY42IIq7WJlzWQVt_d-lxRWkzlAedQaHbsuE0q74IMJETE2vr5XnulgHRNEeuZEzeGal_Grpj2nfMhQkdIzCrdMNBWfJXvwiCU7QhaGHhQRV_6bTpVTG0izOIodeR"
                    />

                    <div className="hero-overlay" />
                </div>
            </div>
        </section>
    );
};