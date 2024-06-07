import LoginForm from "./LoginForm.jsx";
import Alert from "../Alert.jsx";
import { v4 as uuid } from "uuid";

/** Login Page component
 *
 * Props:
 * - handleLogin fn to be called in parent
 * - updateUser fn to be called in parent
 * - userData lik { username, firstName, lastName, email, isAdmin, jobs }
 *
 * State:
 * - none
 *
 * RoutesList -> LoginPage -> LoginForm
 */
function LoginPage({ handleLogin, updateUser, userData }) {
  return (
    <div className="my-3">
      <LoginForm
        handleSubmit={handleLogin}
        userData={userData}
        updateUser={updateUser}
      />
    </div>
  );
}

export default LoginPage;
