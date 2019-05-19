import React from 'react'

class Fidelis extends React.Component {
  render() {
    return (
      <div>
        <div><b style={{ fontSize: 19 }}>{this.props.stt}. Card System for Bus service </b> <i>(April 2019 - Present)</i>
        </div>
        <div style={{ paddingLeft: 10 }}>
          <ul style={{ marginBottom: 6 }}>
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