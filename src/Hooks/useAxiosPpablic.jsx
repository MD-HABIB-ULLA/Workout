import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "http://localhost:4000",
});

const useAxiosPablic = () => {
  return axiosPublic;
};

export default useAxiosPablic;
