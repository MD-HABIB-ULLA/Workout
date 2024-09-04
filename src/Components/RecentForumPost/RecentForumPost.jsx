import Loading from "react-loading";
import useAxiosPablic from "../../Hooks/useAxiosPpablic";
import { useQuery } from "@tanstack/react-query";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const RecentForumPost = () => {
  const axiosPublic = useAxiosPablic();
  const { data: forumpostHome = [], isLoading } = useQuery({
    queryKey: ["forumpostHome"], // Pass query key as an object
    queryFn: async () => {
      const res = await axiosPublic.get(`/forumpostHome`);
      return res.data;
    },
  });
  console.log(forumpostHome);
  const handleBtn = (text) => {
    toast.success(text);
  };
  return (
    <div
      className="  bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "url(https://technext.github.io/crossfits/images/hero_bg_2.jpg)",
      }}
    >
      <div className="relative py-10 w-full space-y-4 max-w-7xl m-auto px-5 md:px-10">
        <h1 className="lg:block hidden  uppercase text-7xl mt-0  absolute -left-0 outline-text-gym bottom-0 opacity-30">
          Features
        </h1>
        <h1 className="lg:text-6xl md:text-5xl text-2xl text-center text-white uppercase">
          Explore Our <br /> Recent{" "}
          <span className="text-[#007BFF]">Forum post</span>
        </h1>
        <p className="text-center text-white  text-xl md:px-20">
        This component elegantly presents forum posts, intelligently truncating lengthy content while preserving readability. By condensing extensive posts to a digestible length and appending an ellipsis for extended text, it maintains a visually appealing interface. 
        </p>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className=" md:px-10 pb-10 grid md:grid-cols-2 grid-cols-1 px-5 max-w-7xl m-auto">
          {forumpostHome.map((post) => (
          <Link to={"/community"}  key={post._id}>  <div
         
          className="max-w-lg mx-auto mt-8 border-white border rounded-lg border-opacity-15 bg-black bg-opacity-10 backdrop-blur-md duration-500 text-white"
        >
          <div className="  text-whiterounded-md p-4 mb-4">
            <p className="">
              {post.text.length > 300
                ? post.text.slice(0, 300) + "..."
                : post.text}
            </p>
            <div className="mt-2 flex justify-between items-center">
              <div className="flex gap-4">
                <img
                  src={post.user.photoURL}
                  className="h-14 rounded-full"
                  alt=""
                />
                <div>
                  <h1>{post.user.displayName}</h1>
                  <p>{post.role}</p>
                </div>
              </div>
              <div className=" flex gap-5    ">
                <button
                  onClick={() => handleBtn("Up vote")}
                  className=" p-2 px-4 border rounded-full bg-[#007BFF] font-bold border-[#007BFF] bt text-white hover:bg-transparent hover:text-[#007BFF] duration-500"
                >
                  <FaArrowUp />
                </button>
                <button
                  onClick={() => handleBtn("Dowon vote")}
                  className="p-2 px-4 border rounded-full bg-[#ff0000] font-bold border-[#ff0000] bt text-white hover:bg-transparent hover:text-[#ff0000] duration-500"
                >
                  <FaArrowDown />
                </button>
              </div>
            </div>
          </div>
        </div></Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentForumPost;
