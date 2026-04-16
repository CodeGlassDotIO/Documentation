import { useEffect, type ReactNode } from 'react';
import Layout from '@theme/Layout';

import React from "react";
import "./contact.css";
import Link from '@docusaurus/Link';

export default function Home(): ReactNode {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://js-eu1.hsforms.net/forms/embed/v2.js';
        script.async = true;

        script.onload = () => {
            hbspt.forms.create({
                region: "eu1",
                portalId: "141867369",
                formId: "331f9d7d-856e-4a52-88ab-443d5e713689",
                target: '#hubspot-form'
            });
        };

        document.body.appendChild(script);
    }, []);

    return (
        <Layout>
            <section className="contact">
                <div className="contact-bg">
                    <div className="bg-primary" />
                    <div className="bg-secondary" />
                </div>

                <div className="contact-container">
                    <div className="contact-header">
                        <h1 className="contact-title">
                            Contact <br />
                            <span className="highlight">Us</span>
                        </h1>
                        <p className="contact-subtext">
                            Send a message using the form, or join the <a href="https://discord.gg/ytczAxSmX4" target="_blank">Discord</a> for faster communication.
                        </p>
                    </div>

                    <div className="contact-grid">
                        <div className="contact-card form">
                            <h2 className="card-title">Send us a message</h2>

                           <div id="hubspot-form"></div>
                        </div>

                        <div className="contact-card info">
                            <h2 className="card-title">Company</h2>

                            <div className="info-block">
                                <div className="info-label">Email</div>
                                <a href="mailto:Support@CodeGlass.io" className="info-value">Support@CodeGlass.io</a>
                            </div>

                            <div className="info-block">
                                <div className="info-label">Location</div>
                                <div className="info-value">Stationsplein 5 8011CW Zwolle The Netherlands</div>
                            </div>

                            <div className="info-block">
                                <div className="info-label">Socials</div>
                                <Link href="https://discord.gg/ytczAxSmX4" target='_blank' className="info-value">Discord</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};