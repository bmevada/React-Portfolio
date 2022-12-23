import React from "react";
import socialApiImage from "../assets/images/social_API.png";
import readmeGeneratorImage from "../assets/images/Readme_Generator.png";
import weatherDashboardImage from "../../assets/images/Weather_Dashboard.png";
import noteTakerImage from "../../assets/images/Note_Taker.png";
import teamProfileGeneratorImage from "../../assets/images/Team_Profile_Generator.png";
import workDaySchedulerImage from "../../assets/images/Work_Day_Scheduler.png";


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
                                About No SQL Challenge
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
                                    alt="Note_Taker"
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
                            <a href="https://github.com/bmevada/Weather-Forecast-Dashboard">
                                {" "}
                                <img
                                    className="my-2"
                                    style={{ width: "100%" }}
                                    alt="Weather_Dashboard"
                                />
                            </a>
                        </div>
                        <div className="job-text">
                            <h4>Weather Dashboard</h4>
                            <p>
                                Weather Dashboard - Using Server-Side APIs{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Portfolio;