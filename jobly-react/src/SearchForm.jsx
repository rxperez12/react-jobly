import { useState } from "react";
import "./SearchForm.css";

/** SearchForm component
 *
 * Props:
 * - handleSearch: fn to call in parent to handle search
 *
 * State:
 * - form input
 *
 * {CompanyList, JobList} -> SearchForm
 */
function SearchForm({ handleSearch }) {
  const [formData, setFormData] = useState("");

  /** Handle user input into form */
  function handleChange(evt) {
    const value = evt.target.value;
    console.log(value);
    setFormData(value);
  }

  /** Handle click by calling fn in parent with data */
  function handleClick(evt) {
    evt.preventDefault();
    handleSearch(formData.trim());
    setFormData("");
  }

  return (
    <div>
      <form
        className="SearchForm my-4"
        onSubmit={handleClick}
      >
        <div className="d-flex justify-content-center">
          <input
            name="search"
            placeholder="Enter search term.."
            onChange={handleChange}
            value={formData}
            className=" form-control-lg rounded me-4"
            type="text"
            aria-label="Search"
          />
          <button className="SearchForm-btn btn btn-lg btn-light ">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
