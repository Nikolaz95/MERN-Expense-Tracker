import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Root from './Root.jsx';
import ErrorPage from './components/page/ErrorPage/ErrorPage.jsx';
import HomePage from './components/page/HomePage/HomePage.jsx';
import UserIncomsPage from './components/page/ExpensePage/page/UserIncomsPage/UserIncomsPage.jsx';
import UserTransactionsPage from './components/page/ExpensePage/page/UserTransactionsPage/UserTransactionsPage.jsx';
import UserExpasePage from './components/page/ExpensePage/page/UserExpasePage/UserExpasePage.jsx';
import SingIn from './components/page/AuthPage/SingIn/SingIn.jsx';
import Register from './components/page/AuthPage/Register/Register.jsx';
import UserCurrencySettingsPage from './components/page/ExpensePage/page/UserCurrencySettingsPage/UserCurrencySettingsPage.jsx';
import UserDashBoardPage from './components/page/ExpensePage/page/UserDashBoardPage/UserDashBoardPage.jsx';
import { AdminRoutes } from './components/routes/AdminRoutes.jsx';
import { UserRoutes } from './components/routes/UserRoutes.jsx';
import GlobalModals from './components/context/modals/GlobalModals.jsx';
import { ModalProvider } from './components/context/modals/ModalContext.jsx';
import DashboardLayout from './components/layouts/DashboardLayout.jsx';
import { CurrencyProvider } from './components/context/CurrencyContext/CurrencyContext.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "*",
        element: <ErrorPage />
      },
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/signIn",
        element: <SingIn />
      },
      {
        path: "/registration",
        element: <Register />
      },

      // Spread the admin routes
      ...AdminRoutes,

      // Spread the user routes
      ...UserRoutes

    ],

  },

  {
    element: <DashboardLayout />,
    children: [
      {
        path: "/userDashBoard",
        element: <UserDashBoardPage />
      },
      {
        path: "/userTransactions",
        element: <UserTransactionsPage />
      },
      {
        path: "/userIncoms",
        element: <UserIncomsPage />
      },
      {
        path: "/userExpenses",
        element: <UserExpasePage />
      },
      {
        path: "/currencySettings",
        element: <UserCurrencySettingsPage />
      },
    ]
  }

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CurrencyProvider>
      <ModalProvider>
        <RouterProvider router={router} />
      </ModalProvider>
    </CurrencyProvider>
  </StrictMode>,
)
