import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'
import Row from '../../styleComponents/Row/Row';
import Col3 from '../../styleComponents/Col3/Col3';
import Product from '../Product/Product';
import { Typography } from '@mui/material';
import axios from 'axios';

const ShopSection = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://doneza.herokuapp.com/products')
            .then(res => {
                setData(res.data);
                setLoading(false);
            })
    }, [])


    return (
        <Box sx={{ py: 15, textAlign: 'center' }}>
            <Container maxWidth="xl">
                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, justifyContent: 'center' }}>
                        <div className="dash" ></div>
                        <Typography variant="h5" color="#D72323" sx={{ fontWeight: 700 }}>Shop</Typography>
                        <div className="dash" ></div>

                    </Box>
                    <Typography variant="h3" color="initial" sx={{ fontWeight: 500, mt: 1, mb: 1 }}>Choose What You Like</Typography>
                    <Typography variant="inherit" color="initial" sx={{ mb: 6 }}>Our all new collection will amaze you. Browse our latest products
                    </Typography>
                </Box>
                <Row spacing={4}>
                    {
                        (loading ? Array.from(new Array(8)) : data?.slice(0, 8)).map((item, index) => <Col3 key={index}>
                            <Product item={item}></Product>
                        </Col3>
                        )
                    }
                </Row>

            </Container>
        </Box>
    );
};

export default ShopSection;