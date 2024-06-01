const Trainer = () => {
  return (
    <div className="bg-[#141414] md:pb-32 pb-10">
      <div>
        <div className="relative lg:py-28 md:py-16 py-10 w-full space-y-4">
          <h1 className="lg:block hidden  uppercase text-8xl -mt-10 absolute -rotate-90 -left-28 outline-text-gym top-1/2">
            EXPERT
          </h1>
          <h1 className="lg:text-6xl md:text-5xl text-2xl text-center text-white uppercase">
            TEAM OF <span className="text-[#007BFF]">EXPERT</span>
            <br /> Trainer
          </h1>
          <p className="text-center opacity-60 text-white text-xl">
            Sed ut perspiciatis unde omnis iste natus error sit <br />
            voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 p-5
         md:p-0 max-w-6xl m-auto pb-20 gap-5 container  ">
          <div className=" relative ">
            <div className=" pr-20 image-list-item  overflow-hidden">
              <img
                src="https://powerlift.qodeinteractive.com/elementor/wp-content/uploads/2019/06/h1-team-img-1.jpg"
                alt=""
                className="image "
              />
            </div>
            <div className="  bg-black absolute top-1 right-20">
              <div className="rotate-90 absolute -left-24 top-[102px] headline1 w-64">
                <p className=" text-base text-white">CROSSFIT COACH</p>
                <p className="text-xl tracking-widest font-bold  text-white ">
                  {" "}
                  MATIE SIMMS JUNIOR
                </p>
              </div>
            </div>
          </div>
          <div className=" relative">
            <div className=" pr-20 image-list-item  overflow-hidden">
              <img
                src="https://powerlift.qodeinteractive.com/elementor/wp-content/uploads/2019/06/h1-team-img-3.jpg"
                alt=""
                className="image"
              />
            </div>
            <div className="  bg-black absolute top-1 right-20">
              <div className="rotate-90 absolute -left-24 top-[102px] headline1 w-64">
                <p className=" text-base text-white">BODYBUILDING COACH</p>
                <p className="text-xl tracking-widest font-bold  text-white ">
                  {" "}
                  JOSHUA FRANKLIN
                </p>
              </div>
            </div>
          </div>
          <div className=" relative">
            <div className=" pr-20 image-list-item  overflow-hidden">
              <img
                src="https://powerlift.qodeinteractive.com/elementor/wp-content/uploads/2019/06/h1-team-img-2.jpg"
                alt=""
                className=" image "
              />
            </div>
            <div className="  bg-black absolute top-1 right-20">
              <div className="rotate-90 absolute -left-24 top-[102px] headline1 w-64">
                <p className=" text-base text-white font-extralight">CARDIO & CONDITIONING</p>
                <p className="text-xl tracking-widest font-bold  text-white ">
                  {" "}
                  MADISON FRONING
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trainer;
