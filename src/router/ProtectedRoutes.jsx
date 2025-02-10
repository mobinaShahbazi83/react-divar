import { Navigate, Outlet, useNavigate } from 'react-router-dom'

import { useGetUser } from '../services/user';
import AdminPage from '../pages/AdminPage';
const ProtectedRoutes = () => {
    const {data, isLoading, error} = useGetUser()
    const navigate = useNavigate()

    return data?.data?.role === "ADMIN" ? <Outlet /> : navigate("/");


}

export default ProtectedRoutes;
