import { Grid } from '@mui/material';
import React from 'react';

const Row = ({ children, spacing, align, justify }) => {
    return (
        <Grid container spacing={spacing} alignItems={align || 'center'} justifyContent={justify || 'center'} columns={{ xs: 4, sm: 4, md: 8, lg: 12 }}>
            {children}
        </Grid>

    );
};

export default Row;