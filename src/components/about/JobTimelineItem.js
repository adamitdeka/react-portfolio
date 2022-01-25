function JobTimelineItem(props) {
  return (
    <div className="timeline-item">
      <div className="content">
        <p className="job-year">
          {props.data.startDate} - {props.data.endDate}
        </p>
        <h2 className="job-title">{props.data.companyName}</h2>
        <p className="job-desc">{props.data.description}</p>
      </div>
    </div>
  );
}

export default JobTimelineItem;
