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
 * - none
 *
 * State:
 * - none
 *
 * App -> RoutesList -> {CompanyDetail, CompanyList, JobList, Homepage, ProfilePage
 * LoginPage, SignupPage}
 */
function RoutesList({ handleLogin, handleEdit, handleSignup }) {
  return (
    <Routes>
      <Route
        path="/profile"
        element={<ProfilePage handleEdit={handleEdit} />}
      />

      <Route
        path="/signup"
        element={<SignupPage handleSignup={handleSignup} />}
      />

      <Route
        path="/login"
        element={<LoginPage handleLogin={handleLogin} />}
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
