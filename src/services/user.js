import { useQuery } from "@tanstack/react-query";
import api from "../configs/api";



const useGetUser = () => {
    const queryFn = () => api.get("/user/profile");
    const queryKey = ["user"];
    const { data, error, isPending , refetch } = useQuery({
      queryKey,
      queryFn,
    });
  
    return { data, error, isPending ,refetch};
  };
export {  useGetUser};

