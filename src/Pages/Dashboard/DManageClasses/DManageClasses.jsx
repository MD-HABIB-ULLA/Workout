
import Loading from "../../../Components/Loading/Loading";
import { Link } from "react-router-dom";
import UserTrainerIndividualData from "../../../Hooks/UserTrainerIndividualData";

const DManageClasses = () => {
  const [trainerIndividualData , isLoading] = UserTrainerIndividualData()

  console.log(trainerIndividualData.slots);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : trainerIndividualData.slots.length === 0 ? (
        <div>
          <h2 className="text-4xl text-center h-full font-semibold mb-4 pt-20 text-white capitalize">
            no Session available
          </h2>
          <div className="text-center">
            <Link to={"/dashboard/addSession"}>
              <button className="px-4 py-2 rounded-full border bg-[#007BFF] font-bold border-[#007BFF] text-white hover:bg-transparent hover:text-[#007BFF] duration-500">
                add Session now
              </button>
            </Link>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default DManageClasses;
