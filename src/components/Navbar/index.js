import React, { memo, useState } from 'react';
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Typography,
} from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#36454f' },
    secondary: {
      main: '#002984',
    },
  },
});

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    fontFamily: 'Poppins',
    fontSize: 35,
  },
}));

export const Navbar = memo(props => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const myAccount = () => {
    setAnchorEl(null);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const logout = () => {
    setAnchorEl(null);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={myAccount}>My account</MenuItem>
      <MenuItem onClick={logout}>Logout</MenuItem>
    </Menu>
  );
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className={classes.grow}>
          <AppBar position="fixed">
            <Toolbar>
              <Typography className={classes.title}>Central Library</Typography>

              <div className={classes.grow} />
              <div>
                <IconButton
                  edge="end"
                  aria-label="Menu"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <Avatar />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
          {renderMenu}
        </div>
      </ThemeProvider>
    </>
  );
});
