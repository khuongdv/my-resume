import React from 'react'

class LinkId extends React.Component {
  render() {
    return (
      <div>
      <div><b  style={{fontSize: 19}}>I. Software Developer at LinkID</b> <i>(2020 - Present)</i>
      </div>
      <div style={{paddingLeft: 10}}>
        <b><i>What I do:</i></b>
        <ul>
          <li>Propose technical solution for each requirement of Product team</li>
          <li>Develop features of the LOYALTY system. Manage and issue tokens (coins) for users</li>
          <li>Integrate with 3rd party vendors to let user redeem Gifts using their tokens</li>
          <li>Develop API for other merchants to use our company services</li>
          <li>Develop flow to synchronize token between different components in the ecosystem</li>
          <li>Tune up system for better performance</li>
        </ul>
      </div>
      <div style={{paddingLeft: 10, display: 'none'}}>
        <b><i>What I learn:</i></b>
        <ul>
          <li>Learn how a big system works. The whole system consists of 20+ separate projects</li>
          <li>Learn Python (actually Django) to build the Blog module for the User App mentioned above</li>
        </ul>
      </div>
      <div style={{paddingLeft: 10}}>
        <b><i>Technologies used in the project:</i></b>
        <ul>
          <li>Blockchain Technology: Hyperledger Fabric</li>
          <li>Backend: Aspnet Core, NodeJS</li>
          <li>Offchain datastore: MySQL, MongoDB</li>
          <li>Frontend: Flutter (mobile app), ReactJS (website), Angular (Admin Portals)</li>
          <li>RabbitMQ, Redis, Firebase, OneSignal, Kubernetes</li>
        </ul>
      </div>
    </div>
    )
  }
}


export default LinkId
