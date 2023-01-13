import React from 'react';

function Resume() {

  // const resStyle = { display: 'flex', justifyContent: 'center' }

  return (
    <section>
      <div className='styleResume'>
        <div>
          <p>
            Download my <a href="https://www.linkedin.com/">resume</a>
          </p>
        </div>
        <div>
          <h3>Front-end Proficiencies</h3>

          <ul className="skills">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>responsive design</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div>
          <h3>Back-end Proficiencies</h3>
          <ul className="skills">
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul></div>
      </div>
    </section>
  )
}
export default Resume;