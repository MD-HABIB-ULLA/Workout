import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://gym-server-pi.vercel.app",
});

const useAxiosPablic = () => {
  return axiosPublic;
};

export default useAxiosPablic;
