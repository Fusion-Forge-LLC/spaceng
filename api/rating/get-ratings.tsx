"use client";

import {useQuery} from "@tanstack/react-query";

import api from "@/lib/http";
import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {GenericResponse} from "@/lib/generic-types";
import {ReviewTypes} from "@/@types/types";

type Response = {
  title: string;
  reviews: ReviewTypes[];
};

const getRatings = async (id: string) => {
  const {data} = await api.get<GenericResponse<Response>>(API_ENDPOINTS.RATING.lists(id));

  return data;
};

export function useGetRatings(id: string) {
  return useQuery({
    queryKey: ["property-review", id],
    queryFn: () => getRatings(id),
  });
}
