import { useState } from "react";
import { useNavigate } from "react-router-dom";

const INITIAL_STATE = {
  username: "",
  password: "",
};

/** Login Form component
 *
 * Props:
 * - handleSubmit function to be called in parent
 *
 * State:
 * -formData
 *
 * LoginPage -> LoginForm
 */
function LoginForm({ handleSubmit }) {
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
      <h1>Login </h1>
      <form
        className="LoginForm my-4"
        onSubmit={handleClick}
      >
        <div className="d-flex justify-content-center">
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
            className=" form-control mx-2"
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
            className=" form-control mx-2"
            type="password"
            aria-label="Password input to log in"
          />
          <button className="SearchForm-btn btn  btn-light ">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
