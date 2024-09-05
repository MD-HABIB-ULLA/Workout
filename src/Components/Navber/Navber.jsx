import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import useAuth from "../../Hooks/useAuth";
import Avater from "../Avater/Avater";

const Navber = () => {
  const [openNav, setOpenNav] = useState(false);

  const { user, loading } = useAuth();

  const toggleDropdown = () => {
    setOpenNav(!openNav);
  };
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const list = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-sm font-bold text-white   uppercase ${
              isActive
                ? "   inter border-2 border-[#007BFF] border-x-0 rounded-none border-t-0 bg-transparent"
                : "md:text-white"
            } `
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/trainers"
          className={({ isActive }) =>
            `text-sm font-bold text-white   uppercase ${
              isActive
                ? "   inter border-2 border-[#007BFF] border-x-0 rounded-none border-t-0 bg-transparent"
                : "md:text-white"
            } `
          }
        >
          Trainers
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/classes"
          className={({ isActive }) =>
            `text-sm font-bold text-white   uppercase ${
              isActive
                ? "   inter border-2 border-[#007BFF] border-x-0 rounded-none border-t-0 bg-transparent"
                : "md:text-white"
            } `
          }
        >
          Classes
        </NavLink>
      </li>
      {user ? (
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `text-sm font-bold text-white   uppercase ${
                isActive
                  ? "   inter border-2 border-[#007BFF] border-x-0 rounded-none border-t-0 bg-transparent"
                  : "md:text-white"
              } `
            }
          >
            Dashboard
          </NavLink>
        </li>
      ) : (
        ""
      )}
      <li>
        <NavLink
          to="/community"
          className={({ isActive }) =>
            `text-sm font-bold text-white   uppercase ${
              isActive
                ? "   inter border-2 border-[#007BFF] border-x-0 rounded-none border-t-0 bg-transparent"
                : "md:text-white"
            } `
          }
        >
          Community
        </NavLink>
      </li>
    </>
  );
  return (
    <>
      <div
        className={`${
          !scrolled
            ? " duration-500"
            : "bg-black bg-opacity-40 backdrop-blur-md duration-500 text-white  "
        } w-full fixed z-50    `}
      >
        <nav className="md:h-[70px] h-14 flex items-center  px-5 py-2">
          <div className="h-full flex justify-between w-full items-center">
            <div className="h-full ">
              <img
                src="https://i.ibb.co/8bY004Y/2024-05-26-00-05-25-Window-removebg-preview.png"
                alt=""
                className="h-full"
              />
            </div>
            <div className="flex items-center gap-3">
              {/* list of nav ber  */}
              <div className="md:block hidden ">
                <ul className="flex space-x-5 ">{list}</ul>
              </div>
           {!loading ?    user ? (
                <Avater />
              ) : (
                <div className="flex gap-3">
                  <Link to={"/login"}>
                    <button className=" px-4 p-2 md:text-sm text-xs rounded-full border bg-[#007BFF]  font-bold border-[#007BFF] bt text-white hover:bg-transparent hover:text-[#007BFF] duration-500">
                      Log in
                    </button>
                  </Link>
                  <Link to={"/signup"}>
                    <button className=" hidden lg:block px-4 p-2 rounded-full md:text-sm text-xs border bg-[#007BFF] font-bold border-[#007BFF] bt text-white hover:bg-transparent hover:text-[#007BFF] duration-500">
                      Register
                    </button>
                  </Link>
                </div>
              ) :""}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navber;

//  <nav className="">
//           <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
//             <Link to="/">
//               {" "}
//               <img
//                 src="https://i.ibb.co/8bY004Y/2024-05-26-00-05-25-Window-removebg-preview.png"
//                 className="h-12"
//                 alt=""
//               />
//             </Link>

//             <div className="flex items-center">
//               <div className="md:hidden block">
//                 {user?.photoURL ? (
//                   <Avater />
//                 ) : (
//                   <Link to={"/login"}>
//                     <button className="  px-4 p-2 rounded-full border bg-[#007BFF] font-bold border-[#007BFF] bt text-white hover:bg-transparent hover:text-[#007BFF] duration-500">
//                       {" "}
//                       Login
//                     </button>
//                   </Link>
//                 )}
//               </div>
//               <button
//                 type="button"
//                 className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none "
//                 aria-controls="mega-menu-full"
//                 aria-expanded={openNav}
//                 onClick={toggleDropdown}
//               >
//                 {openNav ? (
//                   <RxCross2 className="text-white text-3xl"></RxCross2>
//                 ) : (
//                   <IoMenu className="text-white text-3xl"></IoMenu>
//                 )}
//               </button>
//             </div>

//             <div
//               className={`items-center justify-between rounded-lg duration-500   font-medium w-full md:flex md:bg-transparent bg-gray-600  md:w-auto md:order-1 ${
//                 openNav ? "block " : "hidden"
//               }`}
//               id="mega-menu-full"
//             >
//               <ul className="flex flex-col gap-3 rounded-lg p-4 md:p-0 mt-4md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
//                 {list}
//               </ul>
//               <div className="hidden md:block ml-3">
//                 {loading ? (
//                   <button className="px-4 py-2 rounded-full border bg-[#007BFF] font-bold border-[#007BFF] text-white hover:bg-transparent hover:text-[#007BFF] duration-500">
//                     <div className="flex items-center justify-center">
//                       <div className="w-5 h-5 border-2 border-t-blue-400 animate-spin rounded-full"></div>
//                     </div>
//                   </button>
//                 ) : user?.photoURL ? (
//                   <Avater />
//                 ) : (
//                   <Link to="/login">
//                     <button className="px-4 py-2 rounded-full border bg-[#007BFF] font-bold border-[#007BFF] text-white hover:bg-transparent hover:text-[#007BFF] duration-500">
//                       Login
//                     </button>
//                   </Link>
//                 )}
//               </div>
//             </div>
//           </div>
//         </nav>
