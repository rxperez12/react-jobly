import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./Homepage.jsx";
import CompanyList from "./CompanyList.jsx";
import CompanyDetail from "./CompanyDetail.jsx";
import JobList from "./JobList.jsx";
import ProfilePage from "./Profile/ProfilePage.jsx";
import SignupPage from "./Signup/SignupPage.jsx";
import LoginPage from "./Login/LoginPage.jsx";

/** RoutesList
 *
 * Props:
 * - handleLogin fn
 * - handleEdit fn
 * - handleSignUp fn
 * - userData like { username, firstName, lastName, email, isAdmin, jobs }
 *
 * State:
 * - none
 *
 * App -> RoutesList -> {CompanyDetail, CompanyList, JobList, Homepage, ProfilePage
 * LoginPage, SignupPage}
 */
function RoutesList({ handleLogin, handleEdit, handleSignup, userData }) {
  console.log("ROUTES LIST USER DATA", userData);

  if (userData.user === null) {
    return (
      <Routes>
        <Route
          path="/signup"
          element={<SignupPage handleSignup={handleSignup} />}
        />

        <Route
          path="/login"
          element={<LoginPage handleLogin={handleLogin} />}
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
        element={<JobList />}
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

export default RoutesList;
