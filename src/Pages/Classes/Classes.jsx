import { useQuery } from "@tanstack/react-query";
// import BasicPagination from "../../Components/Try";
import useAxiosPablic from "../../Hooks/useAxiosPpablic";
// import useClasses from "../../Hooks/useClasses";
import ReactLoading from "react-loading";
import { Pagination, Stack } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Classes = () => {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  //  claculate to total pages
  const { data: totalclasses = 0 } = useQuery({
    queryKey: ["totalclasses"], // Pass query key as an object
    queryFn: async () => {
      const res = await axiosPublic.get(`classes/count`);
      return res.data;
    },
  });
  const totalPages = Math.ceil(totalclasses.result / 6);
  //  fetch data from backend
  const axiosPublic = useAxiosPablic();
  const { data: classes = [], isLoading } = useQuery({
    queryKey: ["paginationClasses", page, searchQuery],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/classes?page=${page}&search=${searchQuery}`
      );
      return res.data;
    },
  });
  const handlePageChange = (event, value) => {
    setPage(value);
  };
  window.scrollTo(0, 0);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.search.value);
  };
  console.log(classes)
  return (
    <div className="min-h-screen  bg-[#141414]">
      <Helmet>
        <title>Workout - Classes</title>
      </Helmet>
      <div className="relative pt-28 pb-10 w-full space-y-4">
        <h1 className="lg:text-6xl md:text-5xl text-2xl text-center text-white uppercase">
          Our
          <span className="text-[#007BFF]"> Classes</span>
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-5">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            name="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-[#007BFF] hover:bg-[#007BFF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2"
          >
            Search
          </button>
        </div>
      </form>

      {isLoading ? (
        <div className="min-h-screen w-full flex items-center justify-center">
          {" "}
          <ReactLoading
            type={"spin"}
            color={"#007BFF"}
            height={50}
            width={50}
          />
        </div>
      ) : (
        <div className="container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:p-0 p-3">
            {classes.map((classItem) => (
              <div
                key={classItem._id}
                to={""}
                className="bg-opacity-80 backdrop-blur-md duration-500 text-white flex  items-center bg-white border border-gray-200 rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100"
              >
                <img
                  className="object-cover  rounded-t-lg h-72  w-48 md:rounded-none md:rounded-s-lg"
                  src={classItem.image}
                  alt=""
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    {classItem.name}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 ">
                    {classItem.description.slice(0, 60) + "..."}
                  </p>
                  <div className="mb-3 font-normal text-gray-700 flex items-center gap-2">
                    <img
                      src="https://i.ibb.co/6bLHD2F/zoom-in.png"
                      className="h-5"
                      alt=""
                    />
                    {classItem.bookings}
                  </div>
                  <p className="text-black font-bold text-xl">
                    Trainer for this class :
                  </p>
                  <div className="flex gap-2">
                    {classItem.trainers.length > 5 ? (
                      classItem.trainers.slice(0, 5).map((trainer) => (
                        <Link
                          className="cursor-pointer"
                          to={`trainers/${trainer._id}`}
                          key={trainer.image}
                        >
                          <img
                            src={trainer.image}
                            alt={trainer.name}
                            className="h-10 w-10 rounded-full border-2 "
                          />
                        </Link>
                      ))
                    ) : classItem.trainers.length > 0 ? (
                      classItem.trainers.map((trainer) => (
                        <Link
                          className="cursor-pointer"
                          to={`/trainers/${trainer._id}`}
                          key={trainer.image}
                        >
                          <img
                            src={trainer.image}
                            alt={trainer.name}
                            className="h-10 w-10 rounded-full border-2 "
                          />
                        </Link>
                      ))
                    ) : (
                      <p className="text-black">No trainers available</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {classes.length === 6 && (
  <div className="w-full flex justify-center py-10">
    <Stack spacing={2}>
      <Pagination
        color="primary"
        count={totalPages}
        page={page}
        onChange={handlePageChange}
        sx={{
          "& .MuiPaginationItem-root": {
            color: "white", // Change the text color to white
          },
        }}
      />
    </Stack>
  </div>
)}

        </div>
      )}
    </div>
  );
};

export default Classes;
