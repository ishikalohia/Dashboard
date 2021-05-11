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
import LinearProgress from '@material-ui/core/LinearProgress';

const orders = [
  {
    id: uuid(),
    ref: 'Instagram',
    visitor: 3985,
    val: 70
  },
  {
    id: uuid(),
    ref: 'Facebook',
    visitor: 3185,
    val: 40
  },
  {
    id: uuid(),
    ref: 'Twitter',
    visitor: 2112,
    val: 30
  },
  {
    id: uuid(),
    ref: 'Linkedin',
    visitor: 1789,
    val: 10
  }
];

const Smtraffic = (props) => (
  <Card {...props}>
    <CardHeader title="Social Media Traffic" />
    <Divider />
    <PerfectScrollbar>
      <Box sx={{ minWidth: 300 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>NETWORK</TableCell>
              <TableCell>VISITORS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow hover key={order.id}>
                <TableCell>{order.ref}</TableCell>
                <TableCell>
                  <div
                    style={{ width: '160px', display: 'flex', height: '50px' }}
                  >
                    <p style={{ paddingTop: '15px' }}>{order.visitor}</p>
                    <Box sx={{ pt: 3 }}>
                      <LinearProgress
                        value={order.val}
                        variant="determinate"
                        style={{ width: '180px', marginLeft: '10px' }}
                      />
                    </Box>
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

export default Smtraffic;
