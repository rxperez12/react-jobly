import { useState } from "react";
import { useNavigate } from "react-router-dom";

const INITIAL_STATE = {
  username: "",
  password: "",
  firstName: "",
  lastName: "",
  email: "",
};

/** Signup Form component
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
  function handleClick(evt) {
    evt.preventDefault();
    handleSubmit(formData);
    setFormData(INITIAL_STATE);
    navigate("/");
  }

  return (
    <div>
      <h1>Sign Up </h1>
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
          <button
            className="Signup-btn btn btn-light my-3
          "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
export default SignupForm;
