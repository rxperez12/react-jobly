import React from "react";
import CardList from "./CardList.jsx";

/** AppComponent for summary
 *
 * Props:
 * -none
 *
 * State:
 * - company with jobs
 *
 * RoutesList -> CompanyDetail -> {CardList}
 */

function CompanyDetail() {
  return (
    <div>
      <h1> Company Detail Page</h1>
      <p> will show company details and list of jobs available</p>
      <CardList jobs={"jobs"} />
    </div>
  );
}

export default CompanyDetail;
