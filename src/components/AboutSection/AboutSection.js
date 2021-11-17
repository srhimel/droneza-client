import React from 'react';
import Box from '@mui/material/Box';
import Row from '../../styleComponents/Row/Row';
import about from '../../images/about.jpg'
import ic1 from '../../images/m1.png'
import ic2 from '../../images/m2.png'
import ic3 from '../../images/m3.png'
import Typography from '@mui/material/Typography'
import { Button, Container } from '@mui/material';
import './AboutSection.css';
import Col5 from '../../styleComponents/Col5/Col5';
import Col7 from '../../styleComponents/Col7/Col7';

const AboutSection = () => {
    return (
        <Box sx={{ backgroundColor: '#F7F7F7', py: 15 }}>
            <Container maxWidth="xl">
                <Row spacing={10}>
                    <Col5>
                        <Box className="drone-wrapper">
                            <Box className="drone-media">
                                <img src={about} alt="" />
                            </Box>
                            <Box className="drone-info">
                                <span>HD 4K</span>
                                <strong>Resolution!</strong>
                            </Box>
                        </Box>
                    </Col5>
                    <Col7>
                        <Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <div className="dash" ></div>
                                <Typography variant="h5" color="#D72323" sx={{ fontWeight: 700 }}>About</Typography>

                            </Box>
                            <Typography variant="h3" color="initial" sx={{ fontWeight: 500, mt: 1, mb: 3 }}>Specializing in Drone Services
                                <br />    and Aerial Photography</Typography>
                            <Typography variant="inherit" color="initial" sx={{ width: { xs: 1, sm: '80%' } }}>There are many variations of passages of drone size available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly.
                                Let you shine on darkness and follow your path where ever you go. It comes with GPS tracker and motion sensor so that you don't get lose.
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 3, alignItems: 'center', mb: 2, mt: 4 }}>
                                <img width="45px" src={ic1} alt="" />
                                <Typography variant="h5" color="initial">Mobile Device Supported</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: 3, alignItems: 'center', mb: 2 }}>
                                <img width="45px" src={ic2} alt="" />
                                <Typography variant="h5" color="initial">Easy integrative control</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: 3, alignItems: 'center', mb: 2 }}>
                                <img width="45px" src={ic3} alt="" />
                                <Typography variant="h5" color="initial">Customized Commands</Typography>
                            </Box>
                            <Box sx={{ mt: 6 }}>
                                <Button variant="contained" sx={{ borderRadius: 0, py: 1.5, px: 5, bgcolor: '#D11F1F', ':hover': { bgcolor: '#850101' } }} >REAd more</Button>
                            </Box>

                        </Box>
                    </Col7>
                </Row>
            </Container>

        </Box>
    );
};

export default AboutSection;