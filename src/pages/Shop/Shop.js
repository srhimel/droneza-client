import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import CustomBreadcrumbs from '../../styleComponents/CustomBreadcrumbs/CustomBreadcrumbs';
import Row from '../../styleComponents/Row/Row';
import Col3 from '../../styleComponents/Col3/Col3';
import Product from '../../components/Product/Product';
import Container from '@mui/material/Container'
import axios from 'axios';
const Shop = () => {
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
        <Box>
            <CustomBreadcrumbs />
            <Box sx={{ py: 15, backgroundColor: '#f9f9f9' }}>
                <Container maxWidth="xl">
                    <Row spacing={4}>
                        {
                            (loading ? Array.from(new Array(8)) : data)?.map((item, index) => <Col3 key={index}>
                                <Product item={item}></Product>
                            </Col3>
                            )
                        }
                    </Row>
                </Container>
            </Box>
            <Footer />
        </Box>
    );
};

export default Shop;