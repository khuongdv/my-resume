import React from 'react'
import {Row, Col} from 'reactstrap'

class FPTSoftware extends React.Component {
    render() {
        return (
            <Row style={{padding: 20}}>
                <Col sm={12} className="styled-header-pan">
                    <b className="section-head">SKILLS</b>
                </Col>
                <Col sm={12} style={{fontSize: 22, paddingTop: 20}}>
                    <ul>
                        <li>OOP, Functional Programming</li>
                        <li>Java, Spring Framework, JPA, Hibernate, Spring Data, PrimeFaces</li>
                        <li>Javascript, HTML5, CSS3, ReactJS, NodeJS, ExpressJS</li>
                        <li>Python, Django</li>
                        <li>CSharp, Asp.Net, Entity Framework</li>
                        <li>MySQL, MongoDB, Redis, ElasticSearch, SQLServer</li>
                        <li>Microservice, RESTful API, Serverless architecture, AWS</li>
                    </ul>
                </Col>
            </Row>
        )
    }
}


export default FPTSoftware