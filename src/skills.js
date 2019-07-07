import React from 'react'
import { Row, Col } from 'reactstrap'

class FPTSoftware extends React.Component {
  render() {
    return (
      <Row style={{ padding: 20 }}>
        <Col sm={12} className="styled-header-pan">
          <b className="section-head">SKILLS</b>
        </Col>
        <Col sm={12} style={{ fontSize: 22, paddingTop: 20 }}>
        <ul>
          <li>JavaScript, ES6+, TypeScript, HTML5, CSS3</li>
          <li>ReactJS, Redux, SPA &amp; PWA</li>
          <li>NodeJS, ExpressJS</li>
          <li>Java, Springframework, JPA, Hibernate, Srping Data, Primefaces</li>
          <li>MySQL, MongoDB, Redis, Elasticsearch</li>
          <li>OOP, Microservice, RESTful API</li>
        </ul>
        </Col>
      </Row>
    )
  }
}


export default FPTSoftware