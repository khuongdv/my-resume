import React from 'react'

class Viettel extends React.Component {
  render() {
    return (
      <div>
        <div>
          <b style={{ fontSize: 19 }}>IV. Software Developer at Viettel Software Center</b>
          <i>(2014 - 2016)</i>
        </div>
        <div style={{ paddingLeft: 10 }}>
          <b><i>What I Did:</i></b>
          <ul>
            <li>Developed features for both frontend and backend as assigned by leadership</li>
            <li>Conducted weekly code reviews with the team to ensure code quality and best practices</li>
            <li>Proactively proposed system enhancements to improve project efficiency and functionality</li>
          </ul>
        </div>
        <div style={{ paddingLeft: 10 }}>
          <b><i>What I Learned:</i></b>
          <ul>
            <li>Mastered complex database schemas typical of large-scale enterprise environments</li>
            <li>Acquired proficiency in the Spring Framework and PrimeFaces for web application development</li>
          </ul>
        </div>
        <div style={{ paddingLeft: 10 }}>
          <b><i>Technology Stack:</i></b>
          <ul>
            <li>PrimeFaces for rich, component-based UI development</li>
            <li>Spring Framework for enterprise-level Java application development</li>
            <li>Oracle DB for robust data management</li>
            <li>SOLR for advanced search capabilities within the application</li>
          </ul>
        </div>
      </div>
    )
  }
}


export default Viettel
