"use client";

import {useQuery} from "@tanstack/react-query";

import api from "@/lib/http";
import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {GenericResponse} from "@/lib/generic-types";
import {ReviewTypes} from "@/@types/types";

const getRatings = async (id: string) => {
  const {data} = await api.get<GenericResponse<ReviewTypes[]>>(API_ENDPOINTS.RATING.lists(id));

  return data;
};

export function useGetRatings(id: string) {
  return useQuery({
    queryKey: ["property", id],
    queryFn: () => getRatings(id),
  });
}
