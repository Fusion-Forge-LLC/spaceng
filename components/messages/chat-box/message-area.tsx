import React, {useEffect, useMemo, useRef, useState} from "react";

import {Messages} from "@/@types/types";
import {formatMessageDate} from "@/lib/utils";
import socket from "@/socket";

import MessageCard from "./message-card";

function MessageArea({messages}: {messages: Messages[]}) {
  const [unreadCount, setUnreadCount] = useState(0);
  const messageContainer = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messageContainer.current) {
      messageContainer.current.scrollTop = messageContainer.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const messageObj = useMemo(() => {
    const message: {[key: string]: Messages[]} = {};
    let unread = 0;

    messages.forEach((item) => {
      const date = new Date(item.createdAt).toLocaleDateString();

      if (!message[date]) {
        message[date] = [];
      }
      if (!item.isRead && item.receiverRole === "client") unread++;
      message[date].push(item);
    });
    setUnreadCount(unread);

    return message;
  }, [messages]);

  return (
    <div ref={messageContainer} className="h-full overflow-y-auto">
      <ul>
        {Object.entries(messageObj).map((message) => {
          return (
            <li key={message[0]}>
              <span className="tag">{formatMessageDate(message[0])}</span>
              <ul className="py-5 space-y-4 px-5">
                {message[1].map((item, index) => {
                  const isFirstUnread =
                    item.receiverRole === "client" &&
                    !item.isRead &&
                    (index === 0 || message[1][index - 1].isRead);

                  if (item.receiverRole === "client" && !item.isRead)
                    socket.emit("mark-as-read", {chatId: item._id});

                  return (
                    <>
                      {isFirstUnread && <span className="tag">{unreadCount} Unread Messages</span>}
                      <MessageCard
                        key={index}
                        isRead={item.isRead}
                        senderRole={item.senderRole}
                        text={item.message}
                        time={new Date(item.createdAt).toLocaleTimeString("en-US", {
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: true,
                        })}
                      />
                    </>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MessageArea;
