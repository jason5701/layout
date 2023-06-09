import PropTypes from 'prop-types';

// material-ui
import { Box, Card, Grid } from '@mui/material';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';

// ===============================|| SHADOW BOX ||=============================== //

const ShadowBox = ({ shadow }) => (
  <Card sx={{ mb: 3, boxShadow: shadow }}>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: 4.5,
        bgcolor: 'primary.light',
        color: 'grey.800',
      }}
    >
      <Box sx={{ color: 'inherit' }}>boxShadow: {shadow}</Box>
    </Box>
  </Card>
);

ShadowBox.propTypes = {
  shadow: PropTypes.string.isRequired,
};

// ============================|| UTILITIES SHADOW ||============================ //

const UtilitiesShadow = () => (
  <MainCard
    title='Basic Shadow'
  >
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <SubCard title='Basic Shadow'>
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <ShadowBox shadow='0' />
            </Grid>
          </Grid>
        </SubCard>
      </Grid>
    </Grid>
  </MainCard>
);

export default UtilitiesShadow;
