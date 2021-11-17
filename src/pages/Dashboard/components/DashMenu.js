import React from 'react';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { ListItemButton } from '@mui/material';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import { NavLink } from 'react-router-dom';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import ShopIcon from '@mui/icons-material/Shop';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShopTwoIcon from '@mui/icons-material/ShopTwo';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';
import useAuth from '../../../hooks/useAuth';

const DashMenu = ({ handleDrawerToggle }) => {
    const { admin } = useAuth();

    const [openProduct, setOpenProduct] = React.useState(false);

    const handleProductClick = () => {
        setOpenProduct(!openProduct);
    };
    return (
        <>
            {
                admin ?
                    <List>
                        <ListItemButton as={NavLink} to="/dashboard" sx={{ color: '#fff' }} divider>
                            <ListItemIcon sx={{ color: ' #fff' }}>
                                <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItemButton>


                        <>
                            <ListItemButton sx={{ color: '#fff' }} onClick={handleProductClick} divider>
                                <ListItemIcon sx={{ color: ' #fff' }}>
                                    <ShopIcon />
                                </ListItemIcon>
                                <ListItemText primary="Products" />
                                {openProduct ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                            <Collapse in={openProduct} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{ color: '#fff', pl: 4 }} as={NavLink} to="/dashboard/products" onClick={handleDrawerToggle} divider>
                                        <ListItemIcon sx={{ color: ' #fff' }}>
                                            <ShopTwoIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Mange All" />
                                    </ListItemButton>
                                    <ListItemButton sx={{ color: '#fff', pl: 4 }} as={NavLink} to="/dashboard/products/add-new" onClick={handleDrawerToggle} divider>
                                        <ListItemIcon sx={{ color: ' #fff' }}>
                                            <AddShoppingCartIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Add New " />
                                    </ListItemButton>

                                </List>
                            </Collapse>
                        </>

                        <ListItemButton as={NavLink} to="/dashboard/make-admin" sx={{ color: '#fff' }} divider>
                            <ListItemIcon sx={{ color: ' #fff' }}>
                                <AdminPanelSettingsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Make Admin" />
                        </ListItemButton>

                        <ListItemButton as={NavLink} to="/dashboard/orders" sx={{ color: '#fff' }} divider>
                            <ListItemIcon sx={{ color: ' #fff' }}>
                                <CardGiftcardIcon />
                            </ListItemIcon>
                            <ListItemText primary="Orders" />
                        </ListItemButton>

                        <ListItemButton as={NavLink} to="/dashboard/media" sx={{ color: '#fff' }} divider>
                            <ListItemIcon sx={{ color: ' #fff' }}>
                                <PermMediaIcon />
                            </ListItemIcon>
                            <ListItemText primary="Media" />
                        </ListItemButton>



                    </List>
                    :

                    <List>
                        <ListItemButton as={NavLink} to="/dashboard" sx={{ color: '#fff' }} divider>
                            <ListItemIcon sx={{ color: ' #fff' }}>
                                <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItemButton>
                        <ListItemButton as={NavLink} to="/dashboard/ratings" sx={{ color: '#fff' }} divider>
                            <ListItemIcon sx={{ color: ' #fff' }}>
                                <ThumbsUpDownIcon />
                            </ListItemIcon>
                            <ListItemText primary="Ratings" />
                        </ListItemButton>

                        <ListItemButton as={NavLink} to="/dashboard/my-orders" sx={{ color: '#fff' }} divider>
                            <ListItemIcon sx={{ color: ' #fff' }}>
                                <CardGiftcardIcon />
                            </ListItemIcon>
                            <ListItemText primary="My Orders" />
                        </ListItemButton>
                        <ListItemButton as={NavLink} to="/dashboard/media" sx={{ color: '#fff' }} divider>
                            <ListItemIcon sx={{ color: ' #fff' }}>
                                <PermMediaIcon />
                            </ListItemIcon>
                            <ListItemText primary="Media" />
                        </ListItemButton>
                    </List>
            }


        </>
    );
};

export default DashMenu;