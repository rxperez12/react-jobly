import { BrowserRouter } from "react-router-dom";
import RoutesList from "./RoutesList.jsx";
import NavBar from "./NavBar.jsx";
import { useState } from "react";
import "./App.css";

/** Component for entire page.
 *
 * Props: none
 * State: userInfo - TODO:what does this look like??
 *
 * App -> {RouterList, NavBar}
 */

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <RoutesList />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
