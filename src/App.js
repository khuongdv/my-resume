import React from 'react';
import './App.css';
import ava from './avatar_2.jpeg'
import { Container, Row, Col } from 'reactstrap';
import VPBank from './VPBank'
import FPTSoft from './FPTSoft'
import Viettel from './Viettel'
import Skills from './skills'
import LinkId from "./LinkId";
import LynkiD from "./LynkiD";

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
                    <Col sm={12}>Email/Skype:&nbsp;
                        <b>minh.khuong1306@gmail.com</b>
                    </Col>
                    <Col sm={12}>Location:&nbsp;
                      <b>Hoang Mai, Ha Noi</b>
                    </Col>
                  </Row>
                </Col>
              </div>
              <Col sm={12}>
                <img src={ava} className="avatar-img"  alt={'A handsome man'}/>
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
              With over 9 years as a software developer, I've honed my skills in C#, JavaScript, and Java. In 2014, I achieved the status of <b><i>"Oracle Certified Professional Java SE6 Programmer"</i></b>, showcasing my deep technical background.
            </p>
            <p className="paragraph-k">
              My experience spans across various frameworks like <b><i>Spring Framework, ASP.NET Core, ExpressJS, Next.js, NestJS</i></b>, offering me a comprehensive view of software development lifecycle which is beneficial for business analysis.
            </p>
            <p className="paragraph-k">
              Beyond backend development, I've engaged with frontend technologies including <b><i>ReactJS, React Native, and Native Android Development</i></b>, which has enriched my understanding of user interaction and requirements from both a technical and user perspective.
            </p>
            <p className="paragraph-k">
              I continuously update my knowledge through online articles, ebooks, and by participating in side projects. This habit not only keeps my technical skills sharp but also enhances my ability to analyze and adapt to new business contexts and technologies. My eagerness to learn is particularly focused on areas that intersect technology with business analysis.
            </p>
            <p className="paragraph-k">
              I leverage various tools for problem-solving, which has taught me to think critically about solutions, a skill directly applicable to the analytical demands of a Business Analyst role.
            </p>

            <div className="styled-header-pan section-head" style={{ marginTop: 30, marginBottom: 10 }}>
              WORK EXPERIENCE
            </div>
            <LynkiD />
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
