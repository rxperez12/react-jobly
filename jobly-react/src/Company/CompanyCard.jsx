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
    logoImagePathSplit = company.logoUrl.split("/"); //TODO: MAKE A LOGO FOLDER
  }

  const correctImagePath =
    logoImagePathSplit !== ""
      ? `/${logoImagePathSplit[logoImagePathSplit.length - 1]}`
      : "";
  // NOTE: probably easier to figure this out somewhere else or just make a folder with logo images

  return (
    <Link
      className="CompanyCard-link"
      to={`/companies/${company.handle}`}
    >
      <div className="CompanyCard m-3 shadow">
        <div className="m-2">
          <h4>{company.name}</h4>
          <img
            className="CompanyCard-img"
            src={correctImagePath}
          ></img>
          <p>{company.description}</p>
        </div>
      </div>
    </Link>
  );
}

export default CompanyCard;
