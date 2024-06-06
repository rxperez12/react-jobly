import { BrowserRouter } from "react-router-dom";
import RoutesList from "./RoutesList.jsx";
import NavBar from "./NavBar.jsx";
import { useState } from "react";
import "./App.css";
import JoblyApi from "./api.js";
import userContext from "./userContext.js";

import { practiceUser, practiceLogin } from "./practiceData.js";

/** Component for entire page.
 *
 * Props: none
 * State: userlike { username, firstName, lastName, email, isAdmin, jobs }
 *
 * App -> {RouterList, NavBar}
 */

function App() {
  const [user, setUser] = useState(null);

  console.log("Current user", user);

  /** Handle user login, make API call and if successful update state */
  async function handleLogin(formData) {
    let loginData = null;
    try {
      loginData = await JoblyApi.login(formData);
    } catch (err) {
      //display errors to user? maybe use context for this???
    }
    if (loginData !== null) {
      let user = await JoblyApi.getUser(formData.username);
      setUser(user);
    }
  }

  async function handleSignup(formData) {
    let loginData = null;
    try {
      signupData = await JoblyApi.signup(formData);
    } catch (err) {
      //display errors to user? maybe use context for this???
    }
    if (loginData !== null) {
      let user = await JoblyApi.getUser(formData.username);
      setUser(user);
    }
  }

  //TODO: context is not working, fix
  return (
    <userContext.Provider value={{ user: user?.firstName }}>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <div className="container">
            <RoutesList
              handleLogin={handleLogin}
              handleSignup={handleSignup}
            />
          </div>
        </BrowserRouter>
      </div>
    </userContext.Provider>
  );
}

export default App;
