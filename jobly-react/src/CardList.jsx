import React from "react";
import JobCard from "./JobCard.jsx";
import CompanyCard from "./CompanyCard.jsx";
import "./CardList.css";
import { v4 as uuid } from "uuid";

/** AppComponent for summary
 *
 * Props:
 * - companies, jobs
 *
 * State:
 * - none
 *
 * {CompanyList, JobList, CompanyDetail}
 * -> CardList
 * -> {JobCard, CompanyCard}
 */
function CardList({ jobs, companies }) {
  return (
    <div className="CardList">
      {jobs &&
        jobs.map((job) => (
          <JobCard
            key={uuid()}
            job={job}
          />
        ))}
      {companies &&
        companies.map((company) => {
          return (
            <CompanyCard
              key={uuid()}
              company={company}
            />
          );
        })}
    </div>
  );
}

export default CardList;
