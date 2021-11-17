import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DashMenu from './DashMenu';
import { useLocation } from 'react-router';
import Button from '@mui/material/Button';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../logo.png'
import { NavLink } from 'react-router-dom';

const drawerWidth = 240;

function ResponsiveDrawer({ children, window }) {
  const { user, logOut } = useAuth();

  const location = useLocation();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{ minHeight: '100%', background: '#222', color: '#fff' }}>
      <Toolbar>
        <NavLink to="/">
          <img src={logo} alt="" width="70%" />
        </NavLink>

      </Toolbar>
      <Divider />
      <DashMenu handleDrawerToggle={handleDrawerToggle} />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }} >
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` }, background: '#f9f9f9',
          boxShadow: 'none'
        }}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color: '#222' }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: 1 }}>
            <Box >
              <Typography variant="h6" noWrap component="div" color="initial" sx={{ textTransform: 'capitalize' }}>
                {location.pathname.split('-').join(" ").slice(1)}
              </Typography>
            </Box>
            <Box>
              {user?.email && <Button onClick={logOut} variant="contained" sx={{ bgcolor: '#222' }}>
                Log Out
              </Button>}

            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
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
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },

          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >

        <Toolbar />
        {children}

      </Box>
    </Box>
  );
}



export default ResponsiveDrawer;
