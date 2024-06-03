import { useQuery } from "@tanstack/react-query";
import useAxiosPablic from "../../Hooks/useAxiosPpablic";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Trainers = () => {
  window.scrollTo(0, 0);
  const axiosPublic = useAxiosPablic();
  const { data: trainers = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic.get("/trainers");
      return res.data;
    },
  });
  console.log(trainers);
  return (
    <div className=" pt-10 md:pt-0 bg-[#141414] min-h-screen pb-10 ">
      <div className="container m-auto">
        <div className="relative lg:py-28 md:py-16 py-10 w-full space-y-4">
          <h1 className="lg:text-6xl md:text-5xl text-2xl text-center text-white uppercase">
            Meet our
            <span className="text-[#007BFF]"> trainers</span>.
          </h1>
        </div>

        <div className="grid  md:grid-cols-3 grid-cols-1 gap-3 ">
          {trainers.map((trainer) => (
            <div
              key={trainer._id}
              className="bg-white bg-opacity-30 backdrop-blur-md duration-500 text-white rounded-lg p-2 border border-white space-y-4 flex flex-col"
            >
              <div className="h-[390px] w-full object-cover mb-4 rounded-lg m-auto">
                <img
                  src={trainer.images}
                  alt={trainer.name}
                  className="h-full w-full object-cover rounded-lg"
                />
              </div>
              <div className="p-4 flex-1">
                <h2 className="text-3xl font-bold text-white mb-2">
                  {trainer.name}
                </h2>
                <p className="text-white text-2xl mb-2 font-bold">
                  {trainer.experienceYears}+ years of experience
                </p>
                <p className="text-white mb-2">
                  <span className="font-bold">Specialties:</span>
                  <ul className="list-disc list-inside">
                    {trainer.specialties.map((specialty, index) => (
                      <li key={index} className="ml-2">
                        {specialty}
                      </li>
                    ))}
                  </ul>
                </p>
                <p className="text-white mb-2">
                  <span className="font-bold">Available Slots:</span>
                  <ul className="list-disc list-inside text-sm">
                    {trainer.slots.map((slot, index) => (
                      <li key={index} className="ml-2">
                        {slot.name} - {slot.time}
                      </li>
                    ))}
                  </ul>
                </p>
              </div>
              <div className="flex justify-between">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Book a Session
                </button>
                <div className=" flex text-xl gap-4 bg-white rounded-full items-center px-2">
                  <FaFacebook className="text-blue-600" />
                  <FaInstagram className="text-pink-600" />
                  <FaTwitter className="text-blue-600" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trainers;
