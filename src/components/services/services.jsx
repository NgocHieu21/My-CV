import React, { useState } from 'react';
import "./services.css";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I Offer</span>

            <div className="services__container container grid">
                {/* Tab 1 - Product Designer */}
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">Product <br /> Designer</h3>
                    </div>
                    <span className="services__button" onClick={() => toggleTab(1)}>View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">Product Design</h3>
                            <p className="services__modal-description">I design products that look great and work well for users.</p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="ui uil-check-circle service__modal-icon"></i>
                                    <p className="services__modal-info">Simple and user-friendly design</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="ui uil-check-circle service__modal-icon"></i>
                                    <p className="services__modal-info">Quick sketches and mockups</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="ui uil-check-circle service__modal-icon"></i>
                                    <p className="services__modal-info">Brand identity</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="ui uil-check-circle service__modal-icon"></i>
                                    <p className="services__modal-info">Organized design system</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Tab 2 - UX/UI Designer */}
                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">UX/UI <br /> Designer</h3>
                    </div>
                    <span className="services__button" onClick={() => toggleTab(2)}>View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">UX/UI Design</h3>
                            <p className="services__modal-description">I make websites and apps easy to use and look good.</p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="ui uil-check-circle service__modal-icon"></i>
                                    <p className="services__modal-info">User-friendly design</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="ui uil-check-circle service__modal-icon"></i>
                                    <p className="services__modal-info">Basic layouts and wireframes</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="ui uil-check-circle service__modal-icon"></i>
                                    <p className="services__modal-info">Easy-to-use interfaces</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="ui uil-check-circle service__modal-icon"></i>
                                    <p className="services__modal-info">Testing for better experience</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Tab 3 - E-Commerce Specialist */}
                <div className="services__content">
                    <div>
                        <i className="uil uil-edit services__icon"></i>
                        <h3 className="services__title">E-Commerce <br /> Specialist</h3>
                    </div>
                    <span className="services__button" onClick={() => toggleTab(3)}>View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">E-Commerce Solutions</h3>
                            <p className="services__modal-description">I help businesses sell online easily and effectively.</p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="ui uil-check-circle service__modal-icon"></i>
                                    <p className="services__modal-info">Set up online stores</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="ui uil-check-circle service__modal-icon"></i>
                                    <p className="services__modal-info">Increase sales and traffic</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="ui uil-check-circle service__modal-icon"></i>
                                    <p className="services__modal-info">Marketing strategies</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="ui uil-check-circle service__modal-icon"></i>
                                    <p className="services__modal-info">Improve delivery process</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;