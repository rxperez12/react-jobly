import { useContext } from "react";
import userContext from "./userContext.js";

/** Homepage component
 *
 * Props:
 * -none
 *
 * State:
 * -none
 *
 * RoutesList -> Homepage
 */

function Homepage() {
  const { user } = useContext(userContext);

  return (
    <div className="m-5">
      <h1>Hi! Welcome to Jobly</h1>
      {user && <div>Welcome {user}</div>}
    </div>
  );
}

export default Homepage;
