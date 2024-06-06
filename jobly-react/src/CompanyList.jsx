import { useState, useEffect } from "react";
import SearchForm from "./SearchForm.jsx";
import CardList from "./CardList.jsx";
import { TEST_COMPANIES } from "./practiceData.js";
import JoblyApi from "./api.js";

const INITIAL_STATE = {
  companies: "",
  search: false,
  isLoading: true,
  searchText: null,
};

/** Company List renders search form and list of searchable companies
 *
 * Props:
 * - none
 *
 * State:
 * - companyData like {companies: [{}, ...], search: boolean, isLoading: boolean,
 * searchText: str} where company like:
 * { handle, name, description, numEmployees, logoUrl, jobs }
 *
 * RoutesList -> CompanyList -> {SearchForm, CardList}
 */
function CompanyList() {
  const [companyData, setCompanyData] = useState(INITIAL_STATE);
  console.log("company list: companies", companyData);

  /** Load all companies on page load */
  useEffect(function loadAllCompanies() {
    async function fetchData() {
      const response = await JoblyApi.getCompanies();
      setCompanyData({
        companies: response,
        search: false,
        searchText: null,
        isLoading: false,
      });
    }
    fetchData();
  }, []);

  /** Get company search data from form child and reset state */
  async function getSearchData(searchText) {
    console.log("searchText", searchText);

    let response = await JoblyApi.getCompanies(searchText);

    setCompanyData({
      companies: response,
      search: true,
      searchText: searchText,
      isLoading: false,
    });
  }

  /** Set correct label for current company display */
  function setSearchLabel() {
    if (companyData.companies.length === 0 && companyData.search === true) {
      return <h1> No matches found {}</h1>;
    } else if (companyData.search === true) {
      return <h1> Search for: {`${companyData.searchText}`}</h1>;
    } else {
      return <h1> All companies</h1>;
    }
  }

  // Display if loading
  if (companyData.isLoading) return <i>Loading...</i>;

  return (
    <div>
      <SearchForm handleSearch={getSearchData} />
      <div className="my-2">{setSearchLabel()}</div>
      <CardList companies={companyData.companies} />
    </div>
  );
}

export default CompanyList;
