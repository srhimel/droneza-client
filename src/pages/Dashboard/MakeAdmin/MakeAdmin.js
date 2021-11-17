import { Paper, TextField, Button } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import Col6 from '../../../styleComponents/Col6/Col6';
import Row from '../../../styleComponents/Row/Row';

const MakeAdmin = () => {
    const [user, setUser] = useState({});
    const handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        const newUser = { ...user }
        newUser[name] = value;
        setUser(newUser)
    }
    const handleAdmin = e => {
        axios.put('https://doneza.herokuapp.com/users/admin', user, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('idToken')}`
            }
        })
            .then(res => {
                if (res.data.modifiedCount) {
                    alert('updated');
                    e.target.reset();
                }
                else {
                    alert('the user does not exist or already an admin');
                    e.target.reset();
                }
            })
            .catch(error => { console.log(error) })
            ;
        e.preventDefault();
    }
    return (
        <div>
            <Row>
                <Col6>
                    <Paper sx={{ textAlign: 'center', p: 4 }}>
                        <form onSubmit={handleAdmin}>
                            <TextField
                                required
                                label="email"
                                onChange={handleChange}
                                type="email"
                                name="email"
                                sx={{ width: 1, mb: 2 }}
                            />
                            <Button variant="contained" color="primary" type="submit">
                                Make admin
                            </Button>
                        </form>
                    </Paper>
                </Col6>
            </Row>
        </div>
    );
};

export default MakeAdmin;
