import React from "react";
import socialApiImage from "../assets/images/socialapi.png";
import readmeGeneratorImage from "../assets/images/readmegenerator.png";
import weatherDashboardImage from "../../assets/images/weathedashboard.png";
import noteTakerImage from "../../assets/images/notettaker.png";
import teamProfileGeneratorImage from "../../assets/images/teamprofilegenerator.png";
import workDaySchedulerImage from "../../assets/images/workdayscheduler.png";


function Portfolio() {
    return (
        <div>
            <section id="work" className="jobs">
                <div className="flex-row">
                    <h2 className="section-title secondary-border">My Portfolio</h2>
                </div>

                <div className="job">
                    <div className="job-info">
                        <div className="job-img">
                            <a href="https://github.com/bmevada/Social-Network-API/">
                                {" "}
                                <img
                                    className="my-2"
                                    style={{ width: "100%" }}
                                    alt="Social Network API"
                                />
                            </a>
                        </div>
                        <div className="job-text">
                            <h4>Social Network API</h4>
                            <p>
                            A Node.js command-line application is built which will allow to take in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person. This application uses Inquirer package v8.2.4, JEST, html, JavaScript, CSS powered by jQuery and Bootstrap.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="job">
                    <div className="job-info">
                        <div className="job-img">
                            <a href="https://github.com/bmevada/Professional-README-Generator">
                                {" "}
                                <img
                                    className="my-2"
                                    style={{ width: "100%" }}
                                    alt="Professional-Readme-Generator"
                                />
                            </a>
                        </div>
                        <div className="job-text">
                            <h4>Professional-Readme-Generator</h4>
                            <p>
                                Node.js Challenge: Professional README Generator.{" "}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="job">
                    <div className="job-info">
                        <div className="job-img">
                            <a href="https://github.com/bmevada/Weather-Forecast-Dashboard/">
                                {" "}
                                <img
                                    className="my-2"
                                    style={{ width: "100%" }}
                                    alt="Weather Dashboard "
                                />
                            </a>
                        </div>
                        <div className="job-text">
                            <h4>TWeather Dashboard </h4>
                            <p>
                                Weather Dashboard - Using Server-Side APIs.{" "}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="job">
                    <div className="job-info">
                        <div className="job-img">
                            <a href="https://github.com/bmevada/Note-Taker/">
                                {" "}
                                <img
                                    className="my-2"
                                    style={{ width: "100%" }}
                                    alt="Note Taker"
                                />
                            </a>
                        </div>
                        <div className="job-text">
                            <h4>Note Taker</h4>
                            <p>
                                Express js Challenge{" "}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="job">
                    <div className="job-info">
                        <div className="job-img">
                            <a href="https://github.com/bmevada/Team-Profile-Generator.git">
                                {" "}
                                <img
                                    className="my-2"
                                    style={{ width: "100%" }}
                                    alt="Team Profile Generator"
                                />
                            </a>
                        </div>
                        <div className="job-text">
                            <h4>Team Profile Generator</h4>
                            <p>
                            A Node.js command-line application is built which will allow to take in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person. This application uses Inquirer package v8.2.4, JEST, html, JavaScript, CSS powered by jQuery and Bootstrap.{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Portfolio;