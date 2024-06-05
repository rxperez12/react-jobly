import { useState, useEffect } from "react";
import SearchForm from "./SearchForm.jsx";
import CardList from "./CardList.jsx";
import { TEST_COMPANIES } from "./practiceData.js";
import JoblyApi from "./api.js";

/** Company List renders search form and list of searchable companies
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

  async function getSearchData(searchText) {
    console.log("searchText", searchText);
    let response = await JoblyApi.getCompanies({ nameLike: searchText }); //TODO: need to do this in a try catch loop

    setCompanies(response);
  }

  return (
    <div>
      <SearchForm handleSearch={getSearchData} />
      {searchParams === "" ? (
        <h1 className="mt-2">All Companies</h1>
      ) : (
        <h1> Search Results for {"include correct search param"}</h1>
      )}
      <CardList companies={companies} />
    </div>
  );
}

export default CompanyList;
