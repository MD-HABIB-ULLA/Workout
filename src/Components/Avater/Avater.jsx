import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { CiLogin } from "react-icons/ci";
import toast from "react-hot-toast";
const Avater = () => {
  const { user, signOutUser, loading } = useAuth();

  // drop down open and close
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    if (!loading && user) {
      setPhoto(user.photoURL);
    }
  }, [user, loading]);

  // logout logic
  const handleLogoutBtn = () => {
    signOutUser();
    toast.success("Log out successful")
  };

  return (
    <div className="md:relative inline-block text-left md:cursor-pointer">
      {!loading ? (
        <img
          className="w-10 h-10 p-[1px]  rounded-full  ring-2 ring-[#007BFF] "
          src={photo}
          alt="Bordered avatar"
          onClick={toggleDropdown}
        />
      ) : (
        ""
      )}

      {isOpen && (
        <div
          id="dropdown"
          className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute mt-2 right-0"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li className="">
              <img
                className="w-14 h-14  rounded-full  m-auto ring-2 ring-[#007BFF] "
                src={photo}
                alt="Bordered avatar"
              />
            </li>
            <li>
              <p className="block cursor-default px-4 py-2  text-black text-center">
                {user.displayName}
              </p>
            </li>
            <li></li>
            <li className="text-white bg-rose-700">
              <a
                href="#"
                onClick={handleLogoutBtn}
                className="gap-3
               px-4 py-2   flex items-center"
              >
                <CiLogin className="text-xl " /> Sign out
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Avater;
