import React, { useEffect, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import CustomBreadcrumbs from '../../../styleComponents/CustomBreadcrumbs/CustomBreadcrumbs';
import Footer from '../../../components/Footer/Footer';
import Container from '@mui/material/Container'
import Row from '../../../styleComponents/Row/Row';
import Col5 from '../../../styleComponents/Col5/Col5';
import Col7 from '../../../styleComponents/Col7/Col7';
import Typography from '@mui/material/Typography'
import { Button, Divider, Rating, Skeleton, TextField } from '@mui/material';
import axios from 'axios';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const Product = () => {
    const [open, setOpen] = React.useState(false);
    const { user } = useAuth();
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [loading, setLoading] = useState(true);
    const [formLoading, setFormLoading] = useState(false);
    const [product, setProduct] = useState({});
    const { id } = useParams();
    useEffect(() => {
        axios.get(`https://doneza.herokuapp.com/product/${id}`)
            .then(res => {
                setProduct(res.data);
                setLoading(false)
            });

    }, [id]);

    const [order, setOrder] = useState({});
    const handleChange = e => {
        const fname = e.target.name;
        const value = e.target.value;
        const newOrder = { ...order }
        newOrder[fname] = value;
        setOrder(newOrder);
    }

    const handleOrderSubmit = e => {
        setFormLoading(true);
        axios.post('https://doneza.herokuapp.com/orders', { ...order, product: product.title, customer: user.displayName, email: user.email, status: 'pending' })
            .then(res => {
                if (res.data.insertedId) {
                    alert('order submitted');

                }

            })
            .finally(() => {
                handleClose();
                setFormLoading(false);
            })
        e.preventDefault();
    }
    return (
        <>
            <CustomBreadcrumbs />
            <Box sx={{ py: 15 }}>

                <Container maxWidth="xl">
                    <Row align="top" spacing={5}>
                        <Col5>
                            <Box sx={{ border: '10px solid #efefef' }}>
                                {
                                    !loading ?
                                        <img src={product.image} alt={product.title} width="100%" />
                                        :
                                        <Skeleton variant="rectangular" width={'100%'} height={400} />
                                }
                            </Box>
                        </Col5>
                        <Col7>
                            <Typography variant="h3" color="initial">{loading ? <Skeleton width="70%" /> : product.title}</Typography>
                            <Typography variant="h6" color="initial" sx={{ mt: 2, mb: -1, fontSize: 18 }}>About This Product:</Typography>
                            {loading ? <>
                                <Skeleton />
                                <Skeleton width="70%" />
                                <Skeleton />
                                <Skeleton width="30%" />
                            </> : <p dangerouslySetInnerHTML={{ __html: product.desc }} />}
                            <Divider />
                            <Box
                                sx={{
                                    '& > legend': { mt: 2 },
                                }}
                            >

                                <Typography component="legend">Reviews ({product.reviews})</Typography>
                                <Rating name="read-only" value={parseInt(product.rating)} readOnly />
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 3, mb: 3 }}><Typography variant="inherit" color="initial">Price</Typography>
                                <Typography variant="h5" color="#D72323" sx={{ fontWeight: 500 }}> {loading ? <Skeleton width="100px" /> : `$${product.price}.00`}
                                </Typography>
                            </Box>
                            <Button variant="contained" sx={{ borderRadius: 0, py: 1.5, px: 5, bgcolor: '#D11F1F', ':hover': { bgcolor: '#850101' } }} onClick={handleOpen}>Buy Now</Button>
                        </Col7>
                    </Row>
                </Container>
                {/* Modal */}
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <Box sx={style}>
                            <form onSubmit={handleOrderSubmit}>
                                <TextField
                                    size="small"
                                    label="Product Name"
                                    value={product.title}
                                    disabled
                                    sx={{ width: 1, mb: 2 }}
                                />
                                <TextField
                                    size="small"
                                    label="Your Name"
                                    value={user.displayName}
                                    disabled
                                    sx={{ width: 1, mb: 2 }}
                                />
                                <TextField
                                    size="small"
                                    label="Email"
                                    value={user.email}
                                    disabled
                                    sx={{ width: 1, mb: 2 }}
                                />

                                <TextField
                                    size="small"
                                    label="Phone Number"
                                    type="number"
                                    name="phone"
                                    sx={{ width: 1, mb: 2 }}
                                    onChange={handleChange}
                                />
                                <TextField
                                    size="small"
                                    label="Address"
                                    name="address"
                                    sx={{ width: 1, mb: 2 }}
                                    onChange={handleChange}
                                />
                                <Button variant="contained" sx={{ borderRadius: 0, py: 1, width: 1, bgcolor: '#D11F1F', ':hover': { bgcolor: '#850101' } }} type="submit">{formLoading ? 'Loading...' : 'Order This Item'}</Button>

                            </form>
                        </Box>
                    </Fade>
                </Modal>

            </Box>
            <Footer />
        </>

    );
};

export default Product;