import {SendHorizonal} from "lucide-react";
import React, {FormEvent, useEffect, useRef, useState} from "react";

import {Input} from "@/components/ui/input";
import socket from "@/socket";
import {useGetMessages} from "@/api/chat/get-messages";
import Loader from "@/components/loader/loader";
import {Messages} from "@/@types/types";

import MessageArea from "./message-area";
import ChatHead from "./chat-head";

function ChatBox({roomId}: {roomId: string}) {
  const {data, isLoading} = useGetMessages(roomId);
  const [messages, setMessages] = useState<Messages[]>([]);
  const messageRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (data) setMessages(data.data);
  }, [data]);

  useEffect(() => {
    socket.on("message", (data) => {
      setMessages((prevState) => [...prevState, data]);
    });
  }, []);

  const sendMessage = (e: FormEvent) => {
    e.preventDefault();
    socket.emit("message", {
      roomId,
      message: messageRef.current?.value,
      creatorRole: "client",
    });
    if (messageRef.current) messageRef.current.value = "";
  };

  return (
    <div className="flex-1 border border-grey-200 border-b-0 border-l-0 flex flex-col overflow-hidden">
      <ChatHead id={roomId} />
      <div className="flex-1 overflow-hidden">
        {isLoading ? (
          <div className="h-full w-full grid place-content-center">
            <Loader />
          </div>
        ) : (
          <MessageArea messages={messages} />
        )}
      </div>
      <form className="border-t py-2 px-5 border-t-grey-200 flex" onSubmit={sendMessage}>
        <Input
          ref={messageRef}
          className="shadow-none border-none focus-visible:ring-0"
          placeholder="Enter your message"
        />
        <button className="text-blue">
          <SendHorizonal />
        </button>
      </form>
    </div>
  );
}

export default ChatBox;
