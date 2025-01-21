import React from 'react'

class VPBank extends React.Component {
  render() {
    return (
      <div>
        <div>
          <b style={{ fontSize: 19 }}>II. Frontend Developer at VPBank</b>
          <i>(2017 - 2019)</i>
        </div>
        <div style={{ paddingLeft: 10 }}>
          <b><i>What I Did:</i></b>
          <ul>
            <li>Collaborated with Project Owners and Designers to finalize UI designs for both User and Administration Apps</li>
            <li>Built and maintained the frontend for User and Admin Apps, seamlessly integrating with backend APIs</li>
            <li>Implemented enhancements to improve application performance and user interface aesthetics</li>
          </ul>
        </div>
        <div style={{ paddingLeft: 10 }}>
          <b><i>What I Learned:</i></b>
          <ul>
            <li>Gained insights into the banking sector, understanding various bank products and services</li>
            <li>Acquired skills in Python using Django to develop a Blog module for the User App</li>
          </ul>
        </div>
        <div style={{ paddingLeft: 10 }}>
          <b><i>Technology Stack:</i></b>
          <ul>
            <li>ReactJS for interactive frontend development</li>
            <li>Django for robust backend module development</li>
            <li>Spring Boot for scalable application services</li>
            <li>MySQL for database management</li>
          </ul>
        </div>
      </div>
    );
  }
}


export default VPBank
