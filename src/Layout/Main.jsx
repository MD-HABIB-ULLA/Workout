import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber/Navber";
import Footer from "../Components/Footer/Footer";
// import { NavbarSimple } from "../Components/Navber/MaterialNavber";

const Main = () => {
  return (
    <>
      <Navber />
      <div className=" min-h-screen">
        <Outlet />
      </div>
      <Footer/>
    </>
  );
};

export default Main;
