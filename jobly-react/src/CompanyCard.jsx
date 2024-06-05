import React from "react";

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
  return (
    <div>
      <h1>Company Card component</h1>
      <p> Will display name, description, picture</p>
    </div>
  );
}

export default CompanyCard;
