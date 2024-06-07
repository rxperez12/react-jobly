import { useState, useEffect } from "react";
import SearchForm from "../SearchForm.jsx";
import CardList from "../CardList.jsx";
import JoblyApi from "../api.js";

const INITIAL_STATE = {
  jobs: "",
  search: false,
  isLoading: true,
  searchText: null,
};

/** JobList component renders search form and job list
 *
 * Props:
 * - none
 *
 * State:
 * - jobData like {jobs: [{}, ...], search: boolean, isLoading: boolean,
 * searchText: str} where jobs like: { id, title, salary, equity }
 *
 *
 * RoutesList -> JobList -> {CardList, SearchForm}
 */
function JobList() {
  const [jobData, setJobData] = useState(INITIAL_STATE);
  console.log("job list: companies", jobData);

  /** Load all jobs on start */
  useEffect(function loadAllJobs() {
    async function fetchData() {
      const response = await JoblyApi.getJobs();
      setJobData({
        jobs: response,
        search: false,
        searchText: null,
        isLoading: false,
      });
    }
    fetchData();
  }, []);

  /** Get job search data from form child and reset state */
  async function getSearchData(searchText) {
    console.log("searchText", searchText);
    let searchParams = searchText === "" ? {} : { title: searchText };
    let response = await JoblyApi.getJobs(searchParams);

    setJobData({
      jobs: response,
      search: true,
      searchText: searchText,
      isLoading: false,
    });
  }

  /** Set correct label for current job display */
  function setSearchLabel() {
    if (jobData.jobs.length === 0 && jobData.search === true) {
      return <h1> No matches found {}</h1>;
    } else if (jobData.search === true) {
      return <h1> Search for: {`${jobData.searchText}`}</h1>;
    } else {
      return <h1> All Jobs</h1>;
    }
  }

  //Loading message if not loaded
  if (jobData.isLoading) return <i>Loading...</i>;

  return (
    <div>
      <SearchForm handleSearch={getSearchData} />
      <div>{setSearchLabel()}</div>
      <CardList jobs={jobData.jobs} />
    </div>
  );
}

export default JobList;
