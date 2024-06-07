import SignupForm from "./SignupForm";
import Alert from "../Alert";
import { v4 as uuid } from "uuid";

/** Signup Page component
 *
 * Props:
 * - handleSignup fn to be called in parent
 * - updateUser fn to be called in parent
 * - userData like { username, firstName, lastName, email, isAdmin, jobs }
 *
 *
 * State:
 * -
 *
 * RoutesList -> SignupPage -> SignupForm
 */
function SignupPage({ handleSignup, updateUser, userData }) {
  return (
    <div className="my-3">
      <SignupForm
        handleSubmit={handleSignup}
        userData={userData}
        updateUser={updateUser}
      />
    </div>
  );
}

export default SignupPage;
