"use client";

import {useQuery} from "@tanstack/react-query";

import api from "@/lib/http";
import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {GenericResponse} from "@/lib/generic-types";

export type PeerResponse = {
  fullname: string;
  avatar: string;
  _id: string;
};

const getChatPeer = async (id: string) => {
  const {data} = await api.get<GenericResponse<PeerResponse[]>>(API_ENDPOINTS.CHAT.chatPeer(id));

  return data;
};

export function useGetChatPeer(id: string) {
  return useQuery({
    queryKey: ["chat-peer"],
    queryFn: () => getChatPeer(id),
  });
}
