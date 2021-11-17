import { Button, Container, List, ListItem, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import Col3 from '../../styleComponents/Col3/Col3';
import Row from '../../styleComponents/Row/Row';
import footerBg from '../../images/footer-bg.png'

const Footer = () => {
    return (
        <Box sx={{ pt: 10 }} style={{ backgroundColor: '#101010', backgroundImage: `url(${footerBg})`, backgroundBlendMode: 'screen', backgroundSize: 'cover' }}>
            <Container maxWidth="xl">
                <Row align={'top'}>
                    <Col3>
                        <Typography variant="h5" color="#D72323" sx={{ fontWeight: 700, mb: 1 }}>Quick Links</Typography>
                        <List>
                            <ListItem sx={{ py: 0, px: 0, mx: 0 }}>
                                <Typography variant="body1" color="#B4B4B4" sx={{ fontWeight: 400, lineHeight: 2 }}>Emergency Drone Control</Typography>
                            </ListItem>
                            <ListItem sx={{ py: 0, my: 1, px: 0, mx: 0 }}>
                                <Typography variant="body1" color="#B4B4B4" sx={{ fontWeight: 400, lineHeight: 2 }}>Light Up</Typography>
                            </ListItem>
                            <ListItem sx={{ py: 0, my: 1, px: 0, mx: 0 }}>
                                <Typography variant="body1" color="#B4B4B4" sx={{ fontWeight: 400, lineHeight: 2 }}>parts you need</Typography>
                            </ListItem>
                            <ListItem sx={{ py: 0, my: 1, px: 0, mx: 0 }}>
                                <Typography variant="body1" color="#B4B4B4" sx={{ fontWeight: 400, lineHeight: 2 }}>Essential </Typography>
                            </ListItem>

                        </List>
                    </Col3>
                    <Col3>
                        <Typography variant="h5" color="#D72323" sx={{ fontWeight: 700, mb: 1 }}>Services</Typography>
                        <List>
                            <ListItem sx={{ py: 0, my: 1, px: 0, mx: 0 }}>
                                <Typography variant="body1" color="#B4B4B4" sx={{ fontWeight: 400, lineHeight: 2 }}>Big Bang</Typography>
                            </ListItem>
                            <ListItem sx={{ py: 0, my: 1, px: 0, mx: 0 }}>
                                <Typography variant="body1" color="#B4B4B4" sx={{ fontWeight: 400, lineHeight: 2 }}>Sudden Fly</Typography>
                            </ListItem>
                            <ListItem sx={{ py: 0, my: 1, px: 0, mx: 0 }}>
                                <Typography variant="body1" color="#B4B4B4" sx={{ fontWeight: 400, lineHeight: 2 }}>Greem Torch</Typography>
                            </ListItem>
                            <ListItem sx={{ py: 0, my: 1, px: 0, mx: 0 }}>
                                <Typography variant="body1" color="#B4B4B4" sx={{ fontWeight: 400, lineHeight: 2 }}>Block Drummer</Typography>
                            </ListItem>
                        </List>
                    </Col3>
                    <Col3>
                        <Typography variant="h5" color="#D72323" sx={{ fontWeight: 700, mb: 1 }}>Policy</Typography>
                        <List>
                            <ListItem sx={{ py: 0, my: 1, px: 0, mx: 0 }}>
                                <Typography variant="body1" color="#B4B4B4" sx={{ fontWeight: 400, lineHeight: 2 }}>Terms & Condition</Typography>
                            </ListItem>
                            <ListItem sx={{ py: 0, my: 1, px: 0, mx: 0 }}>
                                <Typography variant="body1" color="#B4B4B4" sx={{ fontWeight: 400, lineHeight: 2 }}>Privacy Policy</Typography>
                            </ListItem>
                            <ListItem sx={{ py: 0, my: 1, px: 0, mx: 0 }}>
                                <Typography variant="body1" color="#B4B4B4" sx={{ fontWeight: 400, lineHeight: 2 }}>Contact</Typography>
                            </ListItem>
                            <ListItem sx={{ py: 0, my: 1, px: 0, mx: 0 }}>
                                <Typography variant="body1" color="#B4B4B4" sx={{ fontWeight: 400, lineHeight: 2 }}>Cookie Policy</Typography>
                            </ListItem>
                        </List>
                    </Col3>
                    <Col3>
                        <Typography variant="h5" color="#D72323" sx={{ fontWeight: 700, mb: 1 }}>Our Address</Typography>
                        <List>
                            <ListItem sx={{ py: 0, my: 1, px: 0, mx: 0 }}>
                                <Typography variant="body1" color="#B4B4B4" sx={{ fontWeight: 400, lineHeight: 2 }}>New York - 101010 Hudson Time</Typography>

                            </ListItem>
                            <ListItem sx={{ py: 0, my: 1, px: 0, mx: 0 }}>
                                <Typography variant="body1" color="#B4B4B4" sx={{ fontWeight: 400, lineHeight: 2 }}>Call Now</Typography>
                            </ListItem>
                            <ListItem sx={{ py: 0, my: 1, px: 0, mx: 0 }}>
                                <Button variant="contained" sx={{ borderRadius: 0, px: 3, bgcolor: '#D11F1F', ':hover': { bgcolor: '#850101' } }} >+880900768621</Button>
                            </ListItem>
                        </List>
                    </Col3>
                </Row>

                <Box sx={{ pt: 4, pb: 2, textAlign: 'center' }}>
                    <Typography variant="body1" color="#B4B4B4" sx={{ fontWeight: 400, lineHeight: 2 }}>Copyright 2022 All Rights Reserved</Typography>

                </Box>
            </Container>
        </Box>
    );
};

export default Footer;