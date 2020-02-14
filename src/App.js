import React from 'react';
import './App.css';
import ava from './avatar.png'
import { Container, Row, Col } from 'reactstrap';
import VPBank from './VPBank'
import FPTSoft from './FPTSoft'
import Viettel from './Viettel'
import Mimi from './Mimi'
import Fidelis from './Fidelis'
import Fattoria from './Fattoria'
import Skills from './skills'
import Sphacy from './Sphacy'
import GeneralInfo from './GeneralInfo';
import FooterNhe from './FooterNhe'

function App() {

  return (
    <div className="App">
      <Container className="x-wrapper">
        <Row>
          <Col sm={4} className="text-left">
            <Row style={{ position: 'relative' }}>
              <div className="the-absolute-pane">
                <Col sm={12}>
                  <Row style={{ paddingTop: 28, paddingRight: 10 }}>
                    <Col sm={12}>Phone:&nbsp;
                        <b>+84 943 396 121</b>
                    </Col>
                    <Col sm={12}>Email:&nbsp;
                        <b>minh.khuong1306@gmail.com</b>
                    </Col>
                    <Col sm={12}>Skype:&nbsp;
                        <b>khuongdv.ptit</b>
                    </Col>
                    <Col sm={12}>Website:&nbsp;
                        <b>https://superjunior.dev</b>
                    </Col>
                  </Row>
                </Col>
              </div>
              <Col sm={12}>
                <img src={ava} className="avatar-img" />
              </Col>
            </Row>
            <Row style={{ marginTop: 10, padding: 20 }}>
              <Col sm={12} className="styled-header-pan">
                <b className="section-head">EDUCATION</b>
              </Col>
              <Col sm={12} style={{ marginTop: 10 }}>
                <div><b style={{ fontSize: 19 }}>Posts and Telecommunications Institute of Technology</b> <i>(2009 - 2014)</i></div>
                <ul>
                  <li>Location: <i>Hanoi</i></li>
                  <li>Major: <i>Information Technology</i></li>
                  <li>Subjects: <i>Data structure, Algorithm, OOP, Software Development Process, Mobile Development, Web Development, Database Management, Distributed Systems</i></li>
                  <li>GPA: <i>8.0 / 10</i></li>
                </ul>
              </Col>
              <Col sm={12}>
                <div><b style={{ fontSize: 19 }}>Thanglong Aptech</b> <i>(2012 - 2013)</i></div>
                <ul>
                  <li>Location: <i>Hanoi</i></li>
                  <li>Course: <i>ACCPi</i></li>
                  <li>Subjects: <i>Web Dev, Java, .NET, Asp</i></li>
                </ul>
              </Col>
            </Row>
            <Skills />
          </Col>
          <Col sm={8} style={{ padding: 20, paddingTop: 10, borderLeft: 'solid 1px #ccc' }}>
            <Row>
              <Col sm={12} className="name-khuong">
                DAO KHUONG
                </Col>
              <Col sm={12} className="job-title">
                software developer
                </Col>
            </Row>
            <GeneralInfo />

            <div className="styled-header-pan section-head" style={{ marginTop: 30, marginBottom: 10 }}>
              WORK EXPERIENCE
            </div>
            <VPBank stt={'I'} />
            <FPTSoft stt={'II'} />
            <Viettel stt={'III'} />
            <div className="styled-header-pan section-head" style={{ marginTop: 30, marginBottom: 10 }}>
              FREELANCE PROJECTS
            </div>
            <Mimi stt={"I"} />
            <Fidelis stt={"II"} />
            <Fattoria stt={"III"} />
            <Sphacy stt={"IV"} />
          </Col>
        </Row>
        <FooterNhe />
      </Container>
    </div>
  );
}



export default App;
