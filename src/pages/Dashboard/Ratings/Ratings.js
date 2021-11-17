import { Paper, TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import Col6 from '../../../styleComponents/Col6/Col6';
import Row from '../../../styleComponents/Row/Row';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};

const Ratings = () => {
    const { user } = useAuth();
    const [value, setValue] = React.useState(0);
    const [hover, setHover] = React.useState(-1);

    const [pfeedback, setPfeedback] = useState({ user: user.displayName, photo: user.photoUrl });
    const handleChange = e => {
        const field = e.target.name;
        const fvalue = e.target.value;
        let newPfeedback = { ...pfeedback };
        newPfeedback[field] = fvalue;
        newPfeedback['ratings'] = value;
        setPfeedback(newPfeedback);
    }
    const [loading, setLoading] = useState(false);

    const handleProductUpload = e => {
        setLoading(true);
        axios.post('https://doneza.herokuapp.com/feedbacks', pfeedback)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Feedback Given');
                    e.target.reset();
                }

            })
            .catch(error => {
                alert(error);
            })
            .finally(() => setLoading(false));
        e.preventDefault();
    }

    return (
        <Row>
            <Col6>
                <Paper sx={{ textAlign: '', p: 4 }}>
                    <form onSubmit={handleProductUpload}>
                        <label>How much you want to rate between 0 to 5</label>
                        <Box
                            sx={{
                                width: 1,
                                display: 'flex',
                                alignItems: 'center',
                                mb: 2
                            }}
                        >
                            <Rating

                                name="hover-feedback"
                                value={value}
                                precision={0.5}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                                onChangeActive={(event, newHover) => {
                                    setHover(newHover);
                                }}
                                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                            />
                            {value !== null && (
                                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                            )}
                        </Box>
                        <TextField
                            onChange={handleChange}
                            label="Your Feedback"
                            multiline
                            required
                            rows={4}
                            name="desc"
                            sx={{ width: 1, mb: 2 }}
                        />


                        <Button variant="contained" color="warning" type="submit">
                            {loading ? 'Loading' : ' Submit Rating'}
                        </Button>
                    </form>
                </Paper>
            </Col6>
        </Row>
    );
};

export default Ratings;