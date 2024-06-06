import SignupForm from "./SignupForm";

/** Signup Page component
 *
 * Props:
 * - handleSignup fn to be called in parent
 *
 * State:
 * -
 *
 * RoutesList -> SignupPage -> SignupForm
 */
function SignupPage({ handleSignup }) {
  return (
    <div className="my-3">
      <SignupForm handleSubmit={handleSignup} />
    </div>
  );
}

export default SignupPage;
