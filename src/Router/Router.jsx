import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import Signup from "../Pages/Signup/Signup";
import TrainerDetailsPage from "../Pages/TrainerDetailsPage/TrainerDetailsPage ";
import BecomeTrainerPage from "../Pages/TrainerDetailsPage/BecomeTrainerPage";
import Trainers from "../Pages/Trainers/Trainers";
import Classes from "../Pages/Classes/Classes";


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
          element: <BecomeTrainerPage />,
        },
        {
          path: "/trainers",
          element: <Trainers />,
        },
        {
          path: "/classes",
          element: <Classes />,
        },
      ],
    },
  ]);

export default Router;