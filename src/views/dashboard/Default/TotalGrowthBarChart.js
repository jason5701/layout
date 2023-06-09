import { Grid, MenuItem, TextField, Typography, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import { gridSpacing } from 'store/constant';
import MainCard from 'ui-component/cards/MainCard';

import SkeletonTotalGrowthBarChar from 'ui-component/cards/Skeleton/TotalGrowthBarChart';

const status = [
  {
    value: 'today',
    label: 'Today',
  },
  {
    value: 'month',
    label: 'This Month',
  },
  {
    value: 'year',
    label: 'This Year',
  },
];

const TotalGrowthBarChart = ({ isLoading }) => {
  const [value, setValue] = useState('today');
  const theme = useTheme();

  return (
    <>
      {isLoading ? (
        <SkeletonTotalGrowthBarChar />
      ) : (
        <MainCard>
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
              <Grid
                container
                alignItems='center'
                justifyContent='space-between'
              >
                <Grid item>
                  <Grid container direction='column' spacing={1}>
                    <Grid item>
                      <Typography variant='subtitle2'>Total Growth</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant='h3'>$2,324.00</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <TextField
                    id='standard-select-currency'
                    select
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  >
                    {status.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              {/* <Chart {...chartData} /> */}
            </Grid>
          </Grid>
        </MainCard>
      )}
    </>
  );
};

export default TotalGrowthBarChart;
