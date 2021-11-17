import React from 'react';
import { Outlet } from 'react-router-dom';
import ResponsiveDrawer from './components/ResponsiveDrawer';

const Dashboard = () => {
    return (
        <>
            <ResponsiveDrawer >
                <Outlet />
            </ResponsiveDrawer>
        </>
    );
};

export default Dashboard;