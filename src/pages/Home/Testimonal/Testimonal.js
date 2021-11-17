import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import './Testimonal.css';
import testimonalBg from '../../../images/testimonalbg.png';
import testimonal from '../../../images/testimonal.png';
import Container from '@mui/material/Container'
import Row from '../../../styleComponents/Row/Row';
import Col6 from '../../../styleComponents/Col6/Col6';
import { Typography } from '@mui/material';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css"
import "swiper/modules/navigation/navigation.min.css"



// import Swiper core and required modules
import SwiperCore, {
    Pagination, Navigation
} from 'swiper';
import Feedback from '../Feedback/Feedback';
import axios from 'axios';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);


const Testimonal = () => {
    const [loading, setLoading] = useState(true);
    const [feedbacks, setFeedbacks] = useState([]);
    useEffect(() => {
        axios.get('https://doneza.herokuapp.com/feedbacks')
            .then(res => {
                setFeedbacks(res.data);
                setLoading(false);
            })
    }, [])
    return (
        <Box sx={{ py: 15, backgroundImage: `url(${testimonalBg})` }} className="testimonal">
            <Container maxWidth="xl">
                <Row spacing={6}>
                    <Col6>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <div className="dash" ></div>
                            <Typography variant="h5" color="#fff" sx={{ fontWeight: 700 }}>Client Feedback</Typography>

                        </Box>
                        <Typography variant="h3" color="white" sx={{ fontWeight: 500, mt: 1, mb: 3 }}>What Some People <br /> Say About Us.</Typography>

                        <Box sx={{ mt: 10 }} className="testimonal-img">
                            <img src={testimonal} alt="" width="100%" />
                        </Box>
                    </Col6>

                    <Col6>
                        <Box sx={{ backgroundColor: '#D72323', color: '#fff', p: 2 }}>
                            <>
                                <Swiper pagination={{
                                    "type": "fraction"
                                }} navigation={true} className="mySwiper">
                                    {
                                        (loading ? Array.from(new Array(4)) : feedbacks).map((feedback, index) => <SwiperSlide key={index}>
                                            <Feedback feedback={feedback} />
                                        </SwiperSlide>
                                        )
                                    }
                                </Swiper>
                            </>
                        </Box>
                    </Col6>
                </Row>

            </Container>
        </Box>
    );
};

export default Testimonal;