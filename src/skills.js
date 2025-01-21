import React from 'react'
import { Row, Col } from 'reactstrap'

class Skills extends React.Component {
  render() {
    return (
      <Row style={{ padding: 20 }}>
        <Col sm={12} className="styled-header-pan">
          <b className="section-head">SKILLS</b>
        </Col>
        <Col sm={12} style={{ fontSize: 22, paddingTop: 20 }}>
          <ul>
            <li><b>Business Analysis:</b> Requirement Gathering, Stakeholder Management, Process Improvement, Data Analysis</li>
            <li><b>Project Management:</b> Agile Methodologies, Scrum, JIRA, Backlog Management</li>
            <li><b>Technical Skills:</b>
              <ul>
                <li>Software Development Lifecycle (SDLC) with experience in Object-Oriented and Functional Programming</li>
                <li>Backend Technologies: C#, .NET Core, ASP.NET Core, Entity Framework, Node.js, Java, Spring Framework, JPA, Hibernate</li>
                <li>Frontend Technologies: JavaScript, TypeScript, ReactJS, HTML5, CSS3</li>
                <li>Database Management: MySQL, MongoDB, SQL Server</li>
                <li>Cloud and Infrastructure: AWS (S3, RDS, EC2), Azure (VMs), Microservices, RESTful APIs</li>
              </ul>
            </li>
            <li><b>Microsoft Technologies:</b>
              <ul>
                <li>C#, SQL Server, .NET Framework</li>
                <li>.NET Core, ASP.NET Core, Entity Framework Core</li>
                <li>Office 365 Authentication Integration</li>
              </ul>
            </li>
            <li><b>Communication:</b> Client Interaction, Technical Documentation, Conducting Meetings</li>
            <li><b>Additional Skills:</b> Python (Django), Redis, Elasticsearch, RabbitMQ</li>
          </ul>
        </Col>
      </Row>
    )
  }
}


export default Skills
