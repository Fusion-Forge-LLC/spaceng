"use client";

import {useQuery} from "@tanstack/react-query";

import api from "@/lib/http";
import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {GenericResponse} from "@/lib/generic-types";

const getUnreadCount = async () => {
  const {data} = await api.get<GenericResponse<{totalCount: number}[]>>(
    API_ENDPOINTS.CHAT.unreadMessages,
  );

  return data;
};

export function useGetUnreadCount() {
  return useQuery({
    queryKey: ["chat-peer"],
    queryFn: () => getUnreadCount(),
  });
}
