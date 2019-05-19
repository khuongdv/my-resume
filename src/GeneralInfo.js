import React from 'react'
import { Row, Col } from 'reactstrap'

class GeneralInfo extends React.Component {
  render() {
    return (
      <Row>
        <Col sm={12}>
          <div className="styled-header-pan section-head" style={{ marginTop: 10 }}>
            PERSONAL PROFILE
              </div>
          <p className="paragraph-k" style={{ marginTop: 10 }}>
            My fullname is Dao Van Khuong. I've been working as a software developer for more than 5 years.<br />
            Java is my major programming language. In 2014, I became an <b><i>"Oracle Certified Professional Java SE6 Programmer"</i></b>
          </p>
          <p className="paragraph-k">
            For a long time, I worked with Java and its popular frameworks: <b><i>PrimeFaces</i>, <i>Jersey</i>, <i>Hibernate</i>, <i>Springframework (Springboot as well)</i></b>
          </p>
          <p className="paragraph-k">
            Beside Java and its ecosystem, I also work with frontend stuffs: <b><i>ReactJS, React Native</i>, <i>Native Android Development</i></b>
          </p>
        </Col>
      </Row>
    )
  }
}


export default GeneralInfo