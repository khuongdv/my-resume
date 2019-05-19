import React from 'react'

class Sphacy extends React.Component {
  render() {
    return (
      <div>
        <div><b style={{ fontSize: 19 }}>{this.props.stt}. Smart Pharmacy Solution</b> <i>(2018)</i>
        </div>
        <div style={{ paddingLeft: 10 }}>
          <ul style={{ marginBottom: 6 }}>
            <li>Develop mobile apps for customers and pharmacies, they can connect to sell medicine</li>
            <li>Develop both frontend side (mobile apps) and backend side (API)</li>
          </ul>
          <i>Technologies used in the project:</i>
          <ul>
            <li>Springboot, MongoDB, React Native, Google Services (Firebase, Map, Location, Place)</li>
          </ul>
        </div>
      </div>
    )
  }
}


export default Sphacy