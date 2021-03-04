import { useState, useEffect } from "react";
import { projects } from "./projects-data";
import {
  Modal,
  Button,
  ListGroup,
  Row,
  Col,
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
            <spam className="">
              Here are a few design projects I've worked on recently
            </spam>
          </div>

          <Row className="project-row">
            {projects.map((project) => (
              <Col xs={12} sm={12} md={12} lg={6} xl={4}>
                <div className="project-image" onClick={handleShow(project)}>
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
{/* 
          <CardDeck
            style={{ margin: "auto", gap: "10px", borderRadius: "1rem" }}
            md={6}
          >
            {projects.map((project) => (
              <Card className="" onClick={handleShow(project)}>
                <Card.Img
                  src={project.image}
                  style={{
                    borderRadius: "1rem",
                  }}
                />
                <div
                  class="overlay"
                  style={{
                    borderRadius: "1rem",
                  }}
                >
                  <div class="text">
                    <h3>{project.name}</h3>
                    <p>{project.keywords.join(", ")}</p>
                  </div>
                </div>
              </Card>
            ))}
          </CardDeck> */}
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
                  <a href={project.link}>
                    <button className="link-button">
                      <img
                        src="link-icon.svg"
                        style={{ width: "40px" }}
                        alt="external link"
                      />
                      Visit the website
                    </button>
                  </a>
                </div>
              </Modal.Header>

              <Modal.Body>
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
                <Button variant="secondary" onClick={handleClose}>
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
