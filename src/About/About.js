import {useEffect} from 'react';
import {  Row, Col, Image } from "react-bootstrap";
import psLogo from "../public/ps-logo.svg";
import restAPILogo from "../public/rest-api.svg";

import AOS from 'aos';
import 'aos/dist/aos.css';

//css
import "./About.css";

export default function About() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <div className="about" id="about-section" >
        <Row className="abt-title text-center" data-aos="fade-in" data-aos-duration="3000">
          <Col md={12} lg={12}>
          <h1 className="text-center">Who I Am</h1>
          <p>
              I am a Full Stack Developer Living in Toronto, ON. I have a
              passion for Web Developing
            </p>
          </Col>
        </Row>
        <Row className="about-row">
          <Col xs={12} sm={12} md={12} lg={3} className="profile"  data-aos="fade-in" data-aos-duration="3000"> 
            <Image className="profile-image" src="profile.jpg" rounded />
          </Col>
          <Col xs={12} md={9} className="text-center m-col" style={{margin: '0 auto'}} data-aos="fade-in" data-aos-duration="3000">
            <Row className="skills">
              <Col xs={12} lg={6} className="text-center mb-4 m-col2">  
                <div className="skill-title">Programming Languages</div>

                <div className="lang-grid">
                  <i className="devicon-cplusplus-plain-wordmark m-icon" />
                  <i className="devicon-java-plain m-icon"></i>
                  <i className="devicon-javascript-plain colored m-icon"></i>
                  <i className="devicon-typescript-plain colored m-icon"></i>
                  <i className="devicon-python-plain colored m-icon"></i>
                </div>
              </Col>
              <Col xs={12} lg={6} className="text-center mb-4 m-col2">
                <div className="skill-title">Front-end Developer</div>
                <div className="lang-grid">
                  <i className="devicon-html5-plain-wordmark m-icon"></i>
                  <i className="devicon-css3-plain-wordmark m-icon"></i>
                  <i className="devicon-react-original m-icon"></i>
                  <i className="devicon-angularjs-plain colored m-icon"></i>
                  <i className="devicon-bootstrap-plain colored m-icon"></i>
                  <i className="devicon-materialui-plain colored m-icon"></i>
                </div>
              </Col>
              <Col xs={12} lg={6} className="text-center mb-4 m-col2">
                <div className="skill-title">Back-end Developer</div>
                <div className="lang-grid">
                  <i className="devicon-nodejs-plain m-icon"></i>
                  <i className="devicon-express-original colored m-icon"></i>
                  <img
                    src={restAPILogo}
                    className="c-icon"
                    alt="Rest API Logo"
                  ></img>
                  <i className="devicon-dot-net-plain-wordmark m-icon"></i>
                  <i className="devicon-jasmine-plain m-icon"></i>
                </div>
              </Col>
              <Col xs={12}  lg={6} className="text-center mb-4 m-col2">
                <div className="skill-title">Dev Tools</div>
                <div className="lang-grid">
                  <i className="devicon-git-plain-wordmark m-icon"></i>
                  <i className="devicon-github-original m-icon"></i>
                  <i className="devicon-bash-plain colored m-icon"></i>
                  <img
                    src={psLogo}
                    className="c-icon"
                    alt="PowerShell Logo"
                  ></img>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
}
