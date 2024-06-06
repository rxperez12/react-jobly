import LoginForm from "./LoginForm";

/** Login Page component
 *
 * Props:
 * - handleLogin fn to be called in parent
 *
 * State:
 * -
 *
 * RoutesList -> LoginPage -> LoginForm
 */
function LoginPage({ handleLogin }) {
  return (
    <div className="my-3">
      <LoginForm handleSubmit={handleLogin} />
    </div>
  );
}

export default LoginPage;
