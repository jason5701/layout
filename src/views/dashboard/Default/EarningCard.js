import {
  ArchiveTwoTone,
  ArrowUpward,
  FileCopyTwoTone,
  GetAppTwoTone,
  MoreHoriz,
  PictureAsPdfTwoTone,
} from '@mui/icons-material';
import {
  Avatar,
  Box,
  Grid,
  Menu,
  MenuItem,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';

import SkeletonEarningCard from 'ui-component/cards/Skeleton/EarningCard';

const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.dark,
  color: '#fff',
  overflow: 'hidden',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: theme.palette.secondary[800],
    borderRadius: '50%',
    top: -85,
    right: -95,
    [theme.breakpoints.down('sm')]: {
      top: -105,
      right: -140,
    },
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: theme.palette.secondary[800],
    borderRadius: '50%',
    top: -125,
    right: -15,
    opacity: 0.5,
    [theme.breakpoints.down('sm')]: {
      top: -155,
      right: -70,
    },
  },
}));

const EarningCard = ({ isLoading }) => {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {isLoading ? (
        <SkeletonEarningCard />
      ) : (
        <CardWrapper border={false} content={false}>
          <Box sx={{ p: 2.25 }}>
            <Grid container direction='column'>
              <Grid item>
                <Grid container justifyContent='space-between'>
                  <Grid item>
                    <Avatar
                      variant='rounded'
                      sx={{
                        ...theme.typography.commonAvatar,
                        ...theme.typography.largeAvatar,
                        backgroundColor: theme.palette.secondary[800],
                        mt: 1,
                      }}
                    >
                      <img alt='Notification' />
                    </Avatar>
                  </Grid>
                  <Grid item>
                    <Avatar
                      variant='rounded'
                      sx={{
                        ...theme.typography.commonAvatar,
                        ...theme.typography.mediumAvatar,
                        backgroundColor: theme.palette.secondary.dark,
                        color: theme.palette.secondary[200],
                        zIndex: 1,
                      }}
                      aria-controls='menu-earning-card'
                      aria-haspopup='true'
                      onClick={handleClick}
                    >
                      <MoreHoriz fontSize='inherit' />
                    </Avatar>
                    <Menu
                      id='menu-earning-card'
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                      variant='selectedMenu'
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                    >
                      <MenuItem onClick={handleClose}>
                        <GetAppTwoTone sx={{ mr: 1.75 }} /> Import Card Import
                        Card
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <FileCopyTwoTone sx={{ mr: 1.75 }} /> Copy Data Copy
                        Data
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <PictureAsPdfTwoTone sx={{ mr: 1.75 }} /> Export Export
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <ArchiveTwoTone sx={{ mr: 1.75 }} /> Archive File{' '}
                        Archive File
                      </MenuItem>
                    </Menu>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container alignItems='center'>
                  <Grid item>
                    <Typography
                      sx={{
                        fontSize: '2.125rem',
                        fontWeight: 500,
                        mr: 1,
                        mt: 1.75,
                        mb: 0.75,
                      }}
                    >
                      $500.00
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Avatar
                      sx={{
                        cursor: 'pointer',
                        ...theme.typography.smallAvatar,
                        backgroundColor: theme.palette.secondary[200],
                        color: theme.palette.secondary.dark,
                      }}
                    >
                      <ArrowUpward
                        fontSize='inherit'
                        sx={{ transform: 'rotate3d(1, 1, 1, 45deg)' }}
                      />
                    </Avatar>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ mb: 1.25 }}>
                <Typography
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: theme.palette.secondary[200],
                  }}
                >
                  Total Earning
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </CardWrapper>
      )}
    </>
  );
};

EarningCard.propTypes = {
  isLoading: PropTypes.bool,
};

export default EarningCard;
