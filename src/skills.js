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
          <li>OOP, Functional Programming</li>
          <li>C#, DotnetCore, AspnetCore, Entity Framework</li>
          <li>NodeJS, NextJs, NestJS</li>
          <li>Java, Springframework, JPA, Hibernate, Srping Data, Primefaces</li>
          <li>Javascript, TypeScript, HTML5, CSS3, ReactJS,</li>
          <li>Python, Django</li>
          <li>MySQL, MongoDB, Redis, ElasticSearch</li>
          <li>Aws, Microservice, RESTful API</li>
        </ul>
        </Col>
      </Row>
    )
  }
}


export default FPTSoftware
