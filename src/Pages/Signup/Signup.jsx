import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div
      style={{
        backgroundImage:
          "Url(https://fitflex.axiomthemes.com/wp-content/uploads/2023/11/185_2-3-copyright.jpg)",
      }}
      className="bg-cover bg-center min-h-screen p-10 "
    >
      <div className="md:flex h-full w-full justify-end lg:pr-36 container m-auto ">
        <div className="">
          <section className="">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <div className="md:w-[40vw] w-full bg-black bg-opacity-40 backdrop-blur-md duration-500 text-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
                    Sign up now
                  </h1>
                  <form className="space-y-4 md:space-y-6" action="#">
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-white"
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="name@company.com"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-white"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full text-white font-bold bg-[#007BFF] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 headline1  rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      Sign in
                    </button>
                  </form>
                  <div className="flex flex-col w-full ">
                    <div className="divider ">OR</div>
                    <div className="flex justify-center ">
                      {" "}
                      <div className="bg-white rounded-full p-1 flex gap-1 text-black items-center pr-3">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjzC2JyZDZ_RaWf0qp11K0lcvB6b6kYNMoqtZAQ9hiPZ4cTIOB"
                          alt=""
                          className="h-10 rounded-full "
                        />
                        <p className="font-bold">Google</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-sm font-light text-white">
                    Already have an account yet?
                    <Link
                      to={"/login"}
                      className="font-medium text-info ml-1 hover:underline"
                    >
                      Login
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Signup;
