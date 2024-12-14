import {useQuery} from "@tanstack/react-query";

import api from "@/lib/http";
import {GenericResponse} from "@/lib/generic-types";
import {API_ENDPOINTS} from "@/lib/api-endpoints";

const getViews = async () => {
  const {data} = await api.get<GenericResponse<Response>>(API_ENDPOINTS.VIEWS.views);

  return data;
};

export function useGetViews() {
  return useQuery({
    queryKey: ["get-views"],
    queryFn: getViews,
  });
}

interface Response {
  recentCount: number;
  percentageChange: number;
  topDay: any;
}
