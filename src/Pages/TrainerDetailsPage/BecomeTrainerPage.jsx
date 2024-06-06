import { useEffect, useState } from "react";
import Select from "react-select";
import useAuth from "../../Hooks/useAuth";
import { Helmet } from "react-helmet";
import { useQuery } from "@tanstack/react-query";
import useAxiosPablic from "../../Hooks/useAxiosPpablic";

const BeTrainerForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [skills, setSkills] = useState([]);
  const [availableDays, setAvailableDays] = useState([]);
  const [availableTime, setAvailableTime] = useState("");

  const [status, setStatus] = useState("pending");

  const axiosPublic = useAxiosPablic();
  const { data: classesName = [], isLoading } = useQuery({
    queryKey: ["classesName"],
    queryFn: async () => {
      const res = await axiosPublic.get("/classes/name");
      return res.data;
    },
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    // Code to submit form data to the database
    console.log({
      fullName,
      email,
      age,
      profileImage,
      skills,
      availableDays,
      availableTime,
      status,
    });
  };
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && user) {
      setEmail(user.email);
      setFullName(user.displayName);
      setProfileImage(user.photoURL);
    }
  }, [user, loading]);
  // Options for available days
  const options = [
    { value: "Sun", label: "Sunday" },
    { value: "Mon", label: "Monday" },
    { value: "Tue", label: "Tuesday" },
    { value: "Wed", label: "Wednesday" },
    { value: "Thu", label: "Thursday" },
    { value: "Fri", label: "Friday" },
    { value: "Sat", label: "Saturday" },
  ];

  return (
    <div className=" bg-[#141414]">
      <div className="max-w-3xl mx-auto  p-8 rounded-md  ">
        <Helmet>
          <title>Workout - Book A Trainer</title>
        </Helmet>{" "}
        <div className="relative md:pt-28 pt-10 pb-10 w-full space-y-4">
          <h1 className="lg:text-6xl md:text-5xl text-2xl text-center text-white uppercase">
            trainer
            <span className="text-[#007BFF]"> Booking</span>
          </h1>
        </div>
        {loading ? (
          ""
        ) : (
          <div className="w-full flex justify-between text-white">
            <div>
              <h1 className="uppercase text-3xl font-bold ">{fullName}</h1>
              <p className=" text-xl font-bold ">{email}</p>
            </div>
            <div className="rounded-full  p-1">
              <img
                src={profileImage}
                className=" h-16 w-16 ring-2 rounded-full"
                alt=""
              />
            </div>
          </div>
        )}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-lg border-blue-600 border-2 p-10 mt-4"
        >
          <div className="flex flex-col md:flex-row md:space-x-4 gap-2">
            <div className=" md:w-1/2">
              <label className="block mb-1 text-xl font-bold text-white">
                Experience Years
              </label>
              <input
                type="text"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full border-gray-300 rounded-md px-4 py-2"
              />
            </div>

            <div className="md:w-[50%] w-full">
              <label className="block mb-1 text-xl font-bold text-white">
                Skills
              </label>
              <Select
                options={classesName}
                isMulti
                onChange={setSkills}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4 gap-2 ">
            <div className=" md:w-1/2">
              <label className="block mb-1 text-xl font-bold text-white">
                Available Time in a Day
              </label>
              <input
                type="text"
                value={availableDays}
                onChange={(e) => setAvailableDays(e.target.value)}
                className="w-full border-gray-300 rounded-md px-4 py-2"
              />
            </div>

            <div className="md:w-[50%] w-full">
              <label className="block mb-1 text-xl font-bold text-white">
                Available Days a Week
              </label>
              <Select options={options} onChange={setSkills} />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Apply
          </button>
        </form>
      </div>
    </div>
  );
};

export default BeTrainerForm;
