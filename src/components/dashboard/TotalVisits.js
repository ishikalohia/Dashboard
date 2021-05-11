import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Line } from 'react-chartjs-2';
import LaunchOutlinedIcon from '@material-ui/icons/LaunchOutlined';
import { red } from '@material-ui/core/colors';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 8,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function TotalVisits() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <center>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            TOTAL VISITS
          </Typography>
          <Typography variant="h1">
            54,568
          </Typography>
          <Box style={{ display: 'flex', marginLeft: '40%', paddingTop: '3%' }}>
            <Typography
              variant="body2"
              sx={{
                color: red[900],
                mr: 1
              }}
            >
              -11.9%
            </Typography>
            <LaunchOutlinedIcon sx={{ color: red[900] }} />
          </Box>
          <Line
            height="100"
            data={{
              labels: ['M', 'T', 'W', 'T', 'F', 'S', 'J', 'G', 'X', 'A', 'B', 'C', 'D'],
              datasets: [
                {
                  data: [3, 5, 4, 7, 5, 6, 5, 7, 5, 6, 4, 3, 2],
                  borderColor: 'rgba(59, 135, 6, 1)',
                  backgroundColor: 'rgba(59, 135, 6, 0.1)',
                  lineTension: 0,
                },
              ],
            }}
            options={{
              elements: {
                point: {
                  radius: 0
                }
              },
              legend: { display: false },
              responsive: true,
              scales: {
                xAxes: [
                  {
                    gridLines: {
                      display: false,
                    },
                    ticks: {
                      display: false,
                    }
                  }
                ],
                yAxes: [
                  {
                    gridLines: {
                      display: false,
                    },
                    ticks: {
                      display: false,
                      beginAtZero: true,
                    }
                  }
                ]
              }
            }}
          />
        </CardContent>
      </center>
    </Card>
  );
}
