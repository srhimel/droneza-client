import Box from '@mui/material/Box';
import React from 'react';
import Footer from '../../components/Footer/Footer';
import CustomBreadcrumbs from '../../styleComponents/CustomBreadcrumbs/CustomBreadcrumbs';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <Box>
            <CustomBreadcrumbs />
            <Container maxWidth="xl">
                <Box sx={{ py: 15, textAlign: 'center' }}>
                    <Typography variant="h1" color="initial" sx={{ mb: 3 }}>404: No result Found</Typography>
                    <Button as={NavLink} to="/" variant="contained" style={{ textDecoration: 'none', display: 'inline-block', mt: 5 }} sx={{ borderRadius: 0, py: 1.5, px: 5, bgcolor: '#D11F1F', ':hover': { bgcolor: '#850101' } }}> GO Back to home</Button>
                </Box>
            </Container>
            <Footer />

        </Box>
    );
};

export default NotFound;