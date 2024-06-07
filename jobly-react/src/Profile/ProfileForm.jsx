import { useState } from "react";
import Alert from "../Alert.jsx";
import { v4 as uuid } from "uuid";

/** Profile Form component for editing profile
 *
 * Props:
 * - handleSubmit function called in parent
 * - userData like { username, firstName, lastName, email, isAdmin, jobs }
 *
 * State:
 * - formData
 *
 * ProfilePage -> ProfileForm
 */
function ProfileForm({ handleSubmit, userData }) {
  console.log("PROFILE FORM USER", userData);
  const [formData, setFormData] = useState(userData.user);
  const [errors, setErrors] = useState([]);

  /** Handle user input into form */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((formData) => {
      return {
        ...formData,
        [name]: value,
      };
    });
  }

  /** Handle click by calling fn in parent with data */
  async function handleClick(evt) {
    evt.preventDefault();
    try {
      await handleSubmit(formData);
    } catch (errs) {
      console.log("errs", errs);
      setErrors(errs);
      return;
    }
  }

  /** Display errors as alerts */
  function displayErrors(errs) {
    console.log("DISPLAY ERRS", errs);

    return (
      <div>
        {errs.map((err) => (
          <Alert
            err={err}
            key={uuid()}
          />
        ))}
      </div>
    );
  }

  return (
    <div>
      <h1>Profile </h1>
      {displayErrors(errors)}
      <form
        className="LoginForm my-4"
        onSubmit={handleClick}
      >
        <div className="justify-content-center ">
          <label
            htmlFor="username-input"
            className="form-label"
          >
            Username
          </label>
          <input
            id="username-input"
            name="username"
            onChange={handleChange}
            value={formData.username}
            className=" form-control my-2"
            type="text"
            aria-label="Current username display"
            disabled
          />

          <label
            htmlFor="firstname-input"
            className="form-label"
          >
            First name:
          </label>
          <input
            id="firstname-input"
            name="firstName"
            onChange={handleChange}
            value={formData.firstName}
            className=" form-control my-2"
            type="text"
            aria-label="First name input to edit"
          />
          <label
            htmlFor="lastname-input"
            className="form-label"
          >
            Last name:
          </label>
          <input
            id="lastname-input"
            name="lastName"
            onChange={handleChange}
            value={formData.lastName}
            className=" form-control my-2"
            type="text"
            aria-label="Last name input to edit"
          />

          <label
            htmlFor="email-input"
            className="form-label"
          >
            Email:
          </label>
          <input
            id="email-input"
            name="email"
            onChange={handleChange}
            value={formData.email}
            className=" form-control my-2"
            type=""
            aria-label="Email input to edit"
          />
          <button
            className="ProfileForm-btn btn btn-light my-3
          "
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProfileForm;
