import { Box, Container, Grid } from '@material-ui/core';
import Realtime from 'src/components/dashboard/Realtime';
import Visitedpage from 'src/components/dashboard/Visitedpage';
import Smtraffic from 'src/components/dashboard/Smtraffic';
import Dailyvisitors from 'src/components/dashboard/Dailyvisitors';
import Bouncerate from 'src/components/dashboard/Bouncerate';
import TotalVisits from 'src/components/dashboard/TotalVisits';
import VisitDuration from 'src/components/dashboard/Visitduration';

const Dashboard = () => (
  <>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item lg={12} md={12} xl={9} xs={12}>
            <Dailyvisitors />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <Realtime />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <TotalVisits />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <Bouncerate />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <VisitDuration sx={{ height: '100%' }} />
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            <Visitedpage />
          </Grid>
          <Grid item lg={4} md={12} xl={3} xs={12}>
            <Smtraffic sx={{ height: '100%' }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Dashboard;
