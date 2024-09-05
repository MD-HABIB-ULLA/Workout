import FeaturedCard from "./FeaturedCard";

const Featured = () => {
  
  const features = [
    {
      image: "https://i.ibb.co/6NdDpWb/fitness.png",
      title: "Personalized Workouts",
      description:
        "Get tailored workout plans designed specifically for your fitness goals and preferences.",
    },
    {
      image: "https://i.ibb.co/HKTtHbL/dumbbell.png",
      title: "Heart Rate Monitoring",
      description:
        "Track your heart rate in real-time during workouts to optimize your performance and health.",
    },
    {
      image: "https://i.ibb.co/hF2dhM4/empowerment.png",
      title: "Community Support",
      description:
        "Join a supportive community of fellow fitness enthusiasts for motivation and accountability.",
    },
    {
      image: "https://i.ibb.co/2n1smn6/running.png",
      title: "Progress Tracking",
      description:
        "Monitor your progress over time with detailed insights and performance analytics.",
    },
    {
      image: "https://i.ibb.co/mh7VjZC/fitness-tracker.png",
      title: "Flexible Scheduling",
      description:
        "Book classes and training sessions at your convenience with our flexible scheduling system.",
    },
    {
      image: "https://i.ibb.co/jV3Bx9t/trainer.png",
      title: "Expert Trainers",
      description:
        "Train with certified fitness professionals who are dedicated to helping you reach your goals.",
    },
  ];

  return (
    <div >
      <div className="relative lg:py-28 md:py-16 py-10 w-full space-y-4 max-w-7xl m-auto px-5">
        <h1 className="lg:block hidden  uppercase text-7xl mt-0  absolute -left-0 outline-text-gym bottom-0 opacity-30">
          Features
        </h1>
        <h1 className="lg:text-6xl md:text-5xl text-2xl text-center text-black uppercase">
          Explore Our <br /> Top{" "}
          <span className="text-[#007BFF]">Features</span>
        </h1>
        <p className="text-center opacity-60 md:text-base text-sm md:px-20">
          Discover the exceptional features that make our gym stand out. Each
          card below highlights a key aspect of our services designed to enhance
          your fitness journey.
        </p>
      </div>
      <div
        style={{
          backgroundImage:
            "url(https://demo3.eightheme.com/hercules/wp-content/uploads/sites/11/2022/04/athletic-man-with-a-naked-torso-is-doing-exercises-2023-11-27-05-27-44-utc.jpg)",
        }}
        className="bg-center bg-cover gap-10 p-10 bg-fixed"
      >
     <div className="grid grid-cols-1 gap-3 md:grid-cols-2 max-w-7xl px-5 md:px-10 m-auto lg:grid-cols-3  ">
     {features.map((feature) => (
          <div key={feature.title}>
            <FeaturedCard
              image={feature.image}
              title={feature.title}
              featureDes={feature.description}
            />
          </div>
        ))}
     </div>
      </div>
    </div>
  );
};

export default Featured;
