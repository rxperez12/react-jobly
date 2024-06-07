/** Alert component
 *
 * Props:
 * - string to display as error
 *
 * State:
 * - none
 *
 * {SignupPage, ProfilePage, LoginPage} -> Alert
 */
function Alert({ err }) {
  return <div className="Alert alert alert-danger">{err}</div>;
}

export default Alert;
