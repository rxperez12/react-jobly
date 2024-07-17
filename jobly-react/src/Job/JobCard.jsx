import React from "react";
import "./JobCard.css";

/** JobCard renders job card with title, salary, and equity
 *
 * Props:
 * - job like {job: {title, companyName, salary, equity}}
 * - userAppliedJobs like [job, ...]
 *
 * State:
 * -none
 *
 * CardList -> Jobcard
 */
function JobCard({ job, handleApply, userAppliedJobs }) {
  /** Handles apply button click and calls handleApply fn */
  function handleClick() {
    handleClick(job.id);
  }

  //TODO: put condition on apply button
  return (
    <div className="JobCard m-3 shadow">
      <div className="m-2">
        <h4>{job.title}</h4>
        <b>{job.companyName}</b>
        {job.salary ? <p>Salary: {job.salary}</p> : <div> </div>}
        <p>Equity: {job.equity || 0}</p>
        <button
          className="btn btn-primary"
          onClick={handleClick}
        >
          Apply
        </button>
      </div>
    </div>
  );
}

export default JobCard;
