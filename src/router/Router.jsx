import { Route, Routes } from "react-router-dom";
import HomePage from "pages/HomePage";
import DashboardPage from "pages/DashboardPage";
import AdminPage from "pages/AdminPage";
import PageNotFound from "pages/PageNotFound";
import AuthPage from "pages/AuthPage";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "src/services/user";
function Router() {
  const {data, isLoading, error} = useQuery(["profile"],getProfile)
  console.log({data, isLoading,error});

  // if(isLoading) return <h1>Loading...</h1>
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Router;
