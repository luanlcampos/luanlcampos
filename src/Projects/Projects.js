import { useState, useEffect } from "react";
import { projects } from "./projects-data";
import {
  Modal,
  Button,
  ListGroup,
  Row,
  Col,
  Carousel,
} from "react-bootstrap";

import AOS from "aos";
import "aos/dist/aos.css";

//import custom css
import "./Projects.css";
// import linkIcon from '../../public/link-icon.svg';

export default function Projects() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (proj) => (e) => {
    setShow(true);
    setProject(proj);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  const [project, setProject] = useState(null);
  return (
    <>
      <div className="projects" id="projects" data-aos="fade-in">
        <div className="project-list text-center">
          <div className="project-title">
            <h1 className="">Projects</h1>
            <span className="">
              Here are a few design projects I've worked on recently
            </span>
          </div>

          <Row className="project-row">
            {projects.map((project) => (
              <Col xs={12} sm={12} md={12} lg={6} xl={4} key={project.id}>
                <div className="project-image" onClick={handleShow(project)} >
                  <img
                    src={project.image}
                    className="project-image-img"
                    alt={project.name}
                  />
                  <div className="img-overlay">
                    <div className="p-title">{project.name}</div>
                    <div className="p-kw">{project.keywords.join(", ")}</div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          {project ? (
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
              centered
              size="lg"
            >
              <Modal.Header>
                <div class="mod-title">
                  <h1>{project.name}</h1>
                </div>
                <div className="mod-subtitle">

                </div>
              </Modal.Header>

              <Modal.Body>
                {/* <Carousel>
                  {project.description.map((e) => (
                    <Carousel.Item>
                      <Carousel.Caption>
                        {e}
                      </Carousel.Caption>
                    </Carousel.Item>
                  ))}
                </Carousel> */}
                <ListGroup
                  variant="flush"
                  style={{ backgroundColor: "transparent !important" }}
                >
                  {project.description.map((e) => (
                    <ListGroup.Item
                      style={{ backgroundColor: "transparent !important" }}
                    >
                      {e}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" href={project.link} style={{backgroundColor: "#000"}}>
                  Visit the website
                </Button>
                <Button variant="secondary" onClick={handleClose} style={{backgroundColor: "#000"}}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          ) : null}
        </div>
      </div>
    </>
  );
}
