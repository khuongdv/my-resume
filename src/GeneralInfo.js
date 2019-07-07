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
            I've been working as a software developer for more than 5 years.<br />
            Java/Javascript are my major programming languages. In 2014, I became an <b><i>"Oracle Certified Professional Java SE6 Programmer"</i></b>
          </p>
          <p className="paragraph-k">
            In the past two years, I worked mainly on frontend side, especially web frontend (ReactJS, Redux). I really like Javascript and its ecosystem.<br/>
            Beside frontend stuffs, I also have a few years of working with Java, Springframework and Hibernate.
          </p>
        </Col>
      </Row>
    )
  }
}


export default GeneralInfo