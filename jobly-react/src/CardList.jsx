import React from "react";
import JobCard from "./Job/JobCard.jsx";
import CompanyCard from "./Company/CompanyCard.jsx";
import "./CardList.css";
import { v4 as uuid } from "uuid";

/** Card list renders list of cards for either companies or jobs TODO: express that it should only take one or the other
 *
 * Props:
 * - companies, jobs
 * - handleApply fn that is called in parent
 *
 * State:
 * - none
 *
 * {CompanyList, JobList, CompanyDetail}
 * -> CardList
 * -> {JobCard, CompanyCard}
 */
function CardList({ jobs, companies, handleApply }) {
  //TODO: one prop, either jobs or companies and then render proper list

  return (
    <div className="CardList">
      {jobs &&
        jobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
          />
        ))}
      {companies &&
        companies.map((company) => {
          return (
            <CompanyCard
              key={company.handle}
              company={company}
              handleApply={handleApply}
            />
          );
        })}
    </div>
  );
}

export default CardList;
