import React from 'react';
import './App.css';
import ava from './avatar_2.jpeg'
import { Container, Row, Col } from 'reactstrap';
import VPBank from './VPBank'
import FPTSoft from './FPTSoft'
import Viettel from './Viettel'
import Skills from './skills'
import LinkId from "./LinkId";

function App() {

  return (
    <div className="App">
      <Container className="x-wrapper">
        <Row>
          <Col sm={4} className="text-left">
            <Row style={{ position: 'relative' }}>
              <div className="the-absolute-pane">
                <Col sm={12}>
                  <Row style={{ paddingTop: 30, paddingRight: 10 }}>
                    <Col sm={12}>Phone:&nbsp;
                        <b>+84 943 396 121</b>
                    </Col>
                    <Col sm={12}>Email:&nbsp;
                        <b>minh.khuong1306@gmail.com</b>
                    </Col>
                    <Col sm={12}>Skype:&nbsp;
                        <b>khuongdv.ptit</b>
                    </Col>
                    <Col sm={12} style={{ display: 'none' }}>Website:&nbsp;
                        <b>https://superjunior.dev</b>
                    </Col>
                    <Col sm={12}>Location:&nbsp;
                      <b>Hoang Mai, Ha Noi</b>
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
              <Col sm={12} style={{marginTop: 10}}>
                <div><b style={{ fontSize: 19 }}>Posts and Telecommunications Institute of Technology</b> <i>(2009 - 2014)</i></div>
                <ul>
                  <li>Location: <i>Hanoi</i></li>
                  <li>Major: <i>Information Technology</i></li>
                  <li>Subjects: <i>Data structure, Algorithms, OOP, System Design and Analysis, Mobile Development, Web Development, Database Management, Distributed Systems</i></li>
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
          <Col sm={8} style={{ padding: 20, paddingTop: 10,  borderLeft: 'solid 1px #ccc' }}>
            <Row>
              <Col sm={12} className="name-khuong">
                DAO VAN KHUONG
                </Col>
              <Col sm={12} className="job-title">
                senior software engineer
                </Col>
            </Row>
            <div className="styled-header-pan section-head" style={{ marginTop: 10 }}>
              GENERAL INFO
              </div>
            <p className="paragraph-k" style={{ marginTop: 10 }}>
              I have been working as a software developer for more than 8 years.<br />
              C#/JS/Java are my major programming languages. In 2014, I became an <b><i>"Oracle Certified Professional Java SE6 Programmer"</i></b>
            </p>
            <p className="paragraph-k">
              For a long time, I worked with these languages and their popular frameworks: <b><i>Springframework, AspNetCore, ExpressJS, NextJs, NestJS...</i></b>
            </p>
            <p className="paragraph-k">
              Beside backend development, I also work with frontend stuffs: <b><i>ReactJS, React Native</i>, <i>Native Android Development</i></b>
            </p>
            <p className="paragraph-k">
              I usually read online articles or ebooks to keep my knowledge up to date. I am always willing to learn new things, especially those in the IT field. <br/>
              Beside main job, in my spare time, I also spend time to practice new technologies or join some side projects to enhance my skills.
            </p>

            <div className="styled-header-pan section-head" style={{ marginTop: 30, marginBottom: 10 }}>
              WORK EXPERIENCE
            </div>
            <LinkId />
            <VPBank />
            <FPTSoft />
            <Viettel />
          </Col>
        </Row>
      </Container>
    </div>
  );
}



export default App;
