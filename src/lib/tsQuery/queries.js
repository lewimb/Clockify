import { useQuery } from "@tanstack/react-query";
import { fetchActivityById } from "../../api/api";
import { ACTIVITY_KEY } from "./keys";

const useGetActivityById = (id) => {
  return useQuery({
    queryKey: [ACTIVITY_KEY, id],
    queryFn: () => fetchActivityById(id),
  });
};

export { useGetActivityById };
