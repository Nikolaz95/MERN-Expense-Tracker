import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Root from './Root.jsx';
import { Provider } from 'react-redux'

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
import { TransactionProvider } from './components/context/TransactionContext/TransactionContext.jsx';
import { store } from './redux/store.js';
import AboutUs from './components/page/AboutUs/AboutUs.jsx';
import ProtectRoute from './components/routes/ProtectRoute.jsx';

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
        path: "/aboutUs",
        element: <AboutUs />
      },
      {
        path: "/signIn",
        element: <SingIn />
      },
      {
        path: "/registration",
        element: <Register />
      },

      {
        element: <DashboardLayout />,
        children: [
          {
            path: "/userDashBoard",
            element:
              <ProtectRoute>
                <UserDashBoardPage />
              </ProtectRoute>

          },
          {
            path: "/userTransactions",
            element:
              <ProtectRoute>
                <UserTransactionsPage />
              </ProtectRoute>
          },
          {
            path: "/userIncoms",
            element:
              <ProtectRoute>
                <UserIncomsPage />
              </ProtectRoute>
          },
          {
            path: "/userExpenses",
            element:
              <ProtectRoute>
                <UserExpasePage />
              </ProtectRoute>
          },
          {
            path: "/currencySettings",
            element:
              <ProtectRoute>
                <UserCurrencySettingsPage />
              </ProtectRoute>
          },
        ]
      },

      // Spread the admin routes
      ...AdminRoutes,

      // Spread the user routes
      ...UserRoutes

    ],

  },

  /* {
    element: <DashboardLayout />,
    children: [
      {
        path: "/userDashBoard",
        element:
          <ProtectRoute>
            <UserDashBoardPage />
          </ProtectRoute>

      },
      {
        path: "/userTransactions",
        element:
          <ProtectRoute>
            <UserTransactionsPage />
          </ProtectRoute>
      },
      {
        path: "/userIncoms",
        element:
          <ProtectRoute>
            <UserIncomsPage />
          </ProtectRoute>
      },
      {
        path: "/userExpenses",
        element:
          <ProtectRoute>
            <UserExpasePage />
          </ProtectRoute>
      },
      {
        path: "/currencySettings",
        element:
          <ProtectRoute>
            <UserCurrencySettingsPage />
          </ProtectRoute>
      },
    ]
  } */

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <TransactionProvider>
        <ModalProvider>
          <RouterProvider router={router} />
        </ModalProvider>
      </TransactionProvider>
    </Provider>
  </StrictMode>,
)
