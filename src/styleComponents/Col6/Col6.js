import { Grid } from '@mui/material';
import React from 'react';

const Col6 = ({ children }) => {
    return (
        <Grid item xs={4} sm={4} md={8} lg={6}>{children}</Grid>
    );
};

export default Col6;