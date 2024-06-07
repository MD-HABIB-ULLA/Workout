import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { CgProfile } from "react-icons/cg";

const DHome = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className=" lg:pt-24 pt-20 bg-[#141414] ">
      {" "}
      <div className="flex h-screen  relative border-t-2">
        <aside
          className={`absolute inset-y-0 left-0 z-10 border-r-2  w-64 overflow-y-auto transition duration-300 transform bg-[#141414]  dark:bg-gray-800 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 md:static md:inset-0`}
        >
          <div className="flex items-center justify-center pt-8">
            <div className="text-xl flex  justify-between w-full px-10 font-semibold text-white">
              Dashboard{" "}
              <button
                className="text-gray-500 focus:outline-none md:hidden"
                onClick={toggleSidebar}
              >
                <ImCross className="text-white text-xl"/>
              </button>
            </div>
          </div>
          <nav className="">
          <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `text-base font-bold   px-6 py-2 mt-4 w-full flex items-center   hover:bg-gray-200 dark:hover:bg-gray-700 duration-500 hover:text-gray-700 dark:hover:text-gray-200 uppercase ${
              isActive
                ? "   inter  text-[#007BFF] border-x-0 rounded-none border-t-0 bg-transparent"
                : "md:text-white text-white"
            } `
          }
        >
          <CgProfile className="mr-2"/> Profile
        </NavLink>
          <NavLink
          to="/dashboard/users"
          className={({ isActive }) =>
            `text-base font-bold  px-6 py-2 mt-4 w-full flex items-center   hover:bg-gray-200 dark:hover:bg-gray-700 duration-500 hover:text-gray-700 dark:hover:text-gray-200 uppercase ${
              isActive
                ? "   inter  text-[#007BFF] border-x-0 rounded-none border-t-0 bg-transparent"
                : "md:text-white text-white"
            } `
          }
        >
          user
        </NavLink>
  
          
          </nav>
        </aside>

        {/* Main content */}
        <div className="flex flex-col flex-1 w-full overflow-hidden ">
          {/* Header */}

          {/* Content */}
          <main className="flex-1 overflow-x-hidden overflow-y-auto  bg-[#141414]">
            <div className="container mx-auto px-6 py-8">
              <button
                className="text-gray-500 focus:outline-none md:hidden"
                onClick={toggleSidebar}
              >
                <FaBarsStaggered className="text-white text-xl" />
              </button>
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DHome;
