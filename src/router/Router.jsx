import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import DashboardPage from "../pages/DashboardPage";
import AuthPage from "../pages/AuthPage";
import  PageNotFound from "../pages/404";
import AdminPage from "../pages/AdminPage"
import { useQuery } from "@tanstack/react-query";
import { useGetUser } from "../services/user";
import Loader from "../components/modules/Loader";
import ProtectedRoutes from "./ProtectedRoutes";

function Router() {
    const {data, isLoading, error} = useGetUser()
    console.log(data )
    const navigate = useNavigate()

    if(isLoading) return <Loader/>
  return (
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/dashboard" element={data ? <DashboardPage/> : (<Navigate to="/auth"/>)}/>
    <Route path="/auth" element={data ? <Navigate to="/dashboard"/> : (<AuthPage/>)}/>
    <Route element={<ProtectedRoutes />}>
    <Route path="/admin" element={  <AdminPage/> }/>
    </Route>
    <Route path="/*" element={<PageNotFound/>}/>
   </Routes>
  )
}

export default Router