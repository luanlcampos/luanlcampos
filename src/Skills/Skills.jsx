import { useEffect, useState } from "react";
import resume from "../public/files/luanlcampos.pdf";

import AOS from "aos";
import "aos/dist/aos.css";
import "./Skills.css";

export default function Skills() {
  const [selected, setSelected] = useState("PL");

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center md:pb-24">
      <div
        className="abt-title text-center"
        data-aos="fade-in"
        data-aos-duration="3000"
      >
        <div>
          <h1 className="text-center">Skills</h1>
          <div className="flex justify-center flex-col">
            <span>A list of some of the technologies that I know</span>
            <span>
              Full list is available on my{" "}
              <a href={resume} download>
                resume
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="skills" data-aos="fade-in" data-aos-duration="3000">
        <div className="skills-list">
          <ul>
            <li>➜ Node.js</li>
            <li>➜ Express.js</li>
            <li>➜ ASP.NET</li>
            <li>➜ Spring Boot</li>
          </ul>
          <ul>
            <li>➜ React</li>
            <li>➜ Angular</li>
            <li>➜ Next</li>
          </ul>
          <ul>
            <li>➜ PostgreSQL</li>
            <li>➜ MySQL</li>
            <li>➜ MongoDB</li>
          </ul>
          <ul>
            <li>➜ Git</li>
            <li>➜ GitHub</li>
            <li>➜ GitLab</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
