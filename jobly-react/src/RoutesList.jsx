import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./Homepage.jsx";
import CompanyList from "./CompanyList.jsx";
import CompanyDetail from "./CompanyDetail.jsx";
import JobList from "./JobList.jsx";

function RoutesList() {
  return (
    <Routes>
      <Route
        path="/companies/:company"
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