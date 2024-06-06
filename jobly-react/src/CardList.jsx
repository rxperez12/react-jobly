import React from "react";
import JobCard from "./JobCard.jsx";
import CompanyCard from "./CompanyCard.jsx";
import "./CardList.css";
import { v4 as uuid } from "uuid";

/** Card list renders list of cards for either companies or jobs TODO: express that it should only take one or the other
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
  //TODO: one prop, either jobs or companies and then render proper list
  //TODO: use id from db instead of uuid
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
