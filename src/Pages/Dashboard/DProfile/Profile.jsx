import Loading from "../../../Components/Loading/Loading";
import useAuth from "../../../Hooks/useAuth";

const Profile = () => {
  const { user, loading } = useAuth();
  const lastSignInTime = user.metadata.lastSignInTime; // Assuming this is in GMT

  const date = new Date(lastSignInTime);
  const utcTime = date.getTime();
  const bstOffset = 6 * 60 * 60 * 1000;
  const bstTime = new Date(utcTime + bstOffset);
  const year = bstTime.getFullYear();
  const month = String(bstTime.getMonth() + 1).padStart(2, "0");
  const day = String(bstTime.getDate()).padStart(2, "0");
  const dateOnly = `${year}-${month}-${day}`;

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex items-center justify-center  ">
          <div className="w-full max-w-sm bg-white border p-5 border-gray-200 rounded-lg shadow">
            <div className="flex flex-col items-center pb-10">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg ring-2"
                src={user.photoURL}
                alt="Bonnie image"
              />
              <h5 className="mb-1 text-2xl font-medium text-gray-900">
                {user.displayName}
              </h5>
              <h5 className="mb-1 text-xl font-medium text-gray-900">
                {user.email}
              </h5>
              <span className="text-sm text-gray-500">
                Last log in : {dateOnly}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
