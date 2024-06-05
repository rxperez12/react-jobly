import React from "react";
import "./CompanyCard.css";
import { Link } from "react-router-dom";

/** Company Card for displaying company in list
 *
 * Props:
 * - company
 *
 * State:
 * - none
 *
 * CardList -> CompanyCard
 */
function CompanyCard({ company }) {
  const logoImagePathSplit = company.logoUrl.split("/"); //TODO: better name?
  return (
    <Link to={`/companies/${company.handle}`}>
      <div className="CompanyCard m-2">
        <h4>{company.name}</h4>
        <img
          src={`/${logoImagePathSplit[logoImagePathSplit.length - 1]}`}
        ></img>
        <p>{company.description}</p>
      </div>
    </Link>
  );
}

export default CompanyCard;
