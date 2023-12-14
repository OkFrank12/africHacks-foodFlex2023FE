import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import RegisterPage from "../auth/RegisterPage";
import SignInPage from "../auth/SignInPage";
import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";
import HistoryPage from "../pages/HistoryPage";
import BINpage from "../pages/BINpage";
import DetailedPage from "../pages/DetailedPage";
import PrivateRouter from "./PrivateRouter";

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/sign-in",
    element: <SignInPage />,
  },
  {
    path: "/:token/verify",
    element: <SignInPage />,
  },
  {
    path: "/home",
    element: (
      <PrivateRouter>
        <HomePage />
      </PrivateRouter>
    ),
  },
  {
    path: "/cart-page",
    element: (
      <PrivateRouter>
        <CartPage />
      </PrivateRouter>
    ),
  },
  {
    path: "/history-page/:id",
    element: (
      <PrivateRouter>
        <HistoryPage />
      </PrivateRouter>
    ),
  },
  {
    path: "/BIN-page",
    element: <BINpage />,
  },
  {
    path: "/detailed-page/:id",
    element: <DetailedPage />,
  },
]);
