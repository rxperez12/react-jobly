import { useState } from "react";

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

  function handleChange(evt) {
    const value = evt.target.value;
    console.log(value);
    setFormData(value);
  }
  function handleClick(evt) {
    evt.preventDefault();
    handleSearch(formData);
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
          <button className="btn btn-lg btn-primary ">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
