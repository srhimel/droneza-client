import { Button, Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { NavLink } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const [deleteLoading, setDeleteLoading] = useState(false);
    useEffect(() => {
        axios.get('https://doneza.herokuapp.com/products')
            .then(res => {
                setProducts(res.data);
                setLoading(false);
            })
    }, [])
    const handleDeleteProduct = id => {
        setDeleteLoading(true);
        const remaining = products.filter(product => product._id !== id);
        axios.delete(`https://doneza.herokuapp.com/products/${id}`)
            .then(res => {
                setProducts(remaining);
                alert('removed');
            })
            .catch(error => {
                alert(error)
            })
            .finally(() => {
                setDeleteLoading(false);
            })

    }
    return (
        <>
            {
                loading ?
                    <Box sx={{ minHeight: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <CircularProgress />
                    </Box>
                    :
                    <TableContainer component={Paper} style={{ height: '85vh' }}>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Image</TableCell>
                                    <TableCell align="left">Name</TableCell>
                                    <TableCell align="center">Price</TableCell>
                                    <TableCell align="center">Ratings</TableCell>
                                    <TableCell align="right">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    products.map(product => <TableRow key={product._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                                        <TableCell component="th" scope="row">
                                            <img src={product.image} alt="" width="59px" />
                                        </TableCell>
                                        <TableCell align="left">{product.title}</TableCell>
                                        <TableCell align="center">${product.price}</TableCell>
                                        <TableCell align="center"><Rating name="read-only" value={product.rating} readOnly /></TableCell>
                                        <TableCell align="right">
                                            <Button as={NavLink} variant="contained" size="small" color="info" sx={{ mr: 1 }} to={`/dashboard/products/update/${product._id}`}>Edit</Button>
                                            <Button variant="contained" size="small" color="error" onClick={() => handleDeleteProduct(product._id)}>{deleteLoading ? 'Loading' : 'Delete'}</Button>

                                        </TableCell>
                                    </TableRow>
                                    )
                                }


                            </TableBody>
                        </Table>
                    </TableContainer>
            }


        </>
    );
};

export default ProductList;