import React from "react";
import "./JobCard.css";

/** JobCard renders job card with title, salary, and equity
 *
 * Props:
 * - job
 *
 * State:
 * -none
 *
 * CardList -> Jobcard
 */
function JobCard({ job }) {
  return (
    <div className="JobCard m-3 shadow">
      <div className="m-2">
        <h4>{job.title}</h4>
        <b>{job.companyName}</b>
        {job.salary ? <p>Salary: {job.salary}</p> : <div> </div>}
        <p>Equity: {job.equity || 0}</p>
      </div>
    </div>
  );
}

export default JobCard;
