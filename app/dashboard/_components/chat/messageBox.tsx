import Image from "next/image";
import React, {useMemo, useEffect, useRef, useState} from "react";

import {Messages} from "@/@types/types";
import {PeerResponse} from "@/api/chat/get-chat-peer";
import {useUser} from "@/context/user";
import {cn, formatMessageDate} from "@/lib/utils";
import socket from "@/socket";

function MessageBox({
  messages,
  peerData,
}: {
  messages: Messages[];
  peerData: PeerResponse[] | undefined;
}) {
  const {User} = useUser();
  const [unreadCount, setUnreadCount] = useState(0);
  const messageContainer = useRef<HTMLDivElement>(null);
  const peer = peerData ? peerData[0] : null;

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
      if (!item.isRead && item.receiverRole === "business") unread++;
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

                  if (item.receiverRole === "business" && !item.isRead)
                    socket.emit("mark-as-read", {chatId: item._id});

                  return (
                    <ul key={item._id}>
                      {isFirstUnread && unreadCount > 0 && (
                        <span className="tag">{unreadCount} Unread Messages</span>
                      )}
                      <div className="px-3 py-2">
                        <div
                          className={cn(
                            "flex items-center gap-3 mb-1",
                            item.senderRole === "business" && "flex-row-reverse",
                          )}
                        >
                          <div className="h-12 w-12 rounded-full relative overflow-hidden">
                            <Image
                              fill
                              alt="profile image"
                              className="object-cover object-center"
                              src={
                                item.senderRole === "business" ? User!.profile_image : peer!.avatar
                              }
                            />
                          </div>
                          <h4 className="text-grey font-medium capitalize">
                            {item.senderRole === "business" ? User!.fullname : peer?.fullname}
                          </h4>
                        </div>
                        <p
                          className={cn(
                            "text-grey-200 text-sm leading-loose w-fit",
                            item.senderRole === "business" && "ml-auto",
                          )}
                        >
                          {item.message}
                        </p>
                      </div>
                    </ul>
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

export default MessageBox;
