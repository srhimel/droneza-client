import { Paper, TextField, Button } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Col6 from '../../../../styleComponents/Col6/Col6';
import Row from '../../../../styleComponents/Row/Row';
import { useParams } from "react-router-dom";
const UpdateProduct = () => {
    const { id } = useParams();
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
        axios.put(`https://doneza.herokuapp.com/products/${id}`, product)
            .then(res => {
                alert('updated');
            })
            .catch(error => {
                alert(error);
            })
            .finally(() => setLoading(false));
        e.preventDefault();
    }

    useEffect(() => {
        axios.get(`https://doneza.herokuapp.com/product/${id}`)
            .then(res => {
                setProduct(res.data);
            })
    }, [id]);
    return (
        <Row>
            <Col6>
                <Paper sx={{ textAlign: 'center', p: 4 }}>
                    <form onSubmit={handleProductUpload}>
                        <TextField
                            variant="standard"
                            onChange={handleChange}
                            size="small"
                            required
                            placeholder="Product Picture Url"
                            type="url"
                            name="image"
                            sx={{ width: 1, mb: 2 }}
                            value={product.image || ''}
                        />
                        <TextField
                            variant="standard"
                            onChange={handleChange}
                            size="small"
                            required
                            placeholder="Product Title"
                            type="text"
                            name="title"
                            value={product.title || ''}
                            sx={{ width: 1, mb: 2 }}
                        />
                        <TextField
                            variant="standard"
                            onChange={handleChange}
                            size="small"
                            required
                            placeholder="Price"
                            type="text"
                            name="price"
                            value={product.price || ''}
                            sx={{ width: 1, mb: 2 }}
                        />
                        <TextField
                            variant="standard"
                            onChange={handleChange}
                            placeholder="Description"
                            multiline
                            required
                            rows={4}
                            name="desc"
                            value={product.desc || ''}
                            sx={{ width: 1, mb: 2 }}
                        />
                        <TextField
                            variant="standard"
                            onChange={handleChange}
                            size="small"
                            placeholder="Average Ratings (Fake)"
                            required
                            type="text"
                            name="rating"
                            value={product.rating || ''}
                            sx={{ width: 1, mb: 2 }}
                        />
                        <TextField
                            variant="standard"
                            onChange={handleChange}
                            size="small"
                            placeholder="Total Rated (Fake)"
                            required
                            type="text"
                            name="reviews"
                            value={product.reviews || ''}
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

export default UpdateProduct;