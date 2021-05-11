import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Line } from 'react-chartjs-2';
import LaunchOutlinedIcon from '@material-ui/icons/LaunchOutlined';
import { green } from '@material-ui/core/colors';
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

export default function Visitduration() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <center>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            VISIT DURATION
          </Typography>
          <Typography variant="h1">
            1m 4s
          </Typography>
          <Box style={{ display: 'flex', marginLeft: '40%', paddingTop: '3%' }}>
            <Typography
              variant="body2"
              sx={{
                color: green[900],
                mr: 1
              }}
            >
              +19.6%
            </Typography>
            <LaunchOutlinedIcon sx={{ color: green[900] }} />
          </Box>
          <Line
            height="100"
            data={{
              labels: ['M', 'T', 'W', 'T', 'F', 'S', 'J', 'G', 'X', 'A', 'B', 'C', 'D'],
              datasets: [
                {
                  data: [1, 2, 7, 6, 3, 4, 6, 3, 7, 3, 5, 4, 9],
                  borderColor: 'rgba(225, 208, 11, 1)',
                  backgroundColor: 'rgba(225, 208, 11, 0.1)',
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
