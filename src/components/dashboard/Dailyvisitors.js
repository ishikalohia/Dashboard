import { Bar } from 'react-chartjs-2';
import {
  Box,
  Card,
  CardContent,
  Divider,
  useTheme,
  colors,
  CardHeader
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';

const Dailyvisitors = (props) => {
  const theme = useTheme();

  const data = {
    datasets: [
      {
        backgroundColor: colors.indigo[500],
        data: [
          1800, 5000, 1900, 2700, 2900, 1900, 2000, 4003, 5690, 7897, 1800,
          5000, 1900, 2700, 2900, 1900, 2000, 4003, 5690, 7897, 1800, 5000,
          1900, 2700, 2900, 1900, 2000, 4003, 5690, 7897, 4500
        ],
        label: 'Visitors'
      }
    ],
    labels: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31
    ]
  };

  const options = {
    // animation: false,
    layout: { padding: 0 },
    legend: { display: false },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      xAxes: [
        {
          maxBarThickness: 12,
          barPercentage: 0.8,
          categoryPercentage: 0.6,
          ticks: {
            fontColor: theme.palette.text.secondary
          },
          gridLines: {
            display: false,
            drawBorder: false
          }
        }
      ],
      yAxes: [
        {
          max: 9000,
          min: 3000,
          position: 'right',
          ticks: {
            fontColor: theme.palette.text.secondary,
            beginAtZero: true,
            stepSize: 3000
          },
          gridLines: {
            color: theme.palette.divider,
            drawBorder: false,
            zeroLineColor: theme.palette.divider
          }
        }
      ]
    },
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };

  return (
    <Card {...props}>
      <CardHeader
        action={(
          <div>
            <Button variant="outlined" endIcon={<UnfoldMoreIcon />} color="inherit" size="small" sx={{ mx: 1 }}>
              December
            </Button>
            <Button variant="outlined" endIcon={<UnfoldMoreIcon />} color="inherit" size="small">
              2018
            </Button>
          </div>
        )}
        title="Daily Visitors"
      />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 220,
            position: 'relative'
          }}
        >
          <Bar data={data} options={options} />
        </Box>
      </CardContent>
      <Divider />
    </Card>
  );
};

export default Dailyvisitors;
