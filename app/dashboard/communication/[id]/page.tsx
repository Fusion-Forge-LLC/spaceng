"use client";

import {SendHorizonal} from "lucide-react";
import React, {FormEvent, useEffect, useRef, useState} from "react";

import socket from "@/socket";
import {Input} from "@/components/ui/input";
import {useGetMessages} from "@/api/chat/get-messages";
import {Messages} from "@/@types/types";
import Loader from "@/components/loader/loader";
import {useGetChatPeer} from "@/api/chat/get-chat-peer";

import MessageBox from "../../(others)/_components/chat/messageBox";

function Page({params}: {params: {id: string}}) {
  const messageRef = useRef<HTMLInputElement>(null);
  const {data, isLoading} = useGetMessages(params.id);
  const {data: peerData, isLoading: peerLoading} = useGetChatPeer(params.id);
  const [messages, setMessages] = useState<Messages[]>([]);

  useEffect(() => {
    socket.emit("join-room", params.id);
    socket.on("message", (data) => {
      setMessages((prevState) => [...prevState, data]);
    });
  }, []);

  useEffect(() => {
    if (data) setMessages(data.data);
  }, [data]);

  const sendMessage = (e: FormEvent) => {
    e.preventDefault();
    socket.emit("message", {
      roomId: params.id,
      message: messageRef.current?.value,
      creatorRole: "business",
    });
    if (messageRef.current) messageRef.current.value = "";
  };

  return (
    <section className="flex-1 px-4 overflow-hidden flex flex-col h-full gap-3 pb-1 bg-grey-100/20">
      <div className="flex-1 overflow-y-scroll no-scrollbar pt-2">
        {isLoading ? (
          <div className="h-full grid place-content-center">
            <Loader />
          </div>
        ) : (
          <MessageBox messages={messages} peerData={peerData?.data} />
        )}
      </div>
      <form className="relative" onSubmit={sendMessage}>
        <Input
          ref={messageRef}
          className="h-14 p-4 rounded-xl border-[#77787D] bg-white focus-visible:ring-blue"
          placeholder="Message"
        />
        <button className="absolute top-1/2 -translate-y-1/2 right-4 hover:scale-105 transition-all">
          <SendHorizonal color="#205BF3" />
        </button>
      </form>
    </section>
  );
}

export default Page;
