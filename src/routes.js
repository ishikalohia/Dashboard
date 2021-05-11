import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/components/DashboardLayout';
import MainLayout from 'src/components/MainLayout';
import Inbox from 'src/pages/inbox';
import Calendar from 'src/pages/Calendar';
import Dashboard from 'src/pages/Dashboard';
import Invoice from 'src/pages/Invoice';
import Lab from 'src/pages/Lab';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'inbox', element: <Inbox /> },
      { path: 'calendar', element: <Calendar /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'invoice', element: <Invoice /> },
      { path: 'lab', element: <Lab /> },
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <Navigate to="/app/dashboard" /> },
    ]
  }
];

export default routes;
