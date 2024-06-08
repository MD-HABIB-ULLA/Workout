import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Loading from "../../../Components/Loading/Loading";
import { FaTrash } from "react-icons/fa6";

const DTrainers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: TrainersData = [], isLoading } = useQuery({
        queryKey: ["TrainersData"],
        queryFn: async () => {
        const res = await axiosSecure.get("/trainers");
        return res.data;
        },
    });
  const handleDelete = (id) => {
    console.log(id);
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-[#007BFF] rounded-lg text-white">
          <thead>
            <tr className="">
              <th className="  py-2 px-4 border-b border-gray-200 text-left">
                Image
              </th>
              <th className="py-2 px-4 border-b border-gray-200 text-left">
                Name
              </th>
              <th className="py-2 px-4 border-b border-gray-200 text-left">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <Loading />
            ) : (
              TrainersData.map((trainer) => (
                <tr key={trainer._id} className="bg-[#141414]">
                  <td className="py-2 px-4 border-b border-gray-200">
                    <img
                      src={trainer.images}
                      className="h-14 rounded-full"
                      alt=""
                    />
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {trainer.name}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {" "}
                    <button
                      onClick={() => handleDelete(trainer._id)}
                      className=" bg-rose-600 px-2 rounded-full py-2"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DTrainers;
