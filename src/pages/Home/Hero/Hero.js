import React from 'react';
import Box from '@mui/material/Box';
import Row from '../../../styleComponents/Row/Row';
import Col6 from '../../../styleComponents/Col6/Col6';
import sliderImg from '../../../images/drone.png';
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material';

const Hero = () => {
    return (
        <Box sx={{ py: { xs: 10, sm: 15, xl: 30 } }}>
            <Row spacing={4}>
                <Col6>
                    <Box>
                        <Typography variant="h3" color="white">We capture the</Typography>
                        <Typography variant="h1" sx={{ fontSize: { xs: '50px', sm: '65px' }, fontWeight: 700, my: 2 }} color="#D72323">PRECIOUS MOMENT</Typography>
                        <Typography variant="inherit" color="white" sx={{ width: { xs: 1, sm: '80%' } }}>
                            Let you shine on darkness and follow your
                            path where ever you go. It comes with GPS tracker
                            and motion sensor so that you don't get lose. It also has face detection motion capture, smile detect and wifi support.
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
                            <Button variant="contained" sx={{ borderRadius: 0, py: 1.5, px: 5, bgcolor: '#D11F1F', ':hover': { bgcolor: '#850101' } }} >Get the price</Button>
                            <Button variant="outlined" sx={{ borderRadius: 0, py: 1.5, px: 5, borderColor: '#fff', color: '#fff', ':hover': { bgcolor: '#fff', borderColor: '#fff', color: '#000', } }} >Buy it now</Button>
                        </Box>
                    </Box>
                </Col6>
                <Col6 >
                    <Box className="hero-slide">
                        <img src={sliderImg} alt="" />
                    </Box>

                </Col6>
            </Row>
        </Box>
    );
};

export default Hero;