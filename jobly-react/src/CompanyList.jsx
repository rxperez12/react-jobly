import { useState, useEffect } from "react";
import SearchForm from "./SearchForm.jsx";
import CardList from "./CardList.jsx";
import { TEST_COMPANIES } from "./practiceData.js";
import JoblyApi from "./api.js";

const INITIAL_STATE = {
  companies: "",
  search: false,
};

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
  const [companyData, setCompanyData] = useState(INITIAL_STATE);
  console.log("company list: companies", companyData);

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

  async function getSearchData(searchText) {
    console.log("searchText", searchText);
    let searchParams = searchText === "" ? {} : { nameLike: searchText };
    let response = await JoblyApi.getCompanies(searchParams);

    setCompanyData({
      companies: response,
      search: true,
      searchText: searchText,
    });
  }

  function setSearchLabel() {
    if (companyData.companies.length === 0 && companyData.search === true) {
      return <h1> No matches found {}</h1>;
    } else if (companyData.search === true) {
      return <h1> Search for: {`${companyData.searchText}`}</h1>;
    } else {
      return <h1> All companies</h1>;
    }
  }

  return (
    <div>
      <SearchForm handleSearch={getSearchData} />
      <div className="my-2">{setSearchLabel()}</div>
      <CardList companies={companyData.companies} />
    </div>
  );
}

export default CompanyList;
