import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import { Skeleton } from '@mui/material';
import './Feedback.css';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
const Feedback = ({ feedback }) => {
    return (
        <>
            <Box className="feedbackTop" sx={{ backgroundColor: '#fff', px: 4, pb: 12, pt: 2 }}>
                <FormatQuoteIcon sx={{ color: '#D72323', fontSize: "100px" }} />
                <Typography variant="inherit" color="initial" sx={{ textAlign: 'center', mt: -2 }}>
                    {feedback ? feedback.desc : <>
                        <Skeleton /><Skeleton /><Skeleton />
                    </>}
                </Typography>
            </Box>
            <Box className="feedbackBottom" sx={{ px: 4, py: 12, textAlign: 'center' }}>
                {
                    feedback ? <img className="feedbackImg" src={feedback.photoUrl || 'https://i.ibb.co/vJgXptS/placeholder.jpg'} alt="" style={{
                        width: 100,
                        height: 100,
                        borderRadius: '50%',
                        border: '3px solid #fff'
                    }} /> : <Skeleton variant="circular" width={100} height={100} className="feedbackImg" />
                }
                <Typography variant="h5" color="#fff" sx={{ fontWeight: 500 }}>{
                    feedback ? feedback.user : <Skeleton width="150px" sx={{ margin: 'auto' }} />
                }</Typography>
            </Box>
        </>
    );
};

export default Feedback;