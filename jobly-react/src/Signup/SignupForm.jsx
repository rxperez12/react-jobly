import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../Alert.jsx";
import { v4 as uuid } from "uuid";

const INITIAL_STATE = {
  username: "",
  password: "",
  firstName: "",
  lastName: "",
  email: "",
};

/** Signup Form component shows form and displays appropriate signup errors
 *
 * Props:
 * - handleSubmit function to be called in parent
 *
 * State:
 * - formData
 *
 * SignupPage -> SignupForm
 */
function SignupForm({ handleSubmit }) {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [errs, setErrors] = useState([]);
  const navigate = useNavigate();

  /** Handle user input into form */
  function handleChange(evt) {
    const { name, value } = evt.target;
    console.log(value);
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
      setErrors(errs); //TODO: set uuid here
      return;
    }
    navigate("/");
  }

  /** Display errors as alerts */
  function displayErrors(errs) {
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
      <h1>Sign Up </h1>
      {displayErrors(errs)}
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
            aria-label="Username input to log in"
          />

          <label
            htmlFor="password-input"
            className="form-label"
          >
            Password
          </label>
          <input
            id="password-input"
            name="password"
            onChange={handleChange}
            value={formData.password}
            className=" form-control my-2"
            type="password"
            aria-label="Password input to log in"
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
            aria-label="First name input to log in"
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
            aria-label="Last name input to log in"
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
            aria-label="Email input to sign up"
          />
          <button className="Signup-btn btn btn-light my-3">Submit</button>
        </div>
      </form>
    </div>
  );
}
export default SignupForm;
