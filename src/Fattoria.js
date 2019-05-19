import React from 'react'

class Fattoria extends React.Component {
  render() {
    return (
      <div>
        <div><b style={{ fontSize: 19 }}>{this.props.stt}. Student Management System</b> <i>(2018)</i>
        </div>
        <div style={{ paddingLeft: 10 }}>
          <ul style={{ marginBottom: 6 }}>
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