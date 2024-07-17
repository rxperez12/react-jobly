import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./Homepage.jsx";
import CompanyList from "./Company/CompanyList.jsx";
import CompanyDetail from "./Company/CompanyDetail.jsx";
import JobList from "./Job/JobList.jsx";
import ProfilePage from "./Profile/ProfilePage.jsx";
import SignupPage from "./Signup/SignupPage.jsx";
import LoginPage from "./Login/LoginPage.jsx";

/** RoutesList
 *
 * Props:
 * - handleLogin fn
 * - handleEdit fn
 * - handleSignUp fn
 * - updateUser fn
 * - userData like { username, firstName, lastName, email, isAdmin, jobs }
 *
 * State:
 * - none
 *
 * App -> RoutesList -> {CompanyDetail, CompanyList, JobList, Homepage, ProfilePage
 * LoginPage, SignupPage}
 */
function RoutesList({
  handleLogin,
  handleEdit,
  handleSignup,
  updateUser,
  userData,
  handleApply,
  userAppliedJobs,
}) {
  console.log("ROUTES LIST USER DATA", userData);

  function loggedOut() {
    return (
      <Routes>
        <Route
          path="/signup"
          element={
            <SignupPage
              handleSignup={handleSignup}
              userData={userData}
              updateUser={updateUser}
            />
          }
        />

        <Route
          path="/login"
          element={
            <LoginPage
              handleLogin={handleLogin}
              userData={userData}
              updateUser={updateUser}
            />
          }
        />
        <Route
          path="/"
          element={<Homepage />}
        />

        <Route
          path="/*"
          element={<Navigate to="/" />}
        />
      </Routes>
    );
  }

  function loggedIn() {
    return (
      <Routes>
        <Route
          path="/profile"
          element={
            <ProfilePage
              handleEdit={handleEdit}
              userData={userData}
            />
          }
        />

        <Route
          path="/companies/:handle"
          element={<CompanyDetail />}
        />

        <Route
          path="/companies"
          element={<CompanyList />}
        />

        <Route
          path="/jobs"
          element={
            <JobList
              handleApply={handleApply}
              userAppliedJobs={userAppliedJobs}
            />
          }
        />

        <Route
          path="/"
          element={<Homepage />}
        />

        <Route
          path="/*"
          element={<Navigate to="/" />}
        />
      </Routes>
    );
  }

  if (userData.user === null) {
    return <>{loggedOut()}</>;
  }

  return <>{loggedIn()}</>;
}

export default RoutesList;
