import {useQuery} from "@tanstack/react-query";

import api from "@/lib/http";
import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {GenericResponse} from "@/lib/generic-types";
import {PropertyResponse} from "@/@types/types";

const getProperty = async (id: string) => {
  const {data} = await api.get<GenericResponse<PropertyResponse>>(
    API_ENDPOINTS.LISTING.details(id),
  );

  return data;
};

export function useGetProperty(id: string) {
  return useQuery({
    queryKey: ["property", id],
    queryFn: () => getProperty(id),
  });
}
