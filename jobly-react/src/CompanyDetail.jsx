import { useState, useEffect } from "react";
import CardList from "./CardList.jsx";
import { TEST_COMPANIES } from "./practiceData.js";
import JoblyApi from "./api.js";
import { useParams } from "react-router-dom";

const INITIAL_STATE = { company: "", isLoading: true };

/** Company Detail component renders company details and job list
 *
 * Props:
 * -none
 *
 * State:
 * - company like { handle, name, description, numEmployees, logoUrl
 *  jobs, isLoading }
 *  where jobs is [{ id, title, salary, equity }, ...]
 *
 * RoutesList -> CompanyDetail -> {CardList}
 */

function CompanyDetail() {
  const [companyDetailData, setCompanyDetailData] = useState(INITIAL_STATE);
  const { handle } = useParams();

  useEffect(function loadCompanyFromAPI() {
    async function fetchData() {
      const companyData = await JoblyApi.getCompany(handle);
      companyData.isLoading = false;
      setCompanyDetailData(companyData);
    }
    fetchData();
  }, []);

  if (companyDetailData.isLoading === true) {
    return (
      <div>
        <h1>Loading Data</h1>
      </div>
    );
  }

  return (
    <div className="CompanyDetail mt-3">
      <h3> {companyDetailData.name} </h3>
      <p> {companyDetailData.description}</p>
      <CardList jobs={companyDetailData.jobs} />
    </div>
  );
}

export default CompanyDetail;
