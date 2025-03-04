"use client";

import {useQuery} from "@tanstack/react-query";

import api from "@/lib/http";
import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {GenericResponse} from "@/lib/generic-types";
import {Messages} from "@/@types/types";

export type ChatList = {
  _id: string;
  data: {
    fullname: string;
    avatar: string;
    unread: number;
    snippet: Messages;
  };
};

const getChatList = async () => {
  const {data} = await api.get<GenericResponse<ChatList[]>>(API_ENDPOINTS.CHAT.getRoom);

  return data;
};

export function useGetChatList() {
  return useQuery({
    queryKey: ["chat-list"],
    queryFn: getChatList,
  });
}
