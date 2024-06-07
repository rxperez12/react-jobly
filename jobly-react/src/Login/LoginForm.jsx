import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../Alert.jsx";
import { v4 as uuid } from "uuid";

const INITIAL_STATE = {
  username: "",
  password: "",
};

/** Login Form component shows login and displays appropriate login errors
 *
 * Props:
 * - handleSubmit function to be called in parent
 *
 *
 * State:
 * -formData
 *
 * LoginPage -> LoginForm
 */
function LoginForm({ handleSubmit }) {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const navigate = useNavigate();
  const [errs, setErrors] = useState([]);

  console.log("current error state", errs);

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
      setErrors(errs);
      return;
    }
    navigate("/");
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
      <h1>Login </h1>
      {displayErrors(errs)}
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
