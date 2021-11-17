import React from 'react';
import { Navigate, Outlet } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = () => {
    const { admin } = useAuth();
    if (admin) {
        return <Outlet></Outlet>
    }
    else {
        return <Navigate to=""></Navigate>
    }
};

export default AdminRoute;