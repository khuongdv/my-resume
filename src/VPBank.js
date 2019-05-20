import React from 'react'

class VPBank extends React.Component {
  render() {
    return (
      <div>
        <div><b style={{ fontSize: 19 }}>{this.props.stt}. Frontend Developer at Vietnam Prosperity Bank</b> <i>(2017 - Present)</i>
        </div>
        <div style={{ paddingLeft: 10 }}>
          <i>About the project</i>
          <ul style={{ marginBottom: 6 }}>
            <li>To digitize the process of the Unsecured-Personal-Loan product</li>
            <li>Team size: 8+</li>
          </ul>
          <i>Responsibilities:</i>
          <ul style={{ marginBottom: 6 }}>
            <li>Work with Project Owner and Designer to finalize the designs for User App and Administration App</li>
            <li>Develop frontend side of both User App and Admin App, integrate with backend API</li>
            <li>Apply changes to the projects to improve performance and UI</li>
            <li>Develop a weblog for the app to let users know more about the product</li>
          </ul>
          <i>Technologies used in the project:</i>
          <ul>
            <li>ReactJS, Django, Springboot, MySQL</li>
          </ul>
        </div>
      </div>
    )
  }
}


export default VPBank