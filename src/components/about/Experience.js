import data from "../../data.json";
import JobTimelineItem from "./JobTimelineItem";

function Experience() {
  //const [state, setstate] = useState({ direction: "left" });
  const timelineList = data.job.map((item, index) => {
    return <JobTimelineItem key={index} index={index} data={item} />;
  });
  return (
    <section id="experience" className="m4">
      <div className="section-heading-container">
        <h2 className="section-heading">Work Experience</h2>
      </div>
      <section id="job-timeline">
        <div className="timeline">{timelineList}</div>
      </section>
    </section>
  );
}

export default Experience;
