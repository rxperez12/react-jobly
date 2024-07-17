import { BrowserRouter } from "react-router-dom";
import RoutesList from "./RoutesList.jsx";
import NavBar from "./NavBar.jsx";
import { useState, useEffect } from "react";
import "./App.css";
import JoblyApi from "./api.js";
import userContext from "./userContext.js";

const INITIAL_STATE = { user: null, errs: [] };

/** Component for entire page.
 *
 * Props: none
 * State: userlike user: { username, firstName, lastName, email, isAdmin, jobs }
 *
 * App -> {RouterList, NavBar}
 */

function App() {
  const [userData, setUserData] = useState(INITIAL_STATE);

  // Logs in existing user if token exists in local storage
  useEffect(function logInExistingUser() {
    //getUserOnMount - change name
    async function logInTokenUser() {
      const token = localStorage.getItem("token");

      if (token !== null) {
        JoblyApi.resetToken(token);
        const decodedPayload = JoblyApi.decodeTokenPayload();

        try {
          await updateUser(decodedPayload.username);
        } catch (errs) {
          localStorage.removeItem("token");
        }
      }
    }
    logInTokenUser();
  }, []);

  console.log("Current user", userData);

  /** Handle user login, make API call TODO: deconstruct form data- more explicit*/
  async function handleLogin(formData) {
    const loginData = await JoblyApi.logIn(formData);

    localStorage.setItem("token", loginData.token);

    await updateUser(formData.username);
  }

  /** Handle user sign up, make API call and updates userData in state*/
  async function handleSignup(formData) {
    //Make API call
    const signupData = await JoblyApi.signUp(formData);

    localStorage.setItem("token", signupData.token);

    await updateUser(formData.username);
  }

  /** Updates userData on successful form submit */
  async function updateUser(username) {
    let userData = await JoblyApi.getUser(username);
    setUserData(() => {
      return { ...userData, errs: [] };
    });
  }

  /** Handle user edit, make API call and if successful update state */
  async function handleEdit(formData) {
    let inputData = {
      username: userData.user.username,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
    };

    const editedUserData = await JoblyApi.editUser(inputData);

    await updateUser(editedUserData.user.username); //
  }

  /** Handle user edit, make JoblyApi function call and if successful update state */
  function handleLogOut() {
    const userData = JoblyApi.logOut();

    localStorage.removeItem("token");
    if (userData.user === null) {
      setUserData(() => {
        return { ...userData, errs: [] };
      });
    }
  }

  /** Display errors as alerts */
  function displayErrors() {
    return (
      <div>
        {userData.errs.map((err) => (
          <Alert
            err={err}
            key={uuid()}
          />
        ))}
      </div>
    );
  }

  /** Handles apply, makes Jobly API call and updates state */
  function handleApply(jobId) {
    const applyData = {username: userData.user.username, jobId: jobId};
    const appliedJobData = JoblyApi.apply(applyData);


  }

  if (localStorage.getItem("token") && userData.user === null) {
    return <i> Loading </i>; // TODO: add loading component
  }

  return (
    <userContext.Provider value={{ user: userData.user?.firstName }}>
      <div className="App">
        <BrowserRouter>
          <NavBar
            userData={userData}
            logOut={handleLogOut}
          />

          <div className="container">
            <RoutesList
              handleLogin={handleLogin}
              handleSignup={handleSignup}
              handleEdit={handleEdit}
              userData={userData}
              updateUser={updateUser}
            />
          </div>
        </BrowserRouter>
      </div>
    </userContext.Provider>
  );
}

export default App;
