import { useQuery } from "@tanstack/react-query";
import useAxiosPablic from "../../Hooks/useAxiosPpablic";
import useAuth from "../../Hooks/useAuth";

const PaymentPage = () => {
  const axiosPublic = useAxiosPablic();
  const {user} = useAuth();
  const email = user.email
  console.log(email)
  const { data: paymentData = [], isLoading } = useQuery({
    queryKey: ["userPaymetData", email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/booking/${email}`);
      return res.data;
    },
  });
  console.log(paymentData)
  return <div></div>;
};

export default PaymentPage;
