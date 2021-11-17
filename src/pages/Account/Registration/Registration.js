import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Alert, TextField, Typography } from '@mui/material';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router';
import LoadingButton from '@mui/lab/LoadingButton'

const Registration = () => {
    const [registerData, setRegisterData] = useState({});
    const { setError, emailSignUp, setIsLoading, error, isLoading } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const url = location.state?.from || '/';


    const handleChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...registerData }
        newData[field] = value;
        setRegisterData(newData);
    }

    const handleRegister = e => {
        emailSignUp(registerData.name, registerData.email, registerData.password)
            .then(() => {
                navigate(url)
                setError("")
            })
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false));
        e.preventDefault();
    }

    return (
        <>
            <Box sx={{ textAlign: 'center', mb: 2 }}>

                <Typography id="transition-modal-title" color="#D11F1F" variant="h6" component="h2">
                    Register
                </Typography>
            </Box>
            <form onSubmit={handleRegister}>

                <TextField
                    onChange={handleChange}
                    label="Your Name"
                    name="name"
                    required
                    type="text"
                    sx={{ width: '100%', my: 1 }}
                    variant="standard"
                />
                <TextField
                    onChange={handleChange}
                    name="email"
                    required
                    label="Email Address"
                    type="email"
                    variant="standard"
                    sx={{ width: '100%', my: 1 }}
                />
                <TextField
                    onChange={handleChange}
                    name="password"
                    required
                    type="password"
                    label="Password"
                    variant="standard"
                    sx={{ width: '100%', my: 1 }}
                />
                {error && <Alert severity="warning">{error}</Alert>}
                <Box sx={{ textAlign: 'right', mt: 1 }}>
                    {
                        isLoading ?
                            <LoadingButton loading sx={{ width: 1, mb: 3, boxShadow: 'none', borderRadius: 0, bgcolor: '#D11F1F', ':hover': { bgcolor: '#850101' } }} variant="outlined">
                                Submit
                            </LoadingButton>
                            :
                            <Button type="submit" sx={{ width: 1, mb: 3, boxShadow: 'none', borderRadius: 0, bgcolor: '#D11F1F', ':hover': { bgcolor: '#850101' } }} variant="contained">Register Now</Button>
                    }

                </Box>

            </form>
        </>
    );
};

export default Registration;