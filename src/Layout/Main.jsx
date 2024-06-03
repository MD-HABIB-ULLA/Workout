import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber/Navber";
import Footer from "../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";
// import { NavbarSimple } from "../Components/Navber/MaterialNavber";

const Main = () => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Navber />
      <div className=" min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Main;
