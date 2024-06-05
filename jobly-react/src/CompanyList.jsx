import React from "react";
import SearchForm from "./SearchForm.jsx";
import CardList from "./CardList.jsx";

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
  return (
    <div>
      <h1>Company List</h1>
      <p>Gets api calls for companies and displays appropriate companies</p>
      <SearchForm />
      <CardList companies={"companies"} />
    </div>
  );
}

export default CompanyList;
