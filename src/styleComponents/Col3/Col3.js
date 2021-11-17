import { Grid } from '@mui/material';
import React from 'react';

const Col3 = ({ children }) => {
    return (
        <Grid item xs={4} sm={4} md={4} lg={3}>{children}</Grid>
    );
};

export default Col3;