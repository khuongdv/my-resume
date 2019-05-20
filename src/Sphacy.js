import React from 'react'

class Sphacy extends React.Component {
  render() {
    return (
      <div>
        <div><b style={{ fontSize: 19 }}>{this.props.stt}. Smart Pharmacy Solution</b> <i>(2018)</i>
        </div>
        <div style={{ paddingLeft: 10 }}>
          <i>About the project</i>
          <ul style={{ marginBottom: 6 }}>
            <li>A system allow normal user can connect to a pharmacy to buy medicine: A user searches for a pharmacy on his app with a specific keyword (medicine name or an image of the product); once the pharmacy accepts the request, the connection is established and both side can chat to each other.</li>
            <li>Team size: 2</li>
          </ul>
          <i>Responsibilities:</i>
          <ul style={{ marginBottom: 6 }}>
            <li>Role: Team Lead</li>
            <li>Develop mobile apps for customers and pharmacies, they can connect to sell medicine</li>
            <li>Develop both frontend side (mobile apps) and backend side (API), assign tasks for other backend guy</li>
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