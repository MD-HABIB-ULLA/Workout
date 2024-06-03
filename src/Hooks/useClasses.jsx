import { useQuery } from "@tanstack/react-query";
import useAxiosPablic from "./useAxiosPpablic";
import { useState } from "react";

const useClasses = () => {
  window.scrollTo(0, 0);
 const axiosPublic = useAxiosPablic()
  const [page, setPage] = useState(1); // State to track the current page

  // Fetch data using useQuery hook with query parameters for pagination
  const { data: classes = [] } = useQuery({
    queryKey: ['classes', page], // Pass query key as an object
    queryFn: async () => {
      const res = await axiosPublic.get(`/classes?page=${page}`);
      return res.data;
    },
  });
  return [classes];
};

export default useClasses;
