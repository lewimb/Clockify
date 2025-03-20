import { useQuery, useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import {
  createNewUser,
  getAllActivities,
  getActivityById,
  insertActivity,
  deleteActivity,
  forgetPassword,
  resetPasword,
  getSortActivities,
  verifyEmail,
} from "../../api/api";
import EmailVerification from "../../pages/EmailPage";
import { ACTIVITY_KEY } from "./keys";
import useAuth from "../../hooks/useAuth";

// User tanstack
const useRegisterUser = () => {
  return useMutation({
    mutationFn: ({ email, password, confirmPassword }) =>
      createNewUser({ email, password, confirmPassword }),
  });
};

const useForgetPassword = () => {
  return useMutation({
    mutationFn: (email) => forgetPassword(email),
  });
};

const useResetPassword = () => {
  return useMutation({
    mutationFn: (value) => resetPasword(value),
  });
};

const useVerifyEmail = () => {
  return useMutation({
    mutationFn: (emailToken) => verifyEmail(emailToken),
  });
};

// Activities tanstack
const useGetActivities = () => {
  const { token } = useAuth();
  return useQuery({
    queryKey: [ACTIVITY_KEY, token],
    queryFn: () => getAllActivities(token),
  });
};

const useGetSortActivities = () => {
  const { token } = useAuth();
  return useMutation({
    mutationFn: (params) => getSortActivities(params, token),
  });
};

const useGetActivityById = (uuid) => {
  const { token } = useAuth();
  return useQuery({
    queryKey: [ACTIVITY_KEY, uuid],
    queryFn: () => getActivityById(uuid, token),
    enabled: !!uuid,
  });
};

const useInsertActivity = () => {
  const { token } = useAuth();
  return useMutation({
    mutationFn: (values) => insertActivity(values, token),
  });
};

const useDeleteActivity = () => {
  const queryClient = useQueryClient();
  const { token } = useAuth();
  return useMutation({
    mutationFn: (uuid) => deleteActivity(uuid, token),
    onSuccess: () => {
      queryClient.invalidateQueries([ACTIVITY_KEY]); // Correctly call the function
    },
  });
};

const useEmailVerification = () => {
  return useQuery({
    queryKey: ["email"],
    queryFn: EmailVerification,
  });
};

export {
  useGetActivities,
  useGetActivityById,
  useRegisterUser,
  useGetSortActivities,
  useEmailVerification,
  useInsertActivity,
  useDeleteActivity,
  useForgetPassword,
  useResetPassword,
  useVerifyEmail,
};
