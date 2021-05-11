import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Card,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@material-ui/core';
import LaunchOutlinedIcon from '@material-ui/icons/LaunchOutlined';
import { grey } from '@material-ui/core/colors';
import { Line } from 'react-chartjs-2';

const orders = [
  {
    id: uuid(),
    ref: '/store/',
    visitor: 3985,
    visit: 4890,
    Bounce: '81.56%'
  },
  {
    id: uuid(),
    ref: '/store/symbol-styleguides',
    visitor: 3185,
    visit: 1824,
    Bounce: '39.56%'
  },
  {
    id: uuid(),
    ref: '/store/dashboard-ui-kit',
    visitor: 2112,
    visit: 8123,
    Bounce: '62.58%'
  },
  {
    id: uuid(),
    ref: '/store/webflow-cards.html',
    visitor: 1789,
    visit: 2440,
    Bounce: '58.76%'
  }
];

const Visitedpage = (props) => (
  <Card {...props}>
    <CardHeader title="Most Visited Page" />
    <Divider />
    <PerfectScrollbar>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>PAGE NAME</TableCell>
              <TableCell>VISITORS</TableCell>
              <TableCell>UNIQUE PAGE VISITORS</TableCell>
              <TableCell>BOUNCE RATE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow hover key={order.id}>
                <TableCell>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    {order.ref}
                    <LaunchOutlinedIcon sx={{ color: grey[900] }} />
                  </Box>
                </TableCell>
                <TableCell>{order.visitor}</TableCell>
                <TableCell>{order.visit}</TableCell>
                <TableCell>
                  <div
                    style={{ width: '160px', display: 'flex', height: '50px' }}
                  >
                    <p style={{ paddingTop: '15px' }}>{order.Bounce}</p>
                    <Line
                      data={{
                        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'J', 'G', 'X', 'A', 'B', 'C', 'D'],
                        datasets: [
                          {
                            data: [3, 4, 6, 5, 7, 5, 4, 5, 7, 5, 6, 7, 4, 2],
                            borderColor: 'rgba(50, 80, 255, 1)',
                            backgroundColor: 'rgba(50, 80, 255, 0.1)',
                            lineTension: 0
                          }
                        ]
                      }}
                      options={{
                        maintainAspectRatio: false,
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
                                display: false
                              },
                              ticks: {
                                display: false
                              }
                            }
                          ],
                          yAxes: [
                            {
                              gridLines: {
                                display: false
                              },
                              ticks: {
                                display: false,
                                beginAtZero: true
                              }
                            }
                          ]
                        }
                      }}
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </PerfectScrollbar>
  </Card>
);

export default Visitedpage;
