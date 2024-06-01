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
  return (
    <div>
      <div className="container text-center m-auto mt-10 md:mt-28 relative">
        <h1 className="lg:block hidden  uppercase text-9xl mt-0 absolute -rotate-90 -right-60 outline-text-gym top-36">
        REVIEWS
        </h1>
        <div>
          <h1 className="lg:text-6xl md:text-5xl text-2xl text-center text-black">
            <span className="text-[#007BFF]">REVIEWS</span> FROM <br />STUDENTS
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
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className="md:p-20 py-10 px-5 space-y-6">
            <div className="flex justify-center">
              <img
                src="https://powerlift.qodeinteractive.com/elementor/wp-content/uploads/2019/06/testimonials-img-2.jpg"
                className="avatar rounded-full h-20 "
                alt=""
              />
            </div>
            <div className="text-black">
              <p>Gym coach</p>
              <h1>Elijah Shelton</h1>
            </div>
            <div className=" text-base text-black headline">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
              velit fugit voluptatum ullam unde molestias et saepe eius
              doloremque nisi commodi mollitia aut reprehenderit voluptatem
              ratione, dignissimos assumenda. Placeat repudiandae, eligendi quae
              iure, quas inventore ad corporis est perspiciatis tenetur corrupti
              odit obcaecati eaque id illo sed, laboriosam cum labore.
            </div>
          </SwiperSlide>
          <SwiperSlide className="md:p-20 py-10 px-5 space-y-6">
            <div className="flex justify-center">
              <img
                src="https://powerlift.qodeinteractive.com/elementor/wp-content/uploads/2019/06/testimonials-img-2.jpg"
                className="avatar rounded-full h-20"
                alt=""
              />
            </div>
            <div className="text-black">
              <p>Gym coach</p>
              <h1>Elijah Shelton</h1>
            </div>
            <div className=" text-base text-black headline">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
              velit fugit voluptatum ullam unde molestias et saepe eius
              doloremque nisi commodi mollitia aut reprehenderit voluptatem
              ratione, dignissimos assumenda. Placeat repudiandae, eligendi quae
              iure, quas inventore ad corporis est perspiciatis tenetur corrupti
              odit obcaecati eaque id illo sed, laboriosam cum labore.
            </div>
          </SwiperSlide>
          <SwiperSlide className="md:p-20 py-10 px-5 space-y-6">
            <div className="flex justify-center">
              <img
                src="https://powerlift.qodeinteractive.com/elementor/wp-content/uploads/2019/06/testimonials-img-2.jpg"
                className="avatar rounded-full h-20"
                alt=""
              />
            </div>
            <div className="text-black">
              <p>Gym coach</p>
              <h1>Elijah Shelton</h1>
            </div>
            <div className=" text-base text-black headline">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
              velit fugit voluptatum ullam unde molestias et saepe eius
              doloremque nisi commodi mollitia aut reprehenderit voluptatem
              ratione, dignissimos assumenda. Placeat repudiandae, eligendi quae
              iure, quas inventore ad corporis est perspiciatis tenetur corrupti
              odit obcaecati eaque id illo sed, laboriosam cum labore.
            </div>
          </SwiperSlide>
          <SwiperSlide className="md:p-20 py-10 px-5 space-y-6">
            <div className="flex justify-center">
              <img
                src="https://powerlift.qodeinteractive.com/elementor/wp-content/uploads/2019/06/testimonials-img-2.jpg"
                className="avatar rounded-full h-20"
                alt=""
              />
            </div>
            <div className="text-black">
              <p>Gym coach</p>
              <h1>Elijah Shelton</h1>
            </div>
            <div className=" text-base text-black headline">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
              velit fugit voluptatum ullam unde molestias et saepe eius
              doloremque nisi commodi mollitia aut reprehenderit voluptatem
              ratione, dignissimos assumenda. Placeat repudiandae, eligendi quae
              iure, quas inventore ad corporis est perspiciatis tenetur corrupti
              odit obcaecati eaque id illo sed, laboriosam cum labore.
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
