import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Link } from "react-router-dom";

const CarouselBanner = () => {
  return (
    <div className="">
      <h1 className="lg:block hidden  uppercase text-6xl mt-0 absolute rotate-90 -right-20 outline-text-gym top-1/2 z-2">
        workout
      </h1>
      <Carousel
        className=""
        showThumbs={false}
        showArrows={true}
        autoPlay="true"
        infiniteLoop="true"
      >
        <div
          className="lg:h-screen relative  bg-top bg-cover "
          style={{
            backgroundImage:
              "url(https://i.ibb.co/qRdnCyp/background-image.png)",
          }}
        >
          <h1 className="lg:block hidden  uppercase text-6xl mt-0 absolute rotate-90 -right-20 outline-text-gym top-1/2  -z-30">
            workout
          </h1>
          <div className="h-full pt-16 ">
            <div className="h-full   flex items-center   py-5">
              <div className="my-auto   bg-opacity-50   text-center space-y-5  mx-auto">
                <div className="max-w-7xl m-auto w-full     space-y-5 lg:p-0 md:p-10 p-5">
                  <h1 className="text-white text-center lg:text-7xl md:text-2xl text-2xl z-[10px]  ">
                    DISCOVER THE HIDDEN ALTER <br />{" "}
                    <span className="outline-text">EGO OF YOUR BODY</span>{" "}
                  </h1>
                  <div className="text-white m-auto text-center w-[60%] md:block hidden ">
                    {" "}
                    Welcome to workout, where the night is not just for sleep;
                    it's for sweat, strength, and self-discovery. Step into our
                    world of after-hours fitness, where the neon lights guide
                    your path to greatness.{" "}
                  </div>
                  <div>
                    <Link to={"/classes"}>
                      <button className=" px-4 p-2 rounded-full border bg-[#007BFF] font-bold border-[#007BFF] bt text-white hover:bg-transparent hover:text-[#007BFF] duration-500">
                        {" "}
                        Join Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div
          className=" h-full bg-center bg-cover"
          style={{
            backgroundImage: "url(https://i.ibb.co/gw55gCX/hero.jpg)",
          }}
        >
          <div className="h-full bg-black bg-opacity-50 flex items-start  text-center">
            {" "}
            <div className="max-w-7xl m-auto w-full flex flex-col   lg:p-0 md:p-10 p-5 space-y-5">
              <h1 className="text-white text-center lg:text-7xl md:text-2xl  uppercase text-2xl    ">
                Train Like a Beast Look <br />{" "}
                <span className="outline-text">Like a Beauty</span>
              </h1>
              <div className="text-white w-[70%] m-auto text-center md:block hidden">
                {" "}
                Welcome to workout, where the night is not just for sleep; it's
                for sweat, strength, and self-discovery. Step into our world of
                after-hours fitness, where the neon lights guide your path to
                greatness.{" "}
              </div>
              <div>
                <button className=" px-4 p-2 rounded-full border bg-[#007BFF] font-bold border-[#007BFF] bt text-white hover:bg-transparent hover:text-[#007BFF] duration-500">
                  {" "}
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className=" h-full bg-center bg-cover"
          style={{
            backgroundImage: "url(https://i.ibb.co/bbHTGYd/footer-bg.jpg)",
          }}
        >
          <div className="h-full bg-black bg-opacity-50 flex items-start  text-center">
            {" "}
            <div className="max-w-7xl m-auto w-full   lg:p-0 md:p-10 p-5 space-y-5">
              <h1 className=" text-center text-white lg:text-7xl md:text-2xl text-2xl uppercase    ">
                Train Like a Beast Look <br />{" "}
                <span className="outline-text"> Like a Beauty</span>
              </h1>
              <div className="text-white w-[70%] m-auto text-center md:block hidden">
                {" "}
                Welcome to workout, where the night is not just for sleep; it's
                for sweat, strength, and self-discovery. Step into our world of
                after-hours fitness, where the neon lights guide your path to
                greatness.{" "}
              </div>
              <div>
                <button className=" px-4 p-2 rounded-full border bg-[#007BFF] font-bold border-[#007BFF] bt text-white hover:bg-transparent hover:text-[#007BFF] duration-500">
                  {" "}
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </Carousel>
    </div>
  );
};

export default CarouselBanner;
