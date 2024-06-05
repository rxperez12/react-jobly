import { useState, useEffect } from "react";
import SearchForm from "./SearchForm.jsx";
import CardList from "./CardList.jsx";
import { TEST_COMPANIES } from "./practiceData.js";

/** Company List
 *
 * Props:
 * - none
 *
 * State:
 * - Companies
 *
 * RoutesList -> CompanyList -> {SearchForm, CardList}
 */
function CompanyList() {
  const [companies, setCompanies] = useState(""); //TODO: set initial state as all companies, need to dictate what type of search it is

  const [searchParams, setSearchParams] = useState("");

  function handleSearch() {
    //make api call
    //save it to companies
    //render list of companies according to companies list
  }

  return (
    <div>
      <SearchForm />
      {searchParams === "" ? (
        <h1 className="mt-2">All Companies</h1>
      ) : (
        <h1> Search Results for {"include correct search param"}</h1>
      )}
      <CardList companies={TEST_COMPANIES} />
    </div>
  );
}

export default CompanyList;
