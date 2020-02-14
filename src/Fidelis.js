import React from 'react'

class Fidelis extends React.Component {
  render() {
    return (
      <div>
        <div><b style={{ fontSize: 19 }}>{this.props.stt}. Card System for Bus service</b> <i>(04/2019 - 07/2019)</i>
        </div>
        <div style={{ paddingLeft: 10 }}>
          <i>About the project</i>
          <ul style={{ marginBottom: 6 }}>
            <li>Build a system to manage Bus service of the client</li>
            <li>Team size: 4</li>
          </ul>
          <i>Responsibilities:</i>
          <ul style={{ marginBottom: 6 }}>
            <li>Role: Team Lead</li>
            <li>Analyze customer requirements, determine the technologies for the project</li>
            <li>Develop features both in frontend side and backend side, integrate with other systems</li>
            <li>Make sure the project meet the deadlines, prepare documents for hand-over process</li>
          </ul>
          <i>Technologies used in the project:</i>
          <ul>
            <li>Springframework, MySQL DB, Redis, ReactJS webapp, C#, Restful API</li>
          </ul>
        </div>
      </div>
    )
  }
}


export default Fidelis