import React, { useState } from "react";
import Project from "./Project";


function Portfolio() {
    const [projects] = useState ([
        {
            name:"Social_Network_API",
            github:"https://github.com/bmevada/Social-Network-API/",
            deployed: "https://github.com/bmevada/Social-Network-API/",
            description: "A Node.js command-line application is built which will allow to take in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person. This application uses Inquirer package v8.2.4, JEST, html, JavaScript, CSS powered by jQuery and Bootstrap."

        },
        {
            name:"Professional-README-Generator",
            github:"https://github.com/bmevada/Professional-README-Generator",
            deployed: "https://github.com/bmevada/Professional-README-Generator",
            description:"Node.js Challenge: Professional README Generator."

        },
        {
            name:"Weather-Forecast-Dashboard",
            github:"https://github.com/bmevada/Weather-Forecast-Dashboard/",
            deployed: "https://bmevada.github.io/Weather-Forecast-Dashboard/",
            description: "Weather Dashboard - Using Server-Side APIs."

        },
        {
            name:"Note-Taker",
            github: "https://github.com/bmevada/Note-Taker/",
            deployed: "https://github.com/bmevada/Note-Taker/",
            description: "Express js Challenge"

        },
        {
            name: "Team-Profile-Generator",
            github: "https://github.com/bmevada/Team-Profile-Generator.git",
            deployed: "https://github.com/bmevada/Team-Profile-Generator.git",
            description: " A Node.js command-line application is built which will allow to take in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person. This application uses Inquirer package v8.2.4, JEST, html, JavaScript, CSS powered by jQuery and Bootstrap."

        },
        {
            name:"Work-Day-Scheduler",
            github: "https://github.com/bmevada/Work-Day-Scheduler.git",
            deployed: "https://github.com/bmevada/Work-Day-Scheduler.git",
            description: "A simple calendar application was created to allow the user to to plan and create events on an hourly basis of a working day. Once the events of the days have been entered into the planner, the user can save these and also modify these as required. Based on the time of the event, the user is able view the current time and present event on the planner, which is shown in a different colour from the past events and future events."

        }
    ])
    return (
        <div>
           <div className="flex-row">
            {projects.map((project, idx)=>(
               <Project
               project = {project}
               key={"project" + idx}
               />

            ))}
           </div>



        </div>
    );
}

export default Portfolio;