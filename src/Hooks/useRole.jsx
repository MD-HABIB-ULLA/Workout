import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: role, isPending: isRoleLoading } = useQuery({
    queryKey: [user?.email, "userRole"],
    enabled: !loading,
    queryFn: async () => {
      if (!user?.email) {
        return null;
      }
      const res = await axiosSecure.get(`/users/role/${user.email}`);
      return res.data?.role;
    },
  });

  const isAdmin = role === "admin";
  const isTrainer = role === "trainer";

  return [isAdmin, isTrainer, isRoleLoading, role];
};

export default useRole;
