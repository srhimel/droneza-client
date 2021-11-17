import React from 'react';
import Box from '@mui/material/Box';
import bg from '../../images/hero.jpg'
import Header from '../../components/Header/Header';
import Typography from '@mui/material/Typography'
import { useLocation } from 'react-router';
import Container from '@mui/material/Container'
import { Breadcrumbs } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { emphasize, styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useParams } from "react-router-dom";
const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
        theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[800];
    return {
        backgroundColor,
        height: theme.spacing(3),
        color: theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover, &:focus': {
            backgroundColor: emphasize(backgroundColor, 0.06),
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(backgroundColor, 0.12),
        },
    };
});
const CustomBreadcrumbs = () => {
    const location = useLocation();
    const { id } = useParams();

    return (

        <Box sx={{ pb: 8, backgroundImage: `url(${bg})`, backgroundColor: '#101010f1', backgroundSize: 'cover', backgroundBlendMode: 'multiply' }}>
            <Header />
            <Container maxWidth="xl">
                <Box sx={{ color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap' }}>
                    <Typography variant="h2" color="inherit" sx={{ mt: 4, fontWeight: 700 }}>{
                        id ? 'Product' : location?.pathname.slice(1).toUpperCase().replace(/[^A-Z0-9]/ig, " ")
                    }</Typography>
                    <Breadcrumbs aria-label="breadcrumb" sx={{ color: '#fff' }} separator={<NavigateNextIcon fontSize="small" />}>
                        <NavLink to="/" style={{ textDecoration: 'none', cursor: 'pointer' }}>
                            <StyledBreadcrumb underline="hover"
                                label="Home"
                                icon={<HomeIcon fontSize="small" />}
                            >
                            </StyledBreadcrumb>
                        </NavLink>
                        <StyledBreadcrumb label={location?.pathname.slice(1).toUpperCase().replace(/[^A-Z0-9]/ig, " ").split(' ')[0]} />



                    </Breadcrumbs>
                </Box>
            </Container>
        </Box>
    );
};

export default CustomBreadcrumbs;