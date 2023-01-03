import React from "react";
function Project ({project}) {
    const {name, github, deployed, description} = project;
return (
    <div className="project" key={name}>
        <img
        src={require(`../assets/images/${name}.png`)} 
        alt={name}
        className ="project-bg" />
       <div className="project-text">
        <h3>
            <a href ={deployed}>{name}</a>{' '}
            <a href ={github}><i className="fab fa-github"></i></a>
        </h3>
        <p>{description}</p>
       </div>
    </div>
);
}

export default Project;
