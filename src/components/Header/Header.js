import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Container, Menu, MenuItem } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { NavLink } from 'react-router-dom';
import logo from '../../logo.png';
import useAuth from '../../hooks/useAuth';
import Tooltip from '@mui/material/Tooltip';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';

const drawerWidth = 240;
const NavStyle = ({ isActive }) => {
    return {
        display: "block",
        margin: "1rem 0",
        textDecoration: 'none',
        color: isActive ? "red" : "#fff"
    };
}

function Header(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const { user, logOut } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div style={{ backgroundColor: '#101010', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Toolbar >
                <NavLink to="/" style={{ margin: 0, padding: '5px 0', display: 'inline-block' }}>
                    <img src={logo} alt="" width="60%" />
                </NavLink>
            </Toolbar>
            <Divider color="#444" />
            <List>

                <ListItem as={NavLink} to="/" button onClick={handleDrawerToggle} sx={{ color: '#fff', ':hover': { backgroundColor: 'rgba(255,255,255,.1)' } }}>
                    <ListItemIcon>
                        <HomeIcon sx={{ color: '#fff' }} />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem as={NavLink} to="/shop" button onClick={handleDrawerToggle} sx={{ color: '#fff', ':hover': { backgroundColor: 'rgba(255,255,255,.1)' } }}>
                    <ListItemIcon>
                        <LocalMallIcon sx={{ color: '#fff' }} />
                    </ListItemIcon>
                    <ListItemText primary="Shop" />
                </ListItem>
                <ListItem as={NavLink} to="/reviews" button onClick={handleDrawerToggle} sx={{ color: '#fff', ':hover': { backgroundColor: 'rgba(255,255,255,.1)' } }}>
                    <ListItemIcon>
                        <StarIcon sx={{ color: '#fff' }} />
                    </ListItemIcon>
                    <ListItemText primary="Reviews" />
                </ListItem>
                <ListItem as={NavLink} to="/about-us" button onClick={handleDrawerToggle} sx={{ color: '#fff', ':hover': { backgroundColor: 'rgba(255,255,255,.1)' } }}>
                    <ListItemIcon>
                        <FavoriteIcon sx={{ color: '#fff' }} />
                    </ListItemIcon>
                    <ListItemText primary="About Us" />
                </ListItem>

            </List>
            <Toolbar sx={{ mt: 'auto', mb: 2 }}>
                {
                    user?.email ?
                        <Button variant="contained" sx={{ width: 1, bgcolor: '#D11F1F', ':hover': { bgcolor: '#850101' } }} onClick={logOut} >Log Out</Button>
                        :
                        <Button as={NavLink} to="/account" variant="contained" sx={{ width: 1, bgcolor: '#D11F1F', ':hover': { bgcolor: '#850101' } }} style={{ textDecoration: 'none', textAlign: 'center' }} onClick={handleDrawerToggle} >Login</Button>
                }
            </Toolbar>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex', pt: 2 }}>
            <CssBaseline />
            <AppBar
                position="static"
                sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}
            >
                <Container maxWidth="xl">
                    <Toolbar className="fixMargin">
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: 1 }} >
                            <Typography variant="h6" noWrap component="div">
                                <NavLink to="/" style={{ margin: 0, padding: '5px 0', display: 'inline-block' }}>
                                    <img src={logo} alt="" width="160px" />
                                </NavLink>
                            </Typography>
                            {/* Desktop menu */}
                            <Box sx={{ mr: 2, display: { xs: 'none', sm: 'flex' }, gap: 8, alignItems: 'center' }}>
                                <NavLink style={NavStyle} to="/">HOME</NavLink>
                                <NavLink style={NavStyle} to="/shop">SHOP</NavLink>
                                <NavLink style={NavStyle} to="/reviews">REVIEWS</NavLink>
                                <NavLink style={NavStyle} to="/about-us">ABOUT US</NavLink>
                                {
                                    user?.email ?
                                        <>
                                            <Tooltip>
                                                <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                                                    <Avatar sx={{ width: 32, height: 32 }} alt={user.displayName} src={user?.photoUrl}></Avatar>
                                                </IconButton>
                                            </Tooltip>
                                            <Menu
                                                anchorEl={anchorEl}
                                                open={open}
                                                onClose={handleClose}
                                                onClick={handleClose}
                                                PaperProps={{
                                                    elevation: 0,
                                                    sx: {
                                                        overflow: 'visible',
                                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                        mt: 1.5,
                                                        '& .MuiAvatar-root': {
                                                            width: 32,
                                                            height: 32,
                                                            ml: -0.5,
                                                            mr: 1,
                                                        },
                                                        '&:before': {
                                                            content: '""',
                                                            display: 'block',
                                                            position: 'absolute',
                                                            top: 0,
                                                            right: 14,
                                                            width: 10,
                                                            height: 10,
                                                            bgcolor: 'background.paper',
                                                            transform: 'translateY(-50%) rotate(45deg)',
                                                            zIndex: 0,
                                                        },
                                                    },
                                                }}
                                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                            >

                                                <MenuItem as={NavLink} to="/dashboard" style={{ color: 'rgba(0, 0, 0, 0.8)' }}>
                                                    <ListItemIcon>
                                                        <Settings fontSize="small" />
                                                    </ListItemIcon>
                                                    Dashboard
                                                </MenuItem>
                                                <MenuItem onClick={logOut}>
                                                    <ListItemIcon>
                                                        <Logout fontSize="small" />
                                                    </ListItemIcon>
                                                    Logout
                                                </MenuItem>
                                            </Menu>

                                        </>
                                        :
                                        <Box>
                                            <Button as={NavLink} to="/account" variant="contained" sx={{ borderRadius: 0, px: 3, py: 1.4, width: 1, bgcolor: '#D11F1F', ':hover': { bgcolor: '#850101' } }} style={{ textDecoration: 'none' }}>Login</Button>
                                        </Box>
                                }
                            </Box>
                            {/* Mobile Menu  */}
                            <Box sx={{
                                display: { xs: 'block', sm: 'none' }
                            }}>
                                {
                                    user?.email ?
                                        <>
                                            <Tooltip>
                                                <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                                                    <Avatar sx={{ width: 32, height: 32 }} alt={user.displayName} src={user?.photoUrl}></Avatar>
                                                </IconButton>
                                            </Tooltip>
                                            <Menu
                                                anchorEl={anchorEl}
                                                open={open}
                                                onClose={handleClose}
                                                onClick={handleClose}
                                                PaperProps={{
                                                    elevation: 0,
                                                    sx: {
                                                        overflow: 'visible',
                                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                        mt: 1.5,
                                                        '& .MuiAvatar-root': {
                                                            width: 32,
                                                            height: 32,
                                                            ml: -0.5,
                                                            mr: 1,
                                                        },
                                                        '&:before': {
                                                            content: '""',
                                                            display: 'block',
                                                            position: 'absolute',
                                                            top: 0,
                                                            right: 14,
                                                            width: 10,
                                                            height: 10,
                                                            bgcolor: 'background.paper',
                                                            transform: 'translateY(-50%) rotate(45deg)',
                                                            zIndex: 0,
                                                        },
                                                    },
                                                }}
                                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                            >

                                                <MenuItem as={NavLink} to="/dashboard" style={{ color: 'rgba(0, 0, 0, 0.8)' }}>
                                                    <ListItemIcon>
                                                        <Settings fontSize="small" />
                                                    </ListItemIcon>
                                                    Dashboard
                                                </MenuItem>
                                                <MenuItem onClick={logOut}>
                                                    <ListItemIcon>
                                                        <Logout fontSize="small" />
                                                    </ListItemIcon>
                                                    Logout
                                                </MenuItem>
                                            </Menu>

                                        </>
                                        :
                                        <Box>
                                            <Button as={NavLink} to="/account" variant="contained" sx={{ borderRadius: 0, px: 3, py: 1.4, width: 1, bgcolor: '#D11F1F', ':hover': { bgcolor: '#850101' } }} style={{ textDecoration: 'none' }}>Login</Button>
                                        </Box>
                                }
                            </Box>
                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, display: 'none' }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>

            </Box>
        </Box >
    );
}



export default Header;
