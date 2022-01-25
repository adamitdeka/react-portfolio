import { Modal, Button } from "react-bootstrap";
import ImageCarousel from "./ImageCarousel";

function ProjectItemModal(props) {
  let projectTechList = [];
  let projectLinks = [];
  if (props.data.technology.length > 0) {
    projectTechList = props.data.technology.map((item) => {
      return <p class="tech">{item}</p>;
    });
  }
  if (props.data.files) {
    projectLinks = props.data.files.map((item) => {
      return (
        <div class="link-container">
          <a
            href={"/uploads/" + item.src}
            target="_blank"
            rel="noopener noreferrer"
            className="file-link link"
          >
            {item.fileName}
          </a>
        </div>
      );
    });
  }
  if (props.data.links) {
    projectLinks.push(
      props.data.links.map((item) => {
        return (
          <div class="link-container">
            <a href={item.link} className="project-links link">
              {item.name}
            </a>
          </div>
        );
      })
    );
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="modal-title">
          {props.data.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ImageCarousel images={props.data.images} />
        <p className="project-desc m2">{props.data.desc}</p>
        <div className="flex m2 tech-container">
          <h3 className="tech-heading">Technology</h3>
          <div className="tech-inner-container">{projectTechList}</div>
        </div>
        <div className="flex projectLink-container">{projectLinks}</div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default ProjectItemModal;
