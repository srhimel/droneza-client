import { Grid } from '@mui/material';
import React from 'react';

const Col4 = ({ children }) => {
    return (
        <Grid item xs={4} sm={4} md={4} lg={4}>{children}</Grid>
    );
};

export default Col4;