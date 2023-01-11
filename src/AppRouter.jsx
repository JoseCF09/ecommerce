import React from "react";
import { Routes, Route } from "react-router-dom";
import Layaout from "./components/Layaout";
import PublicRoute from "./components/routes/PublicRoute";
import PrivateRoute from "./components/routes/PrivateRoute";
import SideBarSetting from "./components/SideBarSetting";
import AccountPage from "./pages/AccountPage";
import CartPage from "./pages/CartPage";
import DetailProductPage from "./pages/DetailProductPage";
import EditAccount from "./pages/EditAccount";
import HomePage from "./pages/HomePage";
import OrdersPage from "./pages/OrdersPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import StorePage from "./pages/StorePage";
import routes from "./utilities/routes";
import ProductPage from "./pages/ProductPage,";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layaout />}>
        <Route path={routes.home} element={<HomePage />} />
        <Route path={routes.detailproduct()} element={<DetailProductPage />} />
        <Route
          path={routes.signin}
          element={
            <PublicRoute>
              <SignInPage />
            </PublicRoute>
          }
        />
        <Route
          path={routes.signup}
          element={
            <PublicRoute>
              <SignUpPage />
            </PublicRoute>
          }
        />
        <Route path={routes.store} element={<StorePage />} />
        <Route path={routes.cart} element={<CartPage />} />
        <Route path={routes.account} element={<SideBarSetting />}>
          <Route
            path={routes.account}
            element={
              <PrivateRoute>
                <AccountPage />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.orders}
            element={
              <PrivateRoute>
                <OrdersPage />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.editAccount}
            element={
              <PrivateRoute>
                <EditAccount />
              </PrivateRoute>
            }
          />

          <Route
            path={routes.products}
            element={
              <PrivateRoute>
                <ProductPage />
              </PrivateRoute>
            }
          />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;
