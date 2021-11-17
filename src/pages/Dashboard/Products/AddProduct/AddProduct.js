import { Paper, TextField, Button } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import Col6 from '../../../../styleComponents/Col6/Col6';
import Row from '../../../../styleComponents/Row/Row';

const AddProduct = () => {
    const [product, setProduct] = useState({});
    const handleChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        let newProduct = { ...product };
        newProduct[field] = value;
        setProduct(newProduct);
    }
    const [loading, setLoading] = useState(false);
    const handleProductUpload = e => {
        setLoading(true);
        axios.post('https://doneza.herokuapp.com/products', product)
            .then(res => {
                if (res.data.insertedId) {
                    alert('data inserted');
                    e.target.reset();
                }

            })
            .catch(error => {
                alert(error);
            })
            .finally(() => setLoading(false));
        e.preventDefault();
    }
    return (
        <Row>
            <Col6>
                <Paper sx={{ textAlign: 'center', p: 4 }}>
                    <form onSubmit={handleProductUpload}>
                        <TextField
                            onChange={handleChange}
                            size="small"
                            required
                            label="Product Picture Url"
                            type="url"
                            name="image"
                            sx={{ width: 1, mb: 2 }}
                        />
                        <TextField
                            onChange={handleChange}
                            size="small"
                            required
                            label="Product Title"
                            type="text"
                            name="title"
                            sx={{ width: 1, mb: 2 }}
                        />
                        <TextField
                            onChange={handleChange}
                            size="small"
                            required
                            label="Price"
                            type="number"
                            name="price"
                            sx={{ width: 1, mb: 2 }}
                        />
                        <TextField
                            onChange={handleChange}
                            label="Description"
                            multiline
                            required
                            rows={4}
                            name="desc"
                            sx={{ width: 1, mb: 2 }}
                        />
                        <TextField
                            onChange={handleChange}
                            size="small"
                            label="Average Ratings (Fake)"
                            required
                            type="number"
                            name="rating"
                            sx={{ width: 1, mb: 2 }}
                        />
                        <TextField
                            onChange={handleChange}
                            size="small"
                            label="Total Rated (Fake)"
                            required
                            type="number"
                            name="reviews"
                            sx={{ width: 1, mb: 2 }}
                        />

                        <Button variant="contained" color="primary" type="submit">
                            {loading ? 'loading' : 'Add Product'}
                        </Button>
                    </form>
                </Paper>
            </Col6>
        </Row>
    );
};

export default AddProduct;