import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import DashboardPage from "../pages/DashboardPage";
import AuthPage from "../pages/AuthPage";
import  PageNotFound from "../pages/404";
import AdminPage from "../pages/AdminPage"

function Router() {
  return (
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/dashboard" element={<DashboardPage/>}/>
    <Route path="/auth" element={<AuthPage/>}/>
    <Route path="/admin" element={<AdminPage/>}/>
    <Route path="/*" element={<PageNotFound/>}/>
   </Routes>
  )
}

export default Router