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
    <div>
      <h1>Login Page</h1>
      <LoginForm handleSubmit={handleLogin} />
    </div>
  );
}

export default LoginPage;
