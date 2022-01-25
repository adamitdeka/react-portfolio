import ProjectItemModal from "./ProjectItemModal";
import React from "react";
function ProjectItem(props) {
  console.log("Project Data", props.data);
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="project-item-container">
      {
        <div className="project-item">
          <img
            src={"/uploads/" + props.data.images[0].src}
            alt={props.data.images[0].alt}
            className="project-image"
          />
          <div className="overlay">
            <div className="overlay-inner-container flex">
              <div className="project-title">{props.data.title}</div>
              <div className="project-btn-container">
                <button
                  className="project-btn"
                  onClick={() => setModalShow(true)}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <ProjectItemModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            id={props.index}
            data={props.data}
          />
        </div>
      }
    </div>
  );
}

export default ProjectItem;
