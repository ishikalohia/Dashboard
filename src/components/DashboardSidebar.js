import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography
} from '@material-ui/core';
import ColorizeIcon from '@material-ui/icons/Colorize';
import ArrowRightAltOutlinedIcon from '@material-ui/icons/ArrowRightAltOutlined';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import TodayOutlinedIcon from '@material-ui/icons/TodayOutlined';
import InboxOutlinedIcon from '@material-ui/icons/InboxOutlined';
import NextWeekOutlinedIcon from '@material-ui/icons/NextWeekOutlined';
import NavItem from './NavItem';

const user = {
  avatar: '/static/images/ishika_image.jpeg',
  jobTitle: 'Developer',
  name: 'Ishika'
};

const items = [
  {
    href: '/app/dashboard',
    icon: DashboardOutlinedIcon,
    title: 'Dashboard'
  },
  {
    href: '/app/calendar',
    icon: TodayOutlinedIcon,
    title: 'Calendar'
  },
  {
    href: '/app/inbox',
    icon: InboxOutlinedIcon,
    title: 'Inbox'
  },
  {
    href: '/app/invoice',
    icon: NextWeekOutlinedIcon,
    title: 'Invoicing'
  },
  {
    href: '/app/lab',
    icon: ColorizeIcon,
    title: 'Lab/Experiment'
  },
];

const DashboardSidebar = ({ onMobileClose, openMobile }) => {
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          borderTop: '1px solid #f1f1f1',
          p: 2
        }}
      >
        <Avatar
          component={RouterLink}
          src={user.avatar}
          sx={{
            cursor: 'pointer',
            width: 64,
            height: 64
          }}
          to="/app/dashboard"
        />
        <Typography
          color="textPrimary"
          variant="h5"
        >
          {user.name}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {user.jobTitle}
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      <Box sx={{ px: 2 }}>
        <Typography color="textSecondary" variant="h6" sx={{ py: 1 }}>
          RECENTELY VIEWED
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="body2" sx={{ py: 1 }}>
            Overall Performance
          </Typography>
          <ArrowRightAltOutlinedIcon sx={{ my: 0.8 }} />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="body2" sx={{ py: 1 }}>
            Invoice
          </Typography>
          <ArrowRightAltOutlinedIcon sx={{ my: 0.8 }} />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="body2" sx={{ py: 1 }}>
            Customer: Minerva Viewer
          </Typography>
          <ArrowRightAltOutlinedIcon sx={{ my: 0.8 }} />
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
          PaperProps={{
            sx: {
              width: 256
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <Drawer
          anchor="left"
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: 256,
              top: 64,
              height: 'calc(100% - 64px)'
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

DashboardSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

DashboardSidebar.defaultProps = {
  onMobileClose: () => { },
  openMobile: false
};

export default DashboardSidebar;
