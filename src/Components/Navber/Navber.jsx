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

