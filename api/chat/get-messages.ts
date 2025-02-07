"use client";

import {useQuery} from "@tanstack/react-query";

import api from "@/lib/http";
import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {GenericResponse} from "@/lib/generic-types";
import {Messages} from "@/@types/types";

const getMessages = async (id: string) => {
  const {data} = await api.get<GenericResponse<Messages[]>>(API_ENDPOINTS.CHAT.messages(id));

  return data;
};

export function useGetMessages(id: string) {
  return useQuery({
    queryKey: ["messages", id],
    queryFn: () => getMessages(id),
  });
}
