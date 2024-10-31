import {useQuery} from "@tanstack/react-query";

import api from "@/lib/http";
import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {GenericResponse} from "@/lib/generic-types";

const getUserProperties = async () => {
  const {data} = await api.get<GenericResponse<PropertyResponse[]>>(
    API_ENDPOINTS.PROPERTY.properties,
  );

  return data;
};

export function useGetBusinessProperties() {
  return useQuery({
    queryKey: ["get-user-properties"],
    queryFn: getUserProperties,
  });
}

export interface PropertyResponse {
  price: number;
  gallery: string[];
  property_title: string;
  _id: string;
  price_postfix: string;
  property_address: {
    address: string;
    location: string;
    neighborhood: string;
  };
  status: "Active" | "Pending Approval" | "Inactive";
}
