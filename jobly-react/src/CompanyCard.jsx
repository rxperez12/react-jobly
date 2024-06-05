import React from "react";
import "./CompanyCard.css";
import { Link } from "react-router-dom";

/** Company Card renders company name, company image, and description
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
  let logoImagePathSplit = "";
  if (company.logoUrl) {
    logoImagePathSplit = company.logoUrl.split("/"); //TODO: better name?
  }
  const correctImagePath =
    logoImagePathSplit !== ""
      ? `/${logoImagePathSplit[logoImagePathSplit.length - 1]}`
      : "";
  // NOTE: probably easier to figure this out somewhere else or just make a folder with logo images
  return (
    <Link to={`/companies/${company.handle}`}>
      <div className="CompanyCard m-2">
        <h4>{company.name}</h4>
        <img src={correctImagePath}></img>
        <p>{company.description}</p>
      </div>
    </Link>
  );
}

export default CompanyCard;
