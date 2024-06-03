import useClasses from "../../Hooks/useClasses";

const Classes = () => {
  const [classes] = useClasses();
  window.scrollTo(0, 0);
  return (
    <div className="min-h-screen pt-20 bg-[#141414]">
      <div className="container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                    classItem.trainers
                      .slice(0, 5)
                      .map((trainer) => (
                        <img
                          key={trainer.image}
                          src={trainer.image}
                          alt={trainer.name}
                          className="h-10 w-10 rounded-full border-2 "
                        />
                      ))
                  ) : classItem.trainers.length > 0 ? (
                    classItem.trainers.map((trainer) => (
                      <img
                        key={trainer.image}
                        src={trainer.image}
                        alt={trainer.name}
                        className="h-10 w-10 rounded-full border-2 ring-2 "
                      />
                    ))
                  ) : (
                    <p className="text-black">No trainers available</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Classes;
