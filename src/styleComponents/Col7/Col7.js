import { Grid } from '@mui/material';
import React from 'react';

const Col7 = ({ children }) => {
    return (
        <Grid item xs={4} sm={4} md={8} lg={7}>{children}</Grid>
    )
};

export default Col7;