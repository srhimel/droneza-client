import { Grid } from '@mui/material';
import React from 'react';

const Col5 = ({ children }) => {
    return (
        <Grid item xs={4} sm={4} md={8} lg={5}>{children}</Grid>
    );
};

export default Col5;