import { useState } from "react";
import SearchForm from "./SearchForm.jsx";
import CardList from "./CardList.jsx";

/** JobList component renders TODO: fillout
 *
 * Props:
 * - none
 *
 * State:
 * - jobs
 *
 * RoutesList -> JobList -> {CardList, SearchForm}
 */
function JobList() {
  return (
    <div>
      <h1> Joblist</h1>
      <p>
        {" "}
        will make appropriate api calls and show list of jobs and search form
      </p>
      <SearchForm />
      <CardList jobs={"jobs"} />
    </div>
  );
}

export default JobList;
