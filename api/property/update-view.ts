"use client";

import {useQuery} from "@tanstack/react-query";
import {useParams} from "next/navigation";

import api from "@/lib/http";
import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {GenericResponse} from "@/lib/generic-types";

const updateView = async (id: string) => {
  const {data} = await api.get<GenericResponse<null>>(API_ENDPOINTS.LISTING.updateView(id));

  return data;
};

export function useUpdateViews() {
  const params = useParams();
  const id = params.id as string;

  return useQuery({
    queryKey: ["property", "update-view", id],
    queryFn: () => updateView(id),
  });
}
