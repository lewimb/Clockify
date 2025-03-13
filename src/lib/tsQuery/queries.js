import { useQuery, useMutation } from "@tanstack/react-query";
import { createNewUser, fetchActivityById } from "../../api/api";
import EmailVerification from "../../utils/emailFunction";
import { ACTIVITY_KEY } from "./keys";

const useGetActivityById = (id) => {
  return useQuery({
    queryKey: [ACTIVITY_KEY, id],
    queryFn: () => fetchActivityById(id),
  });
};

const useRegisterUser = () => {
  return useMutation({
    mutationFn: ({ email, password }) => createNewUser({ email, password }),
  });
};

const useEmailVerification = () => {
  return useQuery({
    queryKey: ["email"],
    queryFn: EmailVerification,
  });
};

export { useGetActivityById, useRegisterUser, useEmailVerification };
