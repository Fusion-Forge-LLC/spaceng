import {useQuery} from "@tanstack/react-query";

import api from "@/lib/http";
import {GenericResponse} from "@/lib/generic-types";
import {API_ENDPOINTS} from "@/lib/api-endpoints";

type Response = {
  _id: string;
  other_rentals: {
    first_name: string;
    last_name: string;
    date_of_birth: string;
    gender: string;
    _id: string;
    __v: 0;
  }[];
};

const getOtherRentals = async () => {
  const {data} = await api.get<GenericResponse<Response>>(API_ENDPOINTS.OTHER_RENTALS.add);

  return data;
};

export function useGetOtherRentals() {
  return useQuery({
    queryKey: ["get-rentals"],
    queryFn: getOtherRentals,
  });
}
