import React from 'react'

class Fattoria extends React.Component {
  render() {
    return (
      <div>
        <div><b style={{ fontSize: 19 }}>{this.props.stt}. Student Management System</b> <i>(2018)</i>
        </div>
        <div style={{ paddingLeft: 10 }}>
          <i>About the project</i>
          <ul style={{ marginBottom: 6 }}>
            <li>An education center has less than 100 children to be cared. They need to create tasks for each child, let the children update their progress of each task. Monthly the parents will get the report of their kids.</li>
            <li>Team size: 2</li>
          </ul>
          <i>Responsibilities:</i>
          <ul style={{ marginBottom: 6 }}>
            <li>Role: Team Lead</li>
            <li>Have meeting with customer to clarify the problem; propose technical solution and web UI</li>
            <li>Develop both backend side and frontend side, write document for the customer</li>
          </ul>
          <i>Technologies used in the project:</i>
          <ul>
            <li>NodeJS, ReactJS, ExpressJS, MongoDB</li>
          </ul>
        </div>
      </div>
    )
  }
}


export default Fattoria