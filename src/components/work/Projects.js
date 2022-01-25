import data from "../../data.json";
import ProjectItem from "./ProjectItem";
function Projects() {
  const projectList = data.projects.map((item, index) => {
    return <ProjectItem key={index} index={index} data={item} />;
  });
  return (
    <section id="work" className="m4">
      <div className="section-heading-container">
        <h2 className="section-heading">Portfolio</h2>
      </div>
      <div id="projects">{projectList}</div>
    </section>
  );
}

export default Projects;
