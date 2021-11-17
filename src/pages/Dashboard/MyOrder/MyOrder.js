import { Button, Chip } from '@mui/material';
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
import useAuth from '../../../hooks/useAuth';

const MyOrder = () => {
    const { user } = useAuth();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const [deleteLoading, setDeleteLoading] = useState(false);

    useEffect(() => {
        axios.get(`https://doneza.herokuapp.com/my-order?email=${user.email}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('idToken')}`
            }
        })
            .then(res => {
                setProducts(res.data);
                setLoading(false);
            })
    }, [user]);
    const handleDeleteOrder = id => {
        setDeleteLoading(true);
        const remaining = products.filter(product => product._id !== id);
        axios.delete(`https://doneza.herokuapp.com/orders/${id}`)
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
                                    <TableCell>Ordered Item</TableCell>
                                    <TableCell align="left">Customer Name</TableCell>
                                    <TableCell align="center">Phone Number</TableCell>
                                    <TableCell align="center">Status</TableCell>
                                    <TableCell align="right">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    products.map(product => <TableRow key={product._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                                        <TableCell component="th" scope="row">
                                            {product.product}
                                        </TableCell>
                                        <TableCell align="left">{product.customer}</TableCell>
                                        <TableCell align="center">{product.phone}</TableCell>
                                        <TableCell align="center">{product.status === "pending" ? <Chip label={product.status} color="error" /> : <Chip label={product.status} color="success" />}</TableCell>
                                        <TableCell align="right">

                                            <Button variant="contained" size="small" color="error" onClick={() => handleDeleteOrder(product._id)}>{deleteLoading ? 'Loading' : 'Delete'}</Button>

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

export default MyOrder;