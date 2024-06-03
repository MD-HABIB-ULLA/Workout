import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import Swiper modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Review = () => {
  const reviews = [
    {
      title: "Gym coach",
      image:
        "https://powerlift.qodeinteractive.com/elementor/wp-content/uploads/2019/06/testimonials-img-2.jpg",
      name: "Elijah Shelton",
      review:
        "Elijah has been an amazing coach, helping me to achieve my fitness goals with personalized training plans and constant motivation.",
    },
    {
      title: "Yoga Instructor",
      image:
        "https://www.theptdc.com/wp-content/uploads/2019/01/Profile_Feature.png",
      name: "Ava Brooks",
      review:
        "Ava's yoga sessions are the perfect blend of physical challenge and mental relaxation. Her expertise and calm demeanor make every class enjoyable.",
    },
    {
      title: "Nutritionist",
      image:
        "https://lh5.googleusercontent.com/proxy/-h6uM_YNCpPy-HE9xJE07UK92urJiUUqFY7TqNx7sS6oVtV_J_aCBUdu1y3B1TfKzMJlSYzel7E7sTfp0kGZHrnwsbA1OFSa6HOWtf9D5nwdASb0f_AG_ob9FVObdG_h7fQA03w",
      name: "Liam Johnson",
      review:
        "Liam provided me with a detailed and sustainable nutrition plan that has significantly improved my health and energy levels.",
    },
    {
      title: "Personal Trainer",
      image:
        "https://powerlift.qodeinteractive.com/elementor/wp-content/uploads/2019/06/testimonials-img-2.jpg",
      name: "Olivia Smith",
      review:
        "Olivia's personal training sessions are incredibly effective. She tailors workouts to my needs and pushes me to reach new heights.",
    },
  ];

  return (
    <div>
      <div className="container text-center m-auto mt-10 md:mt-28 relative">
        <h1 className="lg:block hidden  uppercase text-9xl mt-0 absolute -rotate-90 -right-60 outline-text-gym top-36">
          REVIEWS
        </h1>
        <div>
          <h1 className="lg:text-6xl md:text-5xl text-2xl text-center text-black">
            <span className="text-[#007BFF]">REVIEWS</span> FROM <br />
            OUR CLIENT
          </h1>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={() => ""}
        >
          {reviews.map((review) => (
            <SwiperSlide
              key={review.name}
              className="md:p-20 py-10 px-5 space-y-6"
            >
              <div className="flex justify-center">
                <img
                  src={review.image}
                  className="avatar rounded-full h-20 w-20"
                  
                  alt={review.name}
                />
              </div>
              <div className="text-black">
                <p>{review.title}</p>
                <h1>{review.name}</h1>
              </div>
              <div className=" text-black headline1 font-thin text-xl">
                {review.review}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
