import React from 'react'

class VPBank extends React.Component {
  render() {
    return (
      <div>
      <div><b  style={{fontSize: 19}}>II. Frontend Developer at Vietnam Prosperity Bank</b> <i>(2017 - 2019)</i>
      </div>
      <div style={{paddingLeft: 10}}>
        <b><i>What I do:</i></b>
        <ul>
          <li>Work with Project Owner and Designer to finalize the designs for User App and Administration App</li>
          <li>Develop frontend side of both User App and Admin App, integrate with backend API as well</li>
          <li>Apply changes to the projects to improve performance and UI</li>
        </ul>
      </div>
      <div style={{paddingLeft: 10}}>
        <b><i>What I learn:</i></b>
        <ul>
          <li>Learn new things about banking sector and some products of the bank</li>
          <li>Learn Python (actually Django) to build the Blog module for the User App mentioned above</li>
        </ul>
      </div>
      <div style={{paddingLeft: 10}}>
        <b><i>Technologies used in the project:</i></b>
        <ul>
          <li>ReactJS, Django, Springboot, MySQL</li>
        </ul>
      </div>
    </div>
    )
  }
}


export default VPBank
