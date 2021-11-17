import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'
import Row from '../../../styleComponents/Row/Row';
import Col2 from '../../../styleComponents/Col2/Col2';
import brand1 from '../../../images/w1.png'
import brand2 from '../../../images/w2.png'
import brand3 from '../../../images/w3.png'
import brand4 from '../../../images/w4.png'
import brand5 from '../../../images/w5.png'
import brand6 from '../../../images/w6.png'
const brands = [
    { _id: 1, img: brand1 },
    { _id: 2, img: brand2 },
    { _id: 3, img: brand3 },
    { _id: 4, img: brand4 },
    { _id: 5, img: brand5 },
    { _id: 6, img: brand6 }
]
const Brands = () => {
    return (
        <Box sx={{ py: 10 }}>
            <Container maxWidth="xl">
                <Row spacing={10}>
                    {brands.map(brand => <Col2 key={brand._id}>
                        <img src={brand.img} alt="" style={{ width: '80%', margin: 'auto' }} />
                    </Col2>)}

                </Row>

            </Container>

        </Box>
    );
};

export default Brands;