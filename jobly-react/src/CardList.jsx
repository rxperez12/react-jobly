import React from "react";
import JobCard from "./JobCard.jsx";
import CompanyCard from "./CompanyCard.jsx";

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
    <div>
      <h1> Card List</h1>
      <p> Will display Company or Job cards</p>
      {jobs && <JobCard />}
      {companies && <CompanyCard />}
    </div>
  );
}

export default CardList;
