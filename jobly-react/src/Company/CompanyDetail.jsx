import { useState, useEffect } from "react";
import CardList from "../CardList.jsx";
import { TEST_COMPANIES } from "../practiceData.js";
import JoblyApi from "../api.js";
import { useParams } from "react-router-dom";

const INITIAL_STATE = { company: "", isLoading: true, err: null };

/** Company Detail component renders company details and job list
 *
 * Props:
 * -none
 *
 * State:
 * - company like { handle, name, description, numEmployees, logoUrl
 *  jobs, isLoading }
 *
 * RoutesList -> CompanyDetail -> {CardList}
 */

function CompanyDetail() {
  const [companyDetailData, setCompanyDetailData] = useState(INITIAL_STATE);
  const { handle } = useParams();

  /** Load company data on page load, set err in state if company not found */
  useEffect(
    function loadCompanyFromAPI() {
      async function fetchData() {
        let companyData;
        try {
          companyData = await JoblyApi.getCompany(handle);
        } catch (err) {
          console.log(err);
          setCompanyDetailData(() => {
            return { ...companyDetailData, isLoading: false, err: err };
          });
        }
        companyData.isLoading = false;
        setCompanyDetailData(companyData);
      }
      fetchData();
    },
    [handle],
  );

  //Display if current page is loading
  if (companyDetailData.isLoading === true) {
    return (
      <div>
        <h1>Loading Data</h1>
      </div>
    );
  }

  //Display if company is not found
  if (companyDetailData.err) {
    return (
      <div className="my-3">
        <h4>Could not complete your search. {companyDetailData.err}</h4>
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
