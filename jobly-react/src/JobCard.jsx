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
    <div className="JobCard m-2">
      <h4>{job.title}</h4>

      {job.salary ? <p>Salary: {job.salary}</p> : <div> </div>}
      <p>Equity: {job.equity || 0}</p>
    </div>
  );
}

export default JobCard;
