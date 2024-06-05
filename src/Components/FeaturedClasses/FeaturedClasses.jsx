import { Link } from "react-router-dom";
import useClasses from "../../Hooks/useClasses";

const FeaturedClasses = () => {
  const [classes] = useClasses();
  const classesData = classes.slice(0, 6);
  console.log(classesData);

  return (
    <div className="container m-auto lg:pt-20">
      <div className="relative  w-full space-y-4 mb-10 ">
        <h1 className="lg:text-6xl md:text-5xl text-2xl text-center text-black uppercase">
          Feature
          <span className="text-[#007BFF]"> classes</span>
        </h1>
        <p className="text-center opacity-60 text-xl ">
          Explore a diverse range of classes meticulously crafted to cater to
          every fitness goal and preference. From high-intensity workouts like
          HIIT and CrossFit, aimed at pushing your limits and maximizing calorie
          burn, to mindful practices like Yoga and Meditation.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {classesData.map((classItem) => (
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
    </div>
  );
};

export default FeaturedClasses;
