import { BrowserRouter } from "react-router-dom";
import RoutesList from "./RoutesList.jsx";
import NavBar from "./NavBar.jsx";
import { useState } from "react";
import "./App.css";
import JoblyApi from "./api.js";
import userContext from "./userContext.js";

import { practiceUser, practiceLogin } from "./practiceData.js";

const INITIAL_STATE = { user: null, err: [] };

/** Component for entire page.
 *
 * Props: none
 * State: userlike { username, firstName, lastName, email, isAdmin, jobs }
 *
 * App -> {RouterList, NavBar}
 */

function App() {
  const [user, setUser] = useState(INITIAL_STATE);

  console.log("Current user", user);

  /** Handle user login, make API call and if successful update state */
  async function handleLogin(formData) {
    let loginData = null;
    try {
      loginData = await JoblyApi.logIn(formData);
    } catch (err) {
      //display errors to user? maybe use context for this???
    }
    if (loginData !== null) {
      let userData = await JoblyApi.getUser(formData.username);
      setUser(() => {
        return { ...userData, errs: [] };
      });
    }
  }

  async function handleSignup(formData) {
    let loginData = null;
    try {
      signupData = await JoblyApi.signUp(formData);
    } catch (err) {
      //display errors to user? maybe use context for this???
    }
    if (loginData !== null) {
      let userData = await JoblyApi.getUser(formData.username);
      setUser(() => {
        return { ...userData, errs: [] };
      });
    }
  }

  async function handleEdit(formData) {
    let loginData = null;
    try {
      signupData = await JoblyApi.editUser(formData);
    } catch (err) {
      //display errors to user? maybe use context for this???
    }
    if (loginData !== null) {
      let userData = await JoblyApi.getUser(formData.username);
      setUser(() => {
        return { ...userData, errs: [] };
      });
    }
  }

  function handleLogOut() {
    let userData = JoblyApi.logOut();
    if (userData.user === null) {
      setUser(() => {
        return { ...userData, errs: [] };
      });
    }
  }

  //TODO: context is not working, fix
  return (
    <userContext.Provider value={{ user: user?.firstName }}>
      <div className="App">
        <BrowserRouter>
          <NavBar
            userData={user}
            logOut={handleLogOut}
          />
          <div className="container">
            <RoutesList
              handleLogin={handleLogin}
              handleSignup={handleSignup}
              handleEdit={handleEdit}
              userData={user}
            />
          </div>
        </BrowserRouter>
      </div>
    </userContext.Provider>
  );
}

export default App;
