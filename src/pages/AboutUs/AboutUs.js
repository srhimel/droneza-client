import Box from '@mui/material/Box';
import React from 'react';
import AboutSection from '../../components/AboutSection/AboutSection';
import Footer from '../../components/Footer/Footer';
import CustomBreadcrumbs from '../../styleComponents/CustomBreadcrumbs/CustomBreadcrumbs';
const AboutUs = () => {
    return (
        <Box>
            <CustomBreadcrumbs />
            <AboutSection />
            <Footer />
        </Box>
    );
};

export default AboutUs;