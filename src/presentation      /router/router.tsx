import { createBrowserRouter } from 'react-router-dom';
import { Routes } from '../enums/router';
import { Layout, PrivateRoute } from '../shared';
import { AddEmployeePage, EmployeesPage, HomePage, InDev, Login, Register } from '../pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        path: Routes.Home,
        element: <HomePage />,
      },
      {
        path: Routes.AddEmployee,
        element: <AddEmployeePage />,
      },
      {
        path: Routes.Employees,
        element: <EmployeesPage />,
      },
      {
        path: Routes.InDev,
        element: <InDev />,
      },
      // {
      //   path: Routes.Register,
      //   element: <Register />,
      // },
      // {
      //   path: Routes.Login,
      //   element: <Login />,
      // },
    ],
  },
]);
