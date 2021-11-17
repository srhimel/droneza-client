
import { Navigate, Outlet, useLocation } from 'react-router';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import useAuth from '../../../hooks/useAuth';


const PrivateRoute = () => {
    const { user, isLoading } = useAuth();
    const location = useLocation();
    if (isLoading) {
        return (
            <Box sx={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <CircularProgress />
            </Box>
        );
    }
    else if (!user?.email) {
        return <Navigate to="/account" state={{ from: location }} />;
    }
    else {
        return <Outlet />;
    }


};

export default PrivateRoute;