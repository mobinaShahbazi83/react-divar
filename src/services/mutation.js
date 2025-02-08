import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../configs/api";
import { setCookie } from "../utils/cookie";

const useSendOtp = () => {
  const mutationFn = (data) => api.post("auth/send-otp", data);

  return useMutation({ mutationFn });
};
const useCheckOtp = () => {
    const queryClient = useQueryClient();
    const mutationFn = (data) => api.post("auth/check-otp", data);
  
    return useMutation({
      mutationFn,
      onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ["profile"] });
      },
      onError: (error) => {
        console.error("Error checking OTP:", error);
      },
    });
  };

  export {useCheckOtp , useSendOtp}