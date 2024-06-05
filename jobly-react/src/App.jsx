import { BrowserRouter } from "react-router-dom";
import RoutesList from "./RoutesList.jsx";
import NavBar from "./NavBar.jsx";
import "./App.css";

/** Component for entire page.
 *
 * Props: none
 * State: none
 *
 * App -> {RouterList, NavBar}
 */

function App() {
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
