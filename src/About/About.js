import { useEffect } from 'react';
import { Row, Col } from "react-bootstrap";
import psLogo from "../public/ps-logo.svg";

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
            <p>A little bit about myself</p>
          </Col>
        </Row>
        <Row className="about-row">
          <Col xs={12} sm={12} md={6} lg={3} className="profile flex items-center justify-center lg:justify-end" data-aos="fade-in" data-aos-duration="3000">
            <img className="max-h-[300px] rounded-3xl mb-5 md:pb-0" src="profile.jpg" alt="profile" />
          </Col>
          <Col xs={12} sm={12} md={6} lg={9} className="h-full flex flex-col justify-center gap-y-3" data-aos="fade-in" data-aos-duration="3000">
            <span>
              I am a <strong className='text-xl'>Full Stack Developer </strong> Living in Stanford, CA. I have a
              passion for <strong className='text-xl'>Web Development</strong>
            </span>

            <span>
              When I first interacted with a programming language during an introductory computer science course while studying Geology, I couldn't think about anything else. That's when I decided to go to Canada and start studying computer programming. While the new logic can be a bit challenging at the beginning, my passion for solving problems in different ways using the programming was increasing, and I could easily spend hours and hours finding the solutions to the issues.
            </span>

            <span>
              I first fell in love with JavaScript for both front and back-end solutions, but in my job experience, I was introduced to Spring Boot and Sanic to build RESTful APIs in a microservices structure, which are powerful tools that increased my set of skills.
            </span>
          </Col>
        </Row>
      </div>
    </>
  );
}
