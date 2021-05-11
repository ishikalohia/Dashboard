import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import Button from '@material-ui/core/Button';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const DashboardNavbar = ({ onMobileNavOpen, ...rest }) => (
  <AppBar color="inherit" elevation={0} {...rest} style={{ border: '1px solid #f1f1f1' }}>
    <Toolbar>
      <Hidden lgDown>
        <IconButton disabled="true" edge="start" style={{ paddingLeft: '100px', paddingRight: '120px' }}>
          <HomeOutlinedIcon />
        </IconButton>
      </Hidden>
      <RouterLink to="/">
        <Typography variant="h4" style={{ borderLeft: '1px solid #f1f1f1' }}>Dashboard</Typography>
      </RouterLink>
      <Box sx={{ flexGrow: 1 }} />
      <Button endIcon={<ArrowDropDownIcon />} variant="outlined" color="inherit" size="small">
        <img src="/static/images/eng.jpeg" alt="flag" style={{ height: '20px', width: '20px', marginRight: '10px' }} />
        ENG
      </Button>
      <Hidden lgUp>
        <IconButton
          color="primary"
          onClick={onMobileNavOpen}
        >
          <MenuIcon />
        </IconButton>
      </Hidden>
    </Toolbar>
  </AppBar>
);

DashboardNavbar.propTypes = {
  onMobileNavOpen: PropTypes.func
};

export default DashboardNavbar;
