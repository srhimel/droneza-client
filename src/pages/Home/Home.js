import Box from '@mui/material/Box';
import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Container from '@mui/material/Container'
import Hero from './Hero/Hero';
import heroImg from '../../images/hero.jpg';
import AboutSection from '../../components/AboutSection/AboutSection';
import ShopSection from '../../components/ShopSection/ShopSection';
import Testimonal from './Testimonal/Testimonal';
import Brands from './Brands/Brands';
const Home = () => {

    return (
        <div>
            <Box sx={{ backgroundColor: '#101010f1;', backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundBlendMode: 'multiply' }}>
                <Header />
                <Container maxWidth="xl">
                    <Hero />
                </Container>
            </Box>
            <AboutSection />
            <ShopSection />
            <Testimonal />
            <Brands />

            <Footer />
        </div>
    );
};

export default Home;