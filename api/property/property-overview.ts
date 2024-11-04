import {useQuery} from "@tanstack/react-query";

import api from "@/lib/http";
import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {GenericResponse} from "@/lib/generic-types";

const getBusinessDashboard = async () => {
  const {data} = await api.get<GenericResponse<PropertyResponse[]>>(
    API_ENDPOINTS.PROPERTY.overview,
  );

  return data;
};

export function useGetBusinessDashboard() {
  return useQuery({
    queryKey: ["get-business-dashboard"],
    queryFn: getBusinessDashboard,
  });
}

export interface PropertyResponse {
  views: number;
  gallery: string[];
  property_title: string;
  _id: string;
  reviews: any[];
  type: string;
}
