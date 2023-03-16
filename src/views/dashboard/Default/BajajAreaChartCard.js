import { Card, Grid, Typography, useTheme } from '@mui/material';
import { useEffect } from 'react';
import { useAppSelector } from 'store/rtk/store';

const BajajaAreaChartCard = () => {
  const theme = useTheme();

  const orangeDark = theme.palette.secondary[800];

  return (
    <Card sx={{ bgcolor: 'secondary.light' }}>
      <Grid container sx={{ p: 2, pb: 0, color: '#fff' }}>
        <Grid item xs={12}>
          <Grid container alignItems='center' justifyContent='space-between'>
            <Grid item>
              <Typography
                variant='subtitle1'
                sx={{ color: theme.palette.secondary.dark }}
              >
                Bajaj Finery
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='h4' sx={{ color: theme.palette.grey[800] }}>
                $1839.00
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant='subtitle2'
            sx={{ color: theme.palette.grey[800] }}
          >
            10% Profit
          </Typography>
        </Grid>
      </Grid>
      {/* Chart */}
    </Card>
  );
};

export default BajajaAreaChartCard;
