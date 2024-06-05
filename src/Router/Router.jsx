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
          element: <BeTrainerForm />,
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
          element: <TrainerBookPage />,
        },
        {
          path: "/payment",
          element: <PaymentPage />,
        },
      ],
    },
  ]);

export default Router;