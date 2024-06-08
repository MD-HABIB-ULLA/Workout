import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import Signup from "../Pages/Signup/Signup";
import TrainerDetailsPage from "../Pages/TrainerDetailsPage/TrainerDetailsPage ";
import Trainers from "../Pages/Trainers/Trainers";
import Classes from "../Pages/Classes/Classes";
import TrainerBookPage from "../Pages/TrainerBookpage/TrainerBookPage";
import PaymentPage from "../Pages/PaymentPage/PaymentPage";
import BeTrainerForm from "../Pages/TrainerDetailsPage/BecomeTrainerPage";
import DHome from "../Pages/Dashboard/D-Home/DHome";
import Profile from "../Pages/Dashboard/DProfile/Profile";
import PrivateRoute from "./PrivateRoute";
import Newsletter from "../Pages/Newsletter/Newsletter";
import DTrainers from "../Pages/Dashboard/DTrainers/DTrainers";
import DBlance from "../Pages/Dashboard/DBlance/DBlance";
import DAddClass from "../Pages/Dashboard/DAddClass/DAddClass";
import AdminRoute from "./AdminRoute";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/trainerDetails",
        element: <TrainerDetailsPage />,
      },
      {
        path: "/become-a-trainer",
        element: (
          <PrivateRoute>
            <BeTrainerForm />
          </PrivateRoute>
        ),
      },
      {
        path: "/trainers",
        element: <Trainers />,
      },
      {
        path: "/classes",
        element: <Classes />,
      },
      {
        path: "/trainers/:id",
        element: <TrainerDetailsPage />,
      },
      {
        path: "/trainerbooking",
        element: (
          <PrivateRoute>
            <TrainerBookPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/payment",
        element: (
          <PrivateRoute>
            <PaymentPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <DHome />
          </PrivateRoute>
        ),
        children: [
          {
            path: "/dashboard",
            element: (
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            ),
          },
          {
            path: "/dashboard/subscriber",
            element: (
              <PrivateRoute>
                <Newsletter />
              </PrivateRoute>
            ),
          },
          {
            path: "/dashboard/allTrainers",
            element: (
              <PrivateRoute>
                <DTrainers />
              </PrivateRoute>
            ),
          },
          {
            path: "/dashboard/balance",
            element: (
              <PrivateRoute>
                <DBlance />
              </PrivateRoute>
            ),
          },
          {
            path: "/dashboard/addClasses",
            element: (
              <AdminRoute>
                <DAddClass />
              </AdminRoute>
            ),
          },
        ],
      },
    ],
  },
]);

export default Router;
