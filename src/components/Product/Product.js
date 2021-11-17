import { Skeleton, Typography } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';

const Product = ({ item }) => {
    return (
        <NavLink to={`/shop/${item?._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Box sx={{ border: '10px solid #efefef', p: 2, background: '#fff', textAlign: 'center' }}>
                {item ? (
                    <img
                        style={{ width: '100%', height: 300, objectFit: 'cover' }}
                        alt={item.title}
                        src={item?.image}
                    />
                ) : (
                    <Skeleton variant="rectangular" width={'100%'} height={300} />
                )}
                <Typography variant="h6" sx={{ fontWeight: 500, mt: 2 }}>{!item ? <Skeleton width="70%" sx={{ margin: 'auto' }} /> : item.title}</Typography>
                <Typography variant="h5" sx={{ fontWeight: 700, color: '#D72323' }}>{!item ? <Skeleton width="40%" sx={{ bgcolor: '#D72323', margin: 'auto' }} /> : `$${item.price}.00`}</Typography>
            </Box>
        </NavLink>
    );
};

export default Product;