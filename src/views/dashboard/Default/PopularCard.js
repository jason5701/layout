import PropTypes from 'prop-types';
import {
  Avatar,
  Button,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Menu,
  MenuItem,
  Typography,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';

import SkeletonPopularCard from 'ui-component/cards/Skeleton/PopularCard';
import { gridSpacing } from 'store/constant';

import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import BajajaAreaChartCard from './BajajAreaChartCard';
import {
  ChevronRightOutlined,
  KeyboardArrowDownOutlined,
  KeyboardArrowUpOutlined,
} from '@mui/icons-material';

const PopularCard = ({ isLoading }) => {
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
        <SkeletonPopularCard />
      ) : (
        <MainCard content={false}>
          <CardContent>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12}>
                <Grid
                  container
                  alignContent='center'
                  justifyContent='space-between'
                >
                  <Grid item>
                    <Typography variant='h4'>Popular Stocks</Typography>
                  </Grid>
                  <Grid item>
                    <MoreHorizOutlinedIcon
                      fontSize='small'
                      sx={{
                        color: theme.palette.primary[200],
                        cursor: 'pointer',
                      }}
                      aria-controls='menu-popular-card'
                      aria-haspopup='true'
                      onClick={handleClick}
                    />
                    <Menu
                      id='menu-popular-card'
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
                      <MenuItem>Today</MenuItem>
                      <MenuItem>This Month</MenuItem>
                      <MenuItem>This Year</MenuItem>
                    </Menu>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sx={{ pt: '16px !important' }}>
                <BajajaAreaChartCard />
              </Grid>
              <Grid item xs={12}>
                <Grid container direction='column'>
                  <Grid item>
                    <Grid
                      container
                      alignItems='center'
                      justifyContent='space-between'
                    >
                      <Grid item>
                        <Typography variant='subtitle1' color='inherit'>
                          Bajaj Finery
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Grid
                          container
                          alignItems='center'
                          justifyContent='space-between'
                        >
                          <Grid item>
                            <Typography variant='subtitle1' color='inherit'>
                              $1839.00
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Avatar
                              variant='rounded'
                              sx={{
                                width: 16,
                                height: 16,
                                borderRadius: '5px',
                                backgroundColor: theme.palette.success.light,
                                color: theme.palette.success.dark,
                                ml: 2,
                              }}
                            >
                              <KeyboardArrowUpOutlined
                                fontSize='small'
                                color='inherit'
                              />
                            </Avatar>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant='subtitle2'
                      sx={{ color: 'success.dark' }}
                    >
                      10% Profit
                    </Typography>
                  </Grid>
                </Grid>
                <Divider sx={{ my: 1.5 }} />
                <Grid container direction='column'>
                  <Grid item>
                    <Grid
                      container
                      alignItems='center'
                      justifyContent='space-between'
                    >
                      <Grid item>
                        <Typography variant='subtitle1' color='inherit'>
                          TTML
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Grid
                          container
                          alignItems='center'
                          justifyContent='space-between'
                        >
                          <Grid item>
                            <Typography variant='subtitle1' color='inherit'>
                              $100.00
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Avatar
                              variant='rounded'
                              sx={{
                                width: 16,
                                height: 16,
                                borderRadius: '5px',
                                backgroundColor: theme.palette.orange.light,
                                color: theme.palette.orange.dark,
                                marginLeft: 1.875,
                              }}
                            >
                              <KeyboardArrowDownOutlined
                                fontSize='small'
                                color='inherit'
                              />
                            </Avatar>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant='subtitle2'
                      sx={{ color: theme.palette.orange.dark }}
                    >
                      10% loss
                    </Typography>
                  </Grid>
                </Grid>
                <Divider sx={{ my: 1.5 }} />
                <Grid container direction='column'>
                  <Grid item>
                    <Grid
                      container
                      alignItems='center'
                      justifyContent='space-between'
                    >
                      <Grid item>
                        <Typography variant='subtitle1' color='inherit'>
                          Reliance
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Grid
                          container
                          alignItems='center'
                          justifyContent='space-between'
                        >
                          <Grid item>
                            <Typography variant='subtitle1' color='inherit'>
                              $200.00
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Avatar
                              variant='rounded'
                              sx={{
                                width: 16,
                                height: 16,
                                borderRadius: '5px',
                                backgroundColor: theme.palette.success.light,
                                color: theme.palette.success.dark,
                                ml: 2,
                              }}
                            >
                              <KeyboardArrowUpOutlined
                                fontSize='small'
                                color='inherit'
                              />
                            </Avatar>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant='subtitle2'
                      sx={{ color: theme.palette.success.dark }}
                    >
                      10% Profit
                    </Typography>
                  </Grid>
                </Grid>
                <Divider sx={{ my: 1.5 }} />
                <Grid container direction='column'>
                  <Grid item>
                    <Grid
                      container
                      alignItems='center'
                      justifyContent='space-between'
                    >
                      <Grid item>
                        <Typography variant='subtitle1' color='inherit'>
                          TTML
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Grid
                          container
                          alignItems='center'
                          justifyContent='space-between'
                        >
                          <Grid item>
                            <Typography variant='subtitle1' color='inherit'>
                              $189.00
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Avatar
                              variant='rounded'
                              sx={{
                                width: 16,
                                height: 16,
                                borderRadius: '5px',
                                backgroundColor: theme.palette.orange.light,
                                color: theme.palette.orange.dark,
                                ml: 2,
                              }}
                            >
                              <KeyboardArrowDownOutlined
                                fontSize='small'
                                color='inherit'
                              />
                            </Avatar>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant='subtitle2'
                      sx={{ color: theme.palette.orange.dark }}
                    >
                      10% loss
                    </Typography>
                  </Grid>
                </Grid>
                <Divider sx={{ my: 1.5 }} />
                <Grid container direction='column'>
                  <Grid item>
                    <Grid
                      container
                      alignItems='center'
                      justifyContent='space-between'
                    >
                      <Grid item>
                        <Typography variant='subtitle1' color='inherit'>
                          Stolon
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Grid
                          container
                          alignItems='center'
                          justifyContent='space-between'
                        >
                          <Grid item>
                            <Typography variant='subtitle1' color='inherit'>
                              $189.00
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Avatar
                              variant='rounded'
                              sx={{
                                width: 16,
                                height: 16,
                                borderRadius: '5px',
                                backgroundColor: theme.palette.orange.light,
                                color: theme.palette.orange.dark,
                                ml: 2,
                              }}
                            >
                              <KeyboardArrowDownOutlined
                                fontSize='small'
                                color='inherit'
                              />
                            </Avatar>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant='subtitle2'
                      sx={{ color: theme.palette.orange.dark }}
                    >
                      10% loss
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions sx={{ p: 1.25, pt: 0, justifyContent: 'center' }}>
            <Button size='small' disableElevation>
              View All
              <ChevronRightOutlined />
            </Button>
          </CardActions>
        </MainCard>
      )}
    </>
  );
};

PopularCard.propTypes = {
  isLoading: PropTypes.bool,
};

export default PopularCard;
