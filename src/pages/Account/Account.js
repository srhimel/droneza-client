import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Registration from './Registration/Registration';
import Login from './Login/Login';
import { useLocation, useNavigate } from 'react-router';
import Row from '../../styleComponents/Row/Row';
import Col5 from '../../styleComponents/Col5/Col5';
import useAuth from '../../hooks/useAuth';
import CustomBreadcrumbs from '../../styleComponents/CustomBreadcrumbs/CustomBreadcrumbs';
import Footer from '../../components/Footer/Footer';

const Account = () => {
    const { setError, googleSinIn, setIsLoading } = useAuth();
    const [logPage, setLogPage] = useState('register');
    const location = useLocation();
    const navigate = useNavigate();
    const url = location.state?.from || '/';
    const handleLogPage = () => {
        logPage === 'register' ? setLogPage('login') : setLogPage('register');
        setError("");
    }
    const handleGoogleSignIn = () => {
        googleSinIn()
            .then(() => {
                navigate(url)
                setError("")
            })
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false));
    }

    return (
        <Box>
            <CustomBreadcrumbs />
            <Box sx={{ py: 15, backgroundColor: '#f9f9f9' }}>
                <Container>
                    <Row>
                        <Col5>
                            <Paper sx={{ p: 5, borderRadius: 0, boxShadow: '0 0 10px #EAEEF3' }}>
                                {logPage === 'register' ? <Registration /> : <Login />}
                                <Typography variant="body1" color="initial">{logPage === 'register' ? "Already Have an Account ?" : "Don't have an account? "}    <span style={{ color: "#D11F1F", cursor: 'pointer', textDecoration: 'underline' }} onClick={handleLogPage}> {logPage === 'register' ? "Login Here" : "Register"}</span></Typography>

                                <Button onClick={handleGoogleSignIn} variant="contained" sx={{ bgcolor: '#222', color: '#fff', mt: 2, width: 1, borderRadius: 0, ':hover': { bgcolor: '#000' } }} >
                                    Login With Google

                                </Button>
                            </Paper>

                        </Col5>
                    </Row>
                </Container>
            </Box>
            <Footer />

        </Box>
    );
};

export default Account;